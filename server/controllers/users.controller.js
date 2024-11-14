const { userService, authService, emailService } = require('../services');
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');

const usersController = {
    async profile(req,res, next){
        try{
            const user = await userService.findUserById(req.user._id);
            if(!user){
                throw new ApiError(httpStatus.NOT_FOUND,'User not found')
            }
            res.json(res.locals.permission.filter(user._doc))
        }catch(error){
            next(error);
        }
    },
    async updateProfile(req,res, next){
        try{
            const user = await userService.updateUserProfile(req);
            res.json(user);  
        }catch(error){
            next(error);
        }
    },
    async updateUserEmail(req,res, next){
        try{
            const user = await userService.updateUserEmail(req);
            const token = await authService.genAuthToken(user);

            // send email to verify account
            await emailService.registerEmail(user.email, user);

            res.cookie('x-access-token',token)
            .send({
                user,
                token
            })           
        }catch(error){
            next(error);
        }
    },
    async verifyAccount(req, res, next) {
        try {
            const token = await userService.validateToken(req.query.validation);
            const user = await userService.findUserById(token.sub);

            if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

            if (user.verified) throw new ApiError(httpStatus.BAD_REQUEST, 'Already verified');

            user.verified = true;
            user.save();
            res.status(httpStatus.CREATED).send({
                user
            })

        } catch (error) {
            next(error);
        }
    },
    async requestPasswordReset(req, res, next) {
        const { email } = req.body;

        try {
          
            const user = await userService.findUserByEmail(email);
            if (!user) {
                throw new ApiError(httpStatus.NOT_FOUND, 'No user found with that email');
            }

       
            const token = userService.generatePasswordResetToken();
            await userService.updateUserResetToken(user, token);

            // Send the reset email
            await emailService.sendPasswordResetEmail(user.email, token);

            res.status(httpStatus.OK).send({
                message: 'Password reset email sent successfully. Please check your inbox.',
            });

        } catch (error) {
            next(error);
        }
    },

    async resetPassword(req, res, next) {
        try {
            const { token, password } = req.body;

        
            const user = await userService.findUserByResetToken(token);
            if (!user) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Password reset token is invalid or has expired');
            }
 
            await userService.updateUserPassword(user, password);

            res.status(httpStatus.OK).send({
                message: 'Password has been successfully reset',
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = usersController;
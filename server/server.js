const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const passport = require('passport');
const {jwtStrategy} = require('./middleware/passport')
// const cors = require('cors');

const { handleError, convertToApiError } = require('./middleware/apiError');


const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoUri,{

    useNewUrlParser: true,
    useUnifiedTopology: true
 
     
});

/// body parse
app.use(express.json())
// app.use(cors());
// app.options('*', cors());
 


/// sanitize
app.use(xss());
app.use(mongoSanitize());

// passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);


/// routes
app.use('/api',routes)


/// HANDLE ERRORS -- ERRORS API
app.use(convertToApiError);

app.use((err, req, res, next) => {
    handleError(err, res)
})


app.use(express.static('client/build'));

/// should get NODE_ENV from server
if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    app.get('/* ', (req, res) => {
        res.sendFile(path.resolve(_dirname, '../client', 'build', 'index.html'))
    });
}


const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



const AccessControl = require('accesscontrol');

const allRights = {
    'create:any': ['*'],
    'read:any': ['*'],
    'update:any': ['*'],
    'delete:any': ['*'],

}

let grantsObject = {
    admin: {
        profile: allRights,
        auction: allRights,
        location: allRights,
        site: allRights,
        contact: allRights,
        translations: allRights,
 
 
    },
    user: {
        profile: {
            'read:own':['*', '!password', '!_id'],
            'update:own':['*']
        },
        auction: {'read:any':['*']},
        location: {'read:any':['*']},
 
        
 
    }

}

const roles = new AccessControl(grantsObject)

module.exports = { roles };
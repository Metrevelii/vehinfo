const AccessControl = require('accesscontrol');

const allRights = {
    'create:any': ['*'],
    'read:any': ['*'],
    'update:any': ['*'],
    'delete:any': ['*']

}

let grantsObject = {
    admin: {
        profile: allRights,
        auction: allRights
    },
    user: {
        profile: {
            'read:own':['*', '!password', '!_id'],
            'update:own':['*']
        },
        auction: {'read:any':['*']}
    }

}

const roles = new AccessControl(grantsObject)

module.exports = { roles };
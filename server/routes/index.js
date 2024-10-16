const express = require('express');
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');
const calcRoute = require('./calc.route');
const siteRoute = require('./site.route');
const contactRoute = require('./contact.route');
const router = express.Router();

const routesIndex = [
    {
        path:'/auth',
        route: authRoute
    },
    {
        path:'/users',
        route: usersRoute
    },
    {
        path:'/calculator',
        route: calcRoute
    },
    {
        path:'/site',
        route: siteRoute
    },
    {
        path: '/contact',
        route: contactRoute
    }
]

routesIndex.forEach((route)=>{
    router.use(route.path, route.route);
});





module.exports = router;
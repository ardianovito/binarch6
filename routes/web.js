const express = require('express')
const app = express()
const homePageController = require('../controllers/homePageController')
const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const auth = require('../validation/authValidation')
const passport = require('passport')
const initPassportLocal = require('../controllers/passportLocalController')
const router = express.Router()

initPassportLocal()

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    return app.use("/", router);
};
module.exports = initWebRoutes;
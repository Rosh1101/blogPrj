const express = require('express')
const router = express.Router()
const navigationRoute = require("../routeController/control")

//routing
router.route("/").get(navigationRoute.landingPage)
router.route("/application").get(navigationRoute.home)

module.exports = router
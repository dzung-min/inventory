const express = require("express")
const router = express.Router()

const CategoryCtrl = require("../controllers/category.ctrl")

router.get("/", CategoryCtrl.getCategoryList)
router.get("/:id", CategoryCtrl.getCategoryById)

module.exports = router

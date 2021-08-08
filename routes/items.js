const express = require("express")
const router = express.Router()

const itemCtrl = require("../controllers/item.ctrl")

router.get("/", itemCtrl.getItemList)
router.get("/:id", itemCtrl.getItemById)

module.exports = router

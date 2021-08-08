const Item = require("../models/Item")
const createError = require("http-errors")

exports.getItemList = async (req, res, next) => {
  try {
    const items = await Item.query()
    res.render("items", { items })
  } catch (e) {
    next(e)
  }
}

exports.getItemById = async (req, res, next) => {
  try {
    const item = await Item.query()
      .findById(req.params.id)
      .withGraphFetched("category")
    if (!item) {
      return next(createError.NotFound())
    }
    res.render("item", { item })
  } catch (e) {
    next(e)
  }
}

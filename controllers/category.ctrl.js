const Category = require("../models/Category")
const createError = require("http-errors")

exports.getCategoryList = async (req, res, next) => {
  try {
    const categories = await Category.query()
    res.send(categories)
  } catch (e) {
    next(e)
  }
}

exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.query()
      .findById(req.params.id)
      .withGraphFetched("items")
    if (!category) {
      return next(createError.NotFound())
    }
    res.send(category)
  } catch (e) {
    next(e)
  }
}

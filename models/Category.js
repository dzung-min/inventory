const { Model } = require("objection")

class Category extends Model {
  static get tableName() {
    return "category"
  }

  static get relationMappings() {
    const Item = require("./Item")
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: Item,
        join: {
          from: "category.id",
          to: "item.category_id",
        },
      },
    }
  }
}

module.exports = Category

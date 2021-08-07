const { Model } = require("objection")
const Category = require("./Category")

class Item extends Model {
  static get tableName() {
    return "item"
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "item.category_id",
          to: "category.id",
        },
      },
    }
  }
}

module.exports = Item

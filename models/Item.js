const { Model } = require("objection")

class Item extends Model {
  static get tableName() {
    return "item"
  }

  static get relationMappings() {
    const Category = require("./Category")
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

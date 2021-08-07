const Knex = require("knex")

/**
 *
 * @param {Knex} knex
 */
exports.up = async function (knex) {
  await knex.schema.createTable("category", (table) => {
    table.increments()
    table.string("name").notNullable().unique()
    table.text("description")
  })

  await knex.schema.createTable("item", (table) => {
    table.increments()
    table.string("name").notNullable()
    table.text("description")
    table.float("price").unsigned().notNullable()
    table.integer("number_in_stock").unsigned().notNullable()
    table.integer("category_id").unsigned().notNullable()
    table
      .foreign("category_id")
      .references("id")
      .inTable("category")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
}

/**
 *
 * @param {Knex} knex
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("item")
  await knex.schema.dropTableIfExists("category")
}

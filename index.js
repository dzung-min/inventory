const express = require("express")
const morgan = require("morgan")
const createError = require("http-errors")
const Knex = require("knex")
const { Model } = require("objection")

const categoriesRouter = require("./routes/categories")
const itemsRouter = require("./routes/items")

const knex = Knex(require("./knexfile").development)
Model.knex(knex)

const PORT = process.env.PORT || 5000
const app = express()

app.set("view engine", "pug")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("home", { title: "Inventory", content: "Welcome to my inventory" })
})

app.use("/categories", categoriesRouter)
app.use("/items", itemsRouter)

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((error, req, res, next) => {
  error.status = error.status || 500
  error.message = error.message || "Server Error"
  res.status(error.status).render("error", { error })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

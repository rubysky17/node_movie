const express = require('express')
const { movieRouter } = require("./movie.router")
const rootRouter = express.Router()

rootRouter.use("/movie", movieRouter)

module.exports = {
    rootRouter
}
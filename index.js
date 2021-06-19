const express = require('express')
const { rootRouter } = require("./routers/root.router")

const app = express()
const port = 3000

app.use(express.json())
app.use("/api", rootRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
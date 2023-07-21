import express, { Express, Request, Response, } from "express"
import { Router } from "express"

const app: Express = express()
const port = process.env.PORT || 5000
const route = Router();
app.get("/", (req: Request, res: Response) => {
  const { message } = req.body

  if (!message) return res.status(400).send({ error: "Message is required" })

  res.send({ message }) })
  app.use(route)

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`)
})

import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const port = 5001

app.listen(port, ()=>console.log(`app running on ${port}`))
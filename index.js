const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Oiie!!')
})

app.listen(port, () => {
  console.log(`Ebaaa~ tá funcionandooo~!!! ${port}`)
})

const express = require('express')
const app = express()

const port = 3000
const jsxEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render('New')
})


app.listen(port, () => {
    console.log('Listening to port 3000')
})
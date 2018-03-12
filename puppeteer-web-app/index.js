const express = require('express')
const pageExport = require('./pageExport');

const app = express()

const port = process.env.PORT || 3000;

app.set('view engine', 'pug')

app.get('/', (req, res) => {

    pageExport('http://saratonite.github.io/resume/')
        .then(screenShot => {
            res.set({
                'Content-Disposition':'attachment; filename="sarath-resume.pdf'
            })
            res.send(screenShot)})
        .catch(err => {
            
            res.send('Error')})
    //res.send('Hello')
})

app.listen(3000, () => {
    console.log(`> App Listening on port ${port}`)
})

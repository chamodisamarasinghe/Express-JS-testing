const express = require('express')
const app = express()
const port = 4000



app.get('/',(req,res) =>{
    console.log('get request coming!');
    res.send('get request came for / route')
})


app.post('/', (req,res) =>{
    res.send('<h1>get request came for / route</h1>')
})


app.get('/customer',(req,res) =>{
    console.log('get request come');
    res.send('<h1>get request came !</h1>')
})


app.post('/customer',(req,res) =>{
    res.send('<h1>Customer post request came !</h1>')
})

app.delete('/customer',(req,res) =>{
    res.send('delete req came from customer')
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);

})

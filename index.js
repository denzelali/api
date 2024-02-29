const express = require('express');
const app = express();


const flavors = [
    {id: 1, flavor: 'chocolate'},
    {id:2, flavor: 'macha'},
    {id:3, flavor: 'rocky road'},
    {id:4, flavor: 'strawberry'}
];

app.get('/api/flavors:id', (req, res) => {
    const flavor = flavors.find(c => c.id === parseInt(req.params.id));
    if(!flavor) res.status(404).send('The flavor is not available');
    res.send(flavor);
})

// operator, endpoint, syntax
// / app.listen('/', (req, res) => {
// //     res.send('hello babygirls');
// // });

app.get('/api/flavors', (req, res) => {
    res.send(flavors);
})



app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.params);
});

app.get('/api/post/:year/:month:id', (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));


// app.listen(3000, () => console.log('listening on port 3000...'));
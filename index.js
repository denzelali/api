const express = require('express');
const app = express();

app.use(express.json());

const shoe = {
    shoes: [
        {id: 1, name: 'Nike'},
        {id: 2, name: 'Adidas'},
        {id: 3, name: 'Puma'},
        {id: 4, name: 'Converse'},
        {id: 5, name: 'Birkenstock'},
        {id: 6, name: 'Vans'}
    ]
};

//VIEW
app.get('/api/shoe/:id', (req, res) => {
    const shoebrand = shoe.shoes.find(c => c.id === parseInt(req.params.id));
    if(!shoebrand) res.send(404).send('The shoe brand is not available');
    res.send(shoebrand);  
})

app.get('/api/shoe', (req, res) => {
    res.send(shoe);
})

//CREATE-POST
app.post('/api/shoe', (req, res) => {
    if (!req.body.name.length || req.body.name.length < 3 ){
        res.status(400).send("Invalid brand name, try again");
        return;
    }
    const shoebrand = {
        id: shoe.shoes.length + 1,
        name: req.body.name
    };
    shoe.shoes.push(shoebrand);
    res.send(shoebrand);
});

//UPDATE-PUT
app.put('/api/shoe/:id',(req, res) => {
    const shoebrand = shoe.shoes.find(c => c.id === parseInt(req.params.id));
    if(!shoebrand) req.send(404).send('The shoe brand is not found');

    shoebrand.name = req.body.name;
    res.send(shoebrand);
});

//DELETE
app.delete ('/api/shoe/:id', (req, res) => {
    const shoebrand = shoe.shoes.find(c => c.id == parseInt(req.params.id));
    if(!shoebrand) res.status(404).send('The shoe brand does not exist');

    const index = shoe.shoes.indexOf(shoebrand);
    shoe.shoes.splice(index, 1);

    res.send(shoebrand);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));


// const flavors = [
//     {id: 1, flavor: 'chocolate'},
//     {id: 2, flavor: 'halo halo'},
//     {id: 3, flavor: 'rocky road'},
//     {id: 4, flavor: 'strawberry'},
//     {id: 5, flavor: 'vanilla'},
//     {id: 6, flavor:  'cookies and cream'}
// ];

// operator, endpoint, syntax
// / app.listen('/', (req, res) => {
// //     res.send('hello babygirls');
// // });

// app.get('/api/flavors', (req, res) => {
//     res.send(flavors);
// })

// app.get('/api/post/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// app.get('/api/post/:year/:month:id', (req, res) => {
//     res.send(req.params);
// });


// app.listen(3000, () => console.log('listening on port 3000...'));
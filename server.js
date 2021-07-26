// simple express server
// 1 route that will return an array of customers

const express = require('express');
const app = express();

app.get(`/api/loremipsum`, (req, res) => {
    // this would usually come from a db but this is just a hard coded backend for testing purposes only
    const customers = [
        {id: 1, firstName: 'Alfred', lastName: 'Hitchcock'},
        {id: 2, firstName: 'Simon', lastName: 'Stagg'},
        {id: 3, firstName: 'Bruce', lastName: 'Wayne'}
    ];

    // the returner basically
    res.json(customers);
})

const port = 5000;      // not using port 3000 bcos thats used for React

app.listen(port, () => console.log(`Server started on port  ${port}`));
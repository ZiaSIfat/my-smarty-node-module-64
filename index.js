const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('node js coding very very fast')
});



const users = [
    {id:1 , name: 'A', email: "a@gmail.com", phone: "018888888"},
    {id:2 , name: 'B', email: "b@gmail.com", phone: "018888888"},
    {id:3 , name: 'C', email: "c@gmail.com", phone: "018888888"},
    {id:4 , name: 'D', email: "d@gmail.com", phone: "018888888"},
    {id:5 , name: 'E', email: "e@gmail.com", phone: "018888888"},
]

app.get('/users',(req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u=> u.id == id);
    res.send(user);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','oranges'])
});

app.listen(port,()=>{
    console.log('listening to port', port)
});
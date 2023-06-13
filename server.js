const express = require("express");
const app = express();
const jsonRoute = require('./routes/jsonRoute.js')
   
app.use(express.urlencoded());
app.use(express.json());
  
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/",  (req, res) =>{
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.name} - ${req.body.surname}`);
});
   

app.use('/json', jsonRoute)

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

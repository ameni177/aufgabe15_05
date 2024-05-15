const express = require("express");
const app = express();
const bodyparser = require("body-parser");
let hobbies = ["reisen","lesen","musik"]
let einkaufsliste = ["brot","käse","joghurt","milch"];
app.use(bodyparser.json());
app.get("/hobbies",(req,res)=>{
   
    res.send(hobbies);
})
app.get("/einkaufsliste",(req,res)=>{
    
     res.send(einkaufsliste);
     
 })
 app.get("/status", (req, res) => {
    res.send(`${res.statusCode}`);
});
app.post("/hobbies", (req,res)=>{
    
    hobbies.push("joggen");
    
    res.status(201).json({ message: "Hobby erfolgreich hinzugefügt"});
})

app.listen(3000);
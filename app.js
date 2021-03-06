const express = require("express");
const app = express();
const items = ["Buy Food" , "Cook Food" , "Eat Food"];
const workItems = [];
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

//date
app.get("/" , function (req , res){

const day = date.getDay();



res.render("list" , {listTitle: day , newListItems: items});
});

app.post("/" , function(req, res){

  const item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/")
  }


items.push(item)
console.log(item);
res.redirect("/");
});

app.get("/work" , function(req , res){
  res.render("list" , {listTitle: "Work list" , newListItems: workItems });
});

app.post("/work" , function(req , res){
  let item  = req.body.newItem;
  workItems.push(item);
  res.redirect('/Work');

});

app.get("/about" , function(req , res){
  res.render("about")
});


app.listen(3000, function(){
  console.log("listen");
});

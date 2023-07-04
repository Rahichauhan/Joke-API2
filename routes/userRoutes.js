const user=require("../controllers/userController");
const express=require("express");
const routes=express();
routes.set('view engine','ejs');
routes.set('views','./views');
const bodyParser=require("body-parser");
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:true}));

routes.get("/",user.loadPage);
// routes.post("/",user.InsertUser);
routes.get("/jokes",user.getJokes);
routes.get("/addjokes",user.loadAddPage);
routes.post("/addjokes",user.Insertjokes);

module.exports=routes;
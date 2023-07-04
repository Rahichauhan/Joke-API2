const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
const port=process.env.PORT||108;
const path=require("path");
app.use(express.static("public"));

const routes=require("./routes/userRoutes");
app.use("/",routes);

// app.get("/",(req,res)=>{
//     res.send("Shri Shivay Namastubhyam and jai vitthal ");
// });
mongoose.connect("mongodb://0.0.0.0:27017/JokeProject").then(() => {
    app.listen(port, () => {
        console.log('listening on PORT ' + port);
        console.log('Conected to db');
})
}
)
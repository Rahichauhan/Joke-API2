const User=require("../models/userSchema");
const loadPage=async(req,res)=>{
    try {
        res.render("home");
    } catch (error) {
        console.log(error.message);
        }
}
const loadAddPage=async(req,res)=>{
    try {
        res.render("addjokes");
    } catch (error) {
      console.log(error.message);  
    }
}


const Insertjokes = async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        joke: req.body.joke
      });
      const userData = await user.save();
      if(userData)
      {
        res.render("done",{user:userData});
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // const getRandomJokes=async(req,res)=>{
  //   try {
  //     res.render("getRandomJokes");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }


// const getJokes=async(req,res)=>{
//     try {
//         const count = await User.countDocuments();
//       const randomIndex = Math.floor(Math.random() * count);
  
//       const randomJoke = await User.aggregate([{ $sample: { size: 5 } }]);
//       
  
//        res.json(randomJoke[0]);
//     
//     } catch (error) {
//         console.log(error.message);
//     }
// }
const getJokes = async (req, res) => {
  try {
      const count = await User.countDocuments();
      const randomIndex = Math.floor(Math.random() * count);

      const randomJoke = await User.aggregate([{ $sample: { size: 5 } }]);
      const userData = await User.findOne().skip(randomIndex);
      res.render("getJokes", { randomJoke: randomJoke[0], user: userData });
  } catch (error) {
      console.log(error.message);
  }
}


  
module.exports={
    loadPage,
    loadAddPage,
   Insertjokes,
  //  getRandomJokes,
    getJokes
}
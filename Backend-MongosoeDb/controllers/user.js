const User = require("../models/user")

async function handleGetAllUser(req,res) {
  const allDbUser = await User.find({});
  return res.json(allDbUser)  
}

async function handlegetUserById(req,res){
  const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user not found" })
        return res.json(user);
 }

async function handleUpdateUserById(req,res){
       await User.findByIdAndUpdate(req.params.id,{name:'changed'})
        return res.json({ status: "sucess" });
  
}

async function handleDeleteUserById(req,res){
       
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "sucess" });
    
}
async function handleCreateNewUser(req,res){

    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.email ||
        !body.address) {
        return res.status(400).json({ msg: "All fileds r requrie" })
    }
const result = await User.create({
        name: body.name,
        email: body.email,
        address: body.address
    });

    return res.status(201).json({ msg: "sucess" , id: result._id })
  }
       

module.exports = {
    handleGetAllUser,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}
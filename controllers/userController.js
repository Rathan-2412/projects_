const getusers=(req,res)=>{
    res.send("Fetching all users")
}
const postusers=(req,res)=>{
    res.send("Adding a new user");
}

const getuserbyid=(req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`);
}


module.exports={
    getusers,
    postusers,
    getuserbyid
}
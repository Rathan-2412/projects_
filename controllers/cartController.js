const getCarts=(req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.userId}`)
}
const postCarts=(req,res)=>{
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
}




module.exports={
    getCarts,
    postCarts,
}
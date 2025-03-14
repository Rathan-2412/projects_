const getProducts=(req,res)=>{
    res.send("Fetching all products")
}
const postProducts=(req,res)=>{
    res.send("Adding a new product");
}

const getProductsbyid=(req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
}


module.exports={
    getProducts,
    postProducts,
    getProductsbyid
}
const path=require('path');

const getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname , '..','views','products.html'))
}
const postProducts=(req,res)=>{
    const data = req.body;
    console.log(data)
    res.json({value:data.product_name})
}

const getProductsbyid=(req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
}


module.exports={
    getProducts,
    postProducts,
    getProductsbyid
}
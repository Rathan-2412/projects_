const onSubmitHandler=(event)=>{
    event.preventDefault()
    console.log("Submit Function Called")
    const product = document.getElementById('product').value;
    const obj={
        "product_name":product
    }

    axios.post('http://localhost:3000'+'/products',obj).then((result)=>{
        console.log("value returned from post request" + result.data.value);
    })
}
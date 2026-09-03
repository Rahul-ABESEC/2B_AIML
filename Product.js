let product={
    ProductId:202005,
    ProductName:"Laptop",
    Price:70000,
    Quantity:2
}
function calculate(){
    return (product.Price)*(product.Quantity)

}
function Update(Size){
    product.Quantity=Size
}

function display(){
    console.log(`Product ID : ${product.ProductId}`)
    console.log(`Product Name : ${product.ProductName}`)
    console.log(` Price : ${product.Price}`)
    console.log(`Quantity : ${product.Quantity}`)
}
display();

console.log(calculate())
Update(4);
display();
console.log(calculate())


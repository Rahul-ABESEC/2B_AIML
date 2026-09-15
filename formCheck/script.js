function validate(){
    let name=document.getElementById("name").value.trim();
    let contact=document.getElementById("contact").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password");
    let repassword=document.getElementById("RePassword")


// checking Name
if(name==""){
    alert("Enter some Name ");
    return false;
    
}
//checking Conatact
if(contact.length!=10){
    alert("Enter 10 digits Mobile Number ")
    return false;
    
}
else{
    for(let i=0;i<10;i++){
        if(contact[i]<=9 & contact[i]>=0 ){
            continue;
        }
        else{
            alert("Enter only Digits");
            return false;
            
        }
    }
//checking EMAIL
if(!(email.include("@gmail.com"))){
    alert("Enter A Valid Email Id");
    return false;
    
}
//checking Password
if(password.length<6){
    alert("Enter atleast 6 character")
    return false;
}
if((repassword==password)){
    alert("Repassword do not match with Password");
    return false;
}






}






}

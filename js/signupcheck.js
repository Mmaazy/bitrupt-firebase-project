
function signupValidate(){
    
    var name = document.getElementById("fname").value;
    var i = document.getElementById("username").value;
    var p = document.getElementById("password1").value;
    var cp = document.getElementById("cpassword").value;
    var con = document.getElementById("contact").value;
    var addr = document.getElementById("address").value;
 
    if(name[0].toUpperCase() != name[0]){
        document.innterHTML=alert("Name should start with capital letter");
        return false;
    }
    
    if(i.indexOf('@')<=0){
        document.innerHTML=alert("Enter a valid email");
        return false;
    }
    
    if(p != cp){
        document.innerHTML=alert("Passwords are not same");
        return false;
    }

    if(p.length <= 8 || p.length > 12){
        document.innerHTML=alert("Password should be greater then 8 characters and lesser then 12 characters");
        return false;
    }

    if(p.search(/[0-9]/)== -1){
        document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
        return false;
    }

    if(p.search(/[A-Z]/)== -1){
        document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
        return false;
    }
    
    if(p.search(/[!\@\#\$\%\^\&\*\(\)\-\_\,\.\/]/)== -1){
        document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
        return false;
    }

    if(p==""){
        document.innerHTML=alert("Password can not be empty");
        return false;
    }



    else{
        console.log('In Else' + i + p);

        firebase.auth().createUserWithEmailAndPassword(i, p)
    .then((userid) => {
      // Signed in 
     // console.log("user" + user.uid)
        // ...
        
      firebase.database().ref('users/' + userid.user.uid).set({
        fullname: name,
        contact: con,
        address : addr,
        email: i
      });
      
    }).then(() => {

        setTimeout(() => {
            window.location = "index.html";

        },40)
 

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(error.message)
      console.log(errorMessage)
    });
    }

    return false;
    

   
}

function validate(){
    let email = document.getElementById("username1").value;

    if(email.indexOf('@')<=0){
        document.innerHTML=alert("Enter a valid email");
        return false;
    }

    let pass = document.getElementById("password").value;

    if(pass==""){
        document.innerHTML=alert("Password can not be empty");
        return false;
    }

    if(email!=null && pass!=null ){
        kuchbhi(email, pass)
        return false;
    }

    // if(p.length <= 8 || p.length > 12){
    //     document.innerHTML=alert("Password should be greater then 8 characters and lesser then 12 characters");
    //     return false;
    // }

    // else if(p.search(/[0-9]/)== -1){
    //     document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
    //     return false;
    // }

    // else if(p.search(/[A-Z]/)== -1){
    //     document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
    //     return false;
    // }
    
    // else if(p.search(/[!\@\#\$\%\^\&\*\(\)\-\_\,\.\/]/)== -1){
    //     document.innerHTML=alert("Atleast one numeric value required in password, Atleast one alphabet should be capital in password, Atleast one symbol is required in password");
    //     return false;
    // }
}

// function validation(){

//     var name = document.getElementById("fname").value;
//     if(name[0].toUpperCase() != name[0]){
//         document.innterHTML=alert("Name should start with capital letter");
//         return false;
//     }

//     var z = document.getElementById("thisemail").value;
//     if(z.indexOf('@')<=0){
//         document.innerHTML=alert("Enter a valid email");
//         return false;
//     }

    
// }


function kuchbhi(email, pass){
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((user) => {
      // Signed in 
      // ...
      alert('Signed In')
      window.location = "home.html";
      return true;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      console.log("error message")
      return false;
    });
}



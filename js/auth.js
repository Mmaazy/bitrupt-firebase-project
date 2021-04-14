//

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    firebase.auth().signOut();
     window.location = "index.html";
     console.log('User logged out')
    
})





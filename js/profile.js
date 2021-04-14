var modal = document.getElementById("write-data");
var userId;
var key;


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        userId = uid;
        writeProfile(uid)
        readingFromFirebase(uid)
    }

});


function writeProfile(userId) {
    modal.addEventListener('click', (e) => {
        var modalName = document.getElementById("modal-name").value;
        var modalDescription = document.getElementById("modal-description").value;
        var modalStatus = document.getElementById("modal-status").value;
        var postListRef = firebase.database().ref('task');
        var newPostRef = postListRef.push();
        newPostRef.set({
            title: modalName,
            description: modalDescription,
            status: modalStatus,
            userId: userId

        });

        alert("The new task is recorded successfully ");

    })
}


function readingFromFirebase(uid) {
    let dataincoming = firebase.database().ref('task');
    let str = ''
    dataincoming.on('child_added', (snapshot) => {
        const data = snapshot.val();
        if (data.userId === uid) {
            let text = `
                            <tr onclick = "viewModal('${data.title}', '${data.description}','${data.status}')">
                             <td>${data.title}</td> 
                             <td>${data.description}</td>
                              <td>${data.status}</td>
                            </tr>
                              `;
            str += text
            document.getElementById('table2').innerHTML = str;
        }
    })
}


function viewModal(title, description, status) {
    document.querySelector('.edit-title').value = title;
    document.querySelector('.edit-description').value = description;
    document.querySelector('.edit-status').value = status;
    firebase.database().ref('task').on('child_added', (snapshot) => {
        const data = snapshot.val();
        if (data.title === title) {
            tempKey = snapshot.key;
        }
    })
    $('#updateModalCenter').modal("show");

}


function editDelete() {

    let title = document.querySelector('.edit-title').value;
    let description = document.querySelector('.edit-description').value
    let status = document.querySelector('.edit-status').value

    try{
        firebase.database().ref(`task/${tempKey}`).update({
            title,
            description,
            status,
            userId
        })
        readingFromFirebase(userId);
        return true;
    } 
    catch (err) {
        console.log(err);
        return false;
    }
    
}


function deleteTask() {
    firebase.database().ref(`task/${tempKey}`).remove();
    readingFromFirebase(userId);
}
function signup(){
    firebase.database().ref("Users").set({
        email = "abcd@gmail.com",
        type = "dealer"
    });
}
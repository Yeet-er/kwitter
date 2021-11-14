function addUser(){
    username= document.getElementById("getuser").value;
    localStorage.setItem("username",username);
    window.location= "kwitter_room.html"
}
var firebaseConfig = {
    apiKey: "AIzaSyA_PT-0m2mENN-Lxi6eFbYrexGt13gvLa8",
    authDomain: "additional-e6966.firebaseapp.com",
    databaseURL: "https://additional-e6966-default-rtdb.firebaseio.com",
    projectId: "additional-e6966",
    storageBucket: "additional-e6966.appspot.com",
    messagingSenderId: "343605841933",
    appId: "1:343605841933:web:7e18a97c76fbb3a0e48544"

  };
  firebase.initializeApp(firebaseConfig);
  var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
console.log(user_name);

function addRoom(){
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding username" 
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"; 
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
});});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}      
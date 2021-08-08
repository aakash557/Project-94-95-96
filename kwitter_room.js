
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyA1IW3WSk_fwggu9s2g7fsL-fOvN7ObY_Q",
  authDomain: "practice-94-e6d93.firebaseapp.com",
  databaseURL: "https://practice-94-e6d93-default-rtdb.firebaseio.com",
  projectId: "practice-94-e6d93",
  storageBucket: "practice-94-e6d93.appspot.com",
  messagingSenderId: "991821042992",
  appId: "1:991821042992:web:11622a2cdc6fdb3583e4f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

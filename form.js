var firebaseConfig = {
  apiKey: "AIzaSyDSQk4yjAbvQkYe0L5W5zY41TvpObe8YOM",
  authDomain: "captain-grill-62a89.firebaseapp.com",
  projectId: "captain-grill-62a89",
  storageBucket: "captain-grill-62a89.appspot.com",
  messagingSenderId: "474663269300",
  appId: "1:474663269300:web:f8b00e4dfbd84cad36b8e1",
  measurementId: "G-N0BMYDSXG9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let Name = document.querySelector(".name").value;
  let Email = document.querySelector(".email").value;
  let Mobile = document.querySelector(".number").value;
  let Message = document.querySelector(".message").value;
  console.log(Name, Email, Mobile, Message);

  saveContactInfo(Name, Email, Mobile, Message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(Name, Email, Mobile, Message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    Name: Name,
    Email: Email,
    Mobile: Mobile,
    Message: Message,
  });
}

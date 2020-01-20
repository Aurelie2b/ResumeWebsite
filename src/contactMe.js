jQuery("#messageSent").css('display', 'none');

var emailField = document.getElementById('email');
var nameField = document.getElementById('name');
var messageField = document.getElementById('message');

function ValidateEmail(mail) {
  if (mail === '') {
    alert("Veuillez indiquer un mail!")
    return (false);
  }
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    alert("Vous avez rentré une adresse mail invalide!")
    return (false)
  }
}

function validateName(name) {
  if (name === '') {
    alert("Veuillez indiquer votre nom!")
    return (false);
  }
  else {
    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      return (true)
    }
    alert("Nom invalide!")
    return (false)
  }
}

function validateMessage(message) {
  if (message === '') {
    alert("Message vide!")
    return false;
  }
  else return true;
}

function sendMail() {
  Email.send({
    Host : 'smtp.elasticemail.com',
    SecureToken: '',
    To: 'debay.aurelie@gmail.com',
    From: emailField.value,
    Subject: "Site cv Debay Aurélie",
    Body: 'message de : ' + nameField.value + '' + messageField.value
  });
}
function toggle() {
  var isFormValide = false;
  isFormValide = validateName(nameField.value);
  if (isFormValide) {
    isFormValide = ValidateEmail(emailField.value);
    if (isFormValide) {
      isFormValide = validateMessage(messageField.value);
    }
  }
  if (isFormValide) {
    sendMail();
    jQuery("#contactForm").css('display', 'none');
    jQuery("#messageSent").css('display', 'block');
  }
}

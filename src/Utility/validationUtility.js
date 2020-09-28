function validateName(name) {
  if (!name || name === "") {
    return [false, "Name field cannot be empty"];
  }

  var regName = /^[a-zA-Z ]+$/;
  if (!regName.test(name)) {
    return [false, "Please enter a valid name"];
  } else {
    return [true, "valid name"];
  }
}

function validateEmail(email) {
  if (!email || email === "") {
    return [false, "Email field cannot be empty"];
  }

  var regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    return [false, "Please enter a valid email"];
  } else {
    return [true, "valid email"];
  }
}

function validateMessage(message) {
  if (!message || message === "") {
    return [false, "Message cannot be empty"];
  }

  let count = message.replace(/(^\s*)|(\s*$)/gi, "");
  count = count.replace(/[ ]{2,}/gi, " ");
  count = count.replace(/\n /, "\n");
  count = count.split(" ").length;

  if (count < 20) {
    return [false, "Message cannot be less than 20 words"];
  } else {
    return [true, "valid message"];
  }
}

function validatePhoneNo(phoneNo) {
  if (!phoneNo || phoneNo === "") {
    return [true, "Phone number not mandatory"];
  }

  var regPhoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!regPhoneNo.test(phoneNo)) {
    return [false, "Please enter a valid phone number"];
  } else {
    return [true, "valid phone number"];
  }
}

export { validateName, validateEmail, validateMessage, validatePhoneNo };

function validate(name, email, message, phoneNo, subject) {
  let msg = [];
  const nameValid = validateName(name);
  if (!nameValid[0]) {
    msg.push(nameValid[1]);
  }

  const emailValid = validateEmail(email);
  if (!emailValid[0]) {
    msg.push(emailValid[1]);
  }

  const msgValid = validateMessage(message);
  if (!msgValid[0]) {
    msg.push(msgValid[1]);
  }

  const phoneValid = validatePhoneNo(phoneNo);
  if (!phoneValid[0]) {
    msg.push(phoneValid[1]);
  }

  return msg;
}

export default validate;

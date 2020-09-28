import emailjs from "emailjs-com";

function setWithExpiry(key) {
  const now = new Date();

  if (!localStorage.getItem(key)) {
    const item = {
      value: 0,
      expiry: now.getTime() + 86400000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    let item = localStorage.getItem(key);
    item = item ? JSON.parse(item) : {};
    item.value = item.value + 1;

    localStorage.setItem(key, JSON.stringify(item));
  }
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export { setWithExpiry, getWithExpiry };

async function emailUtility(name, email, phone, subject, message) {
  await emailjs
    .send(
      process.env.SERVICEID,
      process.env.TEMPLATEID,
      {
        subject: subject,
        name: name,
        emailId: email,
        phone: phone,
        message: message,
      },
      process.env.USERID
    )
    .then(
      function (response) {
        return true;
      },
      function (err) {
        return false;
      }
    );

  // Sample response --> msgStatus = {status: 200, text: "OK"}
}

export default emailUtility;

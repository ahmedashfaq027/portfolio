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
  const resp = await emailjs
    .send(
      process.env.REACT_APP_SERVICEID,
      process.env.REACT_APP_TEMPLATEID,
      {
        subject: subject,
        name: name,
        emailId: email,
        phone: phone,
        message: message,
      },
      process.env.REACT_APP_USERID
    )
    .then(
      function (response) {
        return response;
      },
      function (err) {
        return err;
      }
    );

  console.log(resp);
  return resp;
  // Sample response --> msgStatus = {status: 200, text: "OK"}
}

export default emailUtility;

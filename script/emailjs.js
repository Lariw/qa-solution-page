const sendMail = (name, email, subject, message) => {
  const serviceID = "service_294trqi";
  const templateID = "template_u5zshdl";
  let params = {
    name,
    email,
    subject,
    message,
  };
  emailjs.send(serviceID, templateID, params);
};

const form = document.querySelector(".js-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".js-name").value;
  const emailAddress = document.querySelector(".js-email").value;
  const subject = document.querySelector(".js-subject").value;
  const message = document.querySelector(".js-message").value;
  sendMail(name, emailAddress, subject, message);
  document.querySelector(".form__successMessage").style.display = "flex";
  form.reset();
  setTimeout(() => {
    document.querySelector(".form__successMessage").style.display = "none";
  }, 5000);
});

document.querySelector(".js-submit").addEventListener("click", function () {
  document.querySelector(".form__successMessage").style.display = "flex";
});

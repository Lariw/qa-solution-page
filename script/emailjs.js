const sendMail = (name, email, subject, message) => {
  return new Promise((resolve, reject) => {
    const serviceID = "service_294trqi";
    const templateID = "template_u5zshdl";
    let params = {
      name,
      email,
      subject,
      message,
    };
    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const form = document.querySelector(".js-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector(".js-name").value;
  const emailAddress = document.querySelector(".js-email").value;
  const subject = document.querySelector(".js-subject").value;
  const message = document.querySelector(".js-message").value;

  try {
    await sendMail(name, emailAddress, subject, message);
    document.querySelector(".form__successMessage").style.display = "flex";
    form.reset();
    setTimeout(() => {
      document.querySelector(".form__successMessage").style.display = "none";
    }, 2000);
  } catch (error) {
    console.error(error);
  }
});

emailjs.init("zrFzS1__X-KoWlkCK");
const form = document.getElementById("userForm");
const btn = document.querySelector(".submit-btn");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.innerText = "Sending...";
  btn.disabled = true;
  emailjs.sendForm(
    "service_606fvm7",
    "template_yag2ts9",
    this
  )
  .then(() => {
    btn.innerText = "✅ Sent";
    form.reset();
  })
  .catch(() => {
    btn.innerText = "❌ Failed";
    btn.disabled = false;
  });
});
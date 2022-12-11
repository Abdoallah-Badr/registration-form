const content = document.querySelector(".content");
const userForm = document.querySelector("form");
const formName = userForm.querySelector("#username");
const formEmail = userForm.querySelector("#form-email");
const formPass = userForm.querySelector("#form-password");
const formPassConfirm = userForm.querySelector("#form-password-confirm");
const submitButton = userForm.querySelector("#submit-button");
const startBtn = document.querySelector("#startbtn");
const sideImg = document.getElementById("img");
const title = document.querySelector("#title");
const description = document.querySelector(".content p");

function startHandler() {
  // function which run by clicking get start buttun
  userForm.style.display = "flex";
  sideImg.src = "./images/logos/icons8-duolingo-logo-colored.svg";
  startBtn.style.display = "none";
  title.innerHTML = "<h2>Create Account</h2>";
  description.innerHTML =
    "Go ahead and sign up, let everyone know how awesome you are!";
}

function formHandler() {
  // function which run by clicking get start buttun
  for (let i = 0; i < userForm.children.length - 1; i++) {
    const element = userForm.children[i];
    if (element.value.length === 0) {
      alert(`please enter your ${element.placeholder}`);
      return;
    }
  }
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(formEmail.value.toString())) {
    alert("invalid email address");
    return;
  }else if(formPass.value.length < 6){
    alert("password too short must be 6 characters at least");
    return;
  }else if(formPass.value !== formPassConfirm.value){
    alert("passwords don't match");
    return;
  }

  const formData = {
    username: formName.value,
    usermail: formEmail.value,
    password: formPass.value,
  };

  console.log("to Database", formData);

  // last screen style handler //
  userForm.style.display = "none";
  sideImg.src = "./images/logos/icons8-duolingo-log-bubbled.svg";
  submitButton.style.display = "none";
  title.innerHTML = "<h2>Successfully logged in</h2>";
  description.style.display = "none";
  content.insertAdjacentHTML(
    "beforeend",
    `<a href="mailto:${formEmail.value}"> ${formEmail.value}</a>`
  );
}

// event handlers
startBtn.addEventListener("click", startHandler);
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  formHandler();
});

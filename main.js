let email = document.querySelector("input#email");
let errorMsg = document.querySelector("label");

console.log(errorMsg);

email.onkeyup = function () {
  if (email.value === "" || email.validity.valid === false) {
    email.style.cssText = "border: 1px solid var(--light-red)";
    errorMsg.style.cssText = "visibility: visible; display:block";
  } else {
    email.style.cssText = "";
    errorMsg.style.cssText = "";
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const buttonElement = document.getElementById("btn");
  buttonElement.addEventListener("click", () => {
    let counter = Number(buttonElement.innerHTML);
    counter += 1;
    buttonElement.innerHTML = counter;
  });
});

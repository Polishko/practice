document.addEventListener("DOMContentLoaded", () => {
  const buttonElement = document.createElement("button");
  buttonElement.id = "btn";
  buttonElement.innerHTML = 0;

  buttonElement.addEventListener("click", () => {
    let counter = Number(buttonElement.innerHTML);
    counter += 1;
    buttonElement.innerHTML = counter;
  });

  document.body.appendChild(buttonElement);
});

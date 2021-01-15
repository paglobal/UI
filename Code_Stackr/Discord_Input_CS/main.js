//get the input
const input = document.querySelector("input");

input.addEventListener("input", () => {
  //define regular expressions

  //replace spaces with a dash
  const rxSpaces = /\s+/g;

  //replace multiple dashes with one dash
  const rxDashes = /-+/g;

  //remove dash at the beginning
  const rxDashStart = /^-/;

  input.value = input.value
    .replace(rxSpaces, "-")
    .replace(rxDashes, "-")
    .replace(rxDashStart, "");
});

//initialize feather icons
feather.replace();

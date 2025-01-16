let fetchedImg = ""
const image = document.getElementById("image");

function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`).then(function (data) {
    return data.json();
  })
}
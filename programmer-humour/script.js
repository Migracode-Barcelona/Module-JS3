let fetchedImg = ""
const image = document.getElementById("image");

function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`).then(function (data) {
    return data.json();
  })
}

fetchData().then((obj) => {
fetchedImg = obj.img
console.log(fetchedImg, "test2");
image.setAttribute("src", fetchedImg)
})
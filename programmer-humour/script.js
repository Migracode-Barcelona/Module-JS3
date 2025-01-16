let fetchedImg = ""
const image = document.getElementById("image");

function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`)
  .then(function (data) {
    if (!data.ok) {
        throw new Error(`Network error: ${data.status}`);
    }
    return data.json();
  })
}

fetchData().then((obj) => {
fetchedImg = obj.img
console.log(fetchedImg, "test2");
image.setAttribute("src", fetchedImg)
}).catch((error) => {
    console.error("Error fetching data:", error);
    image.setAttribute("alt", "Failed to load image")
})
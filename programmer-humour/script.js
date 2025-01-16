let fetchedImg = ""
const imgF = document.getElementById("img-f")


function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`).then(function (data) {
    if (!data.ok) {
        throw new Error(`Network error: ${data.status}`);
    }
    return data.json()
    
  })
}

fetchData().then((obj) => {
console.log(obj, "test");
fetchedImg = obj.img
console.log(fetchedImg, "test2");
imgF.setAttribute("src", fetchedImg)
}).catch((error) => {
    console.error("Error fetching data:", error);
    imgF.setAttribute("alt", "Failed to load image")
})


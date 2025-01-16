let fetchedImg = ""
const imgF = document.getElementById("img-f")


function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`).then(function (data) {
    return data.json()
    
  })
}

fetchData().then((obj) => {
console.log(obj, "test");
fetchedImg = obj.img
console.log(fetchedImg, "test2");
imgF.setAttribute("src", fetchedImg)
}) 


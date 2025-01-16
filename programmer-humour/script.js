let fetchedImg = ""

function fetchData() {
  return fetch(`https://xkcd.now.sh/?comic=latest`).then(function (data) {
    return data.json()
    
  })
}

fetchData().then((obj) => {
console.log(obj, "test");
fetchedImg = obj.img
console.log(fetchedImg, "test2");
}) 


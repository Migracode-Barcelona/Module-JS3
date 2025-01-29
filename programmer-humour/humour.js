async function retrieveData() {
   await fetch(`https://xkcd.now.sh/?comic=latest`)
.then(response => response.json())
.then(data =>{
let container = document.querySelector('.image-container')
let image = document.createElement('img')
image.src = data.img
image.style.width = '700px'
image.style.height= '700px'
 container.append(image)
  console.log(data)
})
.catch(error => console.error('Error:', error)) 
}
    
retrieveData()



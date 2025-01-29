async function retrieveData() {
   await fetch(`https://xkcd.now.sh/?comic=latest`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error)) 
}
    




function comicGenerator(){
    const comicContainer =document.getElementById("comic-container")
     
    fetch(`https://xkcd.now.sh/?comic=latest`).then((response)=>{
        if (!response.ok) {
           throw new Error("failed to get the comic");   
        }
        return response.json()
    })
    .then((data)=>{
        const image = `<img src="${data.img}" alt="${data.alt}" />`
        comicContainer.innerHTML = `<p style="color: red;">Failed to load the comic. Please try again.</p>`
    })
}
document.getElementById("fetch-comic").addEventListener("click", comicGenerator);
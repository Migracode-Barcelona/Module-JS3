 async function comicGenerator(){
    const comicContainer =document.getElementById("comic-container")
     try{
   const response =  await fetch(`https://xkcd.now.sh/?comic=latest`)
    if (!response.ok) {
           throw new Error("failed to get the comic");   
        }
        const resp = await response.json();
        console.log(resp);
        comicContainer.innerHTML = 
        `<img src="${resp.img}" alt="${resp.alt}" />`;
        
    }catch(error){
        console.log("error")
        comicContainer.innerHTML = `<p style="color: red;">Failed to load the comic. Please try again.</p>`
    }
       
}
document.getElementById("fetch-comic").addEventListener("click", comicGenerator);
document.getElementById('load-comic-button').addEventListener('click', loadComic);

function loadComic() {
  fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const img = document.createElement('img');  // Create an image element
      img.src = data.img;  // Set the source of the image
      img.alt = data.title;  // Set the alt text for the image
      document.getElementById('comic-container').innerHTML = '';  // Clear previous comic
      document.getElementById('comic-container').appendChild(img);  // Add new comic
    })
    .catch(error => {
      console.error('Error:', error);  // Log the error in the console
      alert('Failed to load comic, please try again later.');
    });
}

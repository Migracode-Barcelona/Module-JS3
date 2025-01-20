        async function fetchLatestComic() {
            const container = document.getElementById('comic-container');
            try {
                const response = await fetch('https://xkcd.now.sh/?comic=latest');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data); // Log the data to the console

                // Render the comic in the DOM
                container.innerHTML = `
                    <h2>${data.title}</h2>
                    <img src="${data.img}" alt="${data.alt}" />
                    <p>${data.alt}</p>
                `;
            } catch (error) {
                console.error('Error fetching the XKCD comic:', error);
                container.innerHTML = `<p class="error">Failed to load comic. Please try again later.</p>`;
            }
        }

        // Call the function to fetch and display the comic
        fetchLatestComic();
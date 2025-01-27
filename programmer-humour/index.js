function FetchData() {
    const container = document.getElementById("Humour");
    const apiUrl = "https://xkcd.now.sh/?comic=latest";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

            container.innerHTML = "";

            const img = document.createElement("img");
            img.src = data.img;

            container.appendChild(img);

            const title = document.createElement("p");
            title.textContent = data.title;

            container.appendChild(title);
        })
        .catch((error) => {
            console.error("Error fetching:", error);
            container.innerHTML = "Please try again later";
        });
}

FetchData();

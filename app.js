const container = document.getElementById("box");

let allImages = [];

const getimage = () => {
  fetch(
    "https://pixabay.com/api/?key=18955611-e1cba7f0b3178e9931fed4cef&image_type=photo&per_page=18&pretty=true"
  )
    .then((Response) => Response.json())
    .then((data) => {
      allImages = data.hits;
      allImages.forEach((image) => {
        const box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = `
             <img src ="${image.webformatURL}">
             <h3>${image.user}</h3>`;

        container.appendChild(box);
      });
    })
    .catch((err) => console.log(err));
};

getimage();

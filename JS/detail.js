let params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id")); // convert to number
let foundObject = data.find(item => item.id === id);
let mainImg = document.querySelector(".right-panel");
let leftPanel = document.querySelector(".left-panel");
mainImg.innerHTML = `
 <img  src="${foundObject.img}" alt="Tashkent Metro" class="main-img">
`
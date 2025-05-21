let productWrapper1 = document.querySelector('.products__wrapper2');
let productWrapper2 = document.querySelector(".products__wrapper3");
let productWrapper3 = document.querySelector(".products__wrapper4");
let productWrapper4 = document.querySelector(".comments");
let productWrapper5 = document.querySelector(".greatfor-archtours");
let productWrapper6 = document.querySelector(".greatfor-eatdrink");
for(let i = 0; i < data.length; i++){
    productWrapper1.insertAdjacentHTML('beforeend',`
                <li class="product">
                    <img src="${data[i].img}" alt="" class="product-img">
                    <div class="product__titles">
                        <h3 class="product-title2">${data[i].name}</h3>
                        <img src="" alt="" class="product-rating">
                        <p class="product-subtitle">${data[i].description}</p>
                    </div>
                </li>
        `)
}
for(let i = 0; i < data.length; i++){
    if(data[i].category == "restaurant"){
    productWrapper2.insertAdjacentHTML('beforeend',`
                <li class="product">
                    <img src="${data[i].img}" alt="" class="product-img">
                    <div class="product__titles">
                        <h3 class="product-title2">${data[i].name}</h3>
                        <img src="" alt="" class="product-rating">
                        <p class="product-subtitle">${data[i].description}</p>
                    </div>
                </li>
        `)
    }
}
for(let i = 0; i < data.length; i++){
    if(data[i].category == "arts" || data[i].category == "museums" ){
    productWrapper3.insertAdjacentHTML('beforeend',`
                <li class="product">
                    <img src="${data[i].img}" alt="" class="product-img">
                    <div class="product__titles">
                        <h3 class="product-title2">${data[i].name}</h3>
                        <img src="" alt="" class="product-rating">
                        <p class="product-subtitle">${data[i].description}</p>
                    </div>
                </li>
        `)
    }
}
for(let i = 0; i < data.length; i++){
    productWrapper4.insertAdjacentHTML('beforeend',`
                <li class="comment">
                    <p class="comment-title">${data[i].comment.text}</p>
                    <div class="coment">
                    <img src="./assets/https_/www.tripadvisor.com/Tourism-g293968-Tashkent_Tashkent_Province-Vacations.html by html.to.design ❤️ FREE version - 19/05/SVG.svg" alt="" class="comment-avatar">
                    <p class="coment-coment">By ${data[i].comment.name} • 12 replies</p>
                    </div>
                </li>
        `)
}
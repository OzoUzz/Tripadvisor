let productWrapper1 = document.querySelector('.products__wrapper2');
let productWrapper2 = document.querySelector(".products__wrapper3");
let productWrapper3 = document.querySelector(".products__wrapper4");
let productWrapper4 = document.querySelector(".comments");
let productWrapper5 = document.querySelector(".greatfor-cultular");
let productWrapper6 = document.querySelector(".greatfor-bars");
let productWrapper7 = document.querySelector(".greatfor-archtours");
let productWrapper8 = document.querySelector(".greatfor-eatdrink");
for(let i = 0; i < data.length; i++){
    productWrapper1.insertAdjacentHTML('beforeend',`
         <a href="./detail.html?id=${data[i].id}">
                <li class="product">
                    <img src="${data[i].img}" alt="" class="product-img">
                    <div class="product__titles">
                        <h3 class="product-title2">${data[i].name}</h3>
                        <img src="" alt="" class="product-rating">
                        <p class="product-subtitle">${data[i].description}</p>
                    </div>
                </li>
                </a>
        `)
}
for(let i = 0; i < data.length; i++){
    if(data[i].category == "restaurant"){
    productWrapper2.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
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
                 <a href="./detail.html?id=${data[i].id}">
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
                    <p class="comment-title">${data[i].comment[0].text}</p>
                    <div class="coment">
                    <img src="./assets/https_/www.tripadvisor.com/Tourism-g293968-Tashkent_Tashkent_Province-Vacations.html by html.to.design ❤️ FREE version - 19/05/SVG.svg" alt="" class="comment-avatar">
                    <p class="coment-coment">By ${data[i].comment[0].name} • 12 replies</p>
                    </div>
                </li>
        `)
}
for(let i = 0; i < data.length; i++){
    productWrapper5.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
        <li class="greatfor-tour">
            <img src="${data[i].img}" alt="" class="tour-img">
            <div class="tour-titles">
                <h4 class="tour-title">${data[i].name}</h4>
                <div class="rating-stars"></div>
                <p class="tour-price">from $189 per adult</p>
            </div>
        </li>
    `);

    let allTours = productWrapper5.querySelectorAll('.greatfor-tour');
    let latestTour = allTours[allTours.length - 1]; // eng ohirgi qo‘shilgan li
    let rating = latestTour.querySelector('.rating-stars'); 

    for(let a = 0; a < Math.floor(Number(data[i].rating)); a++){
        rating.insertAdjacentHTML('beforeend', `
            <i class="bi bi-star-fill"></i>
        `);
    }
}
for(let i = 0; i < data.length; i++){
    if(data[i].category == 'restaurant'){
    productWrapper6.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
        <li class="greatfor-tour">
            <img src="${data[i].img}" alt="" class="tour-img">
            <div class="tour-titles">
                <h4 class="tour-title">${data[i].name}</h4>
                <div class="rating-stars"></div>
                <p class="tour-price">from $189 per adult</p>
            </div>
        </li>
    `);

    let allTours = productWrapper6.querySelectorAll('.greatfor-tour');
    let latestTour = allTours[allTours.length - 1]; // eng ohirgi qo‘shilgan li
    let rating = latestTour.querySelector('.rating-stars'); 

    for(let a = 0; a < Math.floor(Number(data[i].rating)); a++){
        rating.insertAdjacentHTML('beforeend', `
            <i class="bi bi-star-fill"></i>
        `);
    }
}
}
for(let i = 0; i < data.length; i++){
    productWrapper7.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
        <li class="greatfor-tour">
            <img src="${data[i].img}" alt="" class="tour-img">
            <div class="tour-titles">
                <h4 class="tour-title">${data[i].name}</h4>
                <div class="rating-stars"></div>
                <p class="tour-price">from $189 per adult</p>
            </div>
        </li>
    `);

    let allTours = productWrapper7.querySelectorAll('.greatfor-tour');
    let latestTour = allTours[allTours.length - 1]; // eng ohirgi qo‘shilgan li
    let rating = latestTour.querySelector('.rating-stars'); 

    for(let a = 0; a < Math.floor(Number(data[i].rating)); a++){
        rating.insertAdjacentHTML('beforeend', `
            <i class="bi bi-star-fill"></i>
        `);
    }
}
for(let i = 0; i < data.length; i++){
    productWrapper8.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
        <li class="greatfor-tour">
            <img src="${data[i].img}" alt="" class="tour-img">
            <div class="tour-titles">
                <h4 class="tour-title">${data[i].name}</h4>
                <div class="rating-stars"></div>
                <p class="tour-price">from $189 per adult</p>
            </div>
        </li>
    `);

    let allTours = productWrapper8.querySelectorAll('.greatfor-tour');
    let latestTour = allTours[allTours.length - 1]; // eng ohirgi qo‘shilgan li
    let rating = latestTour.querySelector('.rating-stars'); 

    for(let a = 0; a < Math.floor(Number(data[i].rating)); a++){
        rating.insertAdjacentHTML('beforeend', `
            <i class="bi bi-star-fill"></i>
        `);
    }
}
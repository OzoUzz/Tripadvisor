let productWrapper1 = document.querySelector('.products2__wrapper');
let productWrapper2 = document.querySelector(".bottom-products");
let productWrapper3 = document.querySelector(".greatfor-cultular");
let productWrapper4 = document.querySelector(".greatfor-bars");
let productWrapper5 = document.querySelector(".greatfor-archtours");
let productWrapper6 = document.querySelector(".greatfor-eatdrink");
for(let i = 0; i < data.length; i++){
    productWrapper1.insertAdjacentHTML('beforeend',`
                <li class="product">
                    <img src="${data[i].img}" alt="" class="product-img">
                    <div class="product__titles">
                        <h3 class="product-title">${data[i].name}</h3>
                        <img src="" alt="" class="product-rating">
                        <p class="product-subtitle">${data[i].description}</p>
                    </div>
                </li>
        `)
        productWrapper2.insertAdjacentHTML('beforeend',`
                    <li class="bottom-product">
                        <img src="${data[i].img}" alt="" class="bottom-img">
                        <p class="bp-title">${data[i].name}</p>
                        <p class="bp-subtitle">${data[i].description}</p>
                    </li>
        `)
        productWrapper3.insertAdjacentHTML('beforeend',`
                    <li class="greatfor-tour">
                        <img src="${data[i].img}" alt="" class="tour-img">
                        <div class="tour-titles">
                            <h4 class="tour-title">${data[i].name}</h4>
                                <img src="" alt="" class="tour-rating">
                                <p class="tour-price">from $189 per adult</p>
                        </div>
                    </li>
        `)
        productWrapper4.insertAdjacentHTML('beforeend',`
                    <li class="greatfor-tour">
                        <img src="${data[i].img}" alt="" class="tour-img">
                        <div class="tour-titles">
                            <h4 class="tour-title">${data[i].name}</h4>
                                <img src="" alt="" class="tour-rating">
                                <p class="tour-price">from $189 per adult</p>
                        </div>
                    </li>
        `)
        productWrapper5.insertAdjacentHTML('beforeend',`
                    <li class="greatfor-tour">
                        <img src="${data[i].img}" alt="" class="tour-img">
                        <div class="tour-titles">
                            <h4 class="tour-title">${data[i].name}</h4>
                                <img src="" alt="" class="tour-rating">
                                <p class="tour-price">from $189 per adult</p>
                        </div>
                    </li>
        `)
        productWrapper6.insertAdjacentHTML('beforeend',`
                    <li class="greatfor-tour">
                        <img src="${data[i].img}" alt="" class="tour-img">
                        <div class="tour-titles">
                            <h4 class="tour-title">${data[i].name}</h4>
                                <img src="" alt="" class="tour-rating">
                                <p class="tour-price">from $189 per adult</p>
                        </div>
                    </li>
        `)
}


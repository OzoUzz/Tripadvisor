let menuWrapper1 = document.querySelector(".wrapperr");
for(let i = 0; i < data.length; i++){
    if(data[i].category == 'restaurant'){
    menuWrapper1.insertAdjacentHTML('beforeend',`
                 <a href="./detail.html?id=${data[i].id}">
                <li class="menu-item">
                    <img src="${data[i].img}" alt="" class="item-img">
                    <div class="item-titles">
                        <p class="item-title">${data[i].name}</p>
                        4.0 <img style="width: 80px;" src="./assets/SVG.png" alt="" class="item-rating">
                        <div class="items">
                                                    <p class="item-price">$$-$$$</p>
                        <br><p class="item-time">Open now</p>
                        </div>
                        <p class="coment">“Lovely restaurant” <br>“Best restaurant in Tashkent!”</p>
                    </div>
                </li>
        `)
    }
}
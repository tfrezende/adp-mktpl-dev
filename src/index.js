const renderBusinesses = async () => {
    let businesses = await fetch('http://localhost:3000/api/businesses');
    businesses = businesses.json();
    businesses.then(res => {      
        let businesses = [];
        res.businesses.forEach(el => {
            businesses.push(el);          
            // console.log(el);
            // let item = document.createElement('div');
            // item.className = "business-card";
            // item.innerHTML =    `<div> <a href="business.html?${el.id}}"><img src="${el.image_url}"></a></div>
            //                     <div> <a href="business.html?${el.id}">${el.name}</a></div>
            //                     <a class="address">${el.location.address1}, ${el.location.city}</a>
            //                     <div id="rating">Rating: ${el.rating} stars</div>`;
            // business_row.appendChild(item);
    
        });
        businesses.sort((a, b) => {
            return parseFloat(b.rating) - parseFloat(a.rating);
        });
        console.log(businesses);

        let topfive_row = window.document.getElementById('topfive-row');
        topfive_row.innerHTML = null;

        for (let i = 0; i < 5; i++) {
            let item = document.createElement('div');
            item.className = "business-card";
            item.innerHTML =    `<div> <a href="business.html?id=${businesses[i].id}"><img src="${businesses[i].image_url}"></a></div>
                                <div> <a href="business.html?id=${businesses[i].id}">${businesses[i].name}</a></div>
                                <a class="address">${businesses[i].location.address1}, ${businesses[i].location.city}</a>
                                <div id="rating">Rating: ${businesses[i].rating} stars</div>`;
            topfive_row.appendChild(item);
        }

        let business_row = window.document.getElementById('business-row');
        for (let i = 5; i < businesses.length; i++) {
            let item = document.createElement('div');
            item.className = "business-card";
            item.innerHTML =    `<div> <a href="business.html?id=${businesses[i].id}"><img src="${businesses[i].image_url}"></a></div>
                                <div> <a href="business.html?id=${businesses[i].id}">${businesses[i].name}</a></div>
                                <a class="address">${businesses[i].location.address1}, ${businesses[i].location.city}</a>
                                <div id="rating">Rating: ${businesses[i].rating} stars</div>`;
            business_row.appendChild(item);
        }
        document.getElementsByTagName("body")[0].style.display = "flex";
    })
}

window.addEventListener('load', () => {
    renderBusinesses();
})



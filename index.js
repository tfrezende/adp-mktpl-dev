const getBusinesses = async () => {
    let businesses = await fetch('http://localhost:3000/api/businesses');
    businesses = businesses.json();
    businesses.then(res => {
        
        let business_row = window.document.getElementById('business-row');
        business_row.innerHTML = null;

        res.businesses.forEach(el => {          
            console.log(el);
            let item = document.createElement('div');
            item.className = "business-card";
            item.innerHTML =    `<div> <a href="business.html?${el.id}}"><img src="${el.image_url}"></a></div>
                                <div> <a href="business.html?${el.id}">${el.name}</a></div>
                                <a class="address">${el.location.address1}, ${el.location.city}</a>
                                <div id="rating">Rating: ${el.rating} stars</div>`;
            business_row.appendChild(item);
    
        });
    })
}

window.addEventListener('load', () => {
    getBusinesses();
})



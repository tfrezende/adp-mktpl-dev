const renderBusiness = async (id) => {
    if (!id) {
        return false;
    }
    console.log(id);
    let business = await fetch(`http://localhost:3000/api/business?id=${id}`);
    business.json().then(async parlor => {
        let reviews = await fetch(`http://localhost:3000/api/business/reviews?id=${id}`);
        reviews.json().then(revs => {
            console.log(revs);

            let parlor_info = document.createElement('div');
            parlor_info.innerHTML = `<div><img id="parlor-image" src="${parlor.image_url}"><br></div>
                                <div><h2>${parlor.name}</h2></div>
                                <div>${parlor.location.address1}, ${parlor.location.city}</div>
            `;
            window.document.getElementById('main-showcase').appendChild(parlor_info);

            revs.reviews.forEach(el => {
                let item = document.createElement('div');
                item.className = "review-card";
                item.innerHTML =    `<div><b>${el.user.name}</b></div>
                                    <div>${el.rating} stars</div>
                                    <div>${el.text}</div>`;
                window.document.getElementById('reviews').appendChild(item);
            });  
            document.getElementsByTagName("body")[0].style.display = "flex";
        })
    })
}


window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    renderBusiness(urlParams.get('id'));
});

const getSearch = async () => {
    let businesses = await fetch('http://localhost:3000/api/businesses');
    businesses = businesses.json();
    businesses.then(res => {
        res.businesses.forEach(el => {
            console.log(el);
        });
    })
}

window.addEventListener('load', () => {
    getSearch();
})



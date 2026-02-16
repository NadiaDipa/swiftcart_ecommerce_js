// all products
const product_url = "https://fakestoreapi.com/products";


const loadAllProducts = async () => {
    const res = await fetch(product_url);
    const data = await res.json();
    displayAllProducts(data);
}



const displayAllProducts = (products) => {
    const allProductsContainer = document.getElementById("all-products-container");

    allProductsContainer.innerHTML = "";


    products.forEach(product => {
        const div = document.createElement("div");

        // "id": 1,
        // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        // "price": 109.95,
        // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        // "category": "men's clothing",
        // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        // "rating": {
        // "rate": 3.9,
        // "count": 120


        div.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src="${product.image}" alt="${product.title}" />
                </figure>

                <div class="card-body">
                    <div class="flex justify-between">
                        <div class="badge text-primary bg-purple-50 font-bold">${product.category}</div>

                        <div class="flex items-center ">
                            <i class="fa-solid fa-star text-warning"></i>
                            <p>${(product.rating.rate)} ${(product.rating.count)}</p>
                        </div>
                    </div>
                    <h2 class="card-title text-xl mt-2">
                        ${product.title}
                    </h2>
                    <h3 class="text-2xl font-bold">${product.price}</h3>

                    <div class="card-actions justify-between">

                        <div class="badge badge-outline py-6 px-5  text-xl"><i class="fa-regular fa-eye"></i>${product.description}
                        </div>

                        <div class="badge badge-outline bg-primary text-white py-6 px-10 text-xl"><i
                                class="fa-solid fa-cart-shopping"></i>Add</div>
                    </div>
                </div>
            </div>
`
    })
}


loadAllProducts();



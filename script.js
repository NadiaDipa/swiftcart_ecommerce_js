// all products 

const loadAllProducts = async () => {
    const product_url = "https://fakestoreapi.com/products";

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
            <div class="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">

                <figure class="h-52 bg-gray-100 flex items-center justify-center">

                <img src="${product.image}" alt="${product.title}" class="h-full object-contain" />
                </figure>



                <div class="card-body flex flex-col flex-1 p-4">

                    <div class="flex justify-between items-center mb-2">

                        <span class="badge text-primary bg-purple-50 font-bold text-sm">${product.category}</span>

                        <div class="flex items-center text-sm">
                        <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                        <span>${product.rating.rate} (${product.rating.count})</span>
                    </div>
                </div>


                <h2 class="text-lg font-semibold mb-1 truncate">${product.title}</h2>
                <p class="text-xl font-bold mb-3">${product.price}</p>

                <div class="mt-auto flex justify-between">
                
                    <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm">
                        <i class="fa-regular fa-eye"></i> Details
                    </button>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary btn-sm text-white">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                </div>

            </div>
        
`



        allProductsContainer.appendChild(div)
    })
}









// load every category button section start
const loadEveryCategory = async (category) => {
    // console.log(category);

    const newCategory = encodeURIComponent(category);

    const url = `https://fakestoreapi.com/products/category/${newCategory}`;
    console.log(url);


    const res = await fetch(url);
    const data = await res.json();

    // get container and clear for previous product won't show
    const allProductsContainer = document.getElementById("all-products-container");
    allProductsContainer.innerHTML = "";


    displayEveryCategory(data);


}


const displayEveryCategory = (products) => {
    const everyProductContainer = document.getElementById("particular-product-container");

    everyProductContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");

        card.innerHTML = `
    <div class="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">

        <figure class="h-52 bg-gray-100 flex items-center justify-center">
            <img src="${product.image}" alt="${product.title}" class="h-full object-contain" />
        </figure>

        <div class="card-body flex flex-col flex-1 p-4">
            <div class="flex justify-between items-center mb-2">
                <span class="badge text-primary bg-purple-50 font-bold text-sm">${product.category}</span>
                <div class="flex items-center text-sm">
                    <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                    <span>${product.rating.rate} (${product.rating.count})</span>
                </div>
            </div>

            <h2 class="text-lg font-semibold mb-1 truncate">${product.title}</h2>
            <p class="text-xl font-bold mb-3">$${product.price}</p>

            <div class="mt-auto flex justify-between">
                <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm">
                    <i class="fa-regular fa-eye"></i> Details
                </button>
                <button onclick="addToCart(${product.id})" class="btn btn-primary btn-sm text-white">
                    <i class="fa-solid fa-cart-plus"></i> Add
                </button>
            </div>
        </div>

    </div>
`;

        everyProductContainer.append(card)
    })
}





// load every category button section end






















































// details button about all product


const loadProductDetails = async (id) => {

    const details_url = `https://fakestoreapi.com/products/${id}`

    const res = await fetch(details_url);
    const data = await res.json();
    displayProductDetails(data);

}


const displayProductDetails = (product) => {
    const detailsContainer = document.getElementById("details-container");

    detailsContainer.innerHTML = `<h2 class="text-xl font-bold mb-2">${product.title}</h2>
        <p class="mb-2">${product.description}</p>
        <p class="mb-1"><b>Category:</b> ${product.category}</p>
        <p class="mb-2"><strong>Price:</strong>${product.price}</p>
        <div class="flex items-center mb-2">
            <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
            <span>${product.rating.rate} (${product.rating.count})</span>
        </div>
        <img src="${product.image}" alt="${product.title}" class="mt-4 w-full h-64 object-contain rounded-lg shadow-sm">

        <div class="flex gap-3 mt-4">
            <button onclick="buyNow(${product.id})" class="btn btn-success flex-1 text-white">
               <i class="fa-solid fa-bag-shopping"></i> Buy Now
            </button>
            <button onclick="addToCart(${product.id})" class="btn btn-primary flex-1 text-white">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;


    document.getElementById("product_Modal").showModal();

}










// all categories 

const allCategories = async () => {
    const categories_url = ("https://fakestoreapi.com/products/categories")

    const res = await fetch(categories_url);
    const data = await res.json();
    displayAllCategories(data);
}


const displayAllCategories = (categories) => {
    const all_categories_container = document.getElementById("all_categories_container");

    all_categories_container.innerHTML = "";



    // all products button 
    const allBtnDiv = document.createElement("div");
    allBtnDiv.innerHTML = `<button onclick="loadAllProducts()" class="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-full mr-2 mb-2">All Products</button>`;

    all_categories_container.appendChild(allBtnDiv);


    // rest of the button
    categories.forEach(category => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button onclick="loadEveryCategory(\`${category}\`)" class="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-full"> ${category}
        </button>`


        all_categories_container.appendChild(btnDiv);
    })
}

loadAllProducts();
allCategories();





















//storing and retrieving items in cart
let itemsInCart = JSON.parse(localStorage.getItem('ShoppingCart'));
if(!itemsInCart){
	itemsInCart = [];
}
const parentElement = document.querySelector("#buyProducts"); //buyProducts is an id that contains the products in the cart
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll(".product-card");

//show/ update total price in the cart
const countTheSumPrice = function () { // 4
	let sumPrice = 0;
	itemsInCart.forEach(item => {
		sumPrice += item.price;
	});
	return sumPrice;
}

//updating cart and saving to local storage so that the items dont dissappear when page is refreshed
const updateShoppingCartHTML = function(){
	localStorage.setItem('ShoppingCart',JSON.stringify(itemsInCart));
	if(itemsInCart.length > 0){
		let result = itemsInCart.map(product => {
			return `
			<li class="buyItem">
				<img src="${product.image}">
				<div>
					<h5>${product.name}</h5>
					<h6>$${product.price}</h6>
					<div>
						<button class="button-minus" data-id=${product.id}>-</button>
						<span class="countOfProduct">${product.count}</span>
						<button class="button-plus" data-id=${product.id}>+</button>
					</div>
				</div>
			</li>`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '$' + countTheSumPrice();
	}
	else{
		document.querySelector('.checkout').childElementCount;classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty"> Your shopping cart is empty </h4>';
		cartSumPrice.innerHTML = "";
	}
}

//functon to update price and count of an item
function updateItemsInCart(product){
	for(let i=0; i < itemsInCart.length; i++){
		if(itemsInCart[i].id == product.id){
			itemsInCart[i].count += 1;
			itemsInCart[i].price = itemsInCart[i].basePrice * itemsInCart[i].count;
			return;
		}
	}
	itemsInCart.push(product);
}

products.forEach(product =>{
	product.addEventListener('click', (e) => {
		if(e.target.classList.contains("addToCart")){
			const productID = e.target.dataset.productId;
			const productName = product.querySelector('.itemName').innerHTML;
			const productPrice = product.querySelector('.priceValue').innerHTML;
			const productImage = product.querySelector('img').src;
			let itemToCart = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice
			}
			updateItemsInCart(itemToCart);
			updateShoppingCartHTML();
		}
	});
});

// enabling the buttons to add items in cart
parentElement.addEventListener('click', (e) => {
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if(isPlusButton || isMinusButton){
		for(let i = 0; i < itemsInCart.length; i++){
			if(itemsInCart[i].id == e.target.dataset.id){
				if(isPlusButton){
					itemsInCart[i].count += 1;
				}
				else if(isMinusButton){
					itemsInCart[i].count -= 1;
				}
				itemsInCart[i].price = itemsInCart[i].basePrice * itemsInCart[i].count;
			}
			if(itemsInCart[i].count <= 0){
				itemsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();
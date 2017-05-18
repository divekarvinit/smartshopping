var products = [{"id":[-37,-84,-37,59],"img":"./img/nut_bar.jpg","productName":"Nice & Natural Nut Bars","unit":"1","price":"3"},{"id":[-37,-107,41,-47],"img":"./img/spiral_notebook.jpg","productName":"Spiral Notebook","unit":"1","price":"4"}];
var cartItems = [];

$( document ).ready(function() {
    populateCart();
});


function updateCartItems(rfidData){
	debugger;
	var isRemoved = false;
	var rfIdStr = JSON.stringify(rfidData.id);
	rfIdStr = rfIdStr.replace(/[\[\]']+/g,'');
	var rfId = rfIdStr.split(',');

	//check if cart already contains the data. If it containes, remove it
	for(var i = 0;  i < cartItems.length; i++){
		if(cartItems[i].id != 'undefined' && cartItems[i].id != null) {
			var productId = cartItems[i].id;
			if(rfId[0] == productId[0] && rfId[1] == productId[1] && rfId[2] == productId[2] && rfId[3] == productId[3]) {
				cartItems.splice(i, 1);
				isRemoved = true;
				break;
			}
		}
			
	}

	// If item is removed from cart, dont add it.

	if(!isRemoved) {
		for(var i = 0;  i < products.length; i++){
			if(products[i].id != 'undefined' && products[i].id != null) {
				var productId = products[i].id;
				if(rfId[0] == productId[0] && rfId[1] == productId[1] && rfId[2] == productId[2] && rfId[3] == productId[3]) {
					cartItems.push(products[i]);
					break;
				}
			}
		}
	}
}

function populateCart() {
	//alert("Populated");
	$(".bodyclass").html('');
	for(var i = 0; i < cartItems.length; i++){
		debugger;
		$(".bodyclass").append(
			'<div class="row"><div class="col-md-2 col-xs-3"><img class="img-thumbnail" src="'+ cartItems[i].img +'"></div><div class="col-md-5 col-xs-5">'+
			'<p><b><span>'+ cartItems[i].productName + '</span></b></p><p><b><span>' + cartItems[i].unit +' Unit</span></b></p></div>' +
			'<div class="col-md-5 col-xs-4"><p><span>Price:<b><span> $' + cartItems[i].price + '</span></b></span></p></div></div><hr>'
		);
	}
}

// [-37,-84,-37,59]- Jesper
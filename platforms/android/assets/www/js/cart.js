var products = [{"img":"./lays.jpg","productName":"Lays","unit":"1","price":"2"},{"img":"./lays.jpg","productName":"Cheese","unit":"2","price":"4"}];

$( document ).ready(function() {
    insertIntoCart('timepass');
});


function insertIntoCart(rfidData){
	debugger;
	for(var i = 0; i < products.length; i++){
		debugger;
		$(".bodyclass").append(
			'<div class="row"><div class="col-md-2 col-xs-3"><img class="img-thumbnail" src="'+ products[i].img +'"></div><div class="col-md-5 col-xs-5">'+
			'<p><b><span>'+ products[i].productName + '</span></b></p><p><b><span>' + products[i].unit +' Unit</span></b></p></div>' +
			'<div class="col-md-5 col-xs-4"><p><span>Price:<b><span> $' + products[i].price + '</span></b></span></p></div></div><hr>'

		);
	}
}
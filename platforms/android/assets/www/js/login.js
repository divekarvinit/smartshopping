$('#loginBtn').click(function(){
    var userName = $('#inputText').val();
    var password = $('#inputPassword').val();

    if((userName == "vinit" || userName == "jesper") && password == "test") {
       window.location.href = './cart.html';
    } else {
        $('#errorMessage').text('Please check your credentials');        
 	}
 	return false;	
});

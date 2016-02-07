$(document).ready(function(){

$(document).bind('keydown', function (e) {
    if(e.keyCode === 38 || e.keyCode === 40) {
    	console.log('ok');
        $('.monkey').addClass('keycode');
    }
}); 


});


//TEST 2
// $(document).keydown(function(ev){
//     if (ev.keyCode === 38 || ev.keyCode === 40) { 
//        $('.monkey').addClass ('keycode');

//     }
// });



//TEST 3
// function keyd(ev){

// 	console.log(ev.keyCode);

// 	var _monkey = document.getElementById('monkey');

// 	if(ev.keyCode === 38 || ev.keyCode === 40){
// 		_monkey.className += "keycode";
// 	}
// }
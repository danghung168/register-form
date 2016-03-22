
for(var i = 1; i<30; i++){
	$('#day').append(" <option value =" + i +">  "+i+"  </option>")
}

for(var i = 1985; i<2016; i++){
	$('#year').append(" <option value =" + i +">  "+i+"  </option>")
}

var month1 = ["jan", "feb", "mar", "app", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dev"];
for(var i = 0; i < month1.length ;i++){
$('#month').append("<option value="+month1[i]+"> "+month1[i]+"</option>");
};

$('#form_sign').on( "submit",function(){
	var isValid = true;

	if ($('#user').val().match( /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$ /)== null ) {
		$('#user').next('span').text('Sai roi nhe');
		isValid = false;
	}else{
		$('#user').next('span').text('');
	}
	if($('#password').val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/) == null){
		$('#password').next('span').text('Pass từ 4 đến 8 kí tự bao gồm chữ hoa và số');
		isValid = false;
	}else{
		$('#password').next('span').text('');
	}
	if($('#password').val() !== $('#re_password').val() ){
		$('#re_password').next('span').text('Pass giong voi pass');
		isValid = false;
	}
	if($('#username').val().trim() == ''){
		$('#username').next('span').text('Khong dc de trong');
		isValid = false;
	}else{
		$('#username').next('span').text('');
	}
	if ($('#email').val().match( /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$ /)== null ) {
		$('#email').next('span').text('Sai roi nhe');
		isValid = false;
	}else{
		$('#email').next('span').text('');
	}
	if ($('[name="radio"]').is(':checked')){
		//alert('Sex check')
        $('[name="radio"]').next('span').text('');
    	//isValid = false;
 	}else{
 		//alert('chua check nhe')
 		$('[name="radio"]').next('span').text('chua check nhe');
 	}
	return isValid;
});


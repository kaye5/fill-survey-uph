function checkAll(value){
	$('input').each(function(){
		if($(this).attr('value') == value){			
			$(this).click();			
		}			
	})
	$('body, html').animate({scrollTop: 2000});
}

function writeText(text) {
	$('textarea').attr('value',text);
}

function fillAll(point,text){
	checkAll(point);
	writeText(text);
	$('button#movenextbtn').click();
}

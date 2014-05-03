$(function() {
    $("#pre-form input, #pre-form select").change(function() {
        var dig1 = $("input[name=pre-form-1]:checked").val();
        var dig2 = $("input[name=pre-form-2]:checked").val();
        var dig3 = $("input[name=pre-form-3]:checked").val();
        var dig4 = $("select[name=pre-form-4]").val();
        var dig5 = $("input[name=pre-form-5]:checked").val();
        
        $("#result-pre-form").text(dig1+dig2+dig3+dig4+dig5);
    });
	
	document.addEventListener("backbutton", function(){
		if(confirm("Tem certeza que deseja fechar o programa?")){
			navigator.app.exitApp();
		}
	},false);
	
	$('select').on('change', function(e){
		if($(this).val())
		{
			$(this).css('background', 'green');
			$(this).css('color', 'white');
		} else {
			$(this).css('background', 'initial');
			$(this).css('color', 'initial');
		}
	})
});
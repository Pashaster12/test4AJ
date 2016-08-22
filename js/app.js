$(function()
{
	$(".chzn-select").chosen();
});

$('#mainform').submit(function()
{
	var login = $('input#login').val();
	var email = $('input#email').val();
	var geo = $('#territory').val();
	
	if(login == "") alert("Поле 'ФИО' не может быть пустым!");
	else if(email == "") alert("Поле 'EMAIL' не может быть пустым!");
	else if(geo == "") alert('Выберите Ваше место жительства!');
	else $('#mainform').submit();
	
	return false;
});

function newlist(object_alias)
{
	var value = $('#' + object_alias + ' option:selected').attr('id');
	$('#territory').val(value);
	
	var new_alias = '';
	
	if (object_alias == 'region') new_alias = 'city';
	else if (object_alias == 'city') new_alias = 'district';
	
	$.ajax({
		type: 'POST',
		url: 'ajaxcontroller/newgeo.php',
		data: 'geoid=' + value + '&object_alias=' + new_alias,
		success: function(result)
		{
			
			if(result == '' && new_alias != '')
			{
				if($('#' + new_alias + '-field').is(':visible')) $('#' + new_alias + '-field').hide();
			}
			else
			{
				if($('#' + new_alias + '-field').is(':hidden')) $('#' + new_alias + '-field').show();
				$('#' + new_alias + '-field').html(result);
				
				if(new_alias == 'city' && $('#district-field').text() != '') $('#district-field').empty();
				
				var new_val = $('#' + object_alias + ' option:selected').attr('id');
				$('#territory').val(new_val);
				
				$(".chzn-select").chosen();
			}
		}
	});
}
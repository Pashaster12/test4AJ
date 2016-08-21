$(function()
{
	var curval = $('#region').val();
	$('#territory').val(curval);
	
	$(".chzn-select").chosen();
});

$('#mainform').submit(function()
{
	var login = $('input#login').val();
	var email = $('input#email').val();
	
	var rv_name = /^[А-Я][а-яА-Я]+\ [А-Я][а-яА-Я]+\ [А-Я][а-яА-Я]+$/;
    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	
	if(login.length == '' || !rv_name.test(login)) alert("Поле 'ФИО' не может быть пустым, и содержать символы, кроме букв русского алфавита. В поле должна быть комбинация из трёх слов, разделённых пробелами. Слова должны начинаться с заглавных букв!");
	else if(email == '' || !rv_email.test(email)) alert("Поле 'EMAIL' не может быть пустым и должно состоять только из латинских букв и символов '_.-', а также '@'. Введённые в него данные должны соответствовать общепринятому формату 'email@mailer.domain'!");
	else $('#mainform').submit();
	
	return false;
});

function newlist(object_alias)
{
	var value = $('#' + object_alias).val();
	if($('*').is('#territory')) $('#territory').val(value);
	
	var new_alias = '';
	
	if (object_alias == 'region') new_alias = 'city';
	else if (object_alias == 'city') new_alias = 'district';
	
	$.ajax({
		type: 'POST',
		url: 'ajaxcontroller/filler.php',
		data: 'selval=' + value + '&object_alias=' + new_alias,
		success: function(result)
		{
			if(result == '' && new_alias != '')
			{
				if($('#' + new_alias + '-field').is(':visible')) $('#' + new_alias + '-field').hide();
				alert('У данного города нет районов и сёл');
			}
			else
			{
				if($('#' + new_alias + '-field').is(':hidden')) $('#' + new_alias + '-field').show();
				$('#' + new_alias + '-field').html(result);
				
				var new_val = $('#' + new_alias).val();
				if($('*').is('#territory')) $('#territory').val(new_val);
				
				$(".chzn-select").chosen();
			}
		}
	});
}
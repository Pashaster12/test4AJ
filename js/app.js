$(function()
{
	var curval = $('#region').val();
	$('#territory').val(curval);
	
	$(".chzn-select").chosen();
});

function submit_form()
{
	$('#mainform').submit();
}

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
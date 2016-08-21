$(function()
{
	$(".chzn-select").chosen();
});

function submit_form()
{
	//сделать валидацию данных, приходимых с формы
	$('#mainform').submit();
}

$('#region').change(function()
{
	var value = $('#region').val();
	if($('*').is('#territory')) $('#territory').val(value);
	
	$.ajax({
		type: 'POST',
		url: 'ajaxcontroller/filler.php',
		data: 'selval=' + value,
		success: function(result)
		{
			alert(result);
			if($('*').is('#cities') && result) $('#cities').toggle();
			else return false;
		}
	});
});

function preview()
{
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
	var image = $('#image').val();
	
    $.ajax({
        type: 'POST',
        url: 'ajaxcontroller/preview.php',
        data: 'name='+ name + '&email='+ email + '&message='+ message + '&image='+ image,
        success : function(result)
		{
            if($('*').is('#revlist')) $('#revlist').prepend(result);
			else $('#revbody').html(result);
			
			$('.revpanel:first').addClass('panel-warning');
			
			var file = document.getElementById("image").files[0];
			
			if(file != undefined)
			{
				if(file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/gif' || file.type == 'image/png')
				{
					var reader = new FileReader();
					reader.onload = function(event) {
						document.getElementById("img-preview-").src = event.target.result;
					};
					reader.readAsDataURL(file);
				}
				else if($('*').is('#img-block-')) $('#img-block-').text('Недопустимое расширение файла!');
			}
        }
    });
}

function rev_sort(listtype, admin_logged)
{
	$.ajax({
		type: 'POST',
		url: 'ajaxcontroller/sort.php',
		data: 'listtype=' + listtype + '&admin_logged=' + admin_logged,
		success: function(result)
		{
			if($('*').is('#revbody')) $('#revbody').html(result);
			if($('*').is('#sort_created_at')) $('#sort_created_at').removeClass('active');
			if($('*').is('#sort_' +  listtype)) $('#sort_' +  listtype).addClass('active');
		}
	});
}

function rev_change(rev_id, status, message)
{
	if($('*').is('#rev-new-text-' + rev_id) && message == undefined) message = $('#rev-new-text-' + rev_id).val();
	
	$.ajax({
		type: 'POST',
		url: 'ajaxcontroller/revchange.php',
		data: 'rev_id='+ rev_id + '&status='+ status + '&message='+ message,
		success: function(result)
		{
			if($('*').is('#review-' + rev_id)) $('#review-' + rev_id).html(result);
		}
	});
}

function rev_edit(rev_id)
{
	if($('*').is('#rev-text-' + rev_id)) $('#rev-text-' + rev_id).toggle();
	if($('*').is('#rev-edit-' + rev_id)) $('#rev-edit-' + rev_id).toggle();
}

function authorize()
{
	var formValid = true;
	$('input.auth').each(function() 
	{
		var formGroup = $(this).parents('.form-group');
		var glyphicon = formGroup.find('.form-control-feedback');
		if (this.checkValidity()) 
		{
			formGroup.addClass('has-success').removeClass('has-error');
			glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
		} 
		else 
		{
			formGroup.addClass('has-error').removeClass('has-success');
			glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
			formValid = false;  
		}
    });
	
    if (formValid) 
	{
		var login = $('#login').val();
		var password = $('#password').val();
	
		$.ajax({
			type: 'POST',
			url: 'ajaxcontroller/checkauth.php',
			data: 'login='+ login + '&password='+ password,
			success: function(result)
			{
				if(result)
				{
					$('#myModal').modal('hide');
					$('#authform').submit();
				}
				else if($('*').is('#autherror')) $('#autherror').show();
			}
		});
    }
}
  
function logout()
{
	var cookie_date = new Date();
	cookie_date.setTime (cookie_date.getTime() - 1);
	document.cookie = "id=; hash=; expires=" + cookie_date.toGMTString();
	
	window.location = "index.php";
}
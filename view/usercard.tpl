<html>

	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="../css/style.css">
	</head>
	
	<body>
		<?php if(!empty($user)) : ?>
			<div id="form-content">
				<div id="mainform">
					<div class="card-title">Карточка пользователя</div>
					<div class="field">
						ФИО:<div class="ucard"><?php echo $user['name']; ?></div>
					</div>
					
					<div class="field">
						EMAIL:<div class="ucard"><?php echo $user['email']; ?></div>
					</div>
					
					<div class="field">
						АДРЕС:<div class="ucard"><?php echo $user['territory']; ?></div>
					</div>
				</div>
			</div>
		<?php else : ?>
			<div class="has-user">Пользователь зарегистрирован!</div>
		<?php endif ?>
	</body>	
	
</html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="libs/chosen_v1.6.2/chosen.min.css">
		<link rel="stylesheet" href="css/style.css">
	</head>
	
	<body>
		<div id="form-content">
			<form id="mainform" method="POST" action="controller/reg.php">
				<div class="field">
					<label for="login">ФИО:</label>
					<input type="text" name="login" id="login">
				</div>
				<div class="field">
					<label for="email">EMAIL:</label>
					<input type="text" name="email" id="email">
				</div>
				
				<div class="field">
					<?php require('view/select.tpl'); ?>
				</div>
				
				<div class="field" id="city-field" style="display:none;"></div>
				<div class="field" id="district-field" style="display:none;"></div>
				
				<div class="submit">
					<input type="submit" value="Регистрация">
				</div>
				
				<input type="hidden" id="territory" name="territory">
			</form>
		</div>
	</body>
	
	<script src="libs/jquery-2.2.4.min.js"></script>
	<script src="libs/chosen_v1.6.2/chosen.jquery.min.js"></script>
	<script src="js/app.js"></script>
	
</html>
<label for="<?php echo $object_alias; ?>">
	Список <?php if($object_alias == 'region') : ?>областей<?php elseif($object_alias == 'city') : ?>городов<?php elseif($object_alias == 'district') : ?>районов<?php endif ?>:
</label>

<select class="chzn-select" name="<?php echo $object_alias; ?>" id="<?php echo $object_alias; ?>" onchange="newlist('<?php echo $object_alias; ?>');">
	<option value="">Не выбрано</option>
	<?php foreach($regions as $region) : ?>
		<option id="<?php echo $region['ter_id']; ?>" value="<?php echo $region['ter_address']; ?>"><?php echo $region['ter_address']; ?></option>
	<?php endforeach ?>
</select>
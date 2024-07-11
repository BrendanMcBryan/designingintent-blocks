<?php

// $ourContext = array("showSkyColor" => false, "showGrassColor" => false, "attributes" => $attributes);



$spiralUrl =
	plugins_url() .
	"/designingintent-blocks/assets/images/Meighs-Spiral.webp";



?>

<div data-wp-interactive="meigselementstore" <?php echo wp_interactivity_data_wp_context($attributes) ?>>



	<img src="<?php echo $spiralUrl ?>" class="meigsSpiral" alt="meigsSpiral" style="width: <?php echo $attributes['width'] ?>%; opacity: <?php echo $attributes['opacity'] ?>%; top: <?php echo $attributes['top'] ?>%; left: <?php echo $attributes['left'] ?>%;" />


</div>
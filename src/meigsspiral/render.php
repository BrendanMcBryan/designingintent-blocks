<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<?php $spiralUrl =
		plugins_url() .
		"/designingintent-blocks/assets/images/Meighs-Spiral.webp";
	?>

	<div class="meigsSpiral" style="width: <?php echo $attributes['width'] ?>%"><img src='<?php echo $spiralUrl ?>' alt="Design Element"></div>

</div>
<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="section__contact ">
	<div class="contact__title">
		<p>
			For more information call
			<a href="tel:+1202-753-5539"><strong>202-753-5539</strong></a> <br />or
			complete the form below to keep up to date with 1214 Meigs
		</p>
	</div>
	<div class="contact__form">
		<form id="spark-registration-form" action="https://spark.re/urban-pace/1214-meigs/register/registration-form" accept-charset="UTF-8" method="post">
			<input type="hidden" name="authenticity_token" value="s1XdDDysvBcdLyfmkI5/XF8saIU6kGwtwjHXnPY4Fcu0PJ6GEyil3L0F8lLW1T2p1HhUaW7qjoAy9WgPRTA4Ow==" autocomplete="off" />

			<div class="grid">
				<div class="form-item">
					<!-- <label>First Name *</label> -->
					<input class="disable-require" id="contact_first_name" maxlength="50" name="contact[first_name]" required type="text" placeholder="First Name" />
				</div>
				<div class="form-item">
					<!-- <label>Last Name </label> -->
					<input id="contact_last_name" maxlength="50" name="contact[last_name]" type="text" placeholder="Last Name" />
				</div>
			</div>
			<div class="grid">
				<div class="form-item">
					<!-- <label>Email *</label> -->
					<input id="contact_email" maxlength="255" name="contact[email]" required type="email" placeholder="Email*" />
				</div>
				<div class="form-item">
					<!-- <label>Phone </label> -->
					<input id="contact_phone" maxlength="255" name="contact[phone]" type="tel" placeholder="Telephone" />
				</div>
			</div>

			<!-- <div class="form-item">
      <label for="contact_comments">Comments or Questions</label>
      <input
        type="text"
        name="contact[comments]"
        id="contact_comments"
        placeholder="Additional comments or questions"
        rows="5"
        class="ignore"
        data-enhance="false"
      />
    </div> -->

			<div class="grid">
				<button name="button" type="submit" class="button submit template-button">
					Submit
				</button>
			</div>

			<input type="hidden" name="source" id="source" value="Website" autocomplete="off" />
			<input type="hidden" name="redirect_success" id="redirect_success" value="" autocomplete="off" />
			<input type="hidden" name="redirect_error" id="redirect_error" value="" autocomplete="off" />
			<input type="text" name="are_you_simulated" id="are_you_simulated" placeholder="Leave this field blank" />
			<input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" class="g-recaptcha-response" autocomplete="off" />

			<!-- / ENSURE THAT THIS CONTAINS YOUR RECAPTCHA v3 SITE KEY -->
			<script src="https://www.google.com/recaptcha/api.js?render=6LelXwsqAAAAAKmzqLCznoKCEjj7RqcaqzkOlOnb"></script>
			<script>

			</script>

			<!-- CDN for js-cookie -->
			<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>


		</form>
	</div>
</section>
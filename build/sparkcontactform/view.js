/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/sparkcontactform/view.js ***!
  \**************************************/
/* eslint-disable no-console */
// console.log("Hello from contact form view.js");

/* eslint-enable no-console */

// Spark.re form and validation
window.addEventListener("DOMContentLoaded", function () {
  // Hides spam trap
  document.getElementById("are_you_simulated").style.display = "none";

  // set the email pattern attribute for input type email fields. it is used for email validation
  document.querySelectorAll("input[type='email']").forEach(function (el) {
    el.pattern = "[^@\\s]+@[^@\\s]+\\.[^@\\s]+";
  });

  // remove required attribute for questions with other option so the main question does not trigger the validation
  document.querySelectorAll(".project-question.answers.single.required, .project-question.answers.custom.required").forEach(function (question_root) {
    const qid = question_root.dataset.qid;
    const other_q = document.querySelector(`#answers_${qid}_other_text`);
    const input = question_root.querySelector(`#answers_${qid}`);
    if (other_q) {
      input.required = false;
    }
  });
});

// eslint-disable-next-line no-unused-vars
function validateOtherQuestions() {
  const validation_errors = [];
  let question_text = "the required questions";
  const question_roots = document.querySelectorAll(".project-question.answers.single.required, .project-question.answers.custom.required");
  question_roots.forEach(function (question_root) {
    const qid = question_root.dataset.qid;
    const other_q = document.querySelector(`#answers_${qid}_other_text`);
    const question_label = question_root.querySelector(".question-text");
    const input = question_root.querySelector(`#answers_${qid}`);

    // if (question_label) {
    //   question_text = question_label.textContent.replace(' *', '');
    // }

    // if (other_q && input) {
    //   if (input.value === '' && other_q.value === '') {
    //     validation_errors.push(
    //       `- Please select at least one option from ${question_text}`
    //     );
    //   }
    // }
  });
  return validation_errors;
}

// eslint-disable-next-line no-unused-vars
function validateMultipleTypeQuestions() {
  const validation_errors = [];
  let question_text = "the required questions";
  const question_roots = document.querySelectorAll(".project-question.multiple.required");
  question_roots.forEach(function (item) {
    const qid = item.dataset.qid;
    const other_q = document.querySelector(`#answers_${qid}_other_text`);
    const checkboxes = item.querySelectorAll("input[type='checkbox']:checked");
    const question = item.querySelector(".question-text");
    if (question) {
      question_text = question.textContent.replace(" *", "");
    }
  });
  return validation_errors;
}
function validateReCaptcha(form) {
  // If you are hosting this form on your own site and have reCAPTCHA enabled,
  // ensure that this is populated with your own site key, as well as include
  // the following script before this code:
  //   <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY">
  // For more information, see: https://developers.google.com/recaptcha/docs/v3
  var siteKey = "6LelXwsqAAAAAKmzqLCznoKCEjj7RqcaqzkOlOnb";
  grecaptcha.ready(function () {
    grecaptcha.execute(siteKey, {
      action: "registration"
    }).then(function (token) {
      const tokenInput = document.querySelector(".g-recaptcha-response");
      if (tokenInput) {
        tokenInput.value = token;
        form.appendChild(tokenInput);
        form.submit();
      }
    });
  });
}
function validateForm() {
  let validation_errors = [];
  validation_errors = validation_errors.concat(validateOtherQuestions());
  validation_errors = validation_errors.concat(validateMultipleTypeQuestions());
  return validation_errors;
}
const form = document.querySelector("body#spark-registration-form form, form#spark-registration-form");
form.addEventListener("submit", function (e) {
  let validation_errors = validateForm();
  if (validation_errors.length > 0) {
    alert("The following fields are incomplete or have errors:\r\n" + validation_errors.join("\r\n"));
    e.preventDefault();
    return false;
  }

  // Prevents duplicate submissions
  const button = document.querySelector(".template-button");
  button.disabled = true;

  // wait for a bit to re-enable the button in case some of the custom validation above failed
  setTimeout(function () {
    button.disabled = false;
  }, 2000);
  validateReCaptcha(form);
  e.preventDefault();
});

// Get and Store UTM Params
document.addEventListener("DOMContentLoaded", function () {
  function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
      p[k] = v;
    });
    return k ? p[k] : p;
  }
  sparksource = "";
  utmsource = getSearchParams("utm_source");
  utmcampaign = getSearchParams("utm_campaign");
  if (utmsource != undefined) {
    // console.log(utmsource);
    Cookies.set("utmcampaign", utmcampaign, {
      expires: 30,
      path: "/"
    });
    Cookies.set("utmsource", utmsource, {
      expires: 30,
      path: "/"
    });
    // console.log("loaded from url");
    sparksource = utmsource;
  } else {
    console.log(`UTM Sources is ${utmsource}`);
    utmcampaign = Cookies.get("utmcampaign");
    utmsource = Cookies.get("utmsource");
    if (utmsource != undefined) {
      //sparksource = utmsource +' : '+ utmcampaign;
      sparksource = utmsource;
      // console.log("loaded from cookie");
    }
  }
  if (sparksource != "") {
    const sourceInput = document.querySelector("input[name=source]");
    sourceInput.value = sparksource;
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map
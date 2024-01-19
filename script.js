/*----------------------------------------------------------------------------------------------------------------*/
                                                /* SLIDEBAR FOR MOBILE */
/*----------------------------------------------------------------------------------------------------------------*/

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

/*----------------------------------------------------------------------------------------------------------------*/
                                                /* SCROLL BUTTON */
/*----------------------------------------------------------------------------------------------------------------*/

// Function to scroll to the top of the page with a slow motion effect
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Use 'smooth' for slow motion scrolling
        duration: 5.0 // Duration in milliseconds (e.g., 1500ms or 1.5s)
    });
}

// Show/hide the scroll-to-top button based on the scroll position
window.onscroll = function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

/*----------------------------------------------------------------------------------------------------------------*/
                                                /* LOADER */
/*----------------------------------------------------------------------------------------------------------------*/

// Show loader automatically when the page starts loading
document.addEventListener("DOMContentLoaded", function () {
    showLoader();
  });

  // Simulate some work (you can replace this with your actual logic)
  setTimeout(function () {
    // Hide loader after work is done
    hideLoader();
  }, 1500); // Adjust the time as needed

  function showLoader() {
    document.getElementById("loader").style.display = "flex";
  }

  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }

/*----------------------------------------------------------------------------------------------------------------*/
                                                /* BMI Calculator */
/*----------------------------------------------------------------------------------------------------------------*/

  function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var resultElement = document.getElementById('result');
    var heightInputElement = document.getElementById('height');
    var weightInputElement = document.getElementById('weight');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultElement.innerText = 'Please enter valid values for height and weight.';
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    var resultText = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;

    resultElement.innerText = resultText;

    var countdown = 15;

    // Display countdown in result
    var countdownInterval = setInterval(function () {
        resultElement.innerText = `${resultText}\nAuto-erasing in ${countdown} seconds.`;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            resultElement.innerText = ''; // Clear the result after countdown
        }
    }, 1000);

    // Auto-erase input details after 15 seconds
    setTimeout(function () {
        heightInputElement.value = '';
        weightInputElement.value = '';
    }, 16000);
}

document.getElementById('toggleButton').addEventListener('click', function () {
    var myElement = document.getElementById('myElement');
    if (myElement.style.display === 'none') {
        myElement.style.display = 'block';
    } else {
        myElement.style.display = 'none';
    }
});
/*----------------------------------------------------------------------------------------------------------------*/
                                                /* END */
/*----------------------------------------------------------------------------------------------------------------*/









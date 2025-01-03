// Adding event listener for scrolling
// This will change the background of the navbar by adding a class which is given in css section.
window.addEventListener('scroll', function() {
        const navbar = document.getElementById('header');
        if (window.scrollY > 50) {  
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
});

// To change image and reverse the image-text part by clicking buttons
// This function checks for three different parameters for completing the desired changes. This function is set to work with 'onclick' option in html, firstly it changes the image given in html. After that, it organizes the buttons active state and reverses the row section by looking at true or false information.
function changeImage(image, element, reverse) {
        document.getElementById('class-image').src = image;
        const content = document.getElementById('class-section');
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        element.classList.add('active');
        
        if (reverse) {
            content.classList.add('reverse');
        } else {
            content.classList.remove('reverse');
        }
};

// Change Text
// When the buttons are clicked, these functions will also work to change the certain text.
// The texts are chosen by the given id in html.
const textH = document.querySelector("#textH");
const textH2 = document.querySelector("textH2");
function changeText1() {
    textH.textContent = "Why are your Yoga?"
    textH2.textContent = "When comes Yoga Your Time"
} 
function changeText2() {
    textH.textContent = "Why are your Group?"
    textH2.textContent = "When comes Group Your Time"
}
function changeText3() {
    textH.textContent = "Why are your Solo?"
    textH2.textContent = "When comes Yoga Your Time"
}
function changeText4() {
    textH.textContent = "Why are your stretching?"
    textH2.textContent = "When comes Group Your Time"
}

// For the calculation of BMI and moving the triangle according the result of BMI.
// This function firstly gets the input values and actively checks for if both of them are typed. After doing the calculation, the result is shown at top of the scale image. The result is checked under different conditions and then put into a position under scale image. This scale can be further upgraded by adding more conditions, I only added some of them to make it meaningful.
function calculateBMI() {
        const height = parseFloat(document.getElementById('height').value) / 100;
        const weight = parseFloat(document.getElementById('weight').value);
        if (!height || !weight) return;

        const bmi = (weight / (height * height)).toFixed(1);
        
        document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;

        const triangle = document.getElementById('triangle');
        let position = 0;

        if (bmi < 18.5) {
            position = 10;
        } else if (bmi >= 18.5 && bmi < 25) {
            position = 130;
        } else if (bmi >= 25 && bmi < 30) {
            position = 250;
        } else if (bmi >= 30 && bmi < 35) {
            position = 370;
        } else {
            position = 490;
        }

        if (position > 490) position = 490;
        triangle.style.left = `${position}px`;
}


// Event listeners for for both inputs to make function work.
document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);
 // Function to add animation to the text
 function animateText() {
    const text = document.getElementById('textToAnimate');
    text.style.animation = 'moveText 2s ease-in-out infinite';
}

// Call the animation function after the page loads
window.onload = animateText;
  AOS.init({
    duration: 2000,
});
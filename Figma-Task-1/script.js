// // Get all radio buttons and image elements
// const radioButtons = document.querySelectorAll('input[type="radio"]');
// const images = document.querySelectorAll('.cards-contaioner img');

// // Add a change event listener to each radio button
// radioButtons.forEach((radioButton) => {
//     radioButton.addEventListener('change', () => {
//         const target = radioButton.getAttribute('data-scroll-target');
//         const targetImage = images[target - 1]; // Subtract 1 because arrays are 0-based

//         if (targetImage) {
//             targetImage.scrollIntoView({
//                 behavior: 'smooth',
//                 inline: 'center',
//             });
//         }
//     });
// });

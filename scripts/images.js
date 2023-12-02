document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-wrapper > div");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the grid item is in view, update styles directly
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    });
  
    gridItems.forEach(item => {
      // Start observing each grid item
      observer.observe(item);
    });
  });
 
// var img;
// var workSection = document.getElementsByClassName("grid-wrapper");
// function loadAllImages() {
//     for (i = 0; i < 15; i++) {
//         loadImage(i);
//     }
// }

// function loadImage(i) {

//         img = new Image();
//         div = document.createElement('div');
//         img.src = '../assets/work/'+i+'.jpg';
//         img.onload = (function (index, image) {
//             return function () {
//                 // Get the height and width of the image
//                 var imgHeight = image.naturalHeight;
//                 var imgWidth = image.naturalWidth;
//                 // Add a class name based on the image dimensions
//                 var className = (imgWidth > imgHeight) ? 'big' : 'tall';
//                 div.classList.add(className);
//                 div.appendChild(image);
            
    
//                 // Optionally, you can do something when the image successfully loads.
//                 console.log('Image ' + index + ' loaded successfully with dimensions ' + imgWidth + 'x' + imgHeight);
//             };
//         })(i, img);
    
//         workSection.item(0).appendChild(div);
// }


// window.onload = function(){
//     loadAllImages();
// };



let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search');
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.querySelector("").addEventListener("click", () => {
    document.querySelector("#video").play();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btns');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const audio = document.querySelector('audio');
            if (audio) {
                audio.pause();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get all spans with the class 'close'
    const closeSpans = document.querySelectorAll('.close');
  
    // Add click event listener to each span
    closeSpans.forEach(span => {
      span.addEventListener('click', () => {
        // Find the closest parent div with the class 'vidcontainer'
        let vidContainer = span.closest('.vidcontainer');
        // If a 'vidcontainer' is found, pause its video
        if (vidContainer) {
          let video = vidContainer.querySelector('video');
          if (video) {
            video.pause();
          }
        }
      });
    });
  });
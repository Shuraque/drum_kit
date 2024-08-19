const instruments = document.querySelectorAll('.instrument');

for (let i = 0; i < instruments.length; i++) {
    instruments[i].addEventListener("click", function() {
     
      instruments[i].style.scale = 0.95;
    });
    instruments[i].addEventListener("mouseout", function() {
     
        instruments[i].style.scale = 1;
      });
      instruments[i].addEventListener("mouseover", function() {
     
        instruments[i].style.scale = 1.05;
      });
}

document.addEventListener('keydown', (event) => { 
    const keyPressed = event.key;
    if (event.key == 'Escape') {
        // do something
    }
});
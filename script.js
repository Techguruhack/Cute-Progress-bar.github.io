document.addEventListener('DOMContentLoaded', () => {
    const myProgressBar = document.querySelector('.my-progress-bar');
    const myProgressText = document.querySelector('.my-progress-text');
    const myProgressButton = document.querySelector('.my-progress-button');
  
    myProgressButton.addEventListener('click', () => {
      let myProgress = 0;
      const myInterval = setInterval(() => {
        if (myProgress >= 100) {
          clearInterval(myInterval);
        } else {
          myProgress++;
          myProgressBar.style.width = myProgress + '%';
          myProgressText.textContent = myProgress + '%';
        }
      }, 20);
    });
  });
  
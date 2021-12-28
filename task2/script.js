const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
  alert('To output the information through the console');
})

const alertinf = document.querySelector('#alertinf');

alertinf.addEventListener('click', () => {
    alert('The informational window. Click OK to close the window');
})

const promptinf = document.querySelector('#promptinf');

promptinf.addEventListener('click', () => {
  alert('Find the entered text on the Console Tab');
})
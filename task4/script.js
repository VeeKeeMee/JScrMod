const textLink = prompt('Change the link text');
const textLinkNew = document.querySelector('a');
textLinkNew.textContent = textLink;
console.log('Link text in a changed to', textContent);

document.querySelector('#textLink').addEventListener('click', (event) => {
    this.preventDefault();
    alert('Oops! There is nothing happening');
})
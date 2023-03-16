
const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


content.setAttribute('style','display:flex;justifyContent:center; color:white;font-size:40px;background:blue')
content.style.justifyContent='center';

container.appendChild(content);
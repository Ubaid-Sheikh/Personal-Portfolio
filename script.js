let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('short-nav');
}

navbar.onclick = () =>{
      menu.classList.remove('bx-x');
      navbar.classList.remove('short-nav');
}



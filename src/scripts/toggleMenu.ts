const toggleMenu = () => {
  document.querySelector('.hamburger')!.addEventListener('click', () => {
    document.querySelector('.nav-links')!.classList.toggle('expanded');
  });
}

export default toggleMenu
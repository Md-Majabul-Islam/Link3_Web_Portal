function toggleMenu(menuId) {
    const allMenus = document.querySelectorAll('.dropdown-items');
    allMenus.forEach(menu => {
      if (menu.id === menuId) {
        menu.classList.toggle('show');
      } else {
        menu.classList.remove('show');
      }
    });
  }
  
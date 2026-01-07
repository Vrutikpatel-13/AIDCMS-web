// Sidebar Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('main');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('-translate-x-full');
      mainContent.classList.toggle('lg:ml-64');
      mainContent.classList.toggle('ml-0');
    });
  }
  
  // Active menu item highlighting
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('nav a');
  
  menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('bg-primary/20');
      link.querySelector('.material-symbols-outlined').classList.add('text-primary');
      link.querySelector('p').classList.add('text-primary');
    }
  });
});

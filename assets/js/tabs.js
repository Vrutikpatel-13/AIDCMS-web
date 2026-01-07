// Tab Switching Functionality
class TabManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.tabButtons = this.container.querySelectorAll('[data-tab]');
    this.tabContents = this.container.querySelectorAll('[data-tab-content]');
    
    this.init();
  }
  
  init() {
    this.tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const targetTab = e.target.dataset.tab;
        this.switchTab(targetTab);
      });
    });
    
    // Show first tab by default
    if (this.tabButtons.length > 0) {
      this.switchTab(this.tabButtons[0].dataset.tab);
    }
  }
  
  switchTab(tabName) {
    // Hide all tab contents
    this.tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    
    // Remove active state from all buttons
    this.tabButtons.forEach(button => {
      button.classList.remove('bg-primary/20', 'text-primary');
      button.classList.add('text-white');
    });
    
    // Show selected tab content
    const targetContent = this.container.querySelector(`[data-tab-content="${tabName}"]`);
    if (targetContent) {
      targetContent.classList.remove('hidden');
    }
    
    // Add active state to clicked button
    const activeButton = this.container.querySelector(`[data-tab="${tabName}"]`);
    if (activeButton) {
      activeButton.classList.add('bg-primary/20', 'text-primary');
      activeButton.classList.remove('text-white');
    }
  }
}

// Initialize all tab containers
document.addEventListener('DOMContentLoaded', function() {
  const tabContainers = document.querySelectorAll('[data-tab-container]');
  tabContainers.forEach(container => {
    new TabManager(container.id);
  });
});

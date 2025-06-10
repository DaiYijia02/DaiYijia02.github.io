function createShootingStar() {
  const container = document.querySelector('.shooting-star');
  if (!container) return; // Guard against missing container
  
  const star = document.createElement('div');
  star.className = 'star';
  
  // Calculate the center content width (approximately 800px)
  const centerWidth = 800;
  const windowWidth = window.innerWidth;
  const sideWidth = (windowWidth - centerWidth) / 2;
  
  // Random starting position in left or right panel
  let startX;
  let isLeftPanel;
  if (Math.random() < 0.5) {
    // Left panel
    startX = Math.random() * sideWidth;
    isLeftPanel = true;
  } else {
    // Right panel
    startX = windowWidth - sideWidth + Math.random() * sideWidth;
    isLeftPanel = false;
  }
  
  const startY = Math.random() * (window.innerHeight / 3); // Start from top third of screen
  
  star.style.left = startX + 'px';
  star.style.top = startY + 'px';
  
  // Add panel-specific animation
  if (isLeftPanel) {
    star.style.animation = 'shootLeft 2s linear forwards';
  } else {
    star.style.animation = 'shootRight 3s linear forwards';
  }
  
  // Random delay
  star.style.animationDelay = Math.random() * 2 + 's';
  
  container.appendChild(star);
  
  // Remove the star after animation completes
  setTimeout(() => {
    if (star.parentNode === container) {
      star.remove();
    }
  }, isLeftPanel ? 2000 : 3000);
}

// Create shooting stars periodically
function initShootingStars() {
  // Remove existing container if any
  const existingContainer = document.querySelector('.shooting-star');
  if (existingContainer) {
    existingContainer.remove();
  }
  
  const container = document.createElement('div');
  container.className = 'shooting-star';
  document.body.appendChild(container);
  
  // Create initial stars
  for (let i = 0; i < 5; i++) {
    createShootingStar();
  }
  
  // Create new stars periodically
  setInterval(createShootingStar, 2000); // Create a new star every 2 seconds
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initShootingStars); 
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'star';
  
  // Start from the top third of the screen
  const startY = Math.random() * (window.innerHeight / 3);
  star.style.top = startY + 'px';
  star.style.left = '0';
  
  // Random delay between 0-2 seconds
  star.style.animationDelay = Math.random() * 2 + 's';
  
  // Add to container
  const container = document.querySelector('.shooting-star');
  container.appendChild(star);
  
  // Remove star after animation completes
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

function initShootingStars() {
  // Create container if it doesn't exist
  let container = document.querySelector('.shooting-star');
  if (!container) {
    container = document.createElement('div');
    container.className = 'shooting-star';
    document.body.appendChild(container);
  }
  
  // Create initial stars
  for (let i = 0; i < 5; i++) {
    createShootingStar();
  }
  
  // Create new star every 2 seconds
  setInterval(createShootingStar, 2000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initShootingStars); 
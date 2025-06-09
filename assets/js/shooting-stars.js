function createShootingStar() {
  const container = document.querySelector('.shooting-star');
  const star = document.createElement('div');
  star.className = 'star';
  
  // Random starting position
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight / 2);
  
  star.style.left = startX + 'px';
  star.style.top = startY + 'px';
  
  // Random delay
  star.style.animationDelay = Math.random() * 3 + 's';
  
  container.appendChild(star);
  
  // Remove the star after animation completes
  setTimeout(() => {
    star.remove();
  }, 3000);
}

// Create shooting stars periodically
function initShootingStars() {
  const container = document.createElement('div');
  container.className = 'shooting-star';
  document.body.appendChild(container);
  
  // Create initial stars
  for (let i = 0; i < 5; i++) {
    createShootingStar();
  }
  
  // Create new stars periodically
  setInterval(createShootingStar, 2000);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initShootingStars); 
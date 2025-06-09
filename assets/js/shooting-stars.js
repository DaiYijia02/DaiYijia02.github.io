function createShootingStar() {
  const container = document.querySelector('.shooting-star');
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
    star.style.animation = 'shootLeft 2s linear infinite';
  } else {
    star.style.animation = 'shootRight 3s linear infinite';
  }
  
  // Random delay
  star.style.animationDelay = Math.random() * 2 + 's';
  
  container.appendChild(star);
  
  // Remove the star after animation completes
  setTimeout(() => {
    star.remove();
  }, isLeftPanel ? 2000 : 3000);
}

// Create shooting stars periodically
function initShootingStars() {
  const container = document.createElement('div');
  container.className = 'shooting-star';
  document.body.appendChild(container);
  
  // Add panel-specific animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shootLeft {
      0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 1;
      }
      20% {
        opacity: 1;
      }
      30% {
        opacity: 0.95;
      }
      40% {
        opacity: 0.9;
      }
      50% {
        opacity: 0.8;
      }
      60% {
        opacity: 0.7;
      }
      70% {
        opacity: 0.5;
      }
      80% {
        opacity: 0.3;
      }
      90% {
        opacity: 0.15;
      }
      95% {
        opacity: 0.05;
      }
      100% {
        transform: translateX(200px) translateY(267px) rotate(45deg);
        opacity: 0;
      }
    }
    @keyframes shootRight {
      0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 1;
      }
      20% {
        opacity: 1;
      }
      30% {
        opacity: 0.95;
      }
      40% {
        opacity: 0.9;
      }
      50% {
        opacity: 0.8;
      }
      60% {
        opacity: 0.7;
      }
      70% {
        opacity: 0.5;
      }
      80% {
        opacity: 0.3;
      }
      90% {
        opacity: 0.15;
      }
      95% {
        opacity: 0.05;
      }
      100% {
        transform: translateX(300px) translateY(400px) rotate(45deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Create initial stars
  for (let i = 0; i < 10; i++) {
    createShootingStar();
  }
  
  // Create new stars periodically
  setInterval(createShootingStar, 1000); // Create a new star every second
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initShootingStars); 
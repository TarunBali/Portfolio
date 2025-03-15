window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');

  // Hide loading animation and show content after 2.5 seconds
  setTimeout(() => {
    loading.style.display = 'none';
    content.classList.remove('hidden');
  }, 2500);

  // Initialize projects and other functionality
  initializeProjects();

  // Initialize the music player
  initializeMusicPlayer();

  // Initialize the contact form
  initializeContactForm();

  // Initialize the water animation
  initializeWaterAnimation();
});

// Function to initialize projects and other functionality
function initializeProjects() {
  // ... (keep existing projects code unchanged) ...
}

// Function to initialize the music player
function initializeMusicPlayer() {
  // ... (keep existing music player code unchanged) ...
}

// Function to initialize the contact form
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://formspree.io/f/mqkrqjzv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const responseData = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        alert(`Error: ${responseData.error || 'Failed to send message'}`);
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    }
  });
}

// Function to initialize the water animation
function initializeWaterAnimation() {
  const water = document.getElementById('water');
  if (water) {
    water.classList.add('filter-active', 'flow-active');
  }
}

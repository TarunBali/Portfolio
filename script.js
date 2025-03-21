window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');

  // Hide loading animation and show content after 2.5 seconds
  setTimeout(() => {
    loading.style.display = 'none';
    content.classList.remove('hidden');
  }, 2500);

  // Initialize the whale animation
  initializeWhaleAnimation();

  // Initialize projects and other functionality
  initializeProjects();

  // Initialize the music player
  initializeMusicPlayer();

  // Initialize the contact form
  initializeContactForm();

  // Initialize the water animation
  initializeWaterAnimation();
});

// Function to initialize the whale animation
function initializeWhaleAnimation() {
  const whaleAnimationContainer = document.getElementById('whale-animation');
  if (!whaleAnimationContainer) {
    console.error('Whale animation container not found!');
    return;
  }

  // Whale animation code
  const whale = (function () {
    const element = whaleAnimationContainer;
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const fps = 30;
    const easy = 6;
    const maxspeed = 150;
    const delay = 15;
    let mouse = { x: width / 2, y: height / 2 };
    let defs, parts;

    // Replace this with your actual defs content
    defs = `
      <defs>
        <linearGradient gradientTransform="matrix(0 -2038 1116.5 0 -157 2622)" gradientUnits="userSpaceOnUse" id=":s6y" x1="-1" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="rgb(0,0,0)" stop-opacity="1.000"/>
          <stop offset="0.8470588235294118" stop-color="rgb(31,33,32)" stop-opacity="1.000"/>
          <stop offset="1" stop-color="rgb(88,92,90)" stop-opacity="1.000"/>
        </linearGradient>
        <!-- Add more gradient definitions here -->
      </defs>
    `;

    // Replace this with your actual parts content
    parts = [
      {
        x: mouse.x,
        y: mouse.y,
        z: 43,
        data: '<path d="M -3910 5327 Q -4485 5547 -4894 5547 Q -4901 5547 -4909 5547 L -4909 5547 Q -4756 5589 -4564 5590 Q -4293 5590 -4100 5506 Q -3927 5431 -3910 5327 Z M 3489 5312 Q 3494 5425 3681 5506 Q 3873 5590 4142 5590 Q 4394 5589 4579 5517 L 4579 5517 Q 4528 5535 4446 5535 Q 4159 5535 3489 5312 Z" fill="url(#:s98)"/>',
      },
      // Add more parts here
    ];

    function init() {
      document.addEventListener('mousemove', mousemove);
      setInterval(loop, 1000 / fps);
    }

    function mousemove(e) {
      mouse = { x: e.clientX, y: e.clientY };
    }

    function loop() {
      for (let i = 0; i < parts.length; i++) {
        const params = { mouse: mouse, part: parts[i] };
        setTimeout(transform, parts[i].z * delay, params);
      }
      if (element) {
        element.innerHTML = svg();
      }
    }

    function svg() {
      let svg = `<svg color-interpolation-filters="sRGB" style="fill-rule: evenodd; pointer-events: none; -moz-user-select: none; width: 100%; height: 100%;">`;
      for (let i = 0; i < parts.length; i++) {
        svg += `<g transform="matrix(0.05 0 0 0.05 ${parts[i].x} ${parts[i].y})">`;
        svg += parts[i].data;
        svg += '</g>';
      }
      svg += defs;
      svg += '</svg>';
      return svg;
    }

    function transform(params) {
      params.part.x = definemaxspeed(params.mouse.x - params.part.x) / easy + params.part.x;
      params.part.y = definemaxspeed(params.mouse.y - params.part.y) / easy + params.part.y;
    }

    function definemaxspeed(speed) {
      if (speed > 0 && speed > maxspeed) return maxspeed;
      if (speed < 0 && speed < -maxspeed) return -maxspeed;
      return speed;
    }

    return { init: init };
  })();

  // Initialize the whale animation
  whale.init();

  // Ensure the whale animation only works in the Home section
  function toggleWhaleAnimation() {
    const homeSection = document.getElementById('home');
    if (!homeSection) {
      console.error('Home section not found!');
      return;
    }

    const rect = homeSection.getBoundingClientRect();
    const isHomeInView = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isHomeInView) {
      whaleAnimationContainer.style.display = 'block';
    } else {
      whaleAnimationContainer.style.display = 'none';
    }
  }

  // Check on scroll
  window.addEventListener('scroll', toggleWhaleAnimation);

  // Initial check
  toggleWhaleAnimation();
}

// Function to initialize projects and other functionality
function initializeProjects() {
  const projects = [
    { 
      title: "LUCIFER", 
      description: "Lucifer is a sleek, voice-activated personal assistant designed to simplify your daily tasks with intuitive commands and seamless integration into your workflow.", 
      image: "Assets/project1.png", 
      url: "https://github.com/TarunBali/Lucifer" 
    },
    { 
      title: "Wrath from the Shadows", 
      description: "A shattered soul seeks retribution in the darkest corners, where the echoes of betrayal and revenge collide—but does he emerge victorious, or consumed by the very darkness he wields?", 
      image: "Assets/project2.jpg", 
      url: "https://tarunbali.github.io/Novelette/" 
    },
    { 
      title: "Celestia", 
      description: "Digital Poster for a Sci-fi themed Cafe", 
      image: "Assets/project3.jpg", 
      url: "https://drive.google.com/file/d/1uBAoPcQGNrkGkOeu7ZC0KpzmkdHillN_/view?usp=sharing" 
    },
    { 
      title: "@DUZHDC", 
      description: "A reel I made for the instagram page @DUZHDC", 
      image: "Assets/project4.jpg", 
      url: "https://www.instagram.com/reel/DEP6CYEysYT/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" 
    },
    { 
      title: "Gesture Cursor Control", 
      description: "A Python program that lets you control your cursor from far using a webcam", 
      image: "Assets/project5.jpg", 
      url: "https://example.com/gesture-cursor" 
    },
    { 
      title: "Status of Acid Rain in India", 
      description: "A Literature review delving into the Causes, Effects and Status of Acid Rain in India", 
      image: "Assets/project6.jpg", 
      url: "https://drive.google.com/file/d/1luy1B51BM0NK8R4Mems0zMSqgAV1MedP/view?usp=sharing" 
    },
  ];

  const projectFrame = document.querySelector('.project-frame');
  if (!projectFrame) {
    console.error('Project frame not found!');
    return;
  }

  let currentIndex = 0;
  let isTransitioning = false;
  let hoverTimeout = null;
  let autoRotateInterval;
  let autoRotateTimeoutId;

  // Create project cards
  const projectCards = projects.map((project, i) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.setAttribute('data-index', i);
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    // Add click event to redirect to the project URL
    card.addEventListener('click', () => {
      window.open(project.url, '_blank');
    });
    projectFrame.appendChild(card);
    return card;
  });

  // Update project cards based on the current index
  const updateProjectCards = (index = currentIndex) => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = index;
    projectCards.forEach((card, i) => {
      card.classList.remove('focused', 'left', 'right', 'hidden');
      if (i === currentIndex) {
        card.classList.add('focused');
      } else if (i === (currentIndex - 1 + projects.length) % projects.length) {
        card.classList.add('left');
      } else if (i === (currentIndex + 1) % projects.length) {
        card.classList.add('right');
      } else {
        card.classList.add('hidden');
      }
    });

    setTimeout(() => { isTransitioning = false; }, 200);
  };

  // Initialize the first project card
  updateProjectCards();

  // Start auto-rotate functionality
  const startAutoRotate = () => {
    autoRotateInterval = setInterval(() => {
      if (!isTransitioning) {
        updateProjectCards((currentIndex + 1) % projects.length);
      }
    }, 3500);
  };
  startAutoRotate();

  // Pause auto-rotate functionality
  const pauseAutoRotation = () => {
    clearInterval(autoRotateInterval);
    if (autoRotateTimeoutId) clearTimeout(autoRotateTimeoutId);
    autoRotateTimeoutId = setTimeout(startAutoRotate, 5000);
  };

  // Left arrow click event
  document.querySelector('.left-arrow')?.addEventListener('click', () => {
    updateProjectCards((currentIndex - 1 + projects.length) % projects.length);
    pauseAutoRotation();
  });

  // Right arrow click event
  document.querySelector('.right-arrow')?.addEventListener('click', () => {
    updateProjectCards((currentIndex + 1) % projects.length);
    pauseAutoRotation();
  });

  // Hover over project cards
  projectFrame.addEventListener('mouseover', (e) => {
    const projectCard = e.target.closest('.project-card');
    if (projectCard && !isTransitioning) {
      const index = parseInt(projectCard.getAttribute('data-index'));
      if (index !== currentIndex) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          updateProjectCards(index);
          pauseAutoRotation();
        }, 100);
      }
    }
  });

  // Mouse out of project cards
  projectFrame.addEventListener('mouseout', () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
  });

  // Create dropdown for projects navigation
  const projectsNavItem = document.querySelector('nav ul li a[href="#projects"]')?.parentElement;
  if (projectsNavItem) {
    const dropdown = document.createElement('ul');
    dropdown.className = 'dropdown';

    projects.forEach((project, index) => {
      const li = document.createElement('li');
      li.textContent = project.title;
      li.addEventListener('click', () => {
        updateProjectCards(index);
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      });

      const preview = document.createElement('div');
      preview.className = 'project-preview';
      preview.innerHTML = `
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <h3>${project.title}</h3>
      `;
      li.appendChild(preview);
      dropdown.appendChild(li);
    });

    projectsNavItem.appendChild(dropdown);

    // Projects navigation click event
    projectsNavItem.querySelector('a')?.addEventListener('click', (e) => {
      e.preventDefault();
      updateProjectCards(0);
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Other navigations
  const AboutNavItem = document.querySelector('nav ul li a[href="#about"]')?.parentElement;
  const ContactNavItem = document.querySelector('nav ul li a[href="#contact"]')?.parentElement;

  if (AboutNavItem) {
    AboutNavItem.querySelector('a')?.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (ContactNavItem) {
    ContactNavItem.querySelector('a')?.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Set minimum height for projects section
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    projectsSection.style.minHeight = "100vh";
  }
}

// Function to initialize the music player
function initializeMusicPlayer() {
  const musicPlayer = document.getElementById('music-player');
  const playPauseButton = document.getElementById('play-pause');
  const prevSongButton = document.getElementById('prev-song');
  const nextSongButton = document.getElementById('next-song');
  const musicIcon = document.getElementById('music-icon');
  const backgroundMusic = document.getElementById('background-music');

  const songs = [
    'Assets/song-1.mp3',
    'Assets/song-2.mp3',
    'Assets/song-3.mp3',
  ];
  let currentSongIndex = 0;
  let isPlaying = false;

  // Load the first song
  backgroundMusic.src = songs[currentSongIndex];

  // Play/Pause functionality
  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      backgroundMusic.pause();
      musicIcon.classList.remove('fa-pause');
      musicIcon.classList.add('fa-play');
    } else {
      backgroundMusic.play();
      musicIcon.classList.remove('fa-play');
      musicIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
  });

  // Next song functionality
  nextSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    if (isPlaying) backgroundMusic.play();
  });

  // Previous song functionality
  prevSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    if (isPlaying) backgroundMusic.play();
  });

  // Automatically play the next song when the current one ends
  backgroundMusic.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    backgroundMusic.play();
  });

  // Handle scroll events
  window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    if (homeSectionBottom < 0) {
      // User has scrolled down
      musicPlayer.classList.add('collapsed');
    } else {
      // User is in the home section
      musicPlayer.classList.remove('collapsed');
    }
  });

  // Expand/collapse music player on hover/click
  musicPlayer.addEventListener('mouseenter', () => {
    musicPlayer.classList.add('expanded');
  });

  musicPlayer.addEventListener('mouseleave', () => {
    if (!isPlaying) {
      musicPlayer.classList.remove('expanded');
    }
  });

  // Collapse music player when clicking outside
  document.addEventListener('click', (event) => {
    if (!musicPlayer.contains(event.target)) {
      musicPlayer.classList.remove('expanded');
    }
  });
}

// Function to initialize the contact form
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) {
    console.error('Contact form not found!');
    return;
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const response = await fetch('https://formspree.io/f/mqkrqjzv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      alert('Message sent successfully!');
      contactForm.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  });
}

// Function to initialize the water animation
function initializeWaterAnimation() {
  const water = document.getElementById('water');
  if (!water) {
    console.error('Water animation container not found!');
    return;
  }

  // Ensure water animation is always active
  water.classList.add('filter-active', 'flow-active');
}

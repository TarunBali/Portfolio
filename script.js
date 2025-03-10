window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');

  // Hide loading animation and show content after 2.5 seconds
  setTimeout(() => {
    loading.style.display = 'none';
    content.classList.remove('hidden');
  }, 2500);

  // Initialize functionalities
  initializeWhaleAnimation();
  initializeProjects();
  initializeMusicPlayer();
  initializeContactForm();
  initializeWaterAnimation();
});

// Whale Animation
function initializeWhaleAnimation() {
  const whaleAnimationContainer = document.getElementById('whale-animation');
  if (!whaleAnimationContainer) return;

  const whale = (function () {
    const element = whaleAnimationContainer;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const fps = 30;
    const easy = 6;
    const maxspeed = 150;
    const delay = 15;
    let mouse = { x: width / 2, y: height / 2 };
    let defs, parts;

    defs = `
      <defs>
        <linearGradient gradientTransform="matrix(0 -2038 1116.5 0 -157 2622)" gradientUnits="userSpaceOnUse" id=":s6y" x1="-1" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="rgb(0,0,0)" stop-opacity="1.000"/>
          <stop offset="0.8470588235294118" stop-color="rgb(31,33,32)" stop-opacity="1.000"/>
          <stop offset="1" stop-color="rgb(88,92,90)" stop-opacity="1.000"/>
        </linearGradient>
      </defs>
    `;

    parts = [
      {
        x: mouse.x,
        y: mouse.y,
        z: 43,
        data: '<path d="M -3910 5327 Q -4485 5547 -4894 5547 Q -4901 5547 -4909 5547 L -4909 5547 Q -4756 5589 -4564 5590 Q -4293 5590 -4100 5506 Q -3927 5431 -3910 5327 Z M 3489 5312 Q 3494 5425 3681 5506 Q 3873 5590 4142 5590 Q 4394 5589 4579 5517 L 4579 5517 Q 4528 5535 4446 5535 Q 4159 5535 3489 5312 Z" fill="url(#:s98)"/>',
      },
    ];

    function init() {
      document.addEventListener('mousemove', mousemove);
      setInterval(loop, 1000 / fps);
    }

    function mousemove(e) {
      mouse = { x: e.clientX, y: e.clientY };
    }

    function loop() {
      parts.forEach((part) => {
        setTimeout(transform, part.z * delay, { mouse, part });
      });
      if (element) element.innerHTML = svg();
    }

    function svg() {
      return `<svg color-interpolation-filters="sRGB" style="fill-rule: evenodd; pointer-events: none; -moz-user-select: none; width: 100%; height: 100%;">
        ${parts.map((part) => `<g transform="matrix(0.05 0 0 0.05 ${part.x} ${part.y})">${part.data}</g>`).join('')}
        ${defs}
      </svg>`;
    }

    function transform({ mouse, part }) {
      part.x = definemaxspeed(mouse.x - part.x) / easy + part.x;
      part.y = definemaxspeed(mouse.y - part.y) / easy + part.y;
    }

    function definemaxspeed(speed) {
      return Math.min(Math.max(speed, -maxspeed), maxspeed);
    }

    return { init };
  })();

  whale.init();

  // Toggle whale animation based on scroll
  function toggleWhaleAnimation() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const rect = homeSection.getBoundingClientRect();
    const isHomeInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    whaleAnimationContainer.style.display = isHomeInView ? 'block' : 'none';
  }

  window.addEventListener('scroll', toggleWhaleAnimation);
  toggleWhaleAnimation();
}

// Projects Initialization
function initializeProjects() {
  const projects = [
    { title: "LUCIFER", description: "Lucifer is a sleek, voice-activated personal assistant...", image: "Assets/project1.png", url: "https://github.com/TarunBali/Lucifer" },
    { title: "Wrath from the Shadows", description: "A shattered soul seeks retribution...", image: "Assets/project2.jpg", url: "https://tarunbali.github.io/Novelette/" },
    { title: "Celestia", description: "Digital Poster for a Sci-fi themed Cafe", image: "Assets/project3.jpg", url: "https://drive.google.com/file/d/1uBAoPcQGNrkGkOeu7ZC0KpzmkdHillN_/view?usp=sharing" },
    { title: "@DUZHDC", description: "A reel I made for the instagram page @DUZHDC", image: "Assets/project4.jpg", url: "https://www.instagram.com/reel/DEP6CYEysYT/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" },
    { title: "Gesture Cursor Control", description: "A Python program that lets you control your cursor...", image: "Assets/project5.jpg", url: "https://example.com/gesture-cursor" },
    { title: "Status of Acid Rain in India", description: "A Literature review delving into the Causes...", image: "Assets/project6.jpg", url: "https://drive.google.com/file/d/1luy1B51BM0NK8R4Mems0zMSqgAV1MedP/view?usp=sharing" },
  ];

  const projectFrame = document.querySelector('.project-frame');
  if (!projectFrame) return;

  let currentIndex = 0;
  let isTransitioning = false;
  let hoverTimeout = null;
  let autoRotateInterval;

  const projectCards = projects.map((project, i) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.setAttribute('data-index', i);
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    card.addEventListener('click', () => window.open(project.url, '_blank'));
    projectFrame.appendChild(card);
    return card;
  });

  const updateProjectCards = (index = currentIndex) => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = index;
    projectCards.forEach((card, i) => {
      card.classList.remove('focused', 'left', 'right', 'hidden');
      if (i === currentIndex) card.classList.add('focused');
      else if (i === (currentIndex - 1 + projects.length) % projects.length) card.classList.add('left');
      else if (i === (currentIndex + 1) % projects.length) card.classList.add('right');
      else card.classList.add('hidden');
    });

    setTimeout(() => { isTransitioning = false; }, 200);
  };

  updateProjectCards();

  const startAutoRotate = () => {
    autoRotateInterval = setInterval(() => {
      if (!isTransitioning) updateProjectCards((currentIndex + 1) % projects.length);
    }, 3500);
  };
  startAutoRotate();

  const pauseAutoRotation = () => {
    clearInterval(autoRotateInterval);
    setTimeout(startAutoRotate, 5000);
  };

  document.querySelector('.left-arrow')?.addEventListener('click', () => {
    updateProjectCards((currentIndex - 1 + projects.length) % projects.length);
    pauseAutoRotation();
  });

  document.querySelector('.right-arrow')?.addEventListener('click', () => {
    updateProjectCards((currentIndex + 1) % projects.length);
    pauseAutoRotation();
  });

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

  projectFrame.addEventListener('mouseout', () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
  });
}

// Music Player Initialization
function initializeMusicPlayer() {
  const musicPlayer = document.getElementById('music-player');
  const playPauseButton = document.getElementById('play-pause');
  const prevSongButton = document.getElementById('prev-song');
  const nextSongButton = document.getElementById('next-song');
  const backgroundMusic = document.getElementById('background-music');

  const songs = ['Assets/song-1.mp3', 'Assets/song-2.mp3', 'Assets/song-3.mp3'];
  let currentSongIndex = 0;
  let isPlaying = false;

  backgroundMusic.src = songs[currentSongIndex];

  playPauseButton.addEventListener('click', () => {
    if (isPlaying) backgroundMusic.pause();
    else backgroundMusic.play();
    isPlaying = !isPlaying;
    playPauseButton.classList.toggle('fa-pause', isPlaying);
    playPauseButton.classList.toggle('fa-play', !isPlaying);
  });

  nextSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    if (isPlaying) backgroundMusic.play();
  });

  prevSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    if (isPlaying) backgroundMusic.play();
  });

  backgroundMusic.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    backgroundMusic.src = songs[currentSongIndex];
    backgroundMusic.play();
  });

  window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
    musicPlayer.classList.toggle('collapsed', homeSectionBottom < 0);
  });

  musicPlayer.addEventListener('mouseenter', () => musicPlayer.classList.add('expanded'));
  musicPlayer.addEventListener('mouseleave', () => {
    if (!isPlaying) musicPlayer.classList.remove('expanded');
  });
}

// Contact Form Initialization
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const response = await fetch('https://formspree.io/f/mqkrqjzv', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });
    alert(response.ok ? 'Message sent successfully!' : 'Failed to send message. Please try again.');
    if (response.ok) contactForm.reset();
  });
}

// Water Animation Initialization
function initializeWaterAnimation() {
  const water = document.getElementById('water');
  if (!water) return;
  water.classList.add('filter-active', 'flow-active');
}



const MOCK_POSTS = [
    {
        id: '1',
        mediaUrl: 'https://drive.google.com/file/d/17aWFyTF8KlaHXj4AgOMWTPUKBKiR3rqG/view?usp=drive_link',
        thumbnailUrl: 'https://drive.google.com/file/d/17aWFyTF8KlaHXj4AgOMWTPUKBKiR3rqG/view?usp=drive_link',
        caption: 'Bounding with energy: Pink-backed pelicans showcase their playful nature as they engage in friendly interactions at Kokkarebellur. #wildlife #nature #conservation',
        permalink: 'https://www.instagram.com/p/C3baU-jPDw2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        timestamp: '2026-01-24T10:30:00Z',
        category: 'mammals',
        hashtags: ['wildlife',  'nature', 'conservation'],
        likes: 1247,
    },
    {
        id: '2',
        mediaUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=70',
        caption: 'The stunning Kingfisher, a flash of blue against the morning light. Captured after hours of patient waiting. #birds #kingfisher #birdphotography',
        permalink: 'https://instagram.com/p/example2',
        timestamp: '2026-01-23T08:15:00Z',
        category: 'birds',
        hashtags: ['birds', 'kingfisher', 'birdphotography'],
        likes: 2341,
    },
    {
        id: '3',
        mediaUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=70',
        caption: 'Portrait of an Asian elephant at golden hour. These gentle giants are truly magnificent. #wildlife #elephant #conservation #nature',
        permalink: 'https://instagram.com/p/example3',
        timestamp: '2026-01-22T17:45:00Z',
        category: 'mammals',
        hashtags: ['wildlife', 'elephant', 'conservation', 'nature'],
        likes: 3892,
    },
    {
        id: '4',
        mediaUrl: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&q=70',
        caption: 'Macro shot of a vibrant dragonfly. The intricate details of nature never cease to amaze. #macro #dragonfly #insect #nature',
        permalink: 'https://instagram.com/p/example4',
        timestamp: '2026-01-21T14:20:00Z',
        category: 'macro',
        hashtags: ['macro', 'dragonfly', 'insect', 'nature'],
        likes: 1876,
    },
    {
        id: '5',
        mediaUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=70',
        caption: 'Mist rolling through the Western Ghats at sunrise. A magical morning in the wilderness. #landscape #nature #sunrise #forest',
        permalink: 'https://instagram.com/p/example5',
        timestamp: '2026-01-20T06:30:00Z',
        category: 'landscapes',
        hashtags: ['landscape', 'nature', 'sunrise', 'forest'],
        likes: 2654,
    },
    {
        id: '6',
        mediaUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&q=70',
        caption: 'The elusive leopard, master of camouflage. Spotted this beauty during an early morning safari. #wildlife #leopard #nature',
        permalink: 'https://instagram.com/p/example6',
        timestamp: '2026-01-19T07:15:00Z',
        category: 'mammals',
        hashtags: ['wildlife', 'leopard', 'nature'],
        likes: 4521,
    },
    {
        id: '7',
        mediaUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=70',
        caption: 'Barn owl in silent flight, a ghost of the night. These incredible hunters are truly fascinating. #birds #owl #birdphotography',
        permalink: 'https://instagram.com/p/example7',
        timestamp: '2026-01-18T22:00:00Z',
        category: 'birds',
        hashtags: ['birds', 'owl', 'birdphotography', 'wildlife'],
        likes: 3102,
    },
    {
        id: '8',
        mediaUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=70',
        caption: 'Sea turtle gliding through crystal clear waters. Every creature plays a vital role in our ecosystem. #conservation #wildlife #turtle',
        permalink: 'https://instagram.com/p/example8',
        timestamp: '2026-01-17T11:30:00Z',
        category: 'conservation',
        hashtags: ['conservation', 'wildlife', 'turtle'],
        likes: 2789,
    },
    {
        id: '9',
        mediaUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70',
        caption: 'Colorful butterfly resting on a flower. The patterns of nature are the greatest art. #macro #butterfly #nature',
        permalink: 'https://instagram.com/p/example9',
        timestamp: '2026-01-16T15:45:00Z',
        category: 'macro',
        hashtags: ['macro', 'butterfly', 'nature'],
        likes: 1934,
    },
    {
        id: '10',
        mediaUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=70',
        caption: 'Peacock displaying its magnificent feathers. A stunning display of natural beauty. #birds #peacock #nature',
        permalink: 'https://instagram.com/p/example10',
        timestamp: '2026-01-15T09:20:00Z',
        category: 'birds',
        hashtags: ['birds', 'peacock', 'nature', 'birdphotography'],
        likes: 5234,
    },
    {
        id: '11',
        mediaUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=70',
        caption: 'Spotted deer at dawn, alert and graceful. The forest comes alive in the early hours. #wildlife #deer #nature',
        permalink: 'https://instagram.com/p/example11',
        timestamp: '2026-01-14T06:10:00Z',
        category: 'mammals',
        hashtags: ['wildlife', 'deer', 'nature'],
        likes: 1456,
    },
    {
        id: '12',
        mediaUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=70',
        caption: "Mountain landscape bathed in golden light. Nature's cathedral at its finest. #landscape #mountains #nature #sunrise",
        permalink: 'https://instagram.com/p/example12',
        timestamp: '2026-01-13T16:00:00Z',
        category: 'landscapes',
        hashtags: ['landscape', 'mountains', 'nature', 'sunrise'],
        likes: 3678,
    },
];

// ========================================
// STATE
// ========================================

let currentCategory = 'all';
let currentPage = 1;
let postsPerPage = 6;
let displayedPosts = [];
let currentModalIndex = -1;

// ========================================
// DOM ELEMENTS
// ========================================

const feedGrid = document.getElementById('feedGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadingIndicator = document.getElementById('loadingIndicator');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalCaption = document.getElementById('modalCaption');
const modalHashtags = document.getElementById('modalHashtags');
const modalLikes = document.getElementById('modalLikes');
const modalDate = document.getElementById('modalDate');
const modalInstagramLink = document.getElementById('modalInstagramLink');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)}w ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatLikes(likes) {
    if (likes >= 1000) {
        return `${(likes / 1000).toFixed(1)}k`;
    }
    return likes.toString();
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ========================================
// FETCH & FILTER POSTS
// ========================================

async function fetchPosts(page = 1, category = 'all') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filtered = MOCK_POSTS;

    if (category !== 'all') {
        filtered = MOCK_POSTS.filter(post => post.category === category);
    }

    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return {
        posts: filtered.slice(startIndex, endIndex),
        hasMore: endIndex < filtered.length,
    };
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function createPostCard(post, index) {
    const card = document.createElement('article');
    card.className = 'post-card fade-in';
    card.setAttribute('data-index', index);

    card.innerHTML = `
    <div class="post-card-image-wrapper">
      <img 
        src="${post.thumbnailUrl}" 
        alt="${post.caption.slice(0, 100)}" 
        class="post-card-image"
        loading="lazy"
      >
      <div class="post-card-overlay">
        <span class="post-card-category">${capitalizeFirst(post.category)}</span>
        <p class="post-card-caption">${post.caption}</p>
        <div class="post-card-meta">
          <span class="post-card-date">${formatRelativeTime(post.timestamp)}</span>
          <span class="post-card-likes">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${formatLikes(post.likes)}
          </span>
        </div>
      </div>
    </div>
  `;

    card.addEventListener('click', () => openModal(index));

    return card;
}

async function loadPosts(reset = false) {
    if (reset) {
        currentPage = 1;
        feedGrid.innerHTML = '';
        displayedPosts = [];
    }

    loadingIndicator.style.display = 'flex';
    loadMoreBtn.style.display = 'none';

    const { posts, hasMore } = await fetchPosts(currentPage, currentCategory);

    posts.forEach((post, i) => {
        displayedPosts.push(post);
        const card = createPostCard(post, displayedPosts.length - 1);
        feedGrid.appendChild(card);
    });

    loadingIndicator.style.display = 'none';

    if (hasMore) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }

    currentPage++;
}

// ========================================
// FILTER HANDLING
// ========================================

function setActiveFilter(category) {
    filterBtns.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        if (category !== currentCategory) {
            currentCategory = category;
            setActiveFilter(category);
            loadPosts(true);
        }
    });
});

// ========================================
// MODAL HANDLING
// ========================================

function openModal(index) {
    const post = displayedPosts[index];
    if (!post) return;

    currentModalIndex = index;

    modalImage.src = post.mediaUrl;
    modalImage.alt = post.caption.slice(0, 100);
    modalCategory.textContent = capitalizeFirst(post.category);
    modalCaption.textContent = post.caption;
    modalHashtags.innerHTML = post.hashtags.map(tag => `<span class="modal-hashtag">#${tag}</span>`).join('');
    modalLikes.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    ${post.likes.toLocaleString()} likes
  `;
    modalDate.textContent = formatRelativeTime(post.timestamp);
    modalInstagramLink.href = post.permalink;

    // Update navigation visibility
    modalPrev.style.display = currentModalIndex > 0 ? 'flex' : 'none';
    modalNext.style.display = currentModalIndex < displayedPosts.length - 1 ? 'flex' : 'none';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentModalIndex = -1;
}

function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    if (newIndex >= 0 && newIndex < displayedPosts.length) {
        openModal(newIndex);
    }
}

// Modal event listeners
modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => navigateModal(-1));
modalNext.addEventListener('click', () => navigateModal(1));

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;

    switch (e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            navigateModal(-1);
            break;
        case 'ArrowRight':
            navigateModal(1);
            break;
    }
});

// ========================================
// LOAD MORE
// ========================================

loadMoreBtn.addEventListener('click', () => {
    loadPosts(false);
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        navbar.style.padding = '0.75rem 2rem';
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.padding = '1.5rem 2rem';
        navbar.style.background = 'var(--color-bg-glass)';
    }

    lastScrollY = window.scrollY;
});

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadPosts(true);

    // Observe about and contact sections for animations
    const sections = document.querySelectorAll('.about-section, .contact-section');
    sections.forEach(section => observer.observe(section));

    // Initialize Hero Slider
    initHeroSlider();
});

// ========================================
// HERO SLIDER
// ========================================

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;
    const SLIDE_DURATION = 5000; // 5 seconds per slide

    function goToSlide(index) {
        // Remove active from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // Set new active slide
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, SLIDE_DURATION);
    }

    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    // Click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoPlay();
            goToSlide(index);
            startAutoPlay();
        });
    });

    // Pause on hover
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);

    // Start auto-play
    startAutoPlay();
}

// ========================================
// STAGGERED CARD ANIMATIONS
// ========================================

// Override createPostCard to add staggered animation
const originalCreatePostCard = createPostCard;
function createPostCard(post, index) {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.setAttribute('data-index', index);
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';

    card.innerHTML = `
    <div class="post-card-image-wrapper">
      <img 
        src="${post.thumbnailUrl}" 
        alt="${post.caption.slice(0, 100)}" 
        class="post-card-image"
        loading="lazy"
      >
      <div class="post-card-overlay">
        <span class="post-card-category">${capitalizeFirst(post.category)}</span>
        <p class="post-card-caption">${post.caption}</p>
        <div class="post-card-meta">
          <span class="post-card-date">${formatRelativeTime(post.timestamp)}</span>
          <span class="post-card-likes">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${formatLikes(post.likes)}
          </span>
        </div>
      </div>
    </div>
  `;

    card.addEventListener('click', () => openModal(index));

    // Staggered animation
    const delay = (index % 6) * 100; // Stagger within each batch
    setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, delay);

    return card;
}

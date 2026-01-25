/**
 * Wildlife Photography Portfolio - JavaScript
 * Instagram sync simulation with mock data, filtering, and modal functionality
 */

// ========================================
// INSTAGRAM MOCK DATA
// ========================================

const MOCK_POSTS = [
    {
        id: '1',
        mediaUrl: 'images/1.png',
        thumbnailUrl: 'images/1.png',
        caption: 'Pelicans sharing a tender moment. The bond between parent and young is beautiful to witness. #wildlife #pelican #birds #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-25T10:30:00Z',
        category: 'birds',
        hashtags: ['wildlife', 'pelican', 'birds', 'nature'],
        likes: 1247,
    },
    {
        id: '2',
        mediaUrl: 'images/2.png',
        thumbnailUrl: 'images/2.png',
        caption: 'A bird silhouette against the glowing sun. Magic happens during golden hour. #birds #sunset #silhouette #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-24T18:15:00Z',
        category: 'birds',
        hashtags: ['birds', 'sunset', 'silhouette', 'nature'],
        likes: 2341,
    },
    {
        id: '3',
        mediaUrl: 'images/3.png',
        thumbnailUrl: 'images/3.png',
        caption: 'Drongo perched at sunset. The warm orange sky creates a stunning backdrop. #birds #drongo #sunset #wildlife',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-23T17:45:00Z',
        category: 'birds',
        hashtags: ['birds', 'drongo', 'sunset', 'wildlife'],
        likes: 3892,
    },
    {
        id: '4',
        mediaUrl: 'images/4.png',
        thumbnailUrl: 'images/4.png',
        caption: 'Indian Peacock in its natural habitat. These magnificent birds never fail to amaze. #peacock #birds #wildlife #india',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-22T14:20:00Z',
        category: 'birds',
        hashtags: ['peacock', 'birds', 'wildlife', 'india'],
        likes: 4521,
    },
    {
        id: '5',
        mediaUrl: 'images/5.png',
        thumbnailUrl: 'images/5.png',
        caption: 'Rock Agama lizard in stunning detail. The vibrant colors of nature never cease to amaze. #macro #lizard #reptile #wildlife',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-21T11:30:00Z',
        category: 'macro',
        hashtags: ['macro', 'lizard', 'reptile', 'wildlife'],
        likes: 1876,
    },
    {
        id: '6',
        mediaUrl: 'images/6.png',
        thumbnailUrl: 'images/6.png',
        caption: 'Oriental White-eye perched delicately on a fern. A tiny gem of the forest. #birds #whiteeye #nature #birdphotography',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-20T09:00:00Z',
        category: 'birds',
        hashtags: ['birds', 'whiteeye', 'nature', 'birdphotography'],
        likes: 2654,
    },
    {
        id: '7',
        mediaUrl: 'images/7.png',
        thumbnailUrl: 'images/7.png',
        caption: 'Baya Weaver showcasing its beautiful plumage. These master nest builders are fascinating to observe. #birds #weaver #wildlife #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-19T08:15:00Z',
        category: 'birds',
        hashtags: ['birds', 'weaver', 'wildlife', 'nature'],
        likes: 3102,
    },
    {
        id: '8',
        mediaUrl: 'images/8.jpeg',
        thumbnailUrl: 'images/8.jpeg',
        caption: 'Mother and child - the most precious bond in nature. A moment of pure love. #conservation #family #nature #portrait',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-18T16:00:00Z',
        category: 'conservation',
        hashtags: ['conservation', 'family', 'nature', 'portrait'],
        likes: 2789,
    },
    {
        id: '9',
        mediaUrl: 'images/9.webp',
        thumbnailUrl: 'images/9.webp',
        caption: 'Gazing into the endless horizon. Sometimes the best moments are found in silence. #landscape #nature #mountains #peace',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-17T07:30:00Z',
        category: 'landscapes',
        hashtags: ['landscape', 'nature', 'mountains', 'peace'],
        likes: 1934,
    },
    {
        id: '10',
        mediaUrl: 'images/10.jpeg',
        thumbnailUrl: 'images/10.jpeg',
        caption: 'Coppersmith Barbet in vibrant colors. A jewel of the avian world. #birds #barbet #colorful #wildlife',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-16T10:20:00Z',
        category: 'birds',
        hashtags: ['birds', 'barbet', 'colorful', 'wildlife'],
        likes: 5234,
    },
    {
        id: '11',
        mediaUrl: 'images/11.png',
        thumbnailUrl: 'images/11.png',
        caption: 'Asian Openbill storks in elegant pose. These graceful birds are a sight to behold. #birds #stork #wildlife #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-15T06:10:00Z',
        category: 'birds',
        hashtags: ['birds', 'stork', 'wildlife', 'nature'],
        likes: 1456,
    },
    {
        id: '12',
        mediaUrl: 'images/12.png',
        thumbnailUrl: 'images/12.png',
        caption: 'Bonnet Macaque family moment. The expressions and social bonds are remarkably human-like. #mammals #monkey #wildlife #india',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-14T15:00:00Z',
        category: 'mammals',
        hashtags: ['mammals', 'monkey', 'wildlife', 'india'],
        likes: 3678,
    },
    {
        id: '13',
        mediaUrl: 'images/13.png',
        thumbnailUrl: 'images/13.png',
        caption: 'Yellow-billed Babbler navigating through the branches. Patience rewards with such moments. #birds #babbler #wildlife #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-13T11:45:00Z',
        category: 'birds',
        hashtags: ['birds', 'babbler', 'wildlife', 'nature'],
        likes: 2145,
    },
    {
        id: '14',
        mediaUrl: 'images/14.png',
        thumbnailUrl: 'images/14.png',
        caption: 'Spotted deer herd with magnificent antlers. The beauty of these graceful creatures in groups is mesmerizing. #mammals #deer #wildlife #india',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-12T09:30:00Z',
        category: 'mammals',
        hashtags: ['mammals', 'deer', 'wildlife', 'india'],
        likes: 3245,
    },
    {
        id: '15',
        mediaUrl: 'images/15.png',
        thumbnailUrl: 'images/15.png',
        caption: 'Asian Elephant through the foliage. These gentle giants are a treasure of our forests. #mammals #elephant #wildlife #conservation',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-11T14:20:00Z',
        category: 'mammals',
        hashtags: ['mammals', 'elephant', 'wildlife', 'conservation'],
        likes: 4567,
    },
    {
        id: '16',
        mediaUrl: 'images/16.png',
        thumbnailUrl: 'images/16.png',
        caption: 'Garden Lizard basking in the sun. The textures and colors of reptiles are endlessly fascinating. #macro #lizard #reptile #wildlife',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-10T11:00:00Z',
        category: 'macro',
        hashtags: ['macro', 'lizard', 'reptile', 'wildlife'],
        likes: 1876,
    },
    {
        id: '17',
        mediaUrl: 'images/17.png',
        thumbnailUrl: 'images/17.png',
        caption: 'Painted Stork portrait - those expressive eyes tell stories of wetland journeys. #birds #stork #wildlife #portrait',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-09T08:15:00Z',
        category: 'birds',
        hashtags: ['birds', 'stork', 'wildlife', 'portrait'],
        likes: 2890,
    },
    {
        id: '18',
        mediaUrl: 'images/18.png',
        thumbnailUrl: 'images/18.png',
        caption: 'Common Hoopoe caught in a moment of stillness. The silhouette against the light creates magic. #birds #hoopoe #wildlife #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-08T17:45:00Z',
        category: 'birds',
        hashtags: ['birds', 'hoopoe', 'wildlife', 'nature'],
        likes: 2340,
    },
    {
        id: '19',
        mediaUrl: 'images/19.png',
        thumbnailUrl: 'images/19.png',
        caption: 'Asian Paradise Flycatcher (Terpsiphone paradisi) - The iridescent blue-black plumage and elegant long tail make this one of India\'s most stunning birds. Found in deciduous forests across South Asia. This male specimen displays the classic coloring of the species. #birds #flycatcher #wildlife #birding #asianparadiseflycatcher',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-07T09:30:00Z',
        category: 'birds',
        hashtags: ['birds', 'flycatcher', 'wildlife', 'birding', 'birdphotography'],
        likes: 4567,
    },
    {
        id: '20',
        mediaUrl: 'images/20.png',
        thumbnailUrl: 'images/20.png',
        caption: 'Spot-billed Pelican (Pelecanus philippensis) feeding chicks - A heartwarming moment of parental care. These near-threatened waterbirds are found in southern Asia. The regurgitating feeding behavior is essential for chick survival. Found at wetlands and lakes across India. #birds #pelican #wildlife #conservation #parentallove',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-06T14:20:00Z',
        category: 'birds',
        hashtags: ['birds', 'pelican', 'wildlife', 'conservation', 'wetlands'],
        likes: 3890,
    },
    {
        id: '21',
        mediaUrl: 'images/21.png',
        thumbnailUrl: 'images/21.png',
        caption: 'Indian Calf Portrait - The innocent gaze of a young calf captures the essence of rural India. These gentle bovines are deeply woven into the cultural and agricultural fabric of the subcontinent. A reminder of the simple beauties found in everyday life. #mammals #wildlife #rural #india #portrait',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-05T11:00:00Z',
        category: 'mammals',
        hashtags: ['mammals', 'wildlife', 'rural', 'india', 'portrait'],
        likes: 2145,
    },
    {
        id: '22',
        mediaUrl: 'images/22.png',
        thumbnailUrl: 'images/22.png',
        caption: 'Oriental White-eye Pair (Zosterops palpebrosus) - These tiny, vibrant birds with distinctive white eye-rings are incredibly social. Here, a bonded pair forages together among mango leaves. Their soft, melodious calls are a common sound in Indian gardens and forests. Species found from Afghanistan to Southeast Asia. #birds #whiteeye #wildlife #birding #birdpair',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-04T08:15:00Z',
        category: 'birds',
        hashtags: ['birds', 'whiteeye', 'wildlife', 'birding', 'macro'],
        likes: 3456,
    },
    {
        id: '23',
        mediaUrl: 'images/23.png',
        thumbnailUrl: 'images/23.png',
        caption: 'Oriental Magpie Robin (Copsychus saularis) - The national bird of Bangladesh, perched regally against terracotta roof tiles. Known for their beautiful, variable song especially at dawn. The striking black and white plumage makes them unmistakable. Common across South and Southeast Asia. #birds #magpierobin #wildlife #birding #nationalbird',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-03T16:45:00Z',
        category: 'birds',
        hashtags: ['birds', 'magpierobin', 'wildlife', 'birding', 'urban'],
        likes: 2780,
    },
    {
        id: '24',
        mediaUrl: 'images/24.png',
        thumbnailUrl: 'images/24.png',
        caption: 'Golden Grasshopper (Acrididae family) - A stunning macro capture of this vibrant grasshopper perched on yellow-green blades. The camouflage coloring demonstrates nature\'s remarkable adaptation. These herbivorous insects are found across tropical grasslands and gardens worldwide. #macro #grasshopper #insect #wildlife #travel',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-02T10:30:00Z',
        category: 'macro',
        hashtags: ['macro', 'grasshopper', 'insect', 'wildlife', 'travel'],
        likes: 1890,
    },
    {
        id: '25',
        mediaUrl: 'images/25.png',
        thumbnailUrl: 'images/25.png',
        caption: 'Parasitic Fly (Tachinidae) - A striking macro photograph capturing the intricate details of this bristly fly. Tachinid flies are important biological control agents, with their larvae parasitizing other insects. The detailed texturing and spines are characteristic of this fascinating family. #macro #insect #wildlife #nature #entomology',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2026-01-01T14:15:00Z',
        category: 'macro',
        hashtags: ['macro', 'insect', 'wildlife', 'nature', 'entomology'],
        likes: 1567,
    },
    {
        id: '26',
        mediaUrl: 'images/26.jpg',
        thumbnailUrl: 'images/26.jpg',
        caption: 'Hanuman Street Art - A vibrant mural of Lord Hanuman adorns a Chennai street wall. The playful modern interpretation features the deity in traditional garb with his iconic mace (gada). Street art like this blends mythology with contemporary urban culture. A beautiful example of India\'s living art traditions. #street #streetart #india #hanuman #culture #travel',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-30T16:00:00Z',
        category: 'street',
        hashtags: ['street', 'streetart', 'india', 'hanuman', 'culture', 'travel'],
        likes: 3456,
    },
    {
        id: '27',
        mediaUrl: 'images/27.png',
        thumbnailUrl: 'images/27.png',
        caption: 'Temple Devotee - An ash-covered devotee at a South Indian temple festival. The sacred vibhuti (holy ash) covering his body symbolizes purification and devotion. Behind him, the vibrant colors of the festival create a stunning contrast. Raw spirituality captured in the streets. #street #india #culture #temple #devotion #spirituality',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-29T08:30:00Z',
        category: 'street',
        hashtags: ['street', 'india', 'culture', 'temple', 'devotion', 'spirituality'],
        likes: 4567,
    },
    {
        id: '28',
        mediaUrl: 'images/28.png',
        thumbnailUrl: 'images/28.png',
        caption: 'Qutub Minar - The iconic 73-meter tall UNESCO World Heritage minaret in Delhi, built in 1193. This low-angle perspective captures the intricate red sandstone carvings and the tapering architecture against a clear blue sky. A masterpiece of Indo-Islamic architecture. #travel #delhi #architecture #heritage #india #qutubminar',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-28T15:00:00Z',
        category: 'travel',
        hashtags: ['travel', 'delhi', 'architecture', 'heritage', 'india', 'unesco'],
        likes: 3890,
    },
    {
        id: '29',
        mediaUrl: 'images/29.png',
        thumbnailUrl: 'images/29.png',
        caption: 'Street Play - Children playing in the streets of India, a timeless scene captured in black and white. The motion blur and vignette create a dreamlike quality, preserving the innocence and joy of childhood. This is the soul of street photography. #street #blackandwhite #children #india #documentary #streetlife',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-27T11:45:00Z',
        category: 'street',
        hashtags: ['street', 'blackandwhite', 'children', 'india', 'documentary'],
        likes: 2890,
    },
    {
        id: '30',
        mediaUrl: 'images/30.png',
        thumbnailUrl: 'images/30.png',
        caption: 'The Blacksmith - Rural India\'s traditional craftspeople at work. A woman hammers while a man tends the forge, creating tools that have been made the same way for generations. The dusty roadside workshop tells stories of hard work and craftsmanship. #street #rural #india #craftsman #documentary #travel',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-26T09:20:00Z',
        category: 'street',
        hashtags: ['street', 'rural', 'india', 'craftsman', 'documentary', 'travel'],
        likes: 2345,
    },
    {
        id: '31',
        mediaUrl: 'images/31.png',
        thumbnailUrl: 'images/31.png',
        caption: 'Temple Gopuram Through Trees - A glimpse of a golden temple gopuram (tower) framed by lush green foliage. The natural framing creates depth and mystery, inviting the viewer into the sacred space. South Indian temple architecture harmonizing with nature. #travel #temple #india #architecture #nature #spirituality',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-25T14:30:00Z',
        category: 'travel',
        hashtags: ['travel', 'temple', 'india', 'architecture', 'nature', 'spirituality'],
        likes: 3120,
    },
    {
        id: '32',
        mediaUrl: 'images/32.jpg',
        thumbnailUrl: 'images/32.jpg',
        caption: 'Hoysala Temple Sculpture - A stunning bronze-green patina deity sculpture from a 12th century Hoysala temple. The intricate detailing of the ornate halo, jewelry, and flowing garments showcase the unparalleled craftsmanship of medieval Karnataka artisans. Every inch tells a story of devotion. #travel #belur #hoysala #sculpture #india #heritage',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-24T10:00:00Z',
        category: 'travel',
        hashtags: ['travel', 'belur', 'hoysala', 'sculpture', 'india', 'heritage'],
        likes: 4123,
    },
    {
        id: '33',
        mediaUrl: 'images/33.jpg',
        thumbnailUrl: 'images/33.jpg',
        caption: 'Chennakeshava Temple, Belur - The magnificent 12th century Hoysala temple under a dramatic sky. The golden dhwaja stambha (flag pillar) leads the eye to the intricately carved temple facade. A UNESCO World Heritage Site and architectural marvel that took 103 years to complete. #travel #belur #hoysala #temple #karnataka #heritage',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-23T11:30:00Z',
        category: 'travel',
        hashtags: ['travel', 'belur', 'hoysala', 'temple', 'karnataka', 'heritage'],
        likes: 5234,
    },
    {
        id: '34',
        mediaUrl: 'images/34.png',
        thumbnailUrl: 'images/34.png',
        caption: 'Belur Temple at Sunset - The silhouette of Chennakeshava Temple against a golden sunset sky. The soft light transforms the ancient stones into shadows, creating a timeless, ethereal atmosphere. Moments like these remind us why we travel. #travel #belur #sunset #temple #karnataka #photography',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-22T17:45:00Z',
        category: 'travel',
        hashtags: ['travel', 'belur', 'sunset', 'temple', 'karnataka', 'photography'],
        likes: 3890,
    },
    {
        id: '35',
        mediaUrl: 'images/35.png',
        thumbnailUrl: 'images/35.png',
        caption: 'Belur Gopuram - Looking up at the towering gopuram (gateway tower) of the Belur temple complex. The soapstone carvings depict countless deities and celestial beings, each one a masterpiece. The Hoysala architects created visual poetry in stone. #travel #belur #gopuram #temple #architecture #hoysala',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-21T09:15:00Z',
        category: 'travel',
        hashtags: ['travel', 'belur', 'gopuram', 'temple', 'architecture', 'hoysala'],
        likes: 2980,
    },
    {
        id: '36',
        mediaUrl: 'images/36.png',
        thumbnailUrl: 'images/36.png',
        caption: 'Temple Monkey - A street performer\'s trained monkey dressed in traditional pink attire with kumkum tilak. While controversial, this captures a fading aspect of India\'s street culture. The monkey\'s expressive face and the colorful scene behind tell a complex story of tradition and modernity. #street #india #culture #portrait #documentary',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-20T15:30:00Z',
        category: 'street',
        hashtags: ['street', 'india', 'culture', 'portrait', 'documentary', 'travel'],
        likes: 2567,
    },
    {
        id: '37',
        mediaUrl: 'images/37.jpg',
        thumbnailUrl: 'images/37.jpg',
        caption: 'Sacred Hilltop - A serene view of a rocky hill shrine framed by natural foliage. The lush greenery leading up to the peak creates a perfect harmony between nature and spirituality. A peaceful retreat in the heart of Karnataka. #travel #karnataka #nature #hilltop #temple #landscape',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-19T10:30:00Z',
        category: 'landscapes',
        hashtags: ['travel', 'karnataka', 'nature', 'hilltop', 'temple', 'landscape'],
        likes: 3456,
    },
    {
        id: '38',
        mediaUrl: 'images/38.png',
        thumbnailUrl: 'images/38.png',
        caption: 'Karnataka Flag High - A traditional stone mandapa atop a hill, proudly displaying the Karnataka flag (yellow and red) against a dramatic cloudy sky. A symbol of regional pride and ancient heritage standing tall. #travel #karnataka #flag #heritage #sky #architecture',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-18T14:15:00Z',
        category: 'travel',
        hashtags: ['travel', 'karnataka', 'flag', 'heritage', 'sky', 'architecture'],
        likes: 4120,
    },
    {
        id: '39',
        mediaUrl: 'images/39.png',
        thumbnailUrl: 'images/39.png',
        caption: 'Temple Silhouette - A high-contrast silhouette of a hilltop shrine with the Karnataka flag fluttering in the wind. The minimal composition highlights the stark beauty of the structure against the bright sky. A moment of quiet reverence. #travel #silhouette #karnataka #temple #minimal #blackandwhite',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-17T16:45:00Z',
        category: 'landscapes',
        hashtags: ['travel', 'silhouette', 'karnataka', 'temple', 'minimal', 'blackandwhite'],
        likes: 2890,
    },
    {
        id: '40',
        mediaUrl: 'images/40.png',
        thumbnailUrl: 'images/40.png',
        caption: 'Mysore St. Philomena\'s Cathedral - A low-angle shot of the towering neo-Gothic spires of St. Philomena\'s Cathedral. The intricate architecture and the statue of St. Philomena in the foreground against the clear blue sky showcase the grandeur of this historic monument. #travel #mysore #architecture #cathedral #history #karnataka',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-16T11:20:00Z',
        category: 'travel',
        hashtags: ['travel', 'mysore', 'architecture', 'cathedral', 'history', 'karnataka'],
        likes: 3780,
    },
    {
        id: '41',
        mediaUrl: 'images/41.png',
        thumbnailUrl: 'images/41.png',
        caption: 'Melukote Temple Hill - A scenic view of the Yoganarasimha Swamy Temple perched atop the rocky hill at Melukote. The lush green foreground frames the ancient temple against a dramatic cloudy sky. A spiritual and architectural gem. #travel #melukote #temple #karnataka #landscape #nature',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-15T09:45:00Z',
        category: 'travel',
        hashtags: ['travel', 'melukote', 'temple', 'karnataka', 'landscape', 'nature'],
        likes: 3245,
    },
    {
        id: '42',
        mediaUrl: 'images/42.png',
        thumbnailUrl: 'images/42.png',
        caption: 'Nature\'s Window - A breathtaking view of a rocky hill peak framed naturally by dark tree branches in the foreground. The lush green slopes contrast with the rugged rock face, creating a composition that draws the eye to the summit. #nature #landscape #karnataka #framing #greenery',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-14T08:30:00Z',
        category: 'landscapes',
        hashtags: ['nature', 'landscape', 'karnataka', 'framing', 'greenery'],
        likes: 2134,
    },
    {
        id: '43',
        mediaUrl: 'images/43.png',
        thumbnailUrl: 'images/43.png',
        caption: 'Peak of Devotion - A small white stone shrine sits atop a hill, its Karnataka flag waving proudly in the breeze against a dynamic sky. A popular trekking spot that offers both spiritual solace and panoramic views. #travel #karnataka #trekking #temple #sky #clouds',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-13T12:00:00Z',
        category: 'travel',
        hashtags: ['travel', 'karnataka', 'trekking', 'temple', 'sky', 'clouds'],
        likes: 2876,
    },
    {
        id: '44',
        mediaUrl: 'images/44.png',
        thumbnailUrl: 'images/44.png',
        caption: 'Eternal Silhouette - A powerful silhouette of a hilltop structure against a bright, overcast sky. The yellow and red flag adds a splash of color to the otherwise monochromatic high-contrast scene. A moody and artistic perspective. #artistic #silhouette #karnataka #flag #moody #minimal',
        permalink: 'https://instagram.com/purushothamr06',
        timestamp: '2025-12-12T16:20:00Z',
        category: 'landscapes',
        hashtags: ['artistic', 'silhouette', 'karnataka', 'flag', 'moody', 'minimal'],
        likes: 1980,
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
// ADVANCED FEATURES INITIALIZATION
// ========================================

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
}

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 3D Card Tilt Effect
function init3DCardTilt() {
    const cards = document.querySelectorAll('.portfolio-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.setProperty('--rotateX', rotateX + 'deg');
            card.style.setProperty('--rotateY', rotateY + 'deg');
            card.classList.add('tilt');
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
            card.classList.remove('tilt');
        });
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-image, .about-image, .portfolio-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => observer.observe(el));
}

// Parallax Effect on Mouse Move
function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            const heroSlides = hero.querySelectorAll('.hero-bg-image');
            heroSlides.forEach(slide => {
                slide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            });
        });
    }
}

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Creates a portfolio card element with sanitized content
 * @param {Object} post - The post data object
 * @param {number} index - The index of the post
 * @returns {HTMLElement} The constructed card element
 */
function createPostCard(post, index) {
    const card = document.createElement('div');
    card.className = 'portfolio-card scroll-reveal';
    card.setAttribute('data-category', post.category);

    // Create Image Container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-image';

    const img = document.createElement('img');
    img.src = post.thumbnailUrl;
    img.alt = post.description || 'Wildlife photography'; // Fallback alt
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    const overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';

    const categorySpan = document.createElement('span');
    categorySpan.className = 'category-tag';
    categorySpan.textContent = post.category;

    const likesSpan = document.createElement('span');
    likesSpan.className = 'likes-count';
    likesSpan.innerHTML = `&hearts; ${formatLikes(post.likes)}`;

    overlayContent.appendChild(categorySpan);
    overlayContent.appendChild(likesSpan);
    overlay.appendChild(overlayContent);

    imgContainer.appendChild(img);
    imgContainer.appendChild(overlay);

    // Create Content Container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';

    // Instagram Link/Header
    const linkHeader = document.createElement('div');
    linkHeader.className = 'card-header';

    const instaLink = document.createElement('a');
    instaLink.href = post.permalink;
    instaLink.target = '_blank';
    instaLink.rel = 'noopener noreferrer'; // Security Fix
    instaLink.className = 'instagram-link';

    const instaIcon = document.createElement('span');
    instaIcon.className = 'instagram-icon';

    const instaText = document.createTextNode('View on Instagram');

    instaLink.appendChild(instaIcon);
    instaLink.appendChild(instaText);
    linkHeader.appendChild(instaLink);

    // Caption
    const captionP = document.createElement('p');
    captionP.className = 'card-caption';

    // Truncate caption safely
    const captionText = post.caption || '';
    captionP.textContent = captionText.length > 100
        ? captionText.substring(0, 100) + '...'
        : captionText;

    // Footer (Date)
    const footerDiv = document.createElement('div');
    footerDiv.className = 'card-footer';

    const dateSpan = document.createElement('span');
    dateSpan.className = 'post-date';
    dateSpan.textContent = formatRelativeTime(post.timestamp);

    footerDiv.appendChild(dateSpan);

    // Assemble Card
    contentDiv.appendChild(linkHeader);
    contentDiv.appendChild(captionP);
    contentDiv.appendChild(footerDiv);

    card.appendChild(imgContainer);
    card.appendChild(contentDiv);

    card.addEventListener('click', (e) => {
        // Don't open modal if clicking the Instagram link
        if (!e.target.closest('.instagram-link')) {
            openModal(index);
        }
    });

    // Staggered animation
    const delay = (index % 6) * 100;
    setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, delay);

    return card;
}

// ========================================
// ANIMATION FUNCTIONS
// ========================================

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    update();
}

// Stagger Animation for Grid Items
function initStaggerAnimation() {
    try {
        const grids = document.querySelectorAll('.stagger-list');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        grids.forEach(grid => observer.observe(grid));
    } catch (error) {
        console.warn('Stagger animation initialization failed:', error);
    }
}

// Magnetic Button Effect
function initMagneticButtons() {
    try {
        const buttons = document.querySelectorAll('.magnetic-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    } catch (error) {
        console.warn('Magnetic buttons initialization failed:', error);
    }
}

// Stats Counter Animation
function initStatsAnimation() {
    try {
        const statsSection = document.getElementById('aboutStats');
        const statNumbers = document.querySelectorAll('.stat-number');

        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        if (target) {
                            animateCounter(stat, target, 2000);
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    } catch (error) {
        console.warn('Stats animation initialization failed:', error);
    }
}

// Initialize all advanced features
function initAdvancedFeatures() {
    try {
        if (typeof hideLoadingScreen === 'function') hideLoadingScreen();
        if (typeof initBackToTop === 'function') initBackToTop();
        if (typeof initScrollReveal === 'function') initScrollReveal();
        if (typeof initParallax === 'function') initParallax();
        initStaggerAnimation();
        initMagneticButtons();
        initStatsAnimation();

        // Scroll event for progress bar
        if (typeof updateScrollProgress === 'function') {
            window.addEventListener('scroll', updateScrollProgress);
        }

        // Re-initialize 3D tilt when cards are loaded
        setTimeout(() => {
            if (typeof init3DCardTilt === 'function') init3DCardTilt();
        }, 1000);
    } catch (error) {
        console.error('Advanced features initialization error:', error);
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', initAdvancedFeatures);

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

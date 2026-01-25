# Wildlife Photography Portfolio - Purushotham.R

A stunning wildlife photography portfolio website with Instagram-style feed and fullscreen image viewer.

## 🖼️ How to Add Your Photos

### Step 1: Add Images to the `images/` Folder
Copy your wildlife photos to the `images/` folder in this directory.

**Recommended naming convention:**
```
images/
├── tiger_01.jpg
├── kingfisher_morning.jpg
├── elephant_golden_hour.jpg
├── macro_butterfly.jpg
└── ...
```

### Step 2: Edit the `script.js` File
Open `script.js` and find the `MOCK_POSTS` array at the top. Add your photos like this:

```javascript
{
  id: '1',                                        // Unique ID
  mediaUrl: 'images/tiger_01.jpg',               // Path to full-size image
  thumbnailUrl: 'images/tiger_01.jpg',           // Same path (or smaller version)
  caption: 'Your caption here with #hashtags',   // Description with hashtags
  permalink: 'https://instagram.com/p/...',      // Link to Instagram post
  timestamp: '2026-01-25T10:30:00Z',             // Date/time
  category: 'mammals',                            // Category (see below)
  hashtags: ['wildlife', 'tiger', 'nature'],     // Array of hashtags
  likes: 1247,                                   // Number of likes
},
```

### Categories
Use one of these category values:
- `birds` - Bird photography
- `mammals` - Wildlife/mammals
- `landscapes` - Nature landscapes
- `macro` - Macro photography
- `conservation` - Conservation-focused shots

## 🎨 Customization

### Change Theme Colors
Edit the `:root` section in `styles.css` to change the color palette.

### Update Hero Image
In `index.html`, find the hero section and change the background image URL:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="..." class="hero-bg-image">
```

### Update About Photo
In `index.html`, find the about section and update the image:
```html
<img src="YOUR_PHOTO_URL_HERE" alt="..." loading="lazy">
```

## 📱 Instagram Sync (Future)
To enable real Instagram sync, you would need:
1. An Instagram Business or Creator account
2. Facebook Developer App with Instagram Basic Display API access
3. Generate an access token
4. Replace the mock data fetch with real API calls

## 🚀 Running Locally
Simply open `index.html` in a web browser!

For local development with live reload:
```bash
npx serve .
```

---
Made with ❤️ by Purushotham.R

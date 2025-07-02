<!-- markdownlint-disable -->

# Practice 02: Create a Multi-Page Photo Gallery with Navigation

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Advanced linking techniques between multiple HTML pages
- Working with image galleries and thumbnail navigation
- Creating consistent navigation across multiple pages
- Using relative links effectively
- Implementing breadcrumb navigation
- Best practices for organizing media files

## 📋 Exercise Description

Build a comprehensive photo gallery website with multiple categories, navigation between galleries, and a clean user interface. This exercise focuses on mastering HTML links and image handling techniques.

## 🔧 Requirements

Your photo gallery should include:

1. **Homepage (index.html)**
   - Welcome message and site title
   - Navigation menu to different gallery categories
   - Featured image previews from each category
   - Links to each gallery page

2. **Gallery Categories (minimum 3 pages)**
   - **Nature Gallery (nature.html)**: Landscape and nature photos
   - **City Gallery (city.html)**: Urban and street photography
   - **People Gallery (people.html)**: Portrait and lifestyle photos

3. **Individual Photo Pages**
   - Detailed view for at least 2 photos per gallery
   - Navigation to previous/next photo
   - Link back to gallery and homepage

4. **About Page (about.html)**
   - Information about the photographer
   - Equipment used
   - Contact information with email link

## 🔧 Technical Requirements

### File Structure:
```
photo-gallery/
├── index.html
├── nature.html
├── city.html
├── people.html
├── about.html
├── images/
│   ├── thumbnails/
│   │   ├── nature-thumb1.jpg
│   │   ├── nature-thumb2.jpg
│   │   └── ...
│   ├── full-size/
│   │   ├── nature-full1.jpg
│   │   ├── nature-full2.jpg
│   │   └── ...
│   └── featured/
│       ├── nature-featured.jpg
│       ├── city-featured.jpg
│       └── people-featured.jpg
└── photo-details/
    ├── nature-photo1.html
    ├── nature-photo2.html
    └── ...
```

### HTML Elements to Use:
- `<nav>` for main navigation
- `<a href="">` with proper relative links
- `<img>` with both thumbnail and full-size versions
- Breadcrumb navigation
- `<figure>` and `<figcaption>` for photo descriptions

### Link Types to Include:
- Gallery category links
- Thumbnail to detail page links
- Previous/Next photo navigation
- Breadcrumb navigation links
- External photographer website links

## 📝 Step-by-Step Instructions

1. **Plan Your Gallery Structure**
   - Decide on 3 photo categories
   - Collect or find 6-9 images (2-3 per category)
   - Create thumbnail versions of images

2. **Build the Homepage**
   - Create welcoming header
   - Add main navigation menu
   - Include featured images from each category
   - Add links to each gallery page

3. **Create Gallery Category Pages**
   - Build consistent layout for each gallery
   - Add thumbnail grid with links
   - Include navigation back to homepage
   - Add category descriptions

4. **Build Individual Photo Detail Pages**
   - Create detailed view for each photo
   - Add photo title and description
   - Include previous/next navigation
   - Add breadcrumb navigation

5. **Create About Page**
   - Add photographer information
   - Include contact details with email link
   - Add links to social media or portfolio

6. **Test All Navigation**
   - Verify all links work correctly
   - Test breadcrumb navigation
   - Ensure consistent navigation across pages

## 💡 Pro Tips

- Use consistent file naming conventions
- Keep thumbnail images small for faster loading
- Include descriptive alt text for all images
- Use meaningful folder organization
- Test navigation on different screen sizes

## 🚀 Bonus Challenges

1. **Add Video Content**
   - Include a "Videos" section
   - Embed sample videos using HTML5 `<video>` tag
   - Or embed YouTube videos with `<iframe>`

2. **Create a Contact Form**
   - Add a simple contact form (prepare for Stage 5)
   - Include email link and phone number

3. **Add Download Options**
   - Provide download links for high-resolution images
   - Create portfolio PDF for download

4. **Enhanced Navigation**
   - Add search functionality placeholder
   - Create tag-based navigation
   - Include recent photos section

## 📷 Sample Gallery Categories

**Nature Gallery:**
- Landscape photography
- Wildlife photos
- Sunset/sunrise images
- Mountain or ocean scenes

**City Gallery:**
- Architecture photography
- Street art and murals
- Urban lifestyle shots
- Night city lights

**People Gallery:**
- Portrait photography
- Candid lifestyle shots
- Event photography
- Street photography with people

## ✅ Completion Checklist

- [ ] Created homepage with featured images
- [ ] Built 3 gallery category pages
- [ ] Created 6+ individual photo detail pages
- [ ] Added consistent navigation menu
- [ ] Implemented breadcrumb navigation
- [ ] Included previous/next photo navigation
- [ ] Added about page with contact information
- [ ] Used proper relative linking throughout
- [ ] Organized images in logical folder structure
- [ ] Tested all links work correctly
- [ ] Added meaningful alt text for all images
- [ ] Included photo descriptions and captions

## 🎨 Design Suggestions

- Use simple, clean layouts that focus on the images
- Keep navigation consistent across all pages
- Use white space effectively around images
- Consider using a consistent color scheme
- Make sure text is readable against backgrounds

This exercise will strengthen your understanding of HTML navigation and media handling while creating a practical photo gallery website!

# Busy B's Cleaning Service — Website

Production-ready static website for **Busy B's Cleaning Service**, Wilmington NC.

- **GitHub Pages URL:** https://jervin1616.github.io/BBCS/
- **Target Domain:** busybcleaningservice.com
- **Stack:** Pure HTML5, CSS3, Vanilla JavaScript — no dependencies
- **Pages:** 17 HTML pages + sitemap, robots.txt, 404, .htaccess

---

## 1. Run Locally

### Option A — Python (recommended, no install needed)

```bash
git clone https://github.com/jervin1616/BBCS.git
cd BBCS
python3 -m http.server 8080
```

Open: http://localhost:8080/BBCS/

> **Note:** Because all paths use `/BBCS/` as the root, you must serve from the **parent** directory of the BBCS folder, not from inside it.

### Option B — Node.js `serve`

```bash
npm install -g serve
cd ..           # go to the parent directory above BBCS/
serve -p 8080
```

Open: http://localhost:8080/BBCS/

### Option C — VS Code Live Server

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**
3. Adjust the path prefix in the URL to `/BBCS/`

---

## 2. Deploy to GitHub Pages

### First-time setup:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial site build"
   git push origin main
   ```

2. In your GitHub repository, go to:
   **Settings → Pages → Build and deployment**

3. Set **Source** to: `Deploy from a branch`

4. Set **Branch** to: `main` / `/ (root)`

5. Click **Save**

6. Wait ~1–2 minutes, then visit:
   **https://jervin1616.github.io/BBCS/**

### Every future update:

```bash
git add .
git commit -m "Your update description"
git push origin main
```

GitHub Pages rebuilds automatically on every push to `main`.

---

## 3. Point busybcleaningservice.com to GitHub Pages (Custom Domain)

### Step 1 — Create a CNAME file

Create a file named `CNAME` (no extension) in the root of the repository with just the domain:

```
busybcleaningservice.com
```

Commit and push this file.

### Step 2 — Update GoDaddy DNS

Log in to GoDaddy → Your Domains → **busybcleaningservice.com** → DNS Management.

**Remove or replace** the existing A records and add these:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | jervin1616.github.io | 3600 |

**Wait 15–60 minutes** for DNS propagation.

### Step 3 — Configure GitHub Pages

Go to: **Settings → Pages → Custom domain**

Enter: `busybcleaningservice.com` and click Save.

Check **Enforce HTTPS** (this will appear once the certificate is issued, usually within 30 minutes).

### Step 4 — Update all `/BBCS/` path prefixes

Once the custom domain is live, the site will be served from the root (`/`) instead of `/BBCS/`. You must update all internal path references:

**Find and replace in ALL files:**

```
/BBCS/ → /
```

You can do this with a terminal command from inside the BBCS folder:

```bash
# macOS / Linux
find . -name "*.html" -exec sed -i '' 's|/BBCS/|/|g' {} +
find . -name "*.js"   -exec sed -i '' 's|/BBCS/|/|g' {} +

# Linux only (no '' after -i)
find . -name "*.html" -exec sed -i 's|/BBCS/|/|g' {} +
find . -name "*.js"   -exec sed -i 's|/BBCS/|/|g' {} +
```

Also update canonical URLs in every `<head>` from:
`https://jervin1616.github.io/BBCS/...` → `https://busybcleaningservice.com/...`

And update `sitemap.xml` URLs similarly.

---

## 4. Swap Placeholder Images with Real Photos

Every placeholder in the HTML files is marked with a comment like:

```html
<!-- REPLACE: Add a photo of Brandy and Mike Sellers -->
<!-- <img src="/BBCS/images/brandy-mike-sellers.jpg" alt="..."> -->
<div class="about-img-placeholder">🐝</div>
```

### To swap a placeholder:

1. Add your photo to the `/BBCS/images/` directory
2. Find the relevant `<!-- REPLACE: ... -->` comment in the HTML file
3. Uncomment the `<img>` tag and delete the placeholder `<div>`
4. Update the `alt` text to accurately describe the image

### Recommended photos to add:

| File | Location | Description |
|------|----------|-------------|
| `images/brandy-mike-sellers.jpg` | Homepage, About | Photo of Brandy and Mike Sellers together |
| `images/brandy-sellers.jpg` | About page | Photo of Brandy Sellers |
| `images/mike-sellers.jpg` | About page | Photo of Mike Sellers (in or out of uniform) |
| `images/hero-home.jpg` | Homepage hero | Clean, bright kitchen or living room |
| `images/airbnb-bedroom.jpg` | Airbnb service page | Beautifully staged vacation rental bedroom |
| `images/recurring-clean.jpg` | Recurring service | Clean living room after maintenance clean |
| `images/wilmington-home.jpg` | Wilmington location | Wilmington NC home or neighborhood |
| `images/carolina-beach-rental.jpg` | Carolina Beach page | Carolina Beach vacation rental or beach home |
| `images/blog-airbnb-checklist.jpg` | Blog post | Airbnb property/cleaning related image |
| `images/og-home.jpg` | All pages (OG) | 1200×630 Open Graph image for social sharing |

> **Image tips:** Use `.webp` format for best performance. Aim for file sizes under 200KB for hero images, under 100KB for cards. Recommended hero dimensions: 1600×900px.

---

## 5. Connect the Contact Form (Formspree)

The contact form currently has a fallback to `mailto:`. To collect submissions properly:

1. **Sign up** at [https://formspree.io](https://formspree.io) (free tier available)
2. Create a new form and copy your endpoint, e.g. `https://formspree.io/f/xabc1234`
3. Open `js/main.js` and find this line:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID';
   ```
4. Replace `REPLACE_WITH_YOUR_FORMSPREE_ID` with your actual form ID
5. Also update the `action` attribute in `contact.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID" ...>
   ```

Formspree will email all form submissions to the email address you register with.

---

## 6. File Structure

```
BBCS/
├── index.html              # Homepage
├── about.html              # About Brandy & Mike
├── services.html           # Services overview
├── contact.html            # Contact & booking form
├── 404.html                # Custom 404 page
├── sitemap.xml             # XML sitemap for SEO
├── robots.txt              # Search engine directives
├── .htaccess               # Server config (Apache only)
├── CNAME                   # Custom domain file (create when needed)
├── README.md               # This file
├── css/
│   └── styles.css          # All site styles
├── js/
│   └── main.js             # Header/footer injection, interactions
├── images/                 # Add all photos here
├── services/
│   ├── recurring-cleaning.html
│   ├── airbnb-cleaning.html
│   ├── move-out-cleaning.html
│   ├── deep-cleaning.html
│   ├── commercial-cleaning.html
│   └── new-construction-cleaning.html
├── locations/
│   ├── wilmington.html
│   ├── leland.html
│   ├── carolina-beach.html
│   ├── hampstead.html
│   └── southport.html
└── blog/
    ├── index.html
    └── airbnb-cleaning-checklist-wilmington.html
```

---

## Business Information

| Field | Value |
|-------|-------|
| **Business Name** | Busy B's Cleaning Service |
| **Phone** | (910) 746-4663 |
| **Email** | Sellersb224@gmail.com |
| **Address** | 7203 Anaca Point Rd, Wilmington, NC 28411 |
| **Facebook** | https://www.facebook.com/p/Busy-Bs-Cleaning-Services-100075826284703/ |
| **TikTok** | https://www.tiktok.com/@busybcleaningservice |
| **Counties** | New Hanover, Pender, Brunswick |

---

*Built April 2026 for Busy B's Cleaning Service LLC, Wilmington NC*

const fs = require('fs');

const content = fs.readFileSync('dribbble_shot.html', 'utf8');

// Find URLs
const urlRegex = /https?:\/\/[^\s"'>]+/g;
const urls = content.match(urlRegex) || [];

const mediaUrls = new Set();
for (const url of urls) {
  if (url.includes('.mp4') || url.includes('.webm') || url.includes('.gif') || url.includes('media') || url.includes('screenshot')) {
    mediaUrls.add(url);
  }
}

console.log("Found media URLs:");
mediaUrls.forEach(url => console.log(url));

const titleRegex = /<title>(.*?)<\/title>/;
const titleMatch = content.match(titleRegex);
if (titleMatch) {
  console.log("\nTitle:", titleMatch[1]);
}

const metaDescRegex = /<meta name="description" content="(.*?)"/;
const metaDescMatch = content.match(metaDescRegex);
if (metaDescMatch) {
  console.log("\nMeta Description:", metaDescMatch[1]);
}

const ogDescRegex = /<meta property="og:description" content="(.*?)"/;
const ogDescMatch = content.match(ogDescRegex);
if (ogDescMatch) {
  console.log("\nOG Description:", ogDescMatch[1]);
}

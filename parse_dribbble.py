import re

with open("dribbble_shot.html", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find any video, mp4, webm, gif, or large image URLs
urls = re.findall(r'https?://[^\s"\'>]+', content)

media_urls = []
for url in urls:
    if any(ext in url for ext in ['.mp4', '.webm', '.gif', 'assets.dribbble.com/uploads/chats', 'media']):
        media_urls.append(url)

print("Found media URLs:")
for mu in set(media_urls):
    print(mu)

# Also let's extract the shot title or descriptions
title = re.search(r'<title>(.*?)</title>', content)
if title:
    print("\nTitle:", title.group(1))

# Search for shot-description
desc = re.search(r'class="shot-description-container".*?>(.*?)</div>', content, re.DOTALL)
if desc:
    print("\nDescription:", desc.group(1))
else:
    # try another match
    desc = re.search(r'meta name="description" content="(.*?)"', content)
    if desc:
        print("\nMeta Description:", desc.group(1))

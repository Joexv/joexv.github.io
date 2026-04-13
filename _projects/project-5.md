---
layout: project
type: project
image: images/Menu.png
title: FX420 Menu Creators
permalink: projects/MenuCreators
date: 2019-01-01
labels:
  - C#
  - Raspberry Pi
  - Screenly OSE
  - ImageMagick
  - Excel
summary: Two incredibly useful programs for making FX420's menus
---

Built for a single-location dispensary running 10 screens. When I started, menus were Excel files manually converted to images, loaded onto flash drives, and physically swapped on each screen — which meant menus going dark while you updated them, in front of customers.

### How It Evolved

First I built a local website to display menus so updates could be pushed remotely. That hit a wall with smart TV caching — updates wouldn’t reflect cleanly in real time. I switched to Raspberry Pi Zeros running Screenly OSE, a $15-per-screen solution I physically set up and configured for each of the 10 displays. That gave me proper remote content management.

The menu creation tools automated the formatting work — colors, borders, images, layout — so staff with minimal Excel knowledge could generate consistent branded menus. Two separate tools handled different content types: one for general menus, one specifically for strain menus with flower names, costs, and THC/CBD percentages.

### How It Works

The tools read Excel files and extract the relevant cell ranges, convert them to bitmaps using clipboard capture (`CopyPicture()`), then resize to 4K (3840x2160) or 1080p depending on the screen. For daily specials, ImageMagick composites additional images on top of the menu template at specified X/Y offsets. Finished images are uploaded to each Pi via SFTP into `/home/pi/screenly_assets/`, then registered or updated through Screenly’s REST API at `/api/v1.1/assets`. Asset names follow an `AUTOMATED_[timestamp]` convention so the tools can find and replace them on subsequent updates.

### Slack Integration

The Slack integration uses incoming webhooks. The bot monitors a channel and parses plain-language commands — something like `change price item $50` — feeds that into the menu creator, and pushes the result to the screens. No interface to learn, no files to manage.

### Current Status

They licensed the software. It’s still running without me — I don’t maintain it anymore.

Source:  
[Menu Creator](https://github.com/Joexv/FX420_MenuCreator)  
[Strain Menu Creator](https://github.com/Joexv/FX420_StrainMenuCreator)

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

The **MenuCreators** are two custom-built tools designed to simplify the creation, editing, and uploading of digital menus for Screenly OSE displays. Initially developed for FX420 dispensary’s in-house use, these tools are open-source and adaptable for any business looking to streamline their signage management process.

### The Problem
During my time contracted for a dispensary, I found myself constantly updating menus on multiple TVs. The initial process involved manually converting Excel files to images, loading them onto flash drives, and physically updating each screen. Not only was this repetitive and time-consuming, but it also disrupted staff and customers whenever menus were temporarily down.

### Early Solutions and Evolution
To address this, I first created a local website to display menus, allowing for remote updates. However, the smart TVs’ caching issues prevented smooth, real-time updates. After researching alternatives, I discovered **Screenly OSE**, a digital signage solution that runs on Raspberry Pi devices. The $15 Raspberry Pi Zero made it an affordable choice, and I integrated it into our setup, allowing for remote content management.

Initially, I handled the setup by linking each Pi to a centralized website with a menu creator tool. This setup worked for a while but had limitations in scalability and ease of access, especially when a new business partner required a more accessible system for all staff members, including those unfamiliar with Excel.

### Developing the MenuCreators
To make the system more foolproof and accessible, I developed the **MenuCreators**—two tools that automated much of the menu creation process:
1. **Automated Formatting**: The tools handled colors, borders, and images, making it simple for anyone to create consistent, branded menus with minimal Excel knowledge.
2. **Remote Functionality**: With command-line capabilities and integration with a Slack bot, the MenuCreators allowed remote updates, minimizing on-site maintenance.
3. **Enhanced Accessibility**: Trained staff could now update menus with fewer errors, while the tools’ automation features prevented accidental formatting mishaps.

### Long-Term Benefits and Adaptability
Even as management structures changed, the MenuCreators tools continued to simplify daily operations, reducing downtime and ensuring menus stayed accurate and updated. Now, almost every step of the menu creation and update process is automated, allowing the dispensary to manage their signage effectively with minimal IT oversight.

The experience of developing MenuCreators taught me the value of adaptable, user-friendly design in creating tools that make complex tasks manageable for all skill levels. While I continue to support the dispensary, these tools have given me the confidence that even if I were to step away, my work would remain impactful, streamlining operations for the team.

Source:  
[Menu Creator](https://github.com/Joexv/FX420_MenuCreator)  
[Strain Menu Creator](https://github.com/Joexv/FX420_StrainMenuCreator)

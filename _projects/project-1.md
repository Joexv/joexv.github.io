---
layout: project
type: project
image: /assets/images/AuraScreen.png
title: AuraScreen
permalink: projects/Aura
date: 2022-01-01
labels:
  - Windows
  - Accessibility
  - Visual
  - C#
summary: An Accessibility tool for Windows to aid users with eye floaters
screenshots:
  - Screenshots/AuraScreen (1).png
  - Screenshots/AuraScreen (2).png
  - Screenshots/AuraScreen (3).png
  - Screenshots/AuraScreen (4).png
---

AuraScreen is an accessibility suite I was commissioned to build for users dealing with eye floaters. Eye floaters are those drifting dust-particle-like shapes that float across your vision — they’re always there, but on a bright screen or a white background they become genuinely distracting and exhausting to deal with.

The tool goes beyond what Windows’ built-in accessibility options offer. You can apply color filters to your entire screen, or target them at a specific program window — so if one app is the problem, you’re not changing everything else. There’s also a tinted box that tracks your cursor, letting you soften the area around wherever you’re looking.

### The Hard Parts

Getting per-application color filtering to work smoothly was the biggest technical challenge. Windows doesn’t have a clean way to render different color treatments on different parts of the screen at the same time, so I had to hook into GPU-level graphics APIs to make it work without tearing or flickering.

The cursor-tracking box had a similar problem. To stay smooth during movement it needs to update thousands of times per second — getting that to run without choppiness required pushing the rendering through hardware-accelerated paths rather than letting Windows handle it at the software level.

### Notes

I built an interactive frontend for the project website that let visitors see in real time how the filters affect a simulated screen. The site is down now, but I still have the repo and plan to bring it back as a standalone page here.

AuraScreen hit around 100,000 downloads on the Microsoft Store. The main regret is marketing — I didn’t push it nearly as hard as I should have for something that filled a gap this specific.

[Download AuraScreen from the Microsoft Store](https://apps.microsoft.com/store/detail/aura-screen/9NCV3CWWWGGR)

[View the original AuraScreen website](/aurascreen/)

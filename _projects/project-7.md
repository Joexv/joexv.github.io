---
layout: project
type: project
image: images/headripper.gif
title: Headripper
permalink: projects/Headripper
date: 2020-01-01
labels:
  - C#
  - REST
  - API
  - MP3
  - Meditation
summary: A tool to download and listen to Headspace sounds
---

A commission to build a desktop downloader for Headspace’s full audio library. Headspace has a web version, but it only exposes a fraction of the content available on mobile — the full sleepcast and meditation library lives behind the mobile client. The first problem was figuring out how that client actually worked.

### Reverse Engineering

I used a jailbroken iPhone and HTTPS sniffers to intercept Headspace’s network traffic and map out their API and audio protocols. The key finding was that the mobile app accesses a completely different content library than the web client — Android headers specifically are required to pull sleepcasts. Headripper spoofs those headers in every API call to get access to the full catalog.

Sleepcasts are served as three separate audio tracks: voice (narration only), ambience (background soundscape), and a pre-mixed combined version. Headripper uses FFmpeg to handle format conversion and mixing, defaulting to the pre-mixed track but exposing flags to pull all three variants separately.

### Authentication

Auth runs through a bearer token tied to an active Headspace subscription. The Python rebuild uses Playwright to automate a browser login and capture the token, which gets stored locally and refreshed when it expires (~24 hours). All requests go directly to Headspace’s servers from your own machine — nothing passes through any third party.

I rebuilt it in Python after the original C# version. It’s still working — Headspace hasn’t changed their protocols enough to break it, and they’ve never reached out about it.

Source: [HeadRipper](https://github.com/Joexv/HeadRipper)

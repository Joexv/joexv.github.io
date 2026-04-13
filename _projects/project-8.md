---
layout: project
type: project
image: images/yoga.png
title: Yoga AnyTime Downloader
permalink: projects/YAD
date: 2021-08-05
labels:
  - C#
  - Yoga
  - REST
  - API
  - TS
  - Link Grabber
summary: A streamlined solution for automating downloads from YogaAnytime.com
---

A commissioned tool to download videos from YogaAnytime.com for offline viewing. Compared to Headripper this one was straightforward — YogaAnytime serves unencrypted HLS streams, so there was no protocol reverse engineering involved.

Generic browser extensions can see the video files but choke on the auth requirements. This tool handles it by pulling your existing browser cookie, then you paste the video URL into the GUI and hit download.

### How It Works

The tool parses the M3U8 playlist to extract the segment list, filtering out metadata lines (anything prefixed with `#EXT`). Segments are downloaded in parallel via a `BetterWebClient` class that maintains the authenticated cookie session and tracks per-segment progress. Filenames are zero-padded during download (e.g. `p-1.ts` → `p-0001.ts`) to ensure correct sequential ordering before FFmpeg concatenates everything into a final MP4.

Honestly it could have been a browser extension. It’s a simple tool that solves a simple problem.

Source: [YogaAnytimeDownloader](https://github.com/Joexv/YogaAnytimeDownloader)

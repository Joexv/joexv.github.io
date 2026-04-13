---
layout: project
type: project
image: images/iconhorse.png
title: ICO Enumerator 5000
permalink: projects/ICO_Enumerator5000
date: 2023-06-07
labels:
  - C#
  - URLs
  - Clean Desktops
summary: Make your desktop shortcuts visually pop with icons from the web
---

A small CLI utility built for my computer repair customers. After a data transfer, desktop shortcuts lose their icons and everything ends up with the generic browser placeholder. This tool walks through the shortcuts, pulls the correct icon for each site from [icon.horse](https://icon.horse/), and applies it — so the desktop looks right without anyone having to manually hunt down icons.

### How It Works

Windows `.url` shortcut files are plain text INI-style files, so there's no Shell API needed — the tool reads each one, extracts the URL, hits `icon.horse/icon?uri={domain}` to fetch a PNG, then manually constructs an ICO binary (writing the header and embedding the PNG data directly using `BinaryWriter`) and saves it to `%AppData%\ICO_Enumerator5000\`. It then writes the `IconFile=` path back into the `.url` file. Originals are backed up before any changes.

Because Windows caches icons aggressively, the `-f 1` flag kills `explorer.exe`, deletes `IconCache.db`, and restarts Explorer so the new icons actually show up.

Source: [GitHub](https://github.com/Joexv/ICO_Enumerator5000)

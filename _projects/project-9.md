---
layout: project
type: project
image: /assets/images/owoer.jpg
title: OwOer
permalink: projects/owoer
date: 2020-07-01
labels:
  - Swift
  - Test
  - App
  - Mobile
  - Fun
summary: A fun text style converter for iOS, inspired by cringe internet culture
---

A joke project I built to learn Swift and Obj-C. There was a jailbreak tweak that uwu-ified notifications system-wide — mine just lets you type that way. You paste in text, pick a style, get cursed output.

All the conversion logic lives in `TextFunctions.swift`, shared between the main app, custom keyboard, and iMessage extension. The core isn’t actually regex — it’s dictionary-based character and word substitution using Swift’s `replacingOccurrences()`. Each style is a predefined mapping: `doubleStack` swaps characters for Unicode mathematical alphanumerics (𝕒, 𝕓), `Fraktur` goes gothic, `alien` uses obscure Unicode (ꍏ, ꌃ), `upsideDown` flips characters, and `clap` replaces spaces with 👏. The Zalgo style is the exception — it randomly sprinkles Unicode combining diacriticals (range `0x300`–`0x36F`) onto characters for the corrupted text effect. Ended up with 15+ styles total.

It’s still on the App Store. Not maintained.

Source: [OwOer](https://github.com/Joexv/OWOer)  
Download: [Apple App Store](https://apps.apple.com/us/app/owoer/id1466836303)

---
layout: project
type: project
image: images/Flork.png
title: FlorkOfStickers
permalink: projects/Flork
date: 2017-10-04
labels:
  - iOS
  - Stickers
  - Fun
  - Android
summary: The Official FlorkOfCows Sticker Pack!
---

I’d been following FlorkOfCows for years — the MS Paint sock puppet comics with their weird mix of nihilism and chaos were exactly my kind of humor. I built a sticker pack for myself and my friends, and it worked well enough that I reached out to Flork directly to license it properly so I could actually sell it. He agreed, and it became the only officially licensed FlorkOfCows sticker pack.

The app shipped on iOS and Android with 340 stickers. The artwork stays true to the original MS Paint style — no cleanup, no polish, exactly how Flork draws them.

### iOS

Built around Apple's native sticker pack extension framework. Each sticker lives in an `.xcstickers` asset catalog as a 408x408 PNG with a `Contents.json` metadata file. The iMessage extension uses `StickerBrowserViewController` and the Messages framework — Apple handles the sticker browsing UI, so there's no custom display code. Minimum deployment target is iOS 10.

### Android

The Android version is Kotlin and more involved. It runs as a full IME (Input Method Editor) — a custom keyboard service — so stickers are available in any app that accepts rich content input. On send, it checks whether the target app supports the sticker's MIME type via `EditorInfoCompat.getContentMimeTypes()`, then uses `InputConnectionCompat.commitContent()` with a `FileProvider` URI to deliver it. If the target app doesn't support the format directly (Signal being a common case), it silently converts to PNG using the Coil image library and retries. Ships with 5 bundled sticker packs extracted to internal storage on first run, with support for user-imported packs up to 4096 stickers.

Download: 
<a href="https://apple.co/3nKVxpy">Apple App Store</a>

<a href="https://play.google.com/store/apps/details?id=com.altappsunlim.florkofstickers">Google Play Store</a>
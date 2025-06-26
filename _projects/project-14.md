---
layout: project
type: project
image: images/Rogue-Slots.png
title: Rogue Slots
permalink: projects/Rogue-Slots
date: 2025-05-05
featured: true
labels:
  - Unreal Engine 5.4
  - Roguelite
  - Systems Design
  - UI/UX
  - Student Project
summary: A roguelite where your slot machine fuels your combat. Built in UE5.4, Rogue Slots challenges players to adapt, spin, and strategize their way through chaos, with layered systems, a bold UI, and player-first iteration at its core.
---

## Rogue Slots  
**Role: Combat Design • Technical Systems • UI/UX • Player Feedback**  
*Melted Pixels – Final Student Project*

---

### Overview  
Rogue Slots is a fast-paced roguelite where you carry **gOLDy**, a cursed slot machine, into battle. Every spin empowers you: buffs, effects, tools. There’s no penalty—just potential. Built in Unreal Engine 5.4, this project pushed us to take a volatile mechanic and **make it empowering, readable, and fun**.

This was my most system-heavy project to date, and the first time I approached design through the lens of player clarity above all else.

> **[Insert Image: Hero shot of player running with gOLDy attached mid-spin]**

---

### Design Challenge  
How do you take a mechanic built on randomness and make players want to engage with it?

Our early version of the slot machine was noisy. Too many reels, unclear buffs, weak feedback. Players didn’t know why to spin or what just happened. I focused on refining that system—trimming it down and embedding the feedback **into the game moment**, not into a separate menu or tutorial.

---

### My Approach

#### 🎰 Refining the Slot Machine  
I didn’t invent the slot system—but I made it understandable.

- Reduced from 9 visible reels to **3 active slots**  
- Embedded **buff timers directly inside slots**  
- Added fading, blur, and iconography for **clear slot state**  
- Built a **Jackpot Event system** (cut) that rewarded matching Stamp rolls with burst bonuses

> **[Insert Image: Side-by-side of old vs updated slot machine UI with buffs visible]**

---

#### ⚔️ Building Combat That Feels Reactive  
I designed the player combat system from the ground up:
- Attack animations synced with damage/hit frames  
- Cone-based hitboxes refined for weight and timing  
- Polished feedback: **particles, hit SFX, camera shake, hit pause**  
- Designed enemy attack timing to support player spacing and reactive play

> **[Insert Image: Player attacking multiple enemies while under the effect of a slot buff]**

---

#### 🧠 UI/UX That Carries the System  
With the slot machine, status effects, shop menus, and powerups—all active at once—**the UI had to do real work**.

- Designed and implemented the entire UI: HUD, menus, feedback prompts  
- Used **iconography** for Stamps and **color-coded borders** for Treatments  
- Created interaction layouts that were usable even during combat  
- Tuned every button, layout, and tooltip based on actual tester behavior

> **[Insert Image: Screenshot of clean HUD with active buff slots and readable layout]**

---

#### 🔧 Technical Systems & Support  
I also built core systems to support the rest of the team:
- **Event Flag System** to help level designers trigger gameplay changes  
- **Dynamic Music Transition System** to swap tracks smoothly between stages  
- **Timer + Best-Time Tracker** to reinforce speedrun and mastery elements  
- Built and implemented the game’s **HUB area**, including upgrade/shop NPC functionality

> **[Insert Image: HUB area with player interacting with shop or resting station]**

---

### Testing & Iteration  
A turning point came when a tester asked:  
> *"Why spin? The buffs feel permanent."*

That critique changed everything. I:
- Added **buff durations as animated bars inside each slot**  
- Faded expired buffs and blurred inactive ones  
- Synced audio hits to spin resolution  
- Upgraded spin animations to feel snappy and exciting

> **[Insert Image: Annotated HUD showing duration bar, blurred expired slot, and active spin FX]**

---

### What Got Scoped  
- **Jackpot Events**: Burst-reward mechanic for matching Stamps. Cut late for time/balance.  
- **Drawback Stamps/Slots**: Dropped early—confused players and disrupted flow  
- **Boss Encounters**: Planned unique boss fights became tougher waves due to animation and AI time constraints  
- **Planned Expansions**: Upgrade trees, adjustable starting loadouts, narrative cutscenes, and multi-level progression were left on the table

> **[Insert Image: Concept mockup of loadout menu or early boss design sketch]**

---

### Final Thoughts  
Rogue Slots wasn’t about chaos—it was about **trusting the system**. Every decision I made—from visual feedback to combat timing—was about giving the player control, even when outcomes were random. I didn’t just patch over confusion—I redesigned the communication around every spin, so players always knew what just happened, and why it was awesome.

> **[Insert Image: Final spin-to-buff moment during combat or cinematic player victory frame]**

---
layout: project
type: project
image: images/Rogue-Slots.png
title: Rogue Slots
permalink: projects/Rogue-Slots
date: 2025-05-05
labels:
  - Unreal Engine 5.4
  - Roguelite
  - Systems Design
  - UI/UX
  - Student Project
summary: A chaotic roguelite where your slot machine is both your weapon and your curse. Built in Unreal Engine 5.4 as a final student project, Rogue Slots fuses gambling mechanics with real-time combat and strategic upgrades.
---

### **Rogue Slots** was developed by **Melted Pixels** as our final student project at Full Sail University.

 Welcome to Rogue Slots, where fast-paced action meets the unpredictability of running away with a mountain of debt. You play as a broke gambler, carrying gOLDy ,  an old, retired slot machine with magical properties, fused to your back.

Every spin fuels your powers, from explosive attacks to life-saving health!

Explore the different personifications of your favorite casino games, face twisted slot machines looking to recoup their master's funds, and build your power through strategic upgrades, stamps, and treatments. No two runs are the same, and no spin is guaranteed. 

### Features
- **Slot-Powered Combat**: Abilities are tied to your machine's spins, choose wisely.
- **Stamps & Treatments**: Modify your slots with upgrades that trigger chain reactions, cast spells, or alter movement.
- **Evil Slot Machines**: Battle possessed mechanical monstrosities, each with unique behaviors.
- **Tactile Movement & Timing**: Carrying gOLDy slows you down, but buffs can turn you into a slot-fueled juggernaut.
- **Bonus Rounds**: Match icons for a massive burst of tokens between stages, a little luck goes a long way.

## My Roles – In Detail

### Combat Systems & Enemy AI  
I expanded on Dustin’s foundational enemy state machine, optimizing and enhancing its capabilities significantly. My work allowed us to handle potentially hundreds of enemies simultaneously without performance issues. Specifically, I:

- Designed and implemented enemy variants:
  - **Ranged Enemies**: Developed logic for ranged combat behavior.
  - **Lobbing Enemies**: Created projectiles leaving residual damage zones on impact.
  - **Charging Enemies**: Programmed AI behavior for enemies charging the player, becoming stunned upon collision.
  - **Boss Encounters**: Built unique boss mechanics and behaviors to diversify combat encounters.
- Optimized AI states to maintain stable frame rates during intense encounters.

### Slot Machine Systems & Mechanics  
Building upon Dustin’s initial slot machine setup, I significantly extended the feature with additional functionality, enhanced visuals, and audio cues. Key enhancements included:

- Implementing precisely timed audio triggers aligned with slot outcomes, providing immediate feedback.
- Integrating visual timers directly onto slots, clearly communicating buff durations to players.
- Streamlining UI from multiple slot rows to a single active row for clarity.
- Adapting existing "run-and-forget" logic into a more flexible and modular format, enabling easier integration of time-sensitive features without compromising stability.

### UI/UX Design and Implementation  
I managed the game's entire UI/UX implementation, emphasizing intuitive design and clarity. Highlights of my work include:

- Establishing a sleek, modern aesthetic using a clear black-on-neon color scheme, enhancing readability and theme consistency.
- Rapid prototyping UI layouts and interactions to iteratively test and refine usability, despite my limited artistic skills.
- Iterative UX improvements informed directly by player feedback, such as enlarging interactive buttons and embedding important information into central UI components.

### Gameplay Programming & Systems Integration  
I was responsible for creating robust, modular systems enabling seamless collaboration among team members. Notable systems included:

- **Modular Enemy Framework**: Allowed easy addition of new enemy types without modifying AI code.
- **Flexible Enemy Spawn System**: Enabled level designers to specify global or zone-based enemy spawns effortlessly.
- **Event Flag System**: Simplified triggering global game events by level designers without manual variable management.
- **Dynamic Background Music System**: Automated seamless music transitions between levels, simplifying audio management for level designers.
- **Level Timer & Best Time Tracking**: Created a consistent system for tracking and displaying players' best completion times.

Additionally, I frequently managed and troubleshot our version control workflows, assisting team members with merges and resolving conflicts.

### Playtesting, Feedback & Iteration  
I coordinated our playtesting processes and personally handled comprehensive analysis of feedback:

- Developed and administered structured feedback collection using Google Forms.
- Reviewed recorded gameplay extensively, pinpointing friction and confusion points.
- Identified and addressed critical UX and gameplay issues through rapid iteration, significantly improving player comprehension of the slot mechanic through targeted UI adjustments.

This rigorous and iterative approach was essential to refining Rogue Slots into an engaging, accessible experience.

### Team Melted Pixels
- **Dustin Russell** – Vision Holder, Systems & Gameplay Design
- **Kyle Elliot** – Level & Combat Design
- **Joelle Jahns** – Level & UI Design
- **Joe Oliveira** – Combat, Technical, and UI Design
- **Miguel Uliaz** – Level & Combat Design

### Art Collaboration | Asset Creators

- **Michael Reger**
- **Hannah Carroll**

### Current Status
This early prototype was built in Unreal Engine 5.4 and features two environments to play through. Expect bugs, surprises, and mechanical experimentation. Feedback is welcome!

[Download Rogue Slots from Itch.io](https://manmadeofgouda.itch.io/mp-rogue-slots)


### Retrospective - My Thoughts & Feelings
Working on Rogue Slots was genuinely one of the highlights of my game design journey. From the moment Dustin pitched me the concept before our Capstone, I was all-in. I’ve always loved roguelikes and roguelites, and the chance to innovate around the quirky mechanic of a slot machine as both weapon and buff-provider sounded incredible.

In past projects, I typically gravitated toward level design and foundational game mechanics, but this time I intentionally pivoted to technical design and broader programming responsibilities. My goal was to create robust, modular systems that my teammates could easily integrate their unique features into, all while maintaining consistency in gameplay feel and UI/UX.

My first priority was the player combat and the central slot machine mechanic. Initially, combat was straightforward: both the player and enemies used cone-based hitboxes. I quickly enhanced this by introducing clear visual indicators, like enemy charge bars, to better telegraph attacks. For the player character, I pulled animations from the Fab store and grabbed a whimsical toy hammer from CGTrader, carefully timing hitbox activation to animation frames for intuitive and satisfying combat swings.

The slot machine itself went through multiple evolutions. At first, it showed three rows of slots, similar to traditional machines, but I streamlined this to just one active row for clarity. Each slot provided visual and textual cues, enhancing readability. I also implemented a more ambitious "Stamps" system, where matching symbols could trigger powerful buffs or even humorous effects like transforming enemies into passive casino fruits. To maintain balance, equipping beneficial Stamps came bundled with negative effects, like tougher enemy behavior. Although I loved this feature, it was eventually cut to maintain game simplicity, but it's something I'd love to revisit, perhaps tying more directly into core slot mechanics.

Player feedback was crucial and sometimes brutal. During extensive playtests, I saw firsthand how even seemingly minor design decisions could dramatically affect player experience. For instance, making shop buttons physically larger to encompass item icons solved simple but frustrating UX issues players faced.

But not all feedback was easy to tackle. Early on, players repeatedly struggled with the slot machine mechanic itself, our core gameplay hook. Watching testers repeatedly fail to grasp such an essential feature was a wake-up call, forcing me into a deep dive: Was the machine unclear visually? Did it lack incentives? Was interaction unintuitive?

One tester crystallized the issue perfectly: "Why spin at all if the bonuses are always active?" This insight hit me hard. Players weren’t noticing the buff timers tucked away in the corner. To address this, I directly embedded timer indicators onto the slots themselves, fading and blurring slots visually when their buffs expired. It was a simple yet transformative change, immediately improving usability and enjoyment. Players finally understood the purpose and timing of each spin, making the core mechanic not just usable, but genuinely fun.

This experience reminded me of something critical: clarity and player perspective are everything. What’s obvious to a developer often isn't to players. Being open to feedback, even when it hurts, and willing to pivot quickly is a lesson I'll carry forward into every project.
---
layout: project
type: project
image: images/Menu.png
title: FX420 Menu Creators
permalink: projects/MenuCreators
# All dates must be YYYY-MM-DD format!
date: 2019-01-01
labels:
  - C#
  - Raspberry Pi
  - Screenly OSE
  - ImageMagik
  - Excel
summary: Two incredibly useful programs for making FX420's menus
---
The MenuCreators are two tools, to easily edit, convert, and upload Excel spreadsheets to Screenly OSE digital signage.
Created for use by FX420, but the projects are open source and available to anyone! Can be used locally or remotely via command line tools.


Background on why these were created.(Apologies if this ends up being jumbled or kind of rant-y)
90% of my job as an in house IT person for a dispensary I am updating menus on TVs And at first this consisted of, making excel files, manually converting them into pictures, putting them on flash drives and walking them out to all of our TVs. This got very repetative and caused a lot of headache with trying to jump around coworkers who were trying to help customers, and customers getting angry that the menus were down for more than 2 milliseconds.

My initial solution was to setup a local website that the TVs displayed. This allowed me to update them remotely, but caused the issue of caching and refreshing the site whenever I needed rather than on a timer.
Because these are running on smart TVs restricting the cache settings directly on the device were a no go. And forcfully blocking caching on the website side of things, didn't pan out well, as methods that have worked for me for normal everyday browsers, ended up not working properly on the TVs.

After some more reaserch I determined that a digital signage solution would be my best bet. but which one to use? Most digital signage companies charge for proprietary hardware alongside of a subscription service. As understadning as I was of why they do this, it was frustrating. I was new at the company and needed to show that I could come up with creative solutions without charging the company an arm and a leg just to "make my job easier".

During my research I found Screenly OSE. Free to use and I could run it on a $15 raspberry pi zero, with little to no issues. So we got the pi's ordered, setup and screenly installed. Perfect! Or so I thought. Screenly OSE (if you havent used it). Runs a local WebUI for managing assets, as most digital signage does, which meant I then had to keep track of 6 different IP addresses to manage the content on these screens. My solution to this, at first, was a new website that simply had links to all of these inside of a view container. This website mixed with the menu creators to automatically create PNGs of the excel files worked for quite some time! I was very pleased with how things were running.

Then came the new business partner. This new partner ran his personal dispensaries with one rule, eveyrone has the same job position. Doesn't matter who you are or when you get hired on, everything needs to be accesable by everyone. And so when he came on board with our dispensary, this caused quite a few issues. Most of our staff was/is not fit for handling the insane amount of cash that we have to process every day, and not a single one of our staff, aside from me, even knew what Excel was. Immediately there was a lot of worry regarding not only the menus being tampered with by people not knowing what they were doing, but it also meant people were going to be able to access the security system I had spent weeks installing and setting up to be fully OLCC complient. After a lot of discussion with the business partner, we came to an agreement. I make menus and other aspects of my job available to everyone else in the store, and I help on the floor selling product(I dont smoke, never have and never will, so this was kind of a problem as I had no knowledge of any of the products we sold), and I would be able to keep the security system for just me and upper management. So I began working on trying to get the menus even more automated and easier to use.

This started with having the menu creators automatically handle colors, borders, and imagry for the menus. Eventually I got it so that a few coworkers trained to use the tools, and got them down to very few and small mishaps. And as life tends to go, as soon as that happened, the owner dropped the partner. Which meant the work standarizing everything was for nothing. This didn't really bother me too much, as I knew I wouldn't be at this dispensary for forever, so I kept working on making the tools easier to use and more accessable to everyone. Now, everything aside from adding products has been automated. And can even be done remotely via my slack bot.

I feel like now, if I were to get a job offer I couldn't refuse, I would be comfertable taking it knowing that the dispensary can continue to do all of my daily tasks without needing extensive knowledge on computers.
I know that you really don't need *tons* of knowledge to make menus, but theres other aspects of what I do here, that I have simplified for easy use. Like what happens if a printer breaks????? That's what the MayDayButton I created is for! You can check that out on my 'Projects' page, full source and everything!

You can check out the source code on github below.
Source: 
[Menu Creator](https://github.com/Joexv/FX420_MenuCreator) || 
[Strain Menu Creator](https://github.com/Joexv/FX420_StrainMenuCreator)




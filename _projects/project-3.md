---
layout: project
type: project
image: images/MayDay.jpg
title: MayDay Button
permalink: projects/cotton
date: 2014-04-12
labels:
  - C#
  - IT Resources
  - Printers Suck
summary: A toolkit for end users to fix their mistakes
---

I was the in-house IT guy at a retail operation that ran Surface Pro tablets as registers. The printers were constantly breaking down — not hardware failures, just the Adobe print driver and Windows spooler needing to be reset over and over. I wasn’t given the budget or approval to replace the setup or push proper policy through Group Policy / Active Directory, so MayDay Button was the patch.

It started as a big MAYDAY button that staff could hit to reset the spooler and clear the print queue themselves without calling me. From there it kept growing as I added every fix I found myself doing repeatedly — Adobe resets, software restarts, whatever kept coming up. Three additional customizable buttons let me adapt it to different stations.

### Remote Access

The core logic lives in `MD_Core.cs`. Each workstation runs a TCP listener — preset commands are sent by ID and executed locally. Custom commands come through as an encrypted, password-protected string from my hub, which the client decrypts and runs. Not the most elegant architecture, but it worked reliably and I could push a fix or remote in with one click without leaving my desk.

The GSM modem integration meant I got a text any time something triggered — paper low, hardware failure, or if someone tried to close the app. Slack integration handled off-hours communication, letting me message users directly from their workstation context. Or to let users adjust pricing on the fly by sending commands in slack.

The WinForms UI has three configurable action buttons alongside the main MAYDAY button, adaptable per station depending on what software it was running.

### What I Wanted To Do

The right solution would have been Group Policy and Active Directory — push fixes centrally, manage everything properly. I had the plan, but didn’t get the go-ahead. MayDay was the workaround.
<hr>

Source: <a href="https://github.com/Joexv/MayDay-Button"><i class="large github icon "></i>Github</a>



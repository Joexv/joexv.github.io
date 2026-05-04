---
layout: project
type: project
image: /assets/images/inventory.png
title: Inventory Manager
permalink: projects/IM
date: 2017-01-01
labels:
  - C#
  - Excel
summary: A basic inventory/customer management tool
---

Built out of necessity at the computer repair shop I eventually ended up owning. When I started there, customer records lived in Excel files — usually just a name and phone number, rarely anything more. I built Inventory Manager to actually track repair history, transactions, and customer details in a way that was usable.

The name is a bit misleading — we never really used it for inventory. It became a customer and order management tool. Once I moved it off flat files to LiteDB (an embedded file-based NoSQL database) it held up much better, and that transition was also where I picked up the fundamentals of database design.

### How It Works

Customer IDs are generated from first initial + last name + last 4 digits of phone (e.g. `JSmith1234`). Each customer record holds contact details, an array of devices, and a list of repair tickets per device. Tickets track issues with timestamped notes, parts used with quantities and costs, and flags like whether an adapter came in with the machine. The UI is WinForms with a sortable DataGridView for the customer list. Reports and job tickets export to Excel using COM interop against embedded `.xlsx` templates, then print or save to PDF. There’s also TextMagic API integration for SMS notifications to customers.

### Protection Plan Tracking

I designed a protection plan for the business — customers paid a small recurring fee in exchange for heavily discounted tune-ups, maintenance, and labor. The tracking in Inventory Manager flags enrolled customers and tracks whether the plan was net positive per account. I designed the plan itself, not just the software for it.

### The Lost Code

The other owner physically dropped my external hard drive — the only copy of the latest source at the time. I don’t fully remember why it wasn’t on GitHub yet, probably just an oversight. What survived is on GitHub, along with a rewritten customer handling module to fix bugs in the original.

I became part owner ten years ago and full owner last year. The other owner had moved states years before that, so in practice I’d been running it alone long before the paperwork caught up.

Source: [Inventory Manager](https://github.com/Joexv/InventoryManager)

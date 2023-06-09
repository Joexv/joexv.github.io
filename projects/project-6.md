---
layout: project
type: project
image: images/inventory.png
title: Inventory Manager
permalink: projects/IM
# All dates must be YYYY-MM-DD format!
date: 2017-01-01
labels:
  - C#
  - Excel
summary: A basic inventory/customer management tool
---
I used to work for a computer repair company and, at the time when I was first hired on, they used excel files to "keep track" of customers that have come into the store and what kind of work was done to their devices.
I say "Keep track of customer files" loosely because these excel files were never updated past the customers name and phone number. And sometimes not even that much.
I wanted to come up with a way to make sure that everyone kept things nice and organized. Thus my inventory management program was born. While we never ended up using it for inventory or order tracking, we did use it religously for our customers. This not only helped us out by being able to keep track of what work we had done, but it made the customers happy seeing more information on their printed invoices at the end of thier transactions.

We also ended up introducing an insurance program for our customers and thus I added in a tracking system, to make sure we know whos payed, if/when someone makes a claim, and if we are even making a profit based on the amounts claimed and what people were paying.

Now, when I left the company, I was still on very good terms with the Owner. And he continued to use the program. But I forgot to backup my latest source to anywhere besides their computers, and since then he has since deleted the source. Everything on Github was what little backups I had personally, plus a rewrite of most of the customer handling that I ended up doing later on to fix some bugs that were present in the version the Owner still had. I am not actively maintaining this as it was scrapped together kinda quickly to make sure we had something to work with. Additionally, the customers are stored in ini files as, at the time, I couldn't for the life of me figure out how to setup a proper Database, and by the time I had figured out how, there were too many customer files to seemlessly import from the ini files.
Maybe one day I will recreate this with a proper database and documentation. But for now, it will stay as it is.

Source: [Inventory Manager](https://github.com/Joexv/InventoryManager)




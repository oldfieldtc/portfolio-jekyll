---
slug: rss-feeds-are-underrated
title: RSS feeds are underrated
pubDate: 2023-08-30
description: With the shutdown of third-party apps for Reddit, I took a look at RSS, the 20+ year old technology to help me keep up to date with the world.
author: Tommy Oldfield
image:
  filename: rss-is-underrated
  alt: RSS logo on top of FreshRSS screenshot
external:
  isExternal: false
categories: ['Self-hosted', 'RSS']
tags: ['FreshRSS']
---
Recently, I had been reading [Cal Newport’s ‘Digital Minimalism’](https://www.penguin.co.uk/books/308636/digital-minimalism-by-newport-cal/9780241453575) in an effort to reduce my overall screen time and to stop [phubbing](https://en.wikipedia.org/wiki/Phubbing) the people around me. With the recent API changes and subsequent shutdown of third-party apps for Reddit (RIP Apollo), I felt that this was the perfect time to delete all social media apps from my phone and try to take back control of my time. This left me with a problem. How was I going to keep up to date with what’s going on in the world?

I decided to look into a technology that was released over 20 years ago, RSS. RSS (and Atom/XML) feeds are everywhere! From news to recipes, jobs, music reviews, podcasts, blogs, you name it, many sites produce feeds that people can use.

## FreshRSS
For my feed reader/aggregator, I went with [FreshRSS](https://github.com/FreshRSS/FreshRSS) as it is open source and self-hostable, allowing me to use features that other aggregators like [Feedly](https://feedly.com/) and [Inoreader](https://www.inoreader.com/) may charge for and to be in charge of my own data. For mobile and desktop viewing, I use [NetNewsWire](https://netnewswire.com/) and [Fluent Reader](https://hyliu.me/fluent-reader/) respectively using the built-in API from FreshRSS to keep everything in sync.

## Pros and cons
For me, the main benefits for using RSS feeds are:

- The news/articles that I see are from sources that I’ve chosen.
- I don’t need to check multiple sites for news, everything gets fed into one place.
- The process is automatic. By subscribing to an RSS feed, the content comes to me, I don’t need to seek it out.

Aside from being a system admin and making sure that FreshRSS is working on my server, the main downside is that not every site uses RSS/Atom feeds. [Searches for RSS](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0n5tx&hl=en-GB) have been dropping since 2006 and due to this, many sites aren’t supporting and providing RSS feeds when they may have done so in the past.

## The future of RSS
While RSS isn’t as popular as it once was, there are still people and companies using and creating feeds and I don’t think it is going away any time soon. With apps like [Feedly](https://feedly.com/) and [Inoreader](https://www.inoreader.com/) and sites such as [FeedSpot](https://rss.feedspot.com/) providing links to RSS feeds, it has never been a better time to get started.

If you aren’t already, I’d encourage you to start using an RSS reader/aggregator and subscribe to some RSS feeds for topics that you’re interested in. If you have any RSS feeds that you recommend, let me know and if you like, you can subscribe to my [RSS feed](https://tommyoldfield.co.uk/feed.xml) too!

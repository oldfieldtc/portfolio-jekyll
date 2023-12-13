---
title: Out with the old, in with the new
slug: out-with-the-old-in-with-the-new
pubDate: 2023-02-08
description: In 2022, I decided to revamp my website and delve into the JAMstack. Out with the old and in with the new!
author: Tommy Oldfield
image:
  filename: website-mbp-mockup
  alt: Someone sitting at a desk with a laptop, tablet, and phone all with my website displayed.
external:
  isExternal: false
categories: ["Work"]
tags: ["Jekyll", "Portfolio"]
---
It was time for a change. I had built my first portfolio site in 2019 after completing [CS50's Web Development course](/work/cs50) but it had slowly become outdated and was in need of a revamp. I had built the site using [Flask](https://flask.palletsprojects.com), a Python framework, and hosted it on Heroku's free tier, but as I didn't update it often and had since moved away from Python to PHP, updating it had become a hassle.

In 2020, I toyed with the idea of rebuilding my portfolio site using another Python framework, [Django](https://www.djangoproject.com/), as I wanted to have a blog and other CMS functionality. As soon as I got [Wagtail](https://wagtail.org/) up and running and began prototyping the site, I lost interest in the project.

## In with the new

At the start of 2022, I decided to start this project again and chose to host the website through [GitHub Pages](https://pages.github.com/), using [Jekyll](https://jekyllrb.com/), the static site generator. Although I may consider other options in the future, I have really enjoyed using Jekyll and the features it provides.

### AWS

To keep the repo light for deployment, I chose to store my images on [AWS S3](https://aws.amazon.com/s3/) as their free tier is extremely generous and their pricing afterwards is fair. This is paired with [CloudFront](https://aws.amazon.com/cloudfront/), which allows me to access and link to my images via a subdomain.

To keep file sizes down, I use [sharp](https://sharp.pixelplumbing.com/) to convert images to JPEG, WEBP, and AVIF, and the [AWS SDK](https://aws.amazon.com/sdk-for-javascript/) to automatically upload the images to my S3 bucket.

### Cloudflare

Towards the end of development, I decided to switch from GitHub Pages to [Cloudflare Pages](https://pages.cloudflare.com/) for hosting. I like the integration with the GitHub repo and automatic deployment with each commit, as well as the ability to create different sites for testing and development branches. Additionally, I was already using Cloudflare for DNS and SSL certificates, making the switch a no-brainer.

## Future plans

Right now, I'm really pleased with the website setup and the technology behind it so I don't plan on changing frameworks or hosting provider in the near future. However, I am looking forward to adding more functionality to my site through service workers ([Cloudflare Workers](https://workers.cloudflare.com/)) and APIs to query databases. The possibilities for adding to a static, lightweight site with the multitude of services available are endless, and I look forward to exploring them!

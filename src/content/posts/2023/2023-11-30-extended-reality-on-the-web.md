---
title: Extended reality (XR) on the web
slug: extended-reality-on-the-web
pubDate: 2023-11-30
description: Extended reality (XR) is gaining more attention thanks to new headsets from Apple and Meta alongside AR apps like Snapchat and Pokémon Go on smartphones, but how can universities take advantage of this technology?
author: Tommy Oldfield
image:
  filename: man-using-vr-headset
  alt: Man wearing a VR headset
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2023/11/30/extended-reality-xr-on-the-web/
categories: ['External', 'Extended reality']
tags: ["Augmented reality", "Virtual reality", "Mixed reality", "WebXR"]
---

This post was originally posted on the [Digital Communications blog](https://digitalcommunications.wp.st-andrews.ac.uk/).

Extended reality (XR) is gaining more attention thanks to new headsets from Apple and Meta alongside AR apps like Snapchat and Pokémon Go on smartphones, but how can universities take advantage of this technology?

## What is extended reality?

So what is extended reality? At a basic level, extended reality covers virtual, augmented, and mixed reality. These technologies intend to combine and provide interaction between the physical and digital world. Usually this would involve putting on a headset or using your phone.

### Virtual reality

Virtual reality (VR) allows users to enter virtual worlds using hardware such as a VR headset and controllers that provide the immersion. VR experiences are digitally generated and there is no interaction with the real world. Currently, VR is used for entertainment (mostly gaming), education, training, and business.

While hardware such as headsets and controllers are used to track movements and interactions, the experience can be enhanced with other features and accessories. Full face and eye tracking are possible with some VR headsets and full body tracking with hands and feet is possible with certain accessories.

### Augmented reality

Augmented reality (AR) blends computer-generated content with the real world. If you’ve ever played Pokémon Go or used a photo filter on Snapchat, you’ve used augmented reality.

This technology is mainly used on mobile phones using the built-in camera, and it uses both hardware and software to track movements, provide interaction, and display information back to the user.

Like VR, it’s currently used for entertainment (gaming and Snapchat filters), retail, education, and training.

### Mixed reality

The definition of mixed reality (MR) is contentious as no one can fully agree what it is! There is plenty of discussion about the [definition of mixed reality on Wikipedia](https://en.wikipedia.org/wiki/Talk:Mixed_reality) and three researchers have even put together a research paper titled ‘[What is Mixed Reality?](https://dl.acm.org/doi/10.1145/3290605.3300767)’. In reading many points-of-view, I think that mixed reality combines both virtual and augmented reality. It merges real-world and computer-generated environments and allows integration and interaction between the two.

To make things even more confusing, Microsoft have their own branded ‘[Windows Mixed Reality](https://learn.microsoft.com/en-us/windows/mixed-reality/discover/mixed-reality)’ platform with their own range of headsets. Microsoft’s definition is that mixed reality is a spectrum with augmented reality on one end (digital affecting the physical) and virtual reality on the other (physical affecting the digital).

A good example of what I would consider mixed reality is the game [Mario Kart Live: Home Circuit](https://www.youtube.com/watch?v=Q8MTTuM6q2Q). You’ve got a mix of augmented reality, where the course is overlayed on your floor when viewed on the Nintendo Switch, and virtual reality, where the physical cart is navigating through the virtual course. There’s also the interaction between the two realities where powerups in the game affect your physical cart, and the race itself when other players and carts are used and the game updates based on what position you’re in.

## Implementing XR on the web

A popular way to implement XR on the web is using the [WebXR](https://immersiveweb.dev/) device Application Programming Interface (API). WebXR allows users to create XR experiences within your browser and allows interaction from hardware such as VR headsets and mobile phones. There are a number of [JavaScript based libraries for implementing WebXR](https://immersiveweb.dev/#gettingstartedbuildingawebxrwebsite) and even video game engines such as Unity can export games and 3D environments to the browser via WebXR.

Currently, WebXR is still under development and [browser support for WebXR](https://caniuse.com/webxr) is limited to Chromium-based browsers. On mobile devices, I believe Android natively supports AR experiences generated through WebXR, but you can download the [Google Play Services for AR](https://play.google.com/store/apps/details?id=com.google.ar.core&pli=1) app from the Google Play Store if not already installed. For iPhone and iOS, there is no native support for XR, but this can be added with the [WebXR Viewer](https://apps.apple.com/us/app/webxr-viewer/id1295998056) app.

### XR examples
#### Virtual reality

These examples can be viewed and interacted with in the browser without the need for a VR headset. To get the most out of these examples, please use Google Chrome.

- [Above Par-adowski WebXR Mini-Golf](https://aboveparadowski.com/)
- [VR classroom](https://vr-classroom.evulpo.com/) – [Live demo of VR classroom](https://twitter.com/ifg76/status/1641818513395400704)
- [XR zen garden](https://ada.is/xrgarden/)

#### Augmented reality

- [XR Dinosaurs](https://www.xrdinosaurs.com/)
- [Immersive AR session](https://immersive-web.github.io/webxr-samples/immersive-ar-session.html)
- [Sunflower hit test](https://immersive-web.github.io/webxr-samples/hit-test.html)

## Use in Higher Education
### Metaversities

Some universities and colleges around the world have been using XR technology to teach students in a virtual world. Dubbed ‘metaversities’, these higher education institutions host lectures, classes, and even entire courses in a virtual world using VR. Some universities have taken things further and have created full virtual replicas of their campuses for virtual learners to attend. As long as students have a VR headset, they can learn from the comfort of their own home anywhere in the world.

Some universities who have their own metaversity are [Morehouse College](https://www.forbes.com/sites/charliefink/2021/03/09/morehouse-college-starts-vr-classes-with-victoryxr/), the [University of Kansas School of Nursing](https://www.kumc.edu/about/news/news-archive/nursing-metaversity.html), and the [University of Iowa](https://www.youtube.com/watch?v=fjdvWjF4vKQ).

### Research and learning

Many universities are already using XR for research, learning, and teaching. At the University of Glasgow, they’ve built [ARC-XR](https://www.gla.ac.uk/research/arc/xr/), a dedicated XR space in their Advanced Research Centre. The life sciences team there have created and made publicly available [3d models of viruses, infected cells, organs and embryos](https://sketchfab.com/GLS/models) for use in teaching.

The University of Michigan are using [XR in the School of Dentistry](https://ai.umich.edu/projects/comparison-of-student-learning-of-head-and-neck-anatomy-and-diagnosis-of-pathology-using-xr/) where they are using VR to improve student learning of CBCT images and head and neck anatomy. The College of Engineering have also recreated a nuclear reactor in VR to teach students how a nuclear reactor works in a radiation-free environment.

Here at St Andrews, there are a couple of XR-related projects going on that I’m aware of: [Open Virtual Worlds](https://www.openvirtualworlds.org/) in the School of Computer Science and [CVI-SIM](https://medicine.st-andrews.ac.uk/vision-in-childhood/) in the School of Medicine.

## How can the University use XR?

Apart from the two XR-related research projects I’ve mentioned, I think we should be encouraging the use of this technology via the [digital theme of the University Strategy](https://www.st-andrews.ac.uk/about/governance/university-strategy/digital/). There are a number of ways the University could be using this technology.

Historically, many departments have used the term ‘virtual’ to describe things that have taken place online over MS Teams or Zoom – ‘virtual’ visiting days, events, courses – and it would be great to see ‘virtual’ being used for virtual reality. I’d love for there to be a virtual visiting day where new and prospective students could visit a digital recreation of St Andrews in VR and get to know the town before arriving. Extending this to School buildings so that students can find their classrooms and view student accommodation could alleviate any fears and build confidence in new students.

At graduation, rather than Estates bringing down the huge ‘UStA’ letters and University crest to St Salvator’s Quad for people to take pictures at a specific spot, you could use AR to drop in 3D versions of the letters and crest for people to take pictures all across St Andrews.

XR could also be used to enhance learning and teaching. In Medicine, you could use AR to show information about a particular body part or organ and you could use VR to really explore the human body – shrinking down and exploring the heart’s valves for example. If you were studying ancient history, you could visit ancient Greece or Rome during Julius Caesar’s reign in VR.

## Conclusion

With older VR headsets becoming more affordable and most smartphones having AR capabilities, the barrier for developing and having XR experiences has never been lower. While other universities are ahead of the curve when it comes to XR, I can see its popularity rising in the future with its application in teaching and learning.

## Further reading

- [Creating an XR nuclear reactor](https://ai.umich.edu/blog-posts/mixr-studios-podcast-creating-an-xr-nuclear-reactor-with-guest-brendan-kochunas/)
- [The Metaverse – the future of higher education](https://www.terminalfour.com/blog/posts/the-metaverse---the-future-of-higher-education.html)
- [How XR technology is revolutionising learning and teaching experiences](https://www.linkedin.com/pulse/how-xr-technology-revolutionizing-learning-teaching-kim-gurinov/)
- [BBC – Virtual reality brings new vision to workplace training](https://www.bbc.co.uk/news/business-66393315)
- [US Government Accountability Office – Science and tech spotlight: Extended reality technologies](https://www.gao.gov/products/gao-22-105541)

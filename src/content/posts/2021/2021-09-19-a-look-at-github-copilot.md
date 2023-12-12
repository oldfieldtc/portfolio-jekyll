---
title: A Look at GitHub Copilot
slug: a-look-at-github-copilot
pubDate: 2021-09-19
description: At the end of July, GitHub released a new AI tool called Copilot that helps developers write code. I investigate what Copilot is, how it works, and give developers the peace of mind that their jobs aren’t at risk.
author: Tommy Oldfield
image:
  filename: github-copilot
  alt: The GitHub Copilot logo superimposed on a screen with code.
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2021/09/14/a-look-at-github-copilot/
categories: ['External', 'Technology', 'Artificial intelligence']
tags: ["GitHub"]
---

> This blog post was originally published on the [Digital Communications team blog](https://digitalcommunications.wp.st-andrews.ac.uk/2021/09/14/a-look-at-github-copilot/). 

At the end of July, GitHub released a new AI tool called Copilot that helps developers write code. I investigate what Copilot is, how it works, and give developers the peace of mind that their jobs aren’t at risk.

## What is GitHub Copilot?

[GitHub Copilot](https://copilot.github.com/) is an extension for the code editor VS Code and has been dubbed “Your AI pair programmer”. What this extension does is give you suggestions based on the code you write, including any comments. It’s powered by Elon Musk’s [OpenAI](https://openai.com/) and it has been trained on billions of lines of code from public GitHub repositories.

With it being artificial intelligence, it is constantly adapting and learning based on the suggestions that you accept or reject.

GitHub says it works especially well for programming languages such as Python, JavaScript, Typescript, Ruby, and Go. It says it also understands dozens of other languages, which aren’t listed, but with the AI being trained on billions of lines of code, I would think it would have no trouble giving suggestions for other popular languages like PHP.

## Features
- Converts comments into code
- Writes functions based on the function name and its parameters
- Generates similar but repetitive code based on examples you give it, for example, variables for seconds in a day, month, year, etc.
- Creates tests
- Can help you learn and understand new technologies

## How it works

The AI has been trained on code from public code repositories and text from the internet, so it can understand both programming and human languages. The Copilot extension in VS Code sends your file’s code and comments to the Copilot service, which then uses OpenAI to suggest code to you. These suggestions can either be approved or denied which helps the AI give better suggestions in future.

Because the AI has been trained on human languages, I’ve seen people say they’ve been using Copilot to help them write content. Although, based on suggestions that I’ve seen, I don’t think Copilot will be writing news articles and opinion pieces any time soon.
## Caveats

While the technology and the features look impressive, there are a few downsides to Copilot:
### The AI isn’t perfect

Based on their benchmarking tests for functions in Python, Copilot filled in the functions correctly 43% on the first try. This increased to 57% when allowed 10 attempts. I can see this number increasing in the future due to the feedback the AI will be getting from users.

Copilot doesn’t test the code it suggests so it may not always work or even make sense. There is also a chance that the suggestions are offensive! A [recent study](https://arxiv.org/abs/2108.09293) also found that around 40% of Copilot’s code suggestions had security vulnerabilities in them. This could be due to the fact that Copilot may suggest old or deprecated code libraries and programming languages.
### Availability

As of writing this post, there’s currently limited access to the technical preview – users have to sign up and be selected to use the Copilot extension. Once the technical preview is over, GitHub says their plan is to build a version for commercial use. They also state that they’ll be focusing on “delivering the best experience in VS Code only”, which is bad news for users of other code editors such as Sublime Text or Atom.
### Personal use

Unfortunately, I haven’t even used GitHub Copilot yet! Everything that I’ve shared in this post has been from the GitHub Copilot web page and it would’ve been nice to share my own experience with it. However, I have signed up and I’m waiting to get access to finally try it out and see what the fuss is about!
## Conclusion

Will Copilot or another AI replace developers? With the caveats that I listed above, I don’t think so. While the technology is very impressive, I think human developers will be safe in their jobs for the time being and will still be using [Stack Overflow](https://stackoverflow.com/) for help.

Much like using Stack Overflow to get help with your programs, I think (and would hope) that these kinds of AI tools will continue to assist developers with their programs rather than replacing them entirely.

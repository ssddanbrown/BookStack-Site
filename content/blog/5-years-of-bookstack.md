+++
categories = ["News"]
tags = ["News"]
title = "Five Years of BookStack"
image = "/images/blog-cover-images/mountains-jerry-zhang.jpg"
author = "Dan Brown"
slug = "5-years-of-bookstack"
draft = false
date = 2020-07-28T23:00:00Z
description = "At five years old we take a look at the numbers we've hit"
+++

With a [first commit](https://github.com/BookStackApp/BookStack/commit/eaa1765c7a68cd671bcb37a666203210bf05d217) dated Sunday the 12th of July 2015, BookStack is now over 5 years old. Looking back, those 5 years have appeared to fly by but within that time there's been a lot of growth, both for me as a maintainer and in regards to the project itself. 

For the 5th year anniversary I thought it would be interesting to collate some numbers to quantify the scale of the project while also sharing my experience of maintaining & managing the project.

### BookStack, In Numbers

At the time of writing *(28th July)*:

#### GitHub Figures

- [5,050 GitHub stars](https://github.com/BookStackApp/BookStack/stargazers)
- [817 forks on GitHub](https://github.com/BookStackApp/BookStack/network/members)
- 2,202 GitHub issues and PRs opened
- 1,296 GitHub issues closed, 508 open
- [90 releases published](https://github.com/BookStackApp/BookStack/releases)
- 1,322 git clones in the last 14 days, 560 unique

#### Code Repository Stats

- [2,200 commits](https://github.com/BookStackApp/BookStack/commits/master)
- 127 direct git contributors
- 51,814 lines of code across 1112 files
    - PHP 82.9%
    - HTML 8.1%
    - JavaScript 5.9%
    - CSS 3.1%

#### Social & Docker

- [667 Discord members](https://discord.gg/ztkBqR2)
- [144 Subreddit members](https://www.reddit.com/r/BookStack/)
- [> 45,000,000 docker hub pulls](https://hub.docker.com/search?q=bookstack&type=image)

#### Website Analytics

Main bookstackapp.com site only, Averaged over last 90 days:

- 431 unique users per day
- 1,565 page views per day
- Operating system breakdown:
    - 49.17% Windows
    - 20.55% Mac
    - 12.31% Android
    - 9.78%  Linux
    - 7.72%  iOS

Growth since January 2016:

![BookStack site users over time](/images/2020/07/bookstack_website_2016_2020.png)

#### CrowdIn (Project Translations) Numbers

- 26 languages
- 4243 words to translate
- 64 project members

#### Thoughts

I've always kept an eye on GitHub stars, so its satisfying to hit the 5k mark at the same time as hitting 5 years. The GitHub stars have been slowly accelerating. The [first 1k](https://www.bookstackapp.com/blog/1k-stars-and-v0-19-0/) took about 2 years & 3 months to accrue, whereas we hit 4k only in February this year.

For me, The two most surprising figures are the docker pulls and the discord member count. 45 million is just a staggering number of docker pulls to imagine. I know there's a massive amount of automation in that area leading to such an inflated figure but I still double take when seeing it.

The discord user count gives me a warm fuzzy feeling; It's incredible that so many people have reached a level of admiration towards the project that they'd subscribe themselves, and remain in, a chat room purposed for it. I was nervous at first about needing to monitor an instant messaging social channel but it's definitely grown on me as an ideal place for informal project chat.


### My Experience of the Last 5 Years

Within the last 5 years I've bought my own house, adopted a cat, become a Tech Lead at work and discovered I have, and learnt to live with, a chronic arthritis-based disease. During this time BookStack has been a large part of my life, with many weekends and evenings dedicated to the project.

For the most part, I'm really happy with the project and its growth. I absolutely love open source software and being part of something in that area is wonderful. Working on the project has forced me into many new areas of development & technology including LDAP, SAML, Web Accessibility and multi-language support (Including supporting right-to-left content). Accessibility has been my favorite topic so far since it was something I thought I knew but in reality was a subject I had little depth in. Learning how to make the platform more inclusive to those with disabilities has not only been mindfully rewarding but it has also been rewarding in skills and fundamental understandings I can utilize in my other work.

The social aspect of managing something like BookStack has been quite a new experience for me. I'm not too much of a social person by default, so working out how to deal with the thoughts and opinions of a growing amount of people has been a challenge. The anonymisation and distance inferred by the web introduces a lot of unknowns to each issue & pull request that is addressed; In many cases you have no idea of the skill, experience, history or the intentions of the other party. Their idea of what the project is, or should be, may be completely different to my own. As time goes on I feel I'm getting better at knowing where to draw the scope for the project and how to be assertive in that scope. The hard part comes in the reasoning when you have to disappoint, It can be a tricky & time consuming task to apply the thought and write out the reasoning from the maintainer perspective, especially when an idea or request is popular so that perspective is very much the minority. A good example of this can be seen with [my thoughts for SQLite/PostgreSQL support here](https://github.com/BookStackApp/BookStack/issues/76#issuecomment-494956958).

GitHub issues do seem to have a mental burden. I take a lax approach to closing off issues, since I prefer to leave things open to feedback & opinion even if I do not intend to include, which may not help but seeing that counter increase can yet remain worrisome. I think it's likely due knowing that each of those could potentially take a lot of time, some may take mere minutes but some can consume an evening or even weekend with little reward in return. I am very thankful to those that help out and to those that spend the time detailing or investigate the issue when posting. 

There are two main principles I've learnt when it comes to GitHub issues & pull requests:

1. Always be polite & thankful where possible. I always remind myself that these are people that are taking their own time to report an issue, or are passionate enough about the project to share their own opinion. In many cases it'll be someone's first interaction with GitHub or open source; The extra effort to make that a positive experience is likely well worth it.
2. If my initial reaction to an idea or request is negative, Don't respond right away but come back to it in a day or two. With time often comes additional perspective and empathy which may change your alignment on the matter, or at least allow for a more constructive response.

One thing I still find particularly tricky are pull requests. Once someone has put the time in to create something it becomes more awkward to reject or request fundamental changes. In addition, merge of a pull request can often force my focus to less interesting busy-work like documenting, implementation clean-up and test writing. That's not to say I'm not appreciative of people's efforts though, it's amazing that individuals are interested enough to contribute, it's just that I need to learn how to manage that process better.

Over the next couple of years I'd like to attend a few open source events & conferences. It would be great to speak to others with similar projects to get some first-hand advice and learn to build up a community in a manageable way.

### BookStack on YouTube

As a positive addendum to this five year post, I've been seeing some great videos emerge on YouTube that cover how to install or configure BookStack in various cases. Here's a couple of examples:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NhPw1DvxYZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_13K1DeZwhk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There are many other videos out there; I'm keeping track of any I find, that feature or mention the project, in this playlist: https://www.youtube.com/playlist?list=PLMI5XWgNpCyVjdIqx9oPoHl2y42Rph3Co

---

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <span>Photo by <a href="https://unsplash.com/@z734923105?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jerry Zhang</a> on <a href="https://unsplash.com/s/photos/mountain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></span>
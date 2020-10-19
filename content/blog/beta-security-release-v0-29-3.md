+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Security Release v0.29.3"
date = 2020-05-12T22:30:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/locks-shogo-narita.jpg"
description = "This v0.29.3 security release fixes an issue that exposes book names when viewed via the shelves page"
slug = "beta-release-v0-29-3"
draft = false
+++

BookStack v0.29.3 has been released to address an issue that could expose the names of private/restricted books.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.29.3)

### Impact

The name of a restricted book could be viewed by non-authorised users when the book was on a shelf, and the shelves were viewed in "List View". This could expose book names to those that did not have permission to see them, when part of a shelf. 

### Patches

This has been patched in version v0.29.3.

### Workarounds

Please update otherwise you could temporarily change the name of any private books to remove any sensitive content.

### References

* [BookStack Beta v0.29.3](https://github.com/BookStackApp/BookStack/releases/tag/v0.29.3)
* [GitHub Security Advisory](https://github.com/BookStackApp/BookStack/security/advisories/GHSA-c32x-84w6-5mxq)
* [GitHub Issue #2111](https://github.com/BookStackApp/BookStack/issues/2111)

### Attribution

* Thanks to [GitHub user Usinouv](https://github.com/BookStackApp/BookStack/issues/2111) for discovering and reporting this issue.

### More Information

If you have any questions or comments about this advisory:
* Open an issue in [the BookStack GitHub repository](BookStackApp/BookStack/issues).
* Ask on the [BookStack Discord chat](https://discord.gg/ztkBqR2).
* Follow the [BookStack Security Advice](https://github.com/BookStackApp/BookStack#-security) to contact someone privately.


----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@blackwood_castle" target="_blank" rel="noopener noreferrer" title="Shogo Narita"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Shogo Narita</span></a></span>

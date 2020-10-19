+++
categories = ["Releases"]
tags = ["Releases"]
title = "Beta Release v0.26.0"
date = 2019-05-06T17:00:00Z
author = "Dan Brown"
image = "/images/blog-cover-images/paint-andrian-valeanu.jpg"
description = "A design update comes to BookStack which includes a whole bunch of user experience improvements and much better mobile usability"
slug = "beta-release-v0-26-0"
draft = false
+++

After a long development cycle BookStack v0.26 is finally here, bringing a refreshed design that includes new
functionality while providing a much better mobile experience.

* [Update instructions](https://www.bookstackapp.com/docs/admin/updates)
* [GitHub release page](https://github.com/BookStackApp/BookStack/releases/tag/v0.26.0)


Before jumping into all the changes, there's a few things to note before upgrading:

**Internet Explorer Support**

IE11 Support has now been dropped. We *may* support any critical issues for view-only scenarios otherwise please use a modern browser.

**Translations**

Since many interfaces and lines of text have been updated, It may take a little while for some translations to catch-up. Expect to see more English text than usual if you're using a non-English language option.

**Images**

Due to changes how images are handled, as detailed below, some types of images may become inaccessible. Old logo images will be deleted upon change. Unused Book & Shelf cover images, in addition to user profile images, will be become inaccessible after the update so you may want to delete them before upgrading.

**Security**

On previous versions of BookStack it was possible for users to insert JavaScript via the Markdown editor using *"on\*"* html event attributes. These will now be removed on page render unless you have set *ALLOW_CONTENT_SCRIPTS=true*. If untrusted users have access to your BookStack instance you may want to scan for " on" in the html column of the pages table to identify any malicious intent. Thanks to [@Xiphoseer](https://github.com/Xiphoseer) for reporting.

### Design Update

Design changes have been applied to every single view in BookStack. The aims of this design update were as follows:

- Improve design consistency and feature usage throughout application.
- Improve the mobile experience.
- Provide a more modern, less "stock", feel.
- Clean-up the current colour-scheme for easier future customizability.
- Lessen the usage of glaring book/chapter & page colours.
- Look to add UI efficiency tweaks.

I'm happy to say I think we've managed to meet all those initial aims.
Here's a dig into many of the changes:

#### Mobile Experience

The core mobile experience has been a main focus for this update.
Previously BookStack would kind of respond to work on smaller devices but a lot of vertical space would be used and the interface would look very busy.

*v0.25 on the left, v0.26 on the right.*

<img src="/images/2019/05/design_update_mobile.png" class="no-border" alt="Design update mobile changes">

The header has now been updated to properly collapse down on mobile to reduce used vertical space.
The old side drawer, containing extra details of the current view, has instead changed to a tabbed interface to save on precious horizontal space.

The editing experience has been reworked to ensure its usable on mobile:

*v0.25 on the left, v0.26 on the right.*

<img src="/images/2019/05/design_update_mobile_editing.png" class="no-border" alt="Design update mobile editing changes">

Unfortunately, there are still issues with being able to edit page content on iOS, which we will continue to look into, but editing now appears to be fully functional on Android devices.

#### Shelf Improvements

This design update provided an opportunity to look at how shelves could become more unique & functional.
To start with, the shelves list view has been overhauled:

![Shelves listing](/images/2019/05/shelves_list.png)

For each shelf shown, contained books are listed below in columns, somewhat imitating real-life bookshelves, allowing quick visibility of their contents.

To speed up the creation flow, A "New Book" button is now available when viewing a shelf to accelerate the creation process:

![Create book from shelf](/images/2019/05/shelf_create_book.png)

This reduces the number of steps needed to create a new book within a shelf from about 6 steps to just 2.
Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1366) for adding this feature.

For ease of navigation, breadcrumbs will now display the current shelf you navigated through:

![Smarter breadcrumbs with shelves](/images/2019/05/smart_breadcrumbs.png)

If BookStack thinks you've navigated via a shelf, the leftmost breadcrumb will show as the shelf overview page otherwise it will default back to the book overview page.

#### Navigation Enhancements

Some navigational enhancements have been applied to allow more efficient traversal of your content in BookStack.
For the books and shelves list pages, it's now possible to sort the lists by name, created date or updated date:

![Books and shelves list sorting](/images/2019/05/listing_sort.png)

You can change the ordering of the sort to be ascending or descending by clicking the arrow that sits beside the sort drop-down.

In addition to the inclusion of shelves, as mentioned above, breadcrumbs have been powered up with more navigation abilities.
You can now click the arrows between the crumbs to jump to other items at that level of the hierarchy:

![Breadcrumb Navigation](/images/2019/05/breadcrumb_navigation.png)

You can even search within the drop-downs to quickly find items at each level.
This addition provides an easy way to quickly jump between higher levels of the hierarchy without even needing to leave the current page.

#### Improved Admin Experience

On the administration side of things, all options and views have received a much needed clean-up.
Settings are now much better organised and spaced out. Additional hint text has been added where needed to provide extra information & context for various options.

![Admin Page Cleanup](/images/2019/05/admin_page_cleanup.png)

Handling permissions could often be laborious task due to the amount of checkboxes you may have to toggle.
On such pages, "Toggle All" links have been added for super-quick permission checking:

![Permission Toggles](/images/2019/05/permission_toggle_all.png)

#### Image Selection Changes

For simplicity, and enhanced security, the process for selecting some types of images has changed.
Profile images, app logo images and book/shelf cover images are now directly selected instead of opening in the image manager.

![Direct Image Selection](/images/2019/05/image_selection_changes.png)


#### Book Sort Helpers

To make it easier to sort a book, helpful buttons have been added to perform common sorting operations.
You can sort by name in addition to created or updated date.
There are also buttons to move chapters to the start or end of the book.
For the name & date sort operations, you can press the button a second time to run the sort in the opposite direction.

![Book Sort Helpers](/images/2019/05/book_sort_buttons.png)

#### Profile Page Enhancements

The user profile page has received a few tweaks.
User-created shelves now show alongside the other content types.
Links have been added to the "Recently Created" headings for quick searching of content created by the shown user.

![Profile Page Changes](/images/2019/05/profile_page_changes.png)

#### Toggle Details Button

The "Toggle Details" button, shown on the homepage, will now remember its last state so you don't have to click it every time if you prefer details to be visible.

![Toggle Details](/images/2019/05/toggle_details.png)

#### Search Page

The result list on the search page is now a little more compact for efficiency.
Pages & chapters in the results will now show their parent book, and chapter if applicable, to provide additional context as to where that item sits within your content structure.

![Search Page Crumb](/images/2019/05/search_page_changes.png)

### Full List of Changes


* Updated the application design for better mobile functionality and improved general UX. ([#1153](https://github.com/BookStackApp/BookStack/pull/1153))
* Updated how profile, system & cover images are set & added extra permission checks on image actions.  ([#1410](https://github.com/BookStackApp/BookStack/pull/1410), [#1307](https://github.com/BookStackApp/BookStack/issues/1307), [#1128](https://github.com/BookStackApp/BookStack/issues/1128))
* Added the possibility to create a book directly within a shelf. Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1366). ([#1366](https://github.com/BookStackApp/BookStack/pull/1366), [#1260](https://github.com/BookStackApp/BookStack/issues/1260))
* Added sign-up link to login form and fixed differing name validation on sign-up. Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1395). ([#1395](https://github.com/BookStackApp/BookStack/pull/1395), [#1239](https://github.com/BookStackApp/BookStack/issues/1239))
* Added code block syntax highlight for OCaml, Haskell, Rust. Thanks to [@XVilka](https://github.com/BookStackApp/BookStack/pull/1344). ([#1344](https://github.com/BookStackApp/BookStack/pull/1344))
* Updated page content script escaping logic to strip inline JS event attributes. Thanks to [@Xiphoseer](https://github.com/Xiphoseer) for reporting.
* Updated revision restore to require confirmation and changed the method from GET so it's less likely to be accidentally triggered. ([#1321](https://github.com/BookStackApp/BookStack/issues/1321))
* Updated shortcut used for markdown drawing manager to be cross-platform. ([#1228](https://github.com/BookStackApp/BookStack/issues/1228))
* Updated Swedish translations. Thanks to [@Hambern](https://github.com/BookStackApp/BookStack/pull/1417). ([#1417](https://github.com/BookStackApp/BookStack/pull/1417))
* Fixed issue where duplicate ID's could sometimes break pages. ([#1393](https://github.com/BookStackApp/BookStack/issues/1393))
* Fixed issue where user role assignments were not remembered, for roles with a dot in the name, on validation failure. Thanks to [@cw1998](https://github.com/BookStackApp/BookStack/pull/1392). ([#1392](https://github.com/BookStackApp/BookStack/pull/1392), [#1325](https://github.com/BookStackApp/BookStack/issues/1325))
* Fixed issue where the port would be ignored if a full LDAP server URI was used. ([#1386](https://github.com/BookStackApp/BookStack/pull/1386), [#1278](https://github.com/BookStackApp/BookStack/pull/1278))
* Dropped IE11 support. ([#1164](https://github.com/BookStackApp/BookStack/issues/1164))

### Next Steps

Since this release includes a lot of design changes I expect there to be a good few fixes, improvements and translation updates to implement over the coming weeks.

**JavaScript Organisation**

I may start having an experimental dig into a new way to organise the JavaScript code BookStack uses.
BookStack currently bundles pretty much all the JavaScript into single file.
With the dropping of IE, I'd like to look at going a bit old-school, with most of the JS code being directly on the page and only have a few core global libraries bundled up.
This would bring the benefit of allowing admins & developers to directly modify parts of the JS without having to install tools or re-bundle the code.

**REST API Authentication**

Once the current redesign has settled, focus will be on the next roadmap item: The REST API.
In preparation for this, I've opened up a proposal for the primary authentication method to implement which can be found [here on GitHub](https://github.com/BookStackApp/BookStack/issues/1414). This is so any issues or recommendations can be discussed ahead of time since I don't want to rush the choice of authentication.

**Templating**

For the next release I thought it'd be good to look at a highly requested documentation-focused request: Templating. I've put a proposal together [in this comment on GitHub](https://github.com/BookStackApp/BookStack/issues/129#issuecomment-460412403).
It's a fairly simplistic implementation idea but should provide a benefit to users without having that much extra code/functionality to manage.
Would be good to get an idea if the proposal would meet people's needs.

----

<span style="font-size: 0.8em;opacity:0.8;">Header Image Credits: &nbsp; <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@freephotocc?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Andrian Valeanu"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Andrian Valeanu</span></a></span>

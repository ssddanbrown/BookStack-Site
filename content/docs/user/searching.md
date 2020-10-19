+++
title = "Searching Content"
description = "Searching for specific content within BookStack and learning the advanced search syntax"
date = "2017-04-16"
type = "user-doc"
+++

The ability to search your documentation is vital to day-to-day use.
There are a few locations within BookStack where you can search for your content.
Below is a list of search functions within BookStack:

* **Header Search Bar** - The search bar/link in the header of every page allows you to search from anywhere. This search is a global search which will look across all books, chapters and pages in your system. After performing a search in this box you'll be led to a search page that includes options and features that can help you build a more advanced search.
* **Book/Chapter Search Bar** - When viewing a book or chapter a search bar can be found in the top of the left sidebar. These searches will look across all child items.
* **Move & Link Selection** - When choosing to move a page/chapter or when selecting a page/chapter/book to link to within the editor the most popular items are shown but you also have the ability to search.

---

## Advanced Search Syntax

All of the above search locations within BookStack share the ability to use advanced search syntax. An easy way to see this syntax in action is to use the global search in BookStack then play with the search filters which will update the search term with the below syntax. Below are details of the different types of syntax that can be used:

<table width="100%">
  <tr style="font-weight:bold;">
    <th width="16%">Search Type</th>
    <th width="20%">Syntax</th>
    <th width="16%">Examples</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Normal Searches</td>
    <td>&lt;term_a&gt; &lt;term_b&gt;</td>
    <td>london meeting</td>
    <td>Normal word searches across the name and description or body of your content. When mulitple terms are searched only one term has to match your content but content containing both terms will be higher in the results.</td>
  </tr>
  <tr>
    <td>Exact Searches</td>
    <td>"&lt;term&gt;"</td>
    <td>"london meeting"</td>
    <td>Exact matches will require that the whole string within quotes exists in your content in exactly the same format. Use this if you're looking for an exact phrase containing or if you need to search for a term with spaces in.</td>
  </tr>
  <tr>
    <td>Tag Searches</td>
    <td class="text-small">
      [&lt;name&gt;] <br>
      [&lt;operator&gt;&lt;value&gt;] <br>
      [&lt;name&gt;&lt;operator&gt;&lt;value&gt;]
    </td>
    <td>
      [location] <br>
      [=london] <br>
      [location=london] <br>
      [attendees>5]
    </td>
    <td>Tag searches allow you to find pages which have specific tags applied. You can search by tag name, by tag value or by both name and value. When searching by tag value an operator must be used to define the match type. You can use <code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>,<code>&lt;=</code>, <code>&gt;=</code> or <code>like</code> as operators. When using the <code>like</code> operator you can use <code>%</code> symbols to represent wildcards in your search.</td>
  </tr>
  <tr>
    <td>Filter Searches</td>
    <td class="text-small">
      {&lt;filter_name&gt;} <br>
      {&lt;filter_name&gt;:&lt;filter_value&gt;}
    </td>
    <td>See below</td>
    <td>Filters perform additional advanced functionality to make your searches even more powerfull. Some filters take values but some don't need to. See below for a full list of filters available.</td>
  </tr>
</table>

---

## Available Filters

Filters are set advanced search features that can be used in your search term. The below table shows all the filters available in BookStack and how they can be used.

<table width="100%">
  <tr style="font-weight:bold;">
    <th width="25%">Syntax</th>
    <th width="25%">Examples</th>
    <th>Description</th>
  </tr>
  <tr style="font-weight:bold;">
    <td colspan="3">Date Filters</td>
  </tr>
  <tr>
    <td>{updated_after:&lt;date&gt;}</td>
    <td>{updated_after:2016-12-30}</td>
    <td>Adds the condition that the content must have been last updated after the given date. <br> The date should be in the format YYYY-MM-DD</td>
  </tr>
  <tr>
    <td>{updated_before:&lt;date&gt;}</td>
    <td>{updated_before:2016-12-30}</td>
    <td>Adds the condition that the content must have been last updated before the given date. <br> The date should be in the format YYYY-MM-DD</td>
  </tr>
  <tr>
    <td>{created_after:&lt;date&gt;}</td>
    <td>{created_after:2016-12-30}</td>
    <td>Adds the condition that the content must have been created after the given date. <br> The date should be in the format YYYY-MM-DD</td>
  </tr>
  <tr>
    <td>{created_before:&lt;date&gt;}</td>
    <td>{created_before:2016-12-30}</td>
    <td>Adds the condition that the content must have been created before the given date. <br> The date should be in the format YYYY-MM-DD</td>
  </tr>
  <tr style="font-weight:bold;">
    <td colspan="3">User Filters</td>
  </tr>
  <tr>
    <td>{updated_by:&lt;user_id|me&gt;}</td>
    <td>
      {updated_by:10} <br>
      {updated_by:me} <br>
    </td>
    <td>Adds the condition that the content must have been last updated by the user of the given numeric ID. If 'me' is used in place of a numeric ID then it will find content that was last updated by the current logged-in user.</td>
  </tr>
  <tr>
    <td>{created_by:&lt;user_id|me&gt;}</td>
    <td>
      {created_by:10} <br>
      {created_by:me} <br>
    </td>
    <td>Adds the condition that the content must have been created by the user of the given numeric ID. If 'me' is used in place of a numeric ID then it will find content that was created by the current logged-in user.</td>
  </tr>
  <tr style="font-weight:bold;">
    <td colspan="3">Content Filters</td>
  </tr>
  <tr>
    <td>{in_name:&lt;search&gt;}</td>
    <td>
      {in_name:London Meetings} <br>
      {in_name:Meetings}
    </td>
    <td>Will require the content to have the given <code>&lt;search&gt;</code> term in the name rather than the name <strong>or</strong> content body.</td>
  </tr>
  <tr>
    <td>{in_body:&lt;search&gt;}</td>
    <td>
      {in_body:London Meetings} <br>
      {in_body:Meetings}
    </td>
    <td>Will require the content to have the given <code>&lt;search&gt;</code> term in the body rather than both the name <strong>or</strong> content body.</td>
  </tr>
  <tr style="font-weight:bold;">
    <td colspan="3">Option Filters</td>
  </tr>
  <tr>
    <td>{is_restricted}</td>
    <td>
      {is_restricted}
    </td>
    <td>Will require the content to have content-level permissions active. Does not return items with only inherited asset permissions.</td>
  </tr>
  <tr>
    <td>{viewed_by_me}</td>
    <td>
      {viewed_by_me}
    </td>
    <td>Will require the content to have been viewed by the current user at least once.</td>
  </tr>
  <tr>
    <td>{not_viewed_by_me}</td>
    <td>
      {not_viewed_by_me}
    </td>
    <td>Will not return any content that has been viewed by the current user.</td>
  </tr>
  <tr>
    <td>{type:&lt;content_types&gt;}</td>
    <td>
      {type:page|chapter|book} <br>
      {type:page|chapter} <br>
      {type:book} <br>
    </td>
    <td>Restricts the types of content that will be in the search results. <br> Use of this will depend on the type of search. For example, in a chapter search only pages are shown so this has no effect.</td>
  </tr>
</table>

---

## Search Examples

Below are some examples of using the above syntax and filters with descriptions:

* `"my cat" {viewed_by_me} {updated_after:2017-01-24}`
  * `"my cat"` - Search for content containing the exact phrase 'my cat'
  * `{viewed_by_me}` - that has been viewed by me
  * `{updated_after:2017-01-24}` - and was last updated after the 24th of Jan 2017.

<br>

* `textbook discussion [meeting] {type:page} {created_by:me}`
  * `textbook discussion` - Search content for the words `textbook` or `discussion`
  * `[meeting]` - only show content that has a `meeting` tag applied
  * `{type:page}` - only show pages, hide chapters and books
  * `{created_by:me}` - that was created by me.

  <br>

* `{type:book|chapter} {created_by:me} {created_after:2016-08-12} {created_before:2017-02-18}`
  * `{type:book|chapter}` - Search all books and chapters
  * `{created_by:me}` - that were created by me
  * `{created_after:2016-08-12} ` - after the 12th of Aug 2016
  * `{created_before:2017-02-18}` - but before the 18th of Feb 2017

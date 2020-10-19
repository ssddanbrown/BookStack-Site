+++
title = "Commands"
description = "BookStack command-line actions"
date = "2017-02-26"
type = "admin-doc"
+++

BookStack has some command line actions that can help with maintenance and common operations. There are also many commands available from the underlying Laravel framework. To list all available commands you can simply run `php artisan` from your BookStack install folder. Custom BookStack commands are all under the 'bookstack' namespace.

### BookStack Commands

Below is a listing of the BookStack specific commands. For any you can provide a `-h` option to list details and options for the command.

```bash
# Create a new admin user
php artisan bookstack:create-admin

# Delete all activity history from the system
php artisan bookstack:clear-activity

# Delete all page revisions from the system
php artisan bookstack:clear-revisions

# Delete all page revisions from the system including update drafts
php artisan bookstack:clear-revisions -a

# Delete all page views from the system
php artisan bookstack:clear-views

# Search and remove images that are not used in page content
php artisan bookstack:cleanup-images

# Generate SQL commands that will upgrade the database to UTF8mb4
# See https://www.bookstackapp.com/docs/admin/ut8mb4-support/
php artisan bookstack:db-utf8mb4

# Rebuild the search index
# Useful if manually inserting pages into the system
php artisan bookstack:regenerate-search

# Regenerate access permissions - Used mostly in development
php artisan bookstack:regenerate-permissions

# Delete all users from the system that are not "admin" or system users
php artisan bookstack:delete-users

# Copy the permission settings of a specified, or all, shelf to their child books
php artisan bookstack:copy-shelf-permissions --all
php artisan bookstack:copy-shelf-permissions --slug=my_shelf_slug

# Update a URL in the database content of your BookStack instance.
# Searches for <oldUrl> and replaces it with <newUrl>
php artisan bookstack:update-url <oldUrl> <newUrl>
# Example:
php artisan bookstack:update-url http://docs.example.com https://demo.bookstackapp.com

# Regenerate the stored HTML content for comments from their original text content
php artisan bookstack:regenerate-comment-content
```

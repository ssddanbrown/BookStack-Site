+++
title = "Updating BookStack"
description = "How to update BookStack to the lastest version"
date = "2017-01-01"
type = "admin-doc"
+++

BookStack is updated regularly and is still in beta although we do try to keep the platform and upgrade path as stable as possible. The latest release can be found on [GitHub here](https://github.com/BookStackApp/BookStack/releases) and detailed information on releases is posted on the [BookStack blog here](/tags/releases/).

**Before updating you should back up the database and any file uploads to prevent potential data loss**. <br>
Backup and restore documentation can be found [here](/docs/admin/backup-restore).

 Updating is currently done via Git version control. To update BookStack you can run the following command in the root directory of the application:

```bash
git pull origin release && composer install --no-dev && php artisan migrate
```

This command will update the repository that was created in the installation, install the PHP dependencies using `composer` then run then update the database with any required changes.

In addition, Clearing the cache is also recommended:

```bash
php artisan cache:clear
php artisan view:clear
```

Check the below list for the version you are updating to for any additional instructions.

---

## Version Specific Instructions


#### Updated to v0.30 or higher

**Security** - Possible Privilege Escalation. During the v0.30 release cycle
it was advised that current privilege escalation situations are not made clear when applying role permissions.
Any user with a "Manage app settings", "Manage users" or "Manage roles & role permissions" system permission 
assigned to one of their roles could technically alter their own permissions to gain wider access.
A clear advisory of these cases has been added in the UI in v0.30
but admins are advised to review which users have these permissions with the above in mind.


**LDAP & SAML Group Matching** - During the v0.30 release cycle it was found that 
BookStack roles would be matched to LDAP/SAML groups based upon the role display name, which is expected,
but only those roles with a matching "name" value would be considered. This "name" field was redundant, 
and has now been removed, but it would store a cleaned version the first-set name of the role.
All roles will now be considered before being matched on name which may mean that roles which did not sync before, 
that would have been expected to based on their name, may now start to sync.


#### Updating to v0.29.3 or higher

**Security** - v0.29.3 fixes an issue where the names of restricted/private books could seen by those without permission, if added to a shelf. This issue was introduced in BookStack v0.28.0.

#### Updating to v0.29.2 or higher

**Security** - v0.29.2 fixes a XSS security vulnerability in the comment system, that was introduced in BookStack v0.18. Upon updating the command `php artisan bookstack:regenerate-comment-content` should be ran to regenerate comment content to ensure that it is safe.

#### Updating to v0.28 or higher

**Requirements Change** - Minimum PHP version has increased from 7.0.5 to 7.2.

If you installed BookStack on Ubuntu 16.04 using the install script, You should be able to upgrade your PHP version to 7.4 by running the following commands:

```bash
sudo add-apt-repository -y ppa:ondrej/php
sudo apt update
sudo apt install -y php7.4 php7.4-fpm php7.4-curl php7.4-mbstring php7.4-ldap php7.4-tidy php7.4-xml php7.4-zip php7.4-gd php7.4-mysql
sudo sed -i.bak 's/php7\.0-fpm/php7.4-fpm/' /etc/nginx/sites-available/bookstack
sudo systemctl restart nginx.service
```

#### Updating to v0.26 or higher

**Internet Explorer Support** - IE11 Support has now been dropped. We *may* support any critical issues for view-only scenarios otherwise please use a modern browser.

**Translations** - Since many interfaces and lines of text have been updated, It may take a little while for some translations to catch-up. Expect to see more English text than usual if you're using a non-English language option.

**Images** - Due to changes how images are handled, as detailed below, some types of images may become inaccessible. Old logo images will be deleted when changed. Unused Book/Shelf cover images & User profile images will be become inaccessible after the update so you may want to delete them before upgrade.

**Security** - On previous versions of BookStack it was possible for users to insert JavaScript via the Markdown editor using `on*` html attributes. These will now be removed on page render unless you have set `ALLOW_CONTENT_SCRIPTS=true`. If untrusted users has access to your BookStack you may want to scan for `<<space_char>>on` in the HTML column of the pages table to identify any malicious intent.

#### Updating to v0.25.3 or higher

**Security** - On previous versions of BookStack it was possible to upload PHP files via the image upload endpoints. If you have a BookStack instance where untrusted users could upload image files, and you were using the default file storage option, It would have been possible for the user to access anything that the PHP process could. This would likely include, at minimum, any credentials stored in the `.env` file.

#### Updating to v0.25.2 or higher

**Configuration Change** - The .env option `REDIS_CLUSTER` has now been removed. If more than one redis server is provided they will automatically be clustered by BookStack.

#### Updating to v0.25 or higher

**Security** - During the release cycle for Version v0.25 it was found that page content includes could leak their content as preview text to users that don’t have permission to view the included content. It’s recommended to re-save any pages that included other page content that’s restricted to ensure included text is not shown in page preview text.

**Requirements Change** - Minimum required version of PHP has changed from 7.0.0 to 7.0.5.

**Configuration Change** - The .env option `GRAVATAR_URL=false` has been replaced by `AVATAR_URL=false`.


#### Updating to v0.24 or higher

Version v0.24 changes the way the homepage option is stored. After updating, You may need to re-configure this setting.

If updating from a much older BookStack version (Pre v0.20) you may need to update the permission and search indexes. You can do this by running the following commands from your BookStack install folder:

```bash
php artisan bookstack:regenerate-search
php artisan bookstack:regenerate-permissions
```

#### Updating to v0.19 or higher

Version v0.19 needs the following requirement change:

* Minimum required version of PHP has changed from 5.6.4 to 7.0.0.

#### Updating to v0.18 or higher

Version v0.18 introduced a commenting system. After updating you should check the permissions for all roles if you'd like to enable comments for your users.

#### Updating to v0.13 or higher

The v0.13 release contained some new features and updates which change the requirements of BookStack.

* Minimum required version of PHP has changed from 5.5.9 to 5.6.4.
  Upgrade your PHP version if below 5.6.4.
* PHP-Tidy extension is now required.
  - On Ubuntu 16.04 this can be installed via `sudo apt install php7.0-tidy`.
  - On Ubuntu 14.04 (Using the defauly PHP option) this can be installed via `sudo apt-get install php5-tidy`.
* Page attachments will be stored in the `storage/uploads` folder (Unless you use Amazon S3). This folder will be created on update. Ensure your webserver has write permissions for this folder.

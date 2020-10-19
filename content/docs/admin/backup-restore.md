+++
title = "Backup and Restore"
description = "How to back up and restore your BookStack data"
date = "2017-01-01"
type = "admin-doc"
+++

BookStack does not currently have a built-in way to backup and restore but it
can be done via the command line fairly simply. This process will be impoved in
the future and will ideally be built-in at some point soon.

Please note the below commands are based on using Ubuntu. If you are using a
different operating system you may have to alter these commands to suit.

---

## Backup

There are two types of content you need to backup: Files and database records.

#### Database

The easiest way to backup the database is via `mysqldump`:

```bash
# Syntax
mysqldump -u {mysql_user} -p {database_name} > {output_file_name}
## Only specify the -p if the user provided has a password


# Example
mysqldump -u benny bookstack > bookstack.backup.sql
```

If you are using MySQL 5.7 on Ubuntu 16.04 and are using the `root` MySQL
user you will likely have to run the command above with `sudo`:

```bash
sudo mysqldump -u root bookstack > bookstack.backup.sql
```

The resulting file (`bookstack.backup.sql` in the examples above) will contain
all the data from the database you specified. Copy this file to somewhere safe,
ideally on a different device.

#### Files

Below is a list of files and folders containing data you should back up. The paths
are shown relative to the root BookStack folder.

* `.env` - File, Contains important configuration information.
* `public/uploads` - Folder, Contains any uploaded images (If not using amazon s3).
* `storage/uploads` - Folder, Contains uploaded page attachments (Only exists as of BookStack v0.13).

Alternatively you could backup up your whole BookStack folder but only the above
are non-restorable.

The following command will create a compressed archive of the above folders and
files:

```bash
# BookStack v0.13+:
tar -czvf bookstack-files-backup.tar.gz .env public/uploads storage/uploads

# BookStack v0.12.* and below:
tar -czvf bookstack-files-backup.tar.gz .env public/uploads
```

The resulting file (`bookstack-files-backup.tar.gz`) will contain all your file
data. Copy this to a safe place, ideally on a different device.

---

## Restore

If you are restoring from scratch follow the [installation](/docs/admin/installation)
instructions first to get a new BookStack instance set-up.
**Do not run the `php artisan migrate` installation step** when installing BookStack.
You may need to comment this command out if using an installer script. If using
a docker container, restore the database before running the BookStack container.
Once you are sure the new instance is set-up follow the instructions below.

#### Database

To restore the database you simply need to execute the sql in the output file from the `mysqldump`
you performed above. To do this copy your database SQL backup file onto the
BookStack or database host machine and run the following:

```bash
# Syntax
mysql -u {mysql_user} -p {database_name} < {backup_file_name}
## Only specify the -p if the user provided has a password

# Example
mysql -u benny -p bookstack < bookstack.backup.sql

# If using the root user on Ubuntu 16.04 and MySQL 5.7 you may
# have to run the above with root permissions via sudo:
sudo mysql -u root bookstack < bookstack.backup.sql
```

If you are restoring to a new verion of BookStack you will have to run
`php artisan migrate` after restore to perform any required updates to the database.

#### Files

To restore the files you simple need to copy them from the backup archive
back to their original locations.  If you created a compressed `bookstack-files-backup.tar.gz`
archive as per the backup instructions above you can simply copy that file to
your BookStack folder then run the following command:

```bash
tar -xvzf bookstack-files-backup.tar.gz
```

If you get errors during the above command it may be due to permissions.
Change permissions so you can write to the restore locations.

After a backup of the files you should re-set the permissions to ensure any write-required
locations are writable by the server. The locations required for this can be
found in the [installation](/docs/admin/installation)
instructions.

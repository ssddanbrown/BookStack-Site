+++
title = "Configuring File Uploads"
description = "Configuration for files uploads such as images and attachments"
date = "2018-01-12"
type = "admin-doc"
+++

BookStack allows users to upload both images for content and files as attachments.

* [Storage Options](#storage-options)
* [Changing Upload Limits](#changing-upload-limits)
* [File Upload Timeout](#file-upload-timeout)
* [File Upload Limit](#file-upload-limit)

**For information relating to security for file uploads please refer to the [Security Page](/docs/admin/security).**

---

### Storage Options

Within BookStack there are a few different options for storing files:

* **local** (Default) - Files are stored on the server running BookStack. Images are publically accessible, served by your websever, but attachments are secured behind BookStack's authentication.
* **local_secure** - Same as local option but images are served by BookStack, enabling authentication on image requests. Provides higher security but is more system resource intensive and could induce performance issues.
* **s3** - Store files externally on Amazon S3. Images are made publically accessible on upload.

For all options you can use the 'Enable higher security image uploads' in-app admin setting which appends a random string to each uploaded image name to make URL's hard to guess.

#### Local

This is the default storage mechanism in BookStack. It can be forced by setting the following in your `.env` file:

```bash
STORAGE_TYPE=local
```

* Image uploads location: `<bookstack_install_dir>/public/uploads/images`.
* Attachment uploads location: `<bookstack_install_dir>/storage/uploads/files`.

#### Local (Secure)

The local secure option can be enabled by setting the following in your `.env` file:

```bash
STORAGE_TYPE=local_secure
```

After setting this option ensure you test system performance creating a page with many images and reload on that page multiple times to ensure your server can keep with the 
multitude of image requests.

* Image uploads location: `<bookstack_install_dir>/storage/uploads/images`.
* Attachment uploads location: `<bookstack_install_dir>/storage/uploads/files`.

If you'd like to switch to this option from the default `local` storage system you'll first need to migrate existing image uploads to the image folder listed above.

#### S3

The Amazon s3 option can be enabled by setting the following in your `.env` file:

```bash
STORAGE_TYPE=s3
STORAGE_S3_KEY=your-s3-key
STORAGE_S3_SECRET=your-s3-secret
STORAGE_S3_BUCKET=s3-bucket-name
STORAGE_S3_REGION=s3-bucket-region
```

For performance reasons uploaded images are made public upon upload to your s3 bucket and fetched directly by the end user when viewing an image on BookStack. Attachments are not made public and are instead fetched by BookStack upon request. Exact security will depend on the configuration and policies of your bucket.

* Image uploads location: `<your_bucket>/uploads/images`.
* Attachment uploads location: `<your_bucket>/uploads/files`.

By default BookStack will generate a valid Amazon S3 URL for uploaded images. If you'd prefer to use a different URL, that you have pointed at your bucket, you can add the below option to your `.env` file which will be used as a base URL for all image uploads:

```bash
STORAGE_URL=https://images.example.com
```

#### Non-Amazon, S3 Compatible Services

Via the s3 connection BookStack does support s3-compatible services such as [Minio](https://www.minio.io/). Read the above S3 details to get an idea of general setup.
For non-Amazon services the configuration, to be placed in the `.env` file, is a little different:

```bash
STORAGE_TYPE=s3
STORAGE_S3_KEY=your-service-key
STORAGE_S3_SECRET=your-service-secret-key
STORAGE_S3_BUCKET=your-service-bucket-name

STORAGE_S3_ENDPOINT=https://your-service-base-endpoint.com:8080
STORAGE_URL=https://your-service-base-endpoint.com:8080/your-service-bucket-name
```

Take note of how the first part of the `STORAGE_URL` path is the bucket name. This is important to ensure image URLs are set correctly.

BookStack's functionality to set image URL's as publicly accessible will likely not work for third-party services so you'll need to ensure files under the `<your_bucket>/uploads/images` path have policy or permissions to be publicly accessible. If using Minio you can add the following to the bucket policy:

![Minio Bucket Policy](/images/2019/01/minio_s3_policy.png)

#### Separate Image and Attachment Storage

If you'd prefer to store images and attachments via different storage options, you can use the below `.env` options to do so:

```bash
# Image storage system to use 
# Defaults to the value of STORAGE_TYPE if unset. 
# Accepts the same values as STORAGE_TYPE. 
STORAGE_IMAGE_TYPE=local 
  
# Attachment storage system to use 
# Defaults to the value of STORAGE_TYPE if unset. 
# Accepts the same values as STORAGE_TYPE although 'local' will be forced to 'local_secure'. 
STORAGE_ATTACHMENT_TYPE=local_secure 
 ```

---

### Changing Upload Limits

By default, a lot of server software has strict limits on upload sizes which causes errors when users upload new content. This is not configured as part of BookStack but as part of PHP and your web sever software. If you run into problems with upload size limits follow the below details for PHP and whichever web server you use:

#### PHP

PHP has two main variables which effect upload limits. Find your `php.ini` file and look for the following variables:

* `post_max_size`
* `upload_max_filesize`

If the values of these variables are low increase them to something sensible that's not too high to cause issues. Unless you need something higher 10MB is a sensible value to enter for these values:

```
post_max_size = 10M
upload_max_filesize = 10M
```

After updating these values ensure you restart your webserver and also PHP if using PHP-FPM or something similar.

#### NGINX

By default NGINX has a limit of 1MB on file uploads. To change this you will need to set the `client_max_body_size` variable. You can do this either in the http block in your `nginx.conf` file or in the server block set up for BookStack. Here's an example of increasing the limit it 10MB in the http block:

```nginx
http {
	#...
        client_max_body_size 100m;
        client_body_timeout 120s; # Default is 60, May need to be increased for very large uploads
	#...
}
```

As per the example above, If you are expecting upload very large files where upload times will exceed 60 seconds you will also need to add the `client_body_timeout` variable with a large value.

After updating you NGINX configuration don't forget to restart NGINX. You can test the configuration beforehand with `nginx -t`.

#### Apache

Apache does not have any built-in limits which you will need to change but something to note is that if you are using apache and mod_php with `.htaccess` files enabled you may be able to set the above PHP variables in your `.htaccess` file like so:

```apache
php_value upload_max_filesize 10M
php_value post_max_size 10M
```

---

### File Upload Timeout

File uploads in BookStack use a JavaScript library which has a default upload timeout of 60 seconds. This means that if the file that you are uploading does not upload completely to the server within 60 seconds, the system will timeout. 

To modify this timeout, in BookStack settings, Find the 'Custom HTML head content' setting and add the below code. Note that this does not change any server-side upload limits, Your websever may still impose an upload limit.

```html
<script>
    // Set the file upload timeout to 120 seconds.
    // You can change '120' to be the number of seconds you want the timeout to be. 
    window.uploadTimeout = 120 * 1000;
</script>
```

---

### File Upload Limit

File uploads in BookStack use a JavaScript library which has a default upload size limit of 256MB. To modify this timeout, in BookStack settings, Find the 'Custom HTML head content' setting and add the below code. Note that this does not change any server-side upload limits, Your websever may still impose an upload limit.

```html
<script>
    // Set the file upload limit to 1.5GB.
    // The value is defined in MB. 
    window.uploadLimit = 1500;
</script>
```
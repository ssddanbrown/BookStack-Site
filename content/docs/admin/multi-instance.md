+++
title = "Multiple BookStack Instances"
description = "How to host multiple BookStack instances on Apache and Nginx"
date = "2017-01-01"
type = "admin-doc"
+++

Currently BookStack does not support multiple instances from one installation but you can set up multiple instances on the same server by creating multiple installations and configuring your web-server appropriately.

### Setup

To start off you will need to create a database for each BookStack instance. You could share a database between instances using table prefixes but using separate databases allows you to handle them separately when it comes to other operations such as backing up.

For the purposes of continuity in below examples this documentation will detail setting up two instances at the domains `admin-docs.example.com` and `user-docs.example.com`. Before proceeding, Ensure you have your domains set up for all instances you want to create.

Once you have created your databases find somewhere to install BookStack to. Create a folder for each installation. Here are the locations I will use:
```
/var/www/user-docs/
/var/www/admin-docs/
```

Follow the standard [installation instructions](/docs/admin/installation) for each instance, Starting by cloning BookStack into each folder you created above.

Once you have setup an installation in each folder you will need to configure your webserver. Follow the instructions for your webserver below:

---

### Apache

For apache you will need to set up a virtual host for each instance. These instructions are for Ubuntu 16.04 and may differ for other operating systems.

Virtual host configuration is kept in the `/etc/apache2/sites-available` folder. Create a new file, with a sensible name, in this folder for each instance with the following configuration:

```
# /etc/apaches/sites-available/user-docs.conf

 <VirtualHost *:80>
        ServerName user-docs.example.com
        DocumentRoot /var/www/user-docs/public
        <Directory "/var/www/user-docs/public">
                AllowOverride All
                Require all granted
        </Directory>
</VirtualHost>
```

Change the `/var/www/user-docs` locations in the configuration above to the location you have installed BookStack at. Also change the `user-docs.example.com` domain to the domain you want this instance to be available at. It should be noted that the above configuration enabled `.htaccess` files so be careful on what you add to the `public/.htaccess` file within you BookStack install.

Once created, You will need to enable each site with the command `sudo a2ensite <config-file-name>`. For example: `sudo a2ensite user-docs.conf`. This simply creates a symbolic link to the configuration file in the `/etc/apache/sites-enabled/` folder which is where apache actually reads from.

Once this is done restart apache to reload the configuration. `sudo service apache2 restart`. Both instances should now be accessible at the domains you set up.

### Nginx

For Nginx you will need to define a server for each BookStack instance you want to run. These instructions are for Ubuntu 16.04 and may differ for other operating systems.

By default, server definitions are stored in the `/etc/nginx/sites-available/` directory. Create a new file here, with a sensible name, for each BookStack instance you want to set up. Use the following configuration as a guide:


```nginx
# /etc/nginx/sites-available/user-docs.conf

server {
    listen 80;
    listen [::]:80;

    root /var/www/user-docs/public;
    index index.php;

    server_name user-docs.example.com;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php7.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}  
```

Change the `/var/www/user-docs` location in the configuration above to the folder you have installed BookStack at. Also change the `user-docs.example.com` domain to the domain you want this instance to be available at. You will need to enable this configuration by making it available in the `/etc/nginx/sites-enabled/` folder. To do this you can create a symbolic link: `sudo ln -s /etc/nginx/sites-available/user-docs.conf /etc/nginx/sites-enabled/user-docs.conf`.

After creating a linked configuration file for each instance you can test the nginx configuration with `nginx -t`. If all is okay restart Nginx to reload the configuration with `sudo service nginx restart`.

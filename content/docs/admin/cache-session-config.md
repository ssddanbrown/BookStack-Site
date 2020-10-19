+++
title = "Cache & Session Configuration"
description = "Cache & Session setup with details for redis, memcached or database drivers"
date = "2017-01-01"
type = "admin-doc"
+++

### Cookie Configuration

Browser cookies are used to track sessions when using BookStack. The following session cookie options can be set in your .env file:

```bash
# Only send cookies over a HTTPS connection.
# Ensure you have BookStack served over HTTPS before enabling.
# Defaults to 'false'
SESSION_SECURE_COOKIE=true

# Set the name of the cookie used by BookStack to track sessions.
# Defaults to 'bookstack_session'
SESSION_COOKIE_NAME=custom_cookie_name
```

### Cache & Session Storage

By default BookStack will use a file system cache that's storage in the `storage/framework` folder. This is also used to store user session data. Below are some alternative systems that can be used for caching & sessions.

#### Database

As an easy alternative to using the filesystem, you can use the database to store the cache and session. The database setup for this is done when installing/updating BookStack so you simply need to set the following in your .env file:

```bash
CACHE_DRIVER=database
SESSION_DRIVER=database
```

#### Memcached

To use memcached for caching and/or sessions open up your .env file and find the `CACHE_DRIVER` & `SESSION_DRIVER` variables. By default these are both set to `file`. Change these variables to `memcached`.

You will also need to add a variable to specify the memcached servers you are using. To do this add a variable named `MEMCACHED_SERVERS` to the .env file and set the value to be your memcached servers in the following format: `HOST:PORT:WEIGHT,HOST2:PORT:WEIGHT`. You can specify as many servers as you want. Their usage split will be determined by the weight given to them. Here are some examples of what the .env file should look like:

```bash
# Set both the cache and session to use memcached
CACHE_DRIVER=memcached
SESSION_DRIVER=memcached

# Example of using a single local memcached server
MEMCACHED_SERVERS=127.0.0.1:11211:100

# Example of using two non-local memcached servers with an equal split
MEMCACHED_SERVERS=8.8.8.8:11211:50,8.8.4.4:11211:50
```

#### Redis

To use Redis for caching and/or sessions open up your .env file and find the `CACHE_DRIVER` & `SESSION_DRIVER` variables. By default these are both set to `file`. Change these variables to `redis`.

You will need to add a variable to specify your Redis servers. To do this add a variable named `REDIS_SERVERS` to the .env file and set the value to point at your Redis servers in the following format: `HOST:PORT:DATABASE,HOST2:PORT:DATABASE`. The default values for each host are `127.0.0.1:6379:0`. You can list as many servers as you like. If your redis servers are password protected you can use the format `HOST:PORT:DATABASE:PASSWORD`.

If more that one server is provided they will automatically be clustered by BookStack to perform client-side sharding across your Redis nodes, allowing them to pool together for a large amount of RAM. This disadvantage of this it that it does not allow for fail-over.

Here's a configuration example of using Redis with BookStack:

```bash
# Set both the cache and session to use Redis
CACHE_DRIVER=redis
SESSION_DRIVER=redis

# Example of using a single local Redis server
REDIS_SERVERS=127.0.0.1:6379:0

# Example of using two non-local Redis servers clustered together
REDIS_SERVERS=8.8.8.8:6379:0,8.8.4.4:6379:0
```

---
title: Installing Umami on a Synology NAS
thumbnail: https://assets.tommyoldfield.co.uk/umami-thumbnail
external: false
categories: ['Technology', 'Self-hosting']
excerpt: 
---

- Installing via Git
- Installing via Docker


This section assumes that you have admin access and SSH activated.

You will need to install the following packages from the Package Center:

- Node.js v14
- MariaDB 10
- phpMyAdmin
- Git
- SynoCli File Tools from [SynoCommunity](https://synocommunity.com/)

## Installing via Git

### Installing the source code

You may download the Umami files anywhere on your Synology, but I would recommend creating a new Shared Folder to store your Node apps in.
In File Station, click "Create" then "Create new Shared Folder" and give your folder a name such as "node". Make sure that you give yourself full Read/Write access!

Connect to the NAS via SSH and make your way to your newly created shared folder. If you aren't in the volume directory when you log in, you can type in `cd /volume1` to get to it.
Once in your shared folder, copy and paste in the following commands to get the source code and install the npm packages.

`git clone https://github.com/mikecao/umami.git
cd umami
npm install`

It may also help to clone the files to your local computer as we need to upload a database file in the next step.

### Setting up the database

Once you've installed MariaDB 10, create a password for the root user and keep the port as 3306. Go back to the DSM and open the settings for MariaDB 10 in the Package Center and a new window should pop up. Check the "Enable TCP/IP connection" box and make sure that the port number is the same (3306). Click "Apply" and then open up phpMyAdmin.

Log in as the root user and create a new database from the menu on the left, giving the database a name of your choice. Click on the database name, go to the import tab and browse your computer to upload the MySQL database found in the "sql" folder. If you hadn't cloned the files locally, you can copy the [MySQL schema](https://github.com/mikecao/umami/blob/master/sql/schema.mysql.sql) and create the file using a code/text editor such as VS Code or Notepad++.

### Umami configuration

In this step we need to create a `.env` file. You can either create this file locally, edit the file in a text editor, and upload it to the shared folder on your Synology via FTP, or if you are already connected to your Synology via SSH, you can create and edit the file in the umami directory with nano by typing in `nano .env`.

Once the `.env` file has been created, add in the following variables:
`DATABASE_URL=connection url
HASH_SALT=random string`

The connection url for the MySQL database will be in the following format. Just replace `username`, `password`, and `databasename`.

`mysql://username:password@localhost:3306/databasename`

The random string for the `HASH_SALT` variable can be anything you like, but I would use a [string generator](https://www.random.org/strings/) to generate a unique string.

### Building and starting

If you've done everything correctly upto this point, Umami should load up on `http://your-Synology-ip:3000` after entering the commands for building and running the application.
When logging in for the first time, the default username is **admin** and the password is **umami**. **You must change this once you've logged in!**

#### Building
`npm run build`

If you get errors, try running `npm update` to update your dependencies.

#### Starting
`npm start`

#### Running forever
Umami recommends using a process manager such as [PM2](https://pm2.keymetrics.io/) to run Umami forever and handle restarts and can be installed with `npm install pm2 -g`.
If you want to run Umami on the default port (3000), you can run the following commands in the umami directory:

`pm2 start npm --name umami -- start 
pm2 save`

However, if you want to run Umami on a different port, run these commands, replacing `portnumber`:

`pm2 start npm --name umami -- start -- --port portnumber
pm2 save`

Once complete, a list with your current processes should show. You can view this list at any time by running `pm2 list`.

<picture class="article__image">
    <source srcset="{{ site.assetUrl }}umami-pm2-list.avif" type="image/avif">
    <source srcset="{{ site.assetUrl }}umami-pm2-list.webp" type="image/webp">
    <img src="{{ site.assetUrl }}umami-pm2-list.jpeg" alt="The list of processes output by PM2. The only process listed is Umami.">
</picture>

### Updating

Stop the pm2 process with `pm2 stop umami` and back in the umami directory, run `git pull` to download the updated files.

To reduce errors, remove the `node_modules` folder and the `package-lock.json` file in the terminal with:

`rm -rf node_modules/
rm package-lock.json`

Next run `npm install` and once the dependencies and modules are installed successfully, run `npm run build`, then `pm2 start umami`.
When I've updated Umami in the past, the page assets wouldn't load properly for me after running `npm run build`, then `pm2 start umami`. How I fixed this was to run `npm start` after `npm run build`, stop the process, then run `pm2 start umami`.
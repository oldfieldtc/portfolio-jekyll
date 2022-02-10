---
title: Installing Umami on a Synology NAS
thumbnail: https://assets.tommyoldfield.co.uk/umami-thumbnail
external: false
categories: ['Technology', 'Self-hosting']
excerpt: 
---

This guide assumes that you have admin access and SSH activated.

You will need to install the following packages from the Package Center:

- Node.js v14
- MariaDB 10
- phpMyAdmin
- Git

## Installing the source code

You may download the Umami files anywhere on your Synology, but I would recommend creating a new Shared Folder to store your Node apps in.
In File Station, click "Create" then "Create new Shared Folder" and give your folder a name such as "node". Make sure that you give yourself full Read/Write access!

Connect to the NAS via SSH and make your way to your newly created shared folder. If you aren't in the volume directory when you log in, you can type in `cd /volume1` to get to it.
Once in your shared folder, copy and paste in the following commands to get the source code and install the npm packages.

`git clone https://github.com/mikecao/umami.git
cd umami
npm install`

It may also help to clone the files to your local computer as we need to upload a database file in the next step.

## Setting up the database

Once you've installed MariaDB 10, create a password for the root user and keep the port as 3306. Go back to the DSM and open the settings for MariaDB 10 in the Package Center and a new window should pop up. Check the "Enable TCP/IP connection" box and make sure that the port number is the same (3306). Click "Apply" and then open up phpMyAdmin.

Log in as the root user and create a new database from the menu on the left, giving the database a name of your choice. Click on the database name, go to the import tab and browse your computer to upload the MySQL database found in the "sql" folder. If you hadn't cloned the files locally, you can copy the [MySQL schema](https://github.com/mikecao/umami/blob/master/sql/schema.mysql.sql) and create the file using a code/text editor such as VS Code or Notepad++.

## Umami configuration
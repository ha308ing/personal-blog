+++
title = 'Set up WSL'
date = 2023-10-20T22:23:23+04:00
draft = false
showTableOfContents = true
+++

## Set default WSL version

`wsl --set-default-version 2`
Version 2 differs from 1 with:

- it has it's own file system, but you can access it from network share with vm
- it's more like vm than set of tools
- comes with kernel
- allows to run gui apps

## List available distributions

`wsl --list --online`

## Install distribution

`wsl --install -d <Distribution Name>`

## Set default distribution

`wsl --setdefault <DistributionName>`

## Create user

After installation, you will be asked to enter username and password.
To keep this initial user untouched, I prefer user dispensable user, that can be broken, littered beyound recovery.
Option `-m` creates user-specific directory in `home` dir: `/home/user`
`sudo useradd -m user`

## Add user to `sudousers`

`sudo usermod -aG sudo user`

## Configure wsl from within. Set default user

Distro can be configured with file `/etc/wsl.conf`. It has many options. Allows to set default user (used with vscode and wsl extension). Also allows to separate windows PATH and distro's one.

```
[interop]
appendWindowsPath = false
[user]
default = user
```

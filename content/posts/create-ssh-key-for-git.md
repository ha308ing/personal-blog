+++
title = 'Create ssh key for git'
date = 2023-10-20T23:13:57+04:00
draft = false
+++

You can configure ssh keys for multiple accounts on sites like Gitlab, GitHub

## Create key and upload it to GitHub
```bash
ssh-keygen -t ed25519 -C "<comment>"
# enter path to /home/user/.ssh/github/<github-user>/id_ed25519
# start the ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github/<github-user>/id_ed25519
# add content of public key to accounts settings on site
gh ssh-key add <PATH-TO-PUB-KEY> --title "personal laptop"
```

## Configure ssh

```bash
touch ~/.ssh/config
# readable and writable only by the user and not accessible by others
chmod 600 ~/.ssh/config
~/.ssh/config
```

In this file you can create custom host names so that allows you to use specific host for each user.
```
Host <custom hostname, like <USER>.github.com>
        HostName github.com
        IdentityFile <PATH TO SSH KEY>
```

And now instead of referring to github you  should refer to specified host:
`git remote origin set-url git@custom.github.com:username/reponame`

## Test connection
`ssh -T git@<host specified in ~/.ssh/config>`

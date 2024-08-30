+++
title = 'Conditional Git Config'
date = 2024-04-04T18:42:44+04:00
draft = false
tags = ["git", "ssh", "gpg"]
+++

To have a releavant git config for different repos, use *includeIf* (for condition on remote url git version must be *>= 2.46.0* )

## Example with Remote URL

You've got multiple ssh keys for a host *user1.gh* and *user2.gh*:

```
Host user1.gh
    HostName github.com
    User user1
    IdentityFile ~/.ssh/github/user1/id_ed25519
```

and you use ssh link as a remote url:  
`git clone git@user1.gh:<user>/<repo>`

to automate git configuration, create a config specific to this host, create a file like:  
`~/gitconfigs/user1.gh.config`  
and put configuration you need there, like:

```toml
[user]
    email = user1@email.net
    signingkey = <key>
[commit]
    gpgsign = true
```

and *include* this config to a global config (`git config --global -e`):

```toml
[includeIf "hasconfig:remote.*.url:git@user1.gh:*/**"]
  path = /home/<user>/gitconfigs/user1.gh.config
```

verify if it has worked (in directory with relevant repo):  
`git config --list --show-origin`  
conditional config should be shown.

## Sources

- [post with all info](https://www.eddgrant.com/blog/2023/03/28/automatically-configuring-git-based-on-remote-url.html)
- [git config docs](https://git-scm.com/docs/git-config#_includes)
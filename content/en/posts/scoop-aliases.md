+++
title = 'Scoop Aliases'
date = 2024-09-13T12:51:07+04:00
draft = false
tags = ["windows", "scoop"]
+++

[Scoop](https://scoop.sh) is a package manager for Windows that embraces programs portability, but also support non-portable programs.
The best part of Scoop is that you can configure your personal "bucket" with programs that you need and use auto-update feature.
With Scoop it is very difficult to leave Windows.

One of the many great features of Scoop is aliases. Aliases allows you to use single command to execute multiple commands.

Scoop has great documentation and cli help.

`scoop help alias` will give you all the needed information to use aliases.

`scoop alias list` to view configures aliases

`scoop alias add <alias> <command> <?description>` to add alias

For example I added next aliases:

- `scoop alias add add 'scoop install $args; "Scoop install packages"`
- `scoop alias add clean 'scoop cache rm * | scoop cleanup -a -k'`
- `scoop alias add rm 'scoop unintall $args' "Scoop uninstall packages"`
- `scoop alias add up 'scoop update | scoop status' "Update scoop and show status"`
- `scoop alias add upgrade 'scoop update *' "Scoop update all"`

`scoop alias rm <alias>` to remove alias

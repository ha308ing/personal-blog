+++
title = 'Install GitHub cli on WSL Ubuntu'
date = 2023-10-20T23:10:27+04:00
draft = false
+++

Just use commands from documentation.
```bash
type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
sudo apt update
sudo apt install gh
```

To give access `gh` to GitHub profile, create access token on page:
https://github.com/settings/tokens/new

`gh auth login --with-token < mytoken.txt`

GitHub cli has wonderful `--help`  parameter for each command and any use case.

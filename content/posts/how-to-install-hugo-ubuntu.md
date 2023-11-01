+++
title = 'How to Install Hugo on Ubuntu'
date = 2023-10-20T13:07:12+04:00
draft = false
+++
To keep track of my actions for future uses and as dementia prevention measures, I've decided to use blog.

I've known something about Hugo static site generator and to strcuture and solidify my knowledge I am using this great tool.

Hugo website says that it requries Git, Go, Dart Sass.

As Git is preinstalled and is present in repositories, I started with Go.

All this tools (except Git) I've installed by adding it's prebuild binaries to PATH.

Order of actions:
- get link to tar
- download, I used `~/downloads` directory (`mkdir ~/downloads`)
- extract to desired directory, I used `~/local` (`mkdir  ~/local`)
- add directory with the binary to PATH, to isolate user's data I used `~/.profile`
- check installation


## Installing Go
### Link to Go binary releases
Links of Go binaries (including previous versoins) for all platforms are present on [go.dev/dl](https://go.dev/dl/)

As I use Ubuntu on WSL, I needed lateset [linux-amd64 version](https://go.dev/dl/go1.21.3.linux-amd64.tar.gz)

### Downloading tar-file
```bash
cd ~/downloads
curl -O -L https://go.dev/dl/go1.21.3.linux-amd64.tar.gz`
```

### Check contents of tar-file
Since tar could have its content at archive's root to extract it, the target directory should be created in advance, so to check what inside tar-file and where to extract it, I used

`tar -tf go1.21.3.linux-amd64.tar.gz`

This archive had root directory

### Extract tar-file
```bash
tar -C ~/local -xzf go1.21.3.linux-amd64.tar.gz
ls ~/local/go
```

### Add directory to PATH
- Open `~/.profile` file with vim:
  `vim ~/.profile`
- Add lines to the end:
  ```bash
  #add go to PATH
  export PATH=$PATH:/home/user/local/go/bin
  ```
- Close the file saving the changes with `Ctrl + X` shortcut
- To reload `~/.profile` in current terminal, enter command `source ~/.profile`

### Check installation
`go version`

## Installing Dart-Sass
```bash
cd ~/downloads
curl -O -L https://github.com/sass/dart-sass/releases/download/1.69.4/dart-sass-1.69.4-linux-x64.tar.gz
tar -tf dart-sass-1.69.4-linux-x64.tar.gz
tar -C ~/local -xzf dart-sass-1.69.4-linux-x64.tar.gz
echo -e "#add dart-sass to PATH\nexport PATH=$PATH:/home/user/local/dart-sass" >> ~/.profile
source ~/.profile
sass --version
```

## Installing Hugo
```bash
cd ~/downloads
curl -OL https://github.com/gohugoio/hugo/releases/download/v0.119.0/hugo_extended_0.119.0_linux-amd64.tar.gz
tar -tf hugo_extended_0.119.0_linux-amd64.tar.gz
mkdir ~/local/hugo-extended
tar -C ~/local/hugo-extended -xzf hugo_extended_0.119.0_linux-amd64.tar.gz
echo -e "#add hugo to PATH\nexport PATH=$PATH:/home/user/local/hugo-extended" >> ~/.profile
source ~/.profile
hugo version
```

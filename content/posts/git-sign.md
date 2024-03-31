+++
title = 'Git Sign'
date = 2024-04-01T02:02:33+04:00
draft = false
tags = ["git", "gpg"]
showTableOfContents = true
+++

## Get gpg Program on Windows

- using *scoop*: `scoop intsall gpg`
- also comes with `git-bash`: `/bin/gpg`

To change pin entry dialog language set user environment variable *LANG* to *en*:
- <kbd>Win</kbd>+<kbd>R</kbd>, `rundll32.exe sysdm.cpl,EditEnvironmentVariables`
- *Control Panel* / *User Accounts* / *Change my environment variables*

## Generate GPG Key

1. Run command:
    - `gpg --full-generate-key`
2. Enter key options
3. Enter signer info:
    - *name*
    - *email* (GitHub verified, or GitHub no-reply)
    - *comment*
4. Get key id (**used to configure git**):
    - `gpg --list-secret-keys --keyid-format long`
    - find a section of the key by name, email
    - on the top row: `sec ed25519/<key id> <date>`
5. Generate public key (**used on GitHub**):
    - `gpg --armor --export <key id>`

**NOTE**: to make keys to work on linux add `export GPG_TTY=$(tty)` to *.bashrc* or *.profile*

## Configure git

Now configure *git* with info about:
- who signs (GitHub email)
- with what key (*key id*)
- with what program (optional if default program is not the same that generated key)

Something like this:
```
git config --local user.email <email>
git config --local user.signingkey <key id>
git config --global gpg.program <path to gpg executable>
```

To verify git config:
- `git config -l --local`
- `git config -l --scow-scope --show-origin`

**NOTE**:
1) it's written to add `commit.sign` and `tag.sign`, but without them commits also are signed (I guess it's for more control to what sign and what not)
2) to explicitly sign commit pass: `git commit -Sm "..."`
3) to debug commit signing: `GIT_TRACE=1 git commit ...`

## Add GPG Key to GitHub

1. Go to [GitHub new GPG key settings page](https://github.com/settings/gpg/new)
2. Paste complete public like:
    ```
    -----BEGIN PGP PUBLIC KEY BLOCK-----
    ...
    -----END PGP PUBLIC KEY BLOCK-----
    ```

## Sources

- [GitHub docs](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
- [GIT_TRACE source (see comments)](https://gist.github.com/paolocarrasco/18ca8fe6e63490ae1be23e84a7039374)
- [Add windows user environment variable](https://superuser.com/questions/651039/how-to-get-to-environment-variables-from-run)
- [Change pgp pin entry language](https://lists.gnupg.org/pipermail/gnupg-users/2011-May/042012.html)

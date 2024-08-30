# To add a post

```sh
hugo new content content/en/posts/<post-title>.md
hugo new content content/ru/posts/<post-title>.md
```

# To update hugo modules

```sh
hugo mod get
```

# To clone the repo

use `--recurse` flag to clone submodules

# To use tailwind classes

_assets/css/compiled/main.css_ must be compiled (and the resulted file will be just an asset, no need to update other things), so commands:

- `tailwind-dev` - build and watch
- `tailwind-build` - just build

[source](https://blowfish.page/docs/advanced-customisation/#make-a-build-script)

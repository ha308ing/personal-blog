# to add a post

```sh
hugo new posts/en/<post-title>.md
hugo new posts/ru/<post-title>.md
```

# to update hugo modules

```sh
hugo mod get
```

# To use tailwind classes

_assets/css/compiled/main.css_ must be compiled (and the resulted file will be just an asset, no need to update other things), so commands:

- `tailwind-dev` - build and watch
- `tailwind-build` - just build

[source](https://blowfish.page/docs/advanced-customisation/#make-a-build-script)

+++
title = 'How to Add Default Props to Compound Component From Ant Design'
date = 2024-09-19T21:02:15+04:00
draft = false
tags = ['react', 'ant design']
+++

I found myself repeating same props for all forms from [Ant Design](https://ant.design/components/form) so the reasonable question was where to put them once.

To do that I needed to replace a `Form` component with customized one and keep all child components (like `Item`).

So I came up to this:

```ts
import { Form as AntForm } from "antd";

const CustomForm = <T = unknown>(props: Parameters<typeof AntForm<T>>[0]) => (
  <AntForm layout="vertical" autoComplete="off" {...props} />
);

export const Form = Object.assign(CustomForm, AntForm) as typeof AntForm;
```

and it seems to work.

## Sources

- [Extending Typography.Title](https://towardsdev.com/lets-extend-ant-design-79a08ec15110)

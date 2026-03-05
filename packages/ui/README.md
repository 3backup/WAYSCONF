# @waysconf/ui

Shared UI library for WaysConf apps, organized with atomic design layers:

- `atoms`: smallest primitives (button, icons)
- `molecules`: composed controls (dropdowns, view switcher, toast)
- `sections`: app-level UI blocks (nominations filters, project detail shell)

## Usage

```tsx
import {
  Button,
  Dropdown,
  MultiSelectDropdown,
  NominationsFiltersSection,
  Toast,
} from "@waysconf/ui";
```

## Styles

Import shared styles from the package:

```tsx
import "@waysconf/ui/fonts.css";
import "@waysconf/ui/components.css";
import "@waysconf/ui/nominations.css";
import "@waysconf/ui/project-page.css";
```

## Tailwind

Some components use utility classes. Include UI sources in app `tailwind.config`:

```js
content: [
  "./src/**/*.{ts,tsx}",
  "../../packages/ui/src/**/*.{ts,tsx}",
];
```

## Button with Next.js Link

```tsx
import Link from "next/link";
import { Button } from "@waysconf/ui";

<Button href="/some-page" linkComponent={Link}>Go</Button>;
```

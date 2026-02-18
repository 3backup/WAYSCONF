# @waysconf/ui

Shared UI components (Button, Dropdown, MultiSelectDropdown, ViewSwitcher, Toast) built with Tailwind. Design matches dwa-voting-2026.

## Usage

In your app (e.g. ways-awards, waysboard):

```tsx
import { Button, Dropdown, Toast } from "@waysconf/ui";
```

## Tailwind

Components use Tailwind utility classes. In your app's `tailwind.config.js` (or `tailwind.config.ts`), add this package to `content` so Tailwind generates the CSS:

```js
content: [
  "./src/**/*.{ts,tsx}",
  "./node_modules/@waysconf/ui/src/**/*.{ts,tsx}",
],
```

In a monorepo with `packages/ui`:

```js
content: [
  "./src/**/*.{ts,tsx}",
  "../../packages/ui/src/**/*.{ts,tsx}",
],
```

## Button with Next.js Link

Pass `linkComponent` to render as a Next.js Link when `href` is set:

```tsx
import Link from "next/link";
import { Button } from "@waysconf/ui";

<Button href="/some-page" linkComponent={Link}>Go</Button>
```

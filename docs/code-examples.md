# Code Examples

This page demonstrates all the code-presentation features available in the site.

---

## 1. Syntax highlighting

Standard fenced code block — Shiki highlights every token automatically.

```ts
interface User {
  id: number
  name: string
  email: string
}

function greet(user: User): string {
  return `Hello, ${user.name}!`
}
```

---

## 2. Line highlighting

Use `// [!code highlight]` to draw attention to specific lines.

```ts
function calculateTotal(items: number[]): number {
  let total = 0
  for (const item of items) {
    total += item // [!code highlight]
  }
  return total // [!code highlight]
}
```

Or use the `{N}` brace syntax on the opening fence:

```js{3-4}
function add(a, b) {
  // plain line
  const result = a + b   // highlighted
  return result           // highlighted
}
```

---

## 3. Code groups

`::: code-group` lets you present the same concept in multiple languages side by side.

::: code-group

```ts [TypeScript]
async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```

```js [JavaScript]
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```

```sh [cURL]
curl https://example.com/api/users/42
```

:::

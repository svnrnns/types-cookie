# Type Safe Cookie

`types-cookie` is a lightweight TypeScript library for managing browser cookies with type safety and a flexible, modern API.

## Features

- **Type Safety**: Built for TypeScript with generic types.
- **Fallback values**: To make sure a value of the same type is always retrieved.
- **Safe Cookie Access**: Handles JSON parsing errors gracefully.
- **Flexible Expiration:** Set expiration in days, hours, minutes, or "never".
- **Cookie Options**: Full support for path, domain, secure, and SameSite attributes.
- **Simple API**: Friendly user experience. Dealing with Cookies has never been this easy.

## Installation

Install `types-cookie` via npm:

```bash
npm install types-cookie
```

## Ready to use

Easily store and retrieve user settings that persist across sessions. You can create a Cookie object or access the methods directly from the package:

```ts
import { Cookie, set, get } from 'types-cookie';

const cookie = new Cookie();

/** Use an object or access the method directly */
cookie.set('theme', 'dark', { expires: { days: 30 } });
set('theme', 'dark', { expires: { days: 30 } });
```

When retrieving data. A fallback value must be passed in case the stored value type does not match what we want to receive.
**Use generic types** to specify the desired types.

```ts
/** Will return light if the type validation fails or key 'light' is not found in cookies */
const theme = get<'light' | 'dark'>('theme', 'light');
```

Store temporary data with fine-grained expiration control and/or deep objects validation.

```ts
set('filters', ['desc', 'price'], {
  expires: { hours: 2 },
});

const stringArrayValidator = (value: any): boolean => {
  return Array.isArray(value) && value.every((v) => typeof v === 'string');
};

const filters = get<string[]>('filters', [], stringArrayValidator); // Expected output: ['desc', 'price'], will return [] if the array did not pass the validator
```

Data can be set to never expire:

```ts
set('token', 'xxxx', { expires: 'never' });

const token = get('token', '');
```

Take a look at the cookie options parameter:

```ts
set(
  'cookieConsent',
  { analytics: true, marketing: false },
  {
    path: '/',
    domain: '.example.com',
    secure: true,
    sameSite: 'Lax',
  }
);

const consent = get('cookieConsent', { analytics: false, marketing: false });
```

## API Reference

### Static Methods

- `isEnabled(): boolean`: Checks if cookies are enabled in the browser.

### Instance methods (also available as exports)

- `set<T>(key: string, value: T, options?: CookieOptions): void` : Stores a value in a cookie with optional configuration.
- `get<T>(key: string, fallback: T, validator?: (value: any) => boolean): T`: Retrieves a value with type safety and optional validator.
- `remove(key: string): void`: Deletes cookie by key.

### Types:

- `CookieOptions`:
  - `expires`: Number of days as a number, `'never'`, or `{ days?: number, hours?: number, minutes?: number }`. Defaults to `7`.
  - `path`: Cookie path (default: `'/'`).
  - `domain`: Cookie domain.
  - `secure`: HTTPS-only flag.
  - `sameSite`: `'Strict'`, `'Lax'`, or `'None'`.

MIT License © 2025

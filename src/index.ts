import Cookie from './Cookie';
import { type CookieOptions } from './types';

const defaultCookie = new Cookie();

/**
 * Retrieves a value from a cookie with type safety and a fallback.
 * @template T - The type of the value being stored.
 * @param key - The key of the cookie to retrieve.
 * @param fallback - The default value if the cookie is not found or invalid.
 * @param validator - Optional validation function.
 * @returns The retrieved value or fallback.
 */
const get = <T>(key: string, fallback: T, validator?: (value: any) => boolean): T =>
  defaultCookie.get(key, fallback, validator);

/**
 * Sets a value in a cookie with optional configuration.
 * @param key - The key for the cookie.
 * @param value - The value to store.
 * @param options - Cookie configuration options.
 */
const set = <T>(key: string, value: T, options?: CookieOptions): void => defaultCookie.set(key, value, options);

/**
 * Removes a cookie by its key.
 * @param key - The key of the cookie to remove.
 */
const remove = (key: string): void => defaultCookie.remove(key);

/**
 * Checks if cookies are enabled in the browser.
 * @returns {boolean} True if cookies are enabled, false otherwise.
 */
const isEnabled = (): boolean => Cookie.isEnabled();

export { Cookie, get, set, remove, isEnabled };
export { type CookieOptions };

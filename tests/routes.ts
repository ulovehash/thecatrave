// Every indexable route, addressed the way production serves it.
// The list itself lives in pages.mjs so the browser tests, the audits, the
// build and html-validate can never disagree about which pages exist.
// @ts-expect-error - plain ESM module, no type declarations by design
import { routes as manifestRoutes } from '../pages.mjs';

export const routes: { path: string; name: string }[] = manifestRoutes;

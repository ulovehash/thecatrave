// Every indexable route, addressed the way production serves it.
// The list itself lives in pages.mjs so the browser tests, the audits, the
// build and html-validate can never disagree about which pages exist.
// @ts-expect-error - plain ESM module, no type declarations by design
import { routes as manifestRoutes } from '../pages.mjs';

// CHECK_ROUTES narrows a run to the pages a push touched (scripts/changed-routes.mjs
// decides). Unset means every route, which is what local runs and pull requests get.
const only = process.env.CHECK_ROUTES === undefined ? null : process.env.CHECK_ROUTES.split(',').filter(Boolean);

export const routes: { path: string; name: string }[] = only
  ? manifestRoutes.filter((route: { path: string }) => only.includes(route.path))
  : manifestRoutes;

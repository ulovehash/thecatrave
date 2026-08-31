# Breakbeat layout QA

## Automated checks passed

- One `h1`; no heading-level jumps.
- Nineteen unique track entries and nineteen track players.
- No duplicate iframe source URLs.
- Every iframe has a descriptive `title`; every editorial image has intrinsic `width` and `height`.
- No missing local assets, duplicate IDs or broken internal anchors.
- No reused breakbeat media from the homepage, jungle guide or UK electronic music article.
- Seven contextual listening groups place all nineteen tracks beside the relevant history. Their desktop grid uses three columns; the 1000px breakpoint moves the player below the copy; the 760px breakpoint uses a single full-width player row.
- Images, maps, tables and listening blocks use fluid widths capped by the shared article grid.
- The mobile map switches from the wide SVG to a readable semantic list.
- FAQ first item is open by default.

## Browser check status

The in-app browser could not open the local server because its administrator security-policy check was temporarily unavailable. No security bypass was attempted. The page therefore passed structural and CSS breakpoint audits, but the final pixel-level screenshots at 320, 360, 390, 768, 1024, 1440 and 1920 still need one browser pass when local preview access is restored.

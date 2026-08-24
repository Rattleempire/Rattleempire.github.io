# Rattle Empire Marketplace

A static-first marketplace frontend for `rattleempire.github.io`.

## Included in v0.1

- Responsive storefront
- AI, streaming, software, gaming and gift-card categories
- Search + sorting
- Product cards
- Local browser cart demo
- Light/dark theme toggle
- Seller CTA
- GitHub Pages Actions deployment

## Important production note

GitHub Pages is static hosting. This frontend should not contain secrets, payment credentials, private API keys, passwords, or account inventory. Connect authentication, payments, seller inventory, order fulfillment and admin functions to a secure backend before accepting real transactions.

## Deploy

1. Create or use the `rattleempire.github.io` repository.
2. Upload this project to the repository's `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. Push to `main`. The included workflow deploys the static site.

The user-site repository name is the correct pattern for a site at `https://rattleempire.github.io/`.

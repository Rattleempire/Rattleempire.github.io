# Rattle Empire Platform v0.2

Rattle Empire is now structured as a marketplace platform rather than only a landing page.

Included:
- responsive marketplace
- search, filtering and sorting
- buyer dashboard shell
- seller onboarding shell
- admin shell
- cart prototype
- platform-ready PostgreSQL schema
- GitHub Pages deployment workflow

Architecture:
GitHub Pages frontend -> secure backend/API -> database + payment provider

Do not put database passwords, private API keys, payment secrets, customer passwords, or secret inventory into GitHub.

Before accepting real transactions, add:
- server-side authentication and authorization
- MFA for privileged users
- rate limiting and validation
- signed payment webhook handling
- order fulfillment
- audit logging and backups
- reviewed terms/privacy/refund policies
- seller/product verification

The marketplace is intended for authorized subscriptions, licenses, codes and legitimate digital products, not compromised or stolen accounts.

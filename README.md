# US Bonus Finder — Static Website

A responsive, framework-free HTML/CSS/JavaScript starter website for a US-focused CPA offer directory.

## Files
- `index.html` — homepage
- `offers.html` — all offers
- `gift-cards.html`, `surveys.html`, `shopping.html`, `credit.html` — category pages
- `how-it-works.html`, `eligibility.html`, `privacy.html`, `terms.html`, `contact.html` — information and legal-template pages
- `assets/styles.css` — responsive styling
- `assets/offers.js` — offer data, rendering, device hint and click logging

## Run locally
Open `index.html` in a browser. No build step or package installation is needed.

## Publish free
A simple option is GitHub Pages:
1. Create a GitHub repository.
2. Upload the contents of this folder (not the ZIP itself).
3. In repository Settings → Pages, choose deploy from the main branch and root folder.
4. Wait for GitHub Pages to publish the site.
Alternative static hosts include Cloudflare Pages and Netlify free tiers; check their current plan limits.

## Before launch — required checklist
1. Confirm each CPA Grip offer is still active and that the supplied tracking URL is correct.
2. Confirm CPA Grip allows the intended traffic sources (Pinterest, TikTok, YouTube, Google organic search and Facebook) for EACH offer. Do not assume incentivized traffic is allowed.
3. ShopBack's CPA tracking URL was not supplied. Add it to the `shopback` object in `assets/offers.js` only after retrieving the correct link from CPA Grip.
4. Review all provider pages, official rules, prize details, billing terms and privacy notices. Offer creative and terms can change.
5. Replace/update the privacy policy and terms with the actual operator identity, contact details, hosting, analytics, cookie/consent and governing-law information. Obtain legal review where appropriate.
6. Add a real monitored contact email to `contact.html`.
7. Do not claim guaranteed winnings, guaranteed cash, guaranteed rewards or brand sponsorship.
8. Confirm whether each promotion is a sweepstakes, lead-generation offer, app install, trial or registration. Use the provider's official terminology.
9. Do not collect visitors' sensitive personal information on this website. Let the third-party provider handle its own forms.
10. Test the site on Android, iOS and desktop and verify every outbound link.

## Offer inventory (internal reference; do not display CPA commissions to visitors)
| Offer | CPA payout supplied | Device | Offer ID |
|---|---:|---|---:|
| Nielsen Pulse | $7.70 | Android | 75233 |
| Cash App-themed gift card promotion A | $3.42 | Desktop | 75524 |
| Cash App-themed gift card promotion B | $2.99 | Desktop | 75220 |
| Nike gift card promotion | $2.99 | Desktop | 75217 |
| Jersey Mike's gift card promotion | $2.73 | Android | 75135 |
| Sneakers gift card promotion | $3.08 | Android | 72846 |
| Walmart-themed $500 entry promotion | $2.48 | iOS | 74764 |
| Gas gift card promotion | $2.73 | Android | 75105 |
| ShopBack | $0.28 | Desktop | Not supplied |
| Experian credit report / score offer | $2.99 | Android | 75350 |

Sum of listed payouts: $31.39 for one valid conversion on each offer. This is not a forecast or guaranteed revenue.

## Tracking notes
- The starter logs outbound clicks locally in the visitor's browser (localStorage). It does not send click records to a server.
- A safe GA4 event hook is present, but no Measurement ID or analytics script is configured. If adding analytics, update privacy disclosures and implement required consent.
- The CPA links are used exactly as supplied. Do not append invented sub-ID parameters. Use CPA Grip's documented tracking-ID/sub-ID format only after confirming it.
- Device detection is advisory only; it is not a reliable eligibility or geo-verification mechanism.


## Visual design update
The interface has been refreshed using a clean editorial/fintech visual direction:
- pale blue-grey canvas, white panels and generous spacing
- bold near-black typography with lime highlight accents
- vivid blue primary actions and rounded offer cards
- responsive navigation and mobile-friendly layouts
- a custom CSS reward-card illustration on the homepage (no paid image assets required)

The update preserves the existing offer inventory, outbound links, device hints and click-event hook.

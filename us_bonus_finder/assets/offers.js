const OFFERS = [
  {
    "id": "nielsen-pulse",
    "title": "Nielsen Pulse",
    "category": "surveys",
    "device": "Android",
    "geo": "United States",
    "kind": "App install & survey rewards",
    "description": "Explore Nielsen Pulse, an early-access research app. Review the app details, eligibility and participation requirements before installing.",
    "cta": "View app offer",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75233",
    "disclaimer": "Nielsen Pulse participation and any rewards are subject to the app's terms and eligibility requirements."
  },
  {
    "id": "cashapp-1000-a",
    "title": "Cash App $1,000 Gift Card Promotion",
    "category": "gift-cards",
    "device": "Desktop",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "A third-party promotional entry opportunity featuring a Cash App-themed gift-card promotion. Participation requirements apply.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75524",
    "disclaimer": "This promotion is not affiliated with, sponsored by or endorsed by Cash App. No prize is guaranteed."
  },
  {
    "id": "cashapp-1000-b",
    "title": "Cash App $1,000 Gift Card Promotion",
    "category": "gift-cards",
    "device": "Desktop",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "A separate third-party Cash App-themed gift-card promotion. Read the entry terms and eligibility information on the promotion page.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75220",
    "disclaimer": "This promotion is not affiliated with, sponsored by or endorsed by Cash App. No prize is guaranteed."
  },
  {
    "id": "nike-100",
    "title": "$100 Nike Gift Card Promotion",
    "category": "gift-cards",
    "device": "Desktop",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "Explore a third-party promotional entry featuring a $100 Nike gift-card offer. Check the full participation rules before entering.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75217",
    "disclaimer": "Nike is not affiliated with or endorsing this promotion. The promotion is operated by a third party."
  },
  {
    "id": "jersey-mikes-100",
    "title": "$100 Jersey Mike's Gift Card Promotion",
    "category": "gift-cards",
    "device": "Android",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "A third-party gift-card promotion displayed with Jersey Mike's branding. Review the terms, eligibility and any additional steps.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75135",
    "disclaimer": "Jersey Mike's is not affiliated with or endorsing this promotion. A chance to enter is not a guarantee of a prize."
  },
  {
    "id": "sneakers-card",
    "title": "Sneakers Gift Card Promotion",
    "category": "gift-cards",
    "device": "Android",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "Explore a third-party sneakers gift-card entry promotion. The specific prize, sponsor and requirements are determined by the promotion's official terms.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=72846",
    "disclaimer": "Do not assume any shoe brand sponsors or endorses this promotion. Check the official rules for prize details."
  },
  {
    "id": "walmart-500",
    "title": "$500 Walmart eGift Card Entry Promotion",
    "category": "gift-cards",
    "device": "iOS",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "A third-party entry promotion featuring a Walmart-themed $500 eGift Card. Review the official rules and entry requirements.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=74764",
    "disclaimer": "This is an entry promotion, not a notice that you have won. Walmart is not represented as a sponsor or endorser."
  },
  {
    "id": "gas-100",
    "title": "$100 Gas Gift Card Promotion",
    "category": "gift-cards",
    "device": "Android",
    "geo": "United States",
    "kind": "Email / ZIP submission",
    "description": "Explore a third-party $100 gas gift-card promotion. Participating brands, prize details and eligibility are subject to the official rules.",
    "cta": "View promotion",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75105",
    "disclaimer": "Fuel and retailer brands shown in the promotion creative are not necessarily sponsors or endorsers."
  },
  {
    "id": "shopback",
    "title": "ShopBack Cashback Registration",
    "category": "shopping",
    "device": "Desktop",
    "geo": "United States",
    "kind": "Registration",
    "description": "Learn about ShopBack's shopping cashback service and browser extension. Cashback availability and terms vary by retailer and transaction.",
    "cta": "Offer link pending",
    "url": "",
    "disclaimer": "ShopBack is a third-party service. Review its own terms, participating retailers and cashback conditions."
  },
  {
    "id": "experian",
    "title": "Experian Credit Report & FICO Score Trial",
    "category": "credit",
    "device": "Android",
    "geo": "United States",
    "kind": "Credit report trial",
    "description": "Review the Experian credit-report and FICO Score offer details, including the trial period, recurring membership price and cancellation terms.",
    "cta": "Review credit offer",
    "url": "https://singingfiles.com/show.php?l=0&u=2373182&id=75350",
    "disclaimer": "The supplied landing page states a $1 initial offer followed by a 7-day trial and $21.95 per month unless cancelled. Verify current terms before proceeding."
  }
];

const categoryNames = {
  "gift-cards":"Gift Card Promotions",
  "surveys":"Surveys & Rewards",
  "shopping":"Shopping Rewards",
  "credit":"Credit Offers"
};
function currentDevice(){
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/i.test(ua)) return "iOS";
  if (/Android/i.test(ua)) return "Android";
  return "Desktop";
}
function offerCard(o){
  const device = currentDevice();
  const compatible = o.device === device;
  const url = o.url;
  const action = url
    ? `<a class="button button-primary" href="${url}" target="_blank" rel="sponsored nofollow noopener" data-offer-id="${o.id}">${o.cta} <span aria-hidden="true">↗</span></a>`
    : `<span class="button button-disabled" aria-disabled="true">${o.cta}</span>`;
  return `<article class="offer-card">
    <div class="offer-card-top"><span class="tag">${categoryNames[o.category] || "Promotion"}</span><span class="tag tag-muted">${o.device}</span></div>
    <h3>${o.title}</h3>
    <p>${o.description}</p>
    <div class="offer-meta"><span>⌖ ${o.geo} only</span><span>▣ ${o.kind}</span></div>
    <p class="offer-disclaimer">${o.disclaimer}</p>
    <div class="offer-actions">${action}${compatible ? '<span class="device-note">Compatible with this device</span>' : `<span class="device-note">Listed for ${o.device}; you appear to be on ${device}.</span>`}</div>
  </article>`;
}
function renderOffers(){
  document.querySelectorAll("[data-offers]").forEach(el => {
    const filter = el.dataset.filter || "all";
    const featured = el.dataset.featured === "true";
    let items = OFFERS.filter(o => filter === "all" || o.category === filter);
    if(featured) items = items.slice(0,6);
    el.innerHTML = items.map(offerCard).join("");
    const count = document.querySelector("[data-offer-count]");
    if(count) count.textContent = items.length;
  });
}
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-offer-id]");
  if(!link) return;
  const id = link.dataset.offerId;
  const record = {offer:id, source:new URLSearchParams(location.search).get("src") || "direct", at:new Date().toISOString()};
  try {
    const log = JSON.parse(localStorage.getItem("ubf_click_log") || "[]");
    log.push(record);
    localStorage.setItem("ubf_click_log", JSON.stringify(log.slice(-200)));
  } catch(err) {}
  if(typeof window.gtag === "function"){
    window.gtag("event","outbound_offer_click",{offer_id:id, page_location:location.href});
  }
});
document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if(menu && nav) menu.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", String(open));
  });
});

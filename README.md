# FUSION SPHERE

English corporate website for FUSION SPHERE SDN. BHD., Kuala Lumpur, Malaysia.

## Run

```sh
npm install
npm run dev -- --port 3023
```

## Deploy to Vercel

Upload or push this project directory to the GitHub repository. Exclude `node_modules`, `.next`, and `out`. Import that repository into Vercel. Choose Next.js, build command `npm run build`, and use the default framework output settings. There is no database or server API. The Next.js build exports the full site to `out`.

For browser drag-and-drop uploads, use the sibling `FUSION-SPHERE-GitHub-Upload` directory. It contains only deployment source, configuration, and public assets, without dependencies or build caches. Upload its contents to the repository root; do not upload the parent workspace or a ZIP as website source. The development folder remains `FUSION-SPHERE`.

Production URL: https://fusionsphere.vip
Public email: info@fusionsphere.vip

Domain configuration on Vercel must include fusionsphere.vip. Optional overrides are listed in `.env.example`; they must contain the actual public domain, never an example domain. Submit https://fusionsphere.vip/sitemap.xml to Google Search Console after the domain is live.

## Customize

- Company, public contacts, products and address: `lib/site.ts`
- Brand colors, layout and responsive rules: `app/globals.css`
- Logo: `public/logo.svg`, `components/brand.tsx`, `app/icon.svg`
- Product pictures: `public/images/*.webp`
- Header, footer, catalog, contact form: `components/`

The form creates a complete email draft in the visitor's email application, with their entered fields. It does not submit to a backend or imply a message has already been received. Add a verified phone or WhatsApp to the empty configuration fields to display those channels.

## Evidence and Content

The supplied six-page SSM corporate information report confirms the legal name, registration, incorporation date, business address, and registered scope: wholesale of electrical and electronics goods, clothing, and clothing accessories. The report's phone number belongs to SSM, not to Fusion Sphere. It is not used. Director/shareholder IDs, private addresses, financial information, and signatures are excluded from website content and source delivery.

The owner has confirmed that the business also sells large appliances and acts as a Gaggenau appliance agent. The catalog contains 23 entries: seven Gaggenau product directions sourced from the manufacturer's website, plus sixteen illustrative directions covering eight large-appliance categories, four electronics categories, two apparel categories, and two accessories categories. The agency statement is owner-provided, not independently verified. No exclusive territories, authorization certificates, or guaranteed inventory are claimed. Specifications, market suitability, and availability require separate confirmation.

Gaggenau has a dedicated page and catalog filter. Its photographs remain separate from generated category imagery. See `GAGGENAU_SOURCES.md` and `gaggenau-sources.json` for provenance. Confirm brand-media usage permission under the agency arrangement before public release. Generated photography does not portray company facilities, employees, or completed contracts. No sales statistics, client testimonials, certifications, or global office claims are invented.

Privacy and terms are starting website copy. Review against actual business practices before public launch.

## Verification

`npm run build` validates TypeScript and generates Home, Company, Gaggenau, Product Scope, Working Together, Contact, Privacy, Terms, 404, sitemap, and robots.

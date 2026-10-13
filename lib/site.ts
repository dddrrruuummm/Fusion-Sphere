export const site = {
  name: "Fusion Sphere",
  legalName: "FUSION SPHERE SDN. BHD.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://fusionsphere.vip").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@fusionsphere.vip",
  phone: "", whatsapp: "",
  registration: "202501042832 (1644240-H)",
  incorporated: "September 10, 2025",
  address: { street: "63 Jalan 27/70A", district: "Desa Sri Hartamas", city: "Kuala Lumpur", region: "Wilayah Persekutuan", postalCode: "50480", country: "MY", countryName: "Malaysia" },
  addressText: "63 Jalan 27/70A, Desa Sri Hartamas, 50480 Kuala Lumpur, Malaysia",
};
export const mapsUrl = `https://www.google.com/maps/search/?api=1&hl=en&query=${encodeURIComponent(site.addressText)}`;
export const navigation = [ { label: "Company", href: "/about" }, { label: "Gaggenau", href: "/gaggenau" }, { label: "Product Scope", href: "/showcase" }, { label: "Working Together", href: "/services" } ];
export type Category = "Appliances" | "Electronics" | "Apparel" | "Accessories";
export type Product = { id: string; name: string; category: Category; image: string; description: string; brief: string; brand?: string; source?: string; imageFit?: "cover" | "contain" };
export const gaggenauProducts: Product[] = [
 {id:"GG-01",name:"Gaggenau EB 333 oven",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-eb333.webp",description:"A 90 cm-wide oven with 17 heating modes and a stainless-steel door.",brief:"Installation dimensions, electrical requirements, destination market, and model availability.",source:"https://www.gaggenau.com/global/appliances/ovens/eb-333"},
 {id:"GG-02",name:"Gaggenau coffee machines",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-coffee.webp",description:"Built-in espresso machines with personal beverage profiles and automatic cleaning programs.",brief:"Preferred series, installation dimensions, power supply, and destination market.",source:"https://www.gaggenau.com/global/appliances/coffee-machines"},
 {id:"GG-03",name:"Gaggenau induction cooktops",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-induction.webp",description:"Full-surface and flex induction options, alongside modular Vario cooking configurations.",brief:"Cooktop width, cooking layout, electrical supply, ventilation integration, and destination.",source:"https://www.gaggenau.com/global/mkt-category-page/cooktops"},
 {id:"GG-04",name:"Gaggenau ventilation",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-ventilation.webp",description:"Wall-mounted, ceiling, table, and downdraft extraction for integrated kitchen layouts.",brief:"Installation type, width, ducting or recirculation requirements, and cooktop pairing.",source:"https://www.gaggenau.com/global/mkt-category-page/extractors"},
 {id:"GG-05",name:"Gaggenau refrigeration",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-refrigeration.webp",imageFit:"contain",description:"Built-in refrigeration, including modular Vario cooling Expressive series configurations.",brief:"Refrigerator or freezer combination, capacity, cabinetry dimensions, voltage, and market.",source:"https://www.gaggenau.com/global/appliances/refrigerators"},
 {id:"GG-06",name:"Gaggenau wine cabinets",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-wine.webp",description:"Wine climate cabinets with independent temperature zones and configurable bottle presentation.",brief:"Bottle capacity, temperature zones, installation dimensions, finish, and market.",source:"https://www.gaggenau.com/global/appliances/wine-cabinets"},
 {id:"GG-07",name:"Gaggenau DF480101 dishwasher",category:"Appliances",brand:"Gaggenau",image:"/images/gaggenau-dishwasher.webp",imageFit:"contain",description:"A 60 cm fully integrated dishwasher from the Gaggenau 400 series.",brief:"Installation height, cabinet dimensions, water and electrical supply, and local availability.",source:"https://www.gaggenau.com/global/mkt-product/dishwashing/400-series-400-series/fully-integrated-diswashers/DF480101"},
];
export const products: Product[] = [
  ...gaggenauProducts,
  { id: "HA-01", name: "Refrigerators", category: "Appliances", image: "/images/refrigerators.webp", description: "Full-size refrigeration, including multi-door and fridge-freezer formats.", brief: "Capacity, dimensions, finish, voltage, destination-market requirements, and quantity." },
  { id: "HA-02", name: "Washing machines", category: "Appliances", image: "/images/washing-machines.webp", description: "Front-loading and top-loading laundry appliances for household use.", brief: "Load capacity, loading type, dimensions, voltage, programs, and destination market." },
  { id: "HA-03", name: "Clothes dryers", category: "Appliances", image: "/images/clothes-dryers.webp", description: "Full-size drying appliances for home laundry installations.", brief: "Drying technology, drum capacity, power supply, dimensions, and order volume." },
  { id: "HA-04", name: "Air conditioning", category: "Appliances", image: "/images/air-conditioning.webp", description: "Split-system cooling units and matching outdoor equipment.", brief: "Cooling capacity, room application, system type, refrigerant, voltage, and market requirements." },
  { id: "HA-05", name: "Televisions & displays", category: "Appliances", image: "/images/televisions.webp", description: "Large-screen televisions and displays in a range of screen formats.", brief: "Screen size, resolution, connection options, operating system, packaging, and quantity." },
  { id: "HA-06", name: "Ovens & ranges", category: "Appliances", image: "/images/ovens-ranges.webp", description: "Full-size ovens, cooking ranges, and kitchen cooking appliances.", brief: "Installation format, dimensions, oven capacity, power source, and local requirements." },
  { id: "HA-07", name: "Dishwashers", category: "Appliances", image: "/images/dishwashers.webp", description: "Freestanding and built-in dishwashing appliances for household kitchens.", brief: "Installation type, place-setting capacity, dimensions, voltage, and packing requirements." },
  { id: "HA-08", name: "Chest freezers", category: "Appliances", image: "/images/chest-freezers.webp", description: "Top-opening freezer units for additional cold-storage capacity.", brief: "Storage capacity, dimensions, temperature range, power supply, and destination market." },
  { id: "EL-01", name: "Personal audio", category: "Electronics", image: "/images/audio.webp", description: "Headphones, earbuds, and everyday audio accessories.", brief: "Device compatibility, connection type, finish, packaging, and quantity." },
  { id: "EL-02", name: "Power & connectivity", category: "Electronics", image: "/images/connectivity.webp", description: "Charging accessories, adapters, cables, and USB hubs.", brief: "Connector type, output requirements, destination-market standards, and quantity." },
  { id: "EL-03", name: "Lighting & electrical goods", category: "Electronics", image: "/images/lighting.webp", description: "Portable lighting and electrical goods for everyday use.", brief: "Power source, intended use, electrical requirements, and delivery market." },
  { id: "EL-04", name: "Desktop accessories", category: "Electronics", image: "/images/desk.webp", description: "Keyboards, mice, and practical desktop peripherals.", brief: "Layout, connection type, device support, finish, and pack configuration." },
  { id: "AP-01", name: "Everyday clothing", category: "Apparel", image: "/images/apparel.webp", description: "T-shirts, sweatshirts, and versatile clothing basics.", brief: "Fabric, size range, colors, fit, construction, and order mix." },
  { id: "AP-02", name: "Casualwear & layers", category: "Apparel", image: "/images/outerwear.webp", description: "Casual clothing, light outerwear, and seasonal layers.", brief: "Season, fabric weight, sizing, trims, finishing, and target market." },
  { id: "AC-01", name: "Bags & carry goods", category: "Accessories", image: "/images/bags.webp", description: "Totes, pouches, and useful clothing accessories.", brief: "Materials, dimensions, hardware, color palette, and packing requirements." },
  { id: "AC-02", name: "Finishing accessories", category: "Accessories", image: "/images/accessories.webp", description: "Headwear, belts, and complementary fashion accessories.", brief: "Materials, finish, sizing, assortment mix, packaging, and quantity." },
];
export const steps = [
  { name: "Define the brief", text: "Product category, specifications, quantity, and the market it needs to reach." },
  { name: "Align the details", text: "Discuss availability, sample requirements, packaging, and commercial terms." },
  { name: "Agree the next step", text: "Confirm the agreed scope, responsibilities, and delivery expectations in writing." },
];

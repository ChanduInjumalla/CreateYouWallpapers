/* ============================================================
   CATEGORY DESIGNS DATASET
   Powers the Livspace-style category browsing experience
   with authentic Create You Wallpapers branding and data.
   ============================================================ */

import { galleryImages } from './galleryData';

// Helper to find local gallery image by partial name
const localImg = (name, fallback = '/gallery/luxury-marble-fluted-panel-living-room.jpeg') => {
  const found = galleryImages.find(g => g.src.includes(name));
  return found ? found.src : fallback;
};

/* ── Wallpaper Category Configurations ── */
export const wallpaperDesignData = {
  'floral-wallpaper': {
    categoryName: 'Floral Wallpaper',
    resultCount: '180+ Designs',
    h1: 'Floral Wallpaper Designs',
    shortIntro: 'Discover timeless botanical and floral wallpaper designs curated for Indian homes. Transform your living rooms, bedrooms, and dining spaces into elegant sanctuaries with graceful blooms, vintage illustrations, and modern watercolor botanicals.',
    extendedIntro: [
      'Floral wallpapers introduce organic movement and romantic warmth to interior walls. Our collection spans everything from delicate vintage European rose prints and Indian heritage botanical motifs to contemporary oversized watercolor blooms and muted Japanese cherry blossoms.',
      'Crafted from heavy-duty commercial washable vinyl and eco-friendly breathable non-woven substrate, our floral wallpapers resist humidity, resist fading under natural sunlight, and retain rich pigment depth for over a decade.',
      'Our Hyderabad installation team provides end-to-end service including laser-level wall measurement, flawless pattern matching along seams, dampness sealing, and bubble-free application within a single working day.'
    ],
    trendingTitle: 'Top Trending Floral Wallpaper Designs',
    trendingSubtitle: 'Handpicked floral patterns chosen by Hyderabad homeowners this month',
    trendingDesigns: [
      {
        id: 'fl-trend-1',
        title: 'Vintage Dahlia & Peony Botanical Mural',
        subtitle: 'Living & Bedroom • Premium Vinyl',
        image: localImg('gold-leaf-pattern-wallpaper'),
        tag: 'Bestseller',
        spec: 'Washable Vinyl | Heavy Matte | 57 sq.ft Roll'
      },
      {
        id: 'fl-trend-2',
        title: 'Emerald Gardenia Botanical Feature Wall',
        subtitle: 'Dining Room • Non-Woven Textile',
        image: localImg('tropical-leaf-wallpaper-green'),
        tag: 'Trending',
        spec: 'Textured Surface | Fade Resistant | Custom Size'
      },
      {
        id: 'fl-trend-3',
        title: 'Heritage Peacock & Cherry Blossom Wallpaper',
        subtitle: 'Master Bedroom • Metallic Highlights',
        image: localImg('peacock-wallpaper-design-warm'),
        tag: 'Top Rated',
        spec: 'Embossed Finish | Luxury Gold Inlay | 57 sq.ft Roll'
      }
    ],
    designs: [
      {
        id: 'fl-1',
        title: 'Golden Botanical Leaf Pattern Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Vinyl • Living Room',
        image: localImg('gold-leaf-pattern-wallpaper'),
        finish: 'Matte Embossed',
        room: 'Living Room'
      },
      {
        id: 'fl-2',
        title: 'Regal Blue Peacock & Floral Blossom Wall',
        spec: 'Size: Custom Mural • Silk Weave • Master Bedroom',
        image: localImg('peacock-wallpaper-design-blue'),
        finish: 'Textured Silk',
        room: 'Master Bedroom'
      },
      {
        id: 'fl-3',
        title: 'Vintage Botanical Rose & Foliage Pattern',
        spec: 'Size: 57 sq.ft roll • Breathable Non-Woven • Dining',
        image: localImg('peacock-wallpaper-vintage'),
        finish: 'Classic Matte',
        room: 'Dining Room'
      },
      {
        id: 'fl-4',
        title: 'Pastel Meadow Botanical Accent Wallpaper',
        spec: 'Size: 57 sq.ft roll • Wipe-Clean Vinyl • Foyer',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        finish: 'Soft Linen Texture',
        room: 'Foyer'
      },
      {
        id: 'fl-5',
        title: 'Modern Abstract Floral Watercolor Mural',
        spec: 'Size: Custom Fit • Seamless Print • Bedroom',
        image: localImg('3d-floral-wallpaper-blue'),
        finish: 'Smooth Canvas',
        room: 'Bedroom'
      },
      {
        id: 'fl-6',
        title: 'Gold Leaf Damask Botanical Wallpaper',
        spec: 'Size: 57 sq.ft roll • Pearl Shimmer • Drawing Room',
        image: localImg('golden-metallic-wallpaper-rolls'),
        finish: 'Pearl Shimmer',
        room: 'Drawing Room'
      },
      {
        id: 'fl-7',
        title: 'Lush Botanical Forest Garden Mural',
        spec: 'Size: Custom Dimension • Deep Matte • Living Room',
        image: localImg('tropical-palace-wallpaper-mural'),
        finish: 'Anti-Glare Matte',
        room: 'Living Room'
      },
      {
        id: 'fl-8',
        title: 'Minimalist Monochromatic Botanical Wall',
        spec: 'Size: 57 sq.ft roll • Non-Woven • Home Office',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        finish: 'Textured Grain',
        room: 'Home Office'
      },
      {
        id: 'fl-9',
        title: 'Warm Beige Floral Vine Accent Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Polymer • Bedroom',
        image: localImg('peacock-wallpaper-design-warm'),
        finish: 'Tactile Relief',
        room: 'Bedroom'
      },
      {
        id: 'fl-10',
        title: 'Chinoiserie Crane & Blossom Wall Treatment',
        spec: 'Size: Custom Wall • Metallic Gold Inlay • Dining',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        finish: 'Silk Blend',
        room: 'Dining Room'
      },
      {
        id: 'fl-11',
        title: 'Nordic Botanical Wildflower Wallpaper',
        spec: 'Size: 57 sq.ft roll • Eco-friendly Paper • Kids Room',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        finish: 'Natural Matte',
        room: 'Kids Room'
      },
      {
        id: 'fl-12',
        title: 'Dark Moody Botanical Feature Wallpaper',
        spec: 'Size: 57 sq.ft roll • Heavyweight Vinyl • Lounge',
        image: localImg('geometric-leaf-wallpaper-dark'),
        finish: 'Deep Velvet Matte',
        room: 'Lounge & TV Room'
      },
      {
        id: 'fl-13',
        title: 'Soft Lilac Floral Harmony Wallpaper',
        spec: 'Size: 57 sq.ft roll • Stain Resistant • Guest Room',
        image: localImg('3d-scallop-wallpaper-pastel'),
        finish: 'Satin Finish',
        room: 'Guest Bedroom'
      },
      {
        id: 'fl-14',
        title: 'French Country Floral Motif Wallpaper',
        spec: 'Size: 57 sq.ft roll • High Tensile • Hallway',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        finish: 'Subtle Woven Effect',
        room: 'Hallway'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Transform Your Bedroom Walls',
        subtext: 'Free doorstep design catalog preview & laser measurement across Hyderabad.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Custom Sized Murals for Any Wall',
        subtext: 'No seam misalignment. Scaled precisely to your wall height and width.',
        ctaText: 'BOOK CONSULTATION',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('tropical-palace-wallpaper-mural'),
    faqs: [
      { q: 'Is floral wallpaper washable and easy to maintain?', a: 'Yes. All our floral wallpapers are treated with a washable vinyl protective coating. Dust can be wiped off with a dry microfiber cloth, and light stains can be gently cleaned with a damp sponge.' },
      { q: 'Can floral wallpaper be installed on damp or uneven walls?', a: 'We recommend proper surface preparation before installation. Our team performs moisture tests and skim-coats uneven walls to ensure a perfectly smooth, bubble-free foundation that lasts for years.' },
      { q: 'How long does floral wallpaper installation take?', a: 'A standard accent wall (up to 120 sq.ft) takes approximately 2 to 4 hours. A complete master bedroom or living room is typically finished within a single working day.' },
      { q: 'Can you scale the floral pattern to fit my exact wall dimensions?', a: 'Yes! For our customized floral murals, our design team produces a 3D digital proof scaled precisely to your wall dimensions before printing.' }
    ]
  },

  'geometric-wallpaper': {
    categoryName: 'Geometric Wallpaper',
    resultCount: '150+ Designs',
    h1: 'Geometric Wallpaper Designs',
    shortIntro: 'Elevate your contemporary interiors with architectural symmetry, crisp lines, and striking geometry. From Scandinavian minimalism to bold Art Deco patterns, our geometric wallpapers add structured visual rhythm to modern spaces.',
    extendedIntro: [
      'Geometric wallpapers introduce a sense of modern precision and architectural balance. Clean hexagons, intersecting diamond lines, optical chevron patterns, and metallic grids establish an instant designer focal point.',
      'Ideal for media walls, contemporary living rooms, modern executive home offices, and luxury entryways, geometric patterns visually expand room proportions when properly aligned.',
      'Our team uses precision laser levels to align pattern repeats down to the millimeter, ensuring zero pattern drift and seamless edge joins.'
    ],
    trendingTitle: 'Top Trending Geometric Wallpapers',
    trendingSubtitle: 'Modern architectural designs chosen by homeowners for contemporary spaces',
    trendingDesigns: [
      {
        id: 'geo-trend-1',
        title: 'Modern Dark Geometric Foliage Wallpaper',
        subtitle: 'Living & Media Wall • Textured Vinyl',
        image: localImg('geometric-leaf-wallpaper-dark'),
        tag: 'Bestseller',
        spec: 'Laser Aligned Repeat | Heavyweight Vinyl'
      },
      {
        id: 'geo-trend-2',
        title: 'Metallic Gold Hexagon Grid Feature Wall',
        subtitle: 'Foyer & Drawing Room • Pearl Inlay',
        image: localImg('golden-metallic-wallpaper-rolls'),
        tag: 'Trending',
        spec: 'Light Reflective | 57 sq.ft Roll'
      },
      {
        id: 'geo-trend-3',
        title: 'Dimensional Scallop & Arch Pattern Wall',
        subtitle: 'Bedroom & Office • Modern Pastel',
        image: localImg('3d-scallop-wallpaper-pastel'),
        tag: 'Architect Choice',
        spec: 'Subtle Emboss | Anti-Static Finish'
      }
    ],
    designs: [
      {
        id: 'geo-1',
        title: 'Contemporary Dark Geometric Leaf Wallpaper',
        spec: 'Size: 57 sq.ft roll • Heavyweight Vinyl • TV Wall',
        image: localImg('geometric-leaf-wallpaper-dark'),
        finish: 'Matte Embossed',
        room: 'TV Wall'
      },
      {
        id: 'geo-2',
        title: 'Silver Wave Contemporary Accent Wallpaper',
        spec: 'Size: 57 sq.ft roll • Metallic Foil • Living Room',
        image: localImg('wave-pattern-wallpaper-silver'),
        finish: 'Reflective Foil',
        room: 'Living Room'
      },
      {
        id: 'geo-3',
        title: '3D Geometric Dimensional Roll Collection',
        spec: 'Size: 57 sq.ft roll • Textured Relief • Office',
        image: localImg('3d-wallpaper-rolls-geometric'),
        finish: 'Deep Emboss',
        room: 'Home Office'
      },
      {
        id: 'geo-4',
        title: 'Architectural Chevron Line Wallpaper',
        spec: 'Size: 57 sq.ft roll • Matte Non-Woven • Bedroom',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
        finish: 'Architectural Matte',
        room: 'Master Bedroom'
      },
      {
        id: 'geo-5',
        title: 'Mid-Century Modern Arch Pattern Mural',
        spec: 'Size: Custom Dimension • Smooth Finish • Dining',
        image: localImg('modern-boho-wall-art-set'),
        finish: 'Clay Finish',
        room: 'Dining Room'
      },
      {
        id: 'geo-6',
        title: 'Gold Line Hexagonal Luxury Feature Wall',
        spec: 'Size: 57 sq.ft roll • Gold Foil Detailing • Foyer',
        image: localImg('golden-metallic-wallpaper-rolls'),
        finish: 'Metallic Inlay',
        room: 'Foyer'
      },
      {
        id: 'geo-7',
        title: 'Abstract Cubist Geometric Wall Treatment',
        spec: 'Size: Custom Size • Textured Non-Woven • Lounge',
        image: localImg('wallpaper-showroom-abstract-wave'),
        finish: 'Textured Weave',
        room: 'Lounge'
      },
      {
        id: 'geo-8',
        title: 'Minimalist Line Art Monochromatic Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Surface • Study',
        image: localImg('minimalist-leaf-wall-art'),
        finish: 'Eggshell Finish',
        room: 'Study Room'
      },
      {
        id: 'geo-9',
        title: '3D Diamond Prism Optical Illusion Wall',
        spec: 'Size: 57 sq.ft roll • Multi-Depth Print • TV Unit',
        image: localImg('3d-wallpaper-rolls-collection'),
        finish: 'High Tactile Depth',
        room: 'TV Wall'
      },
      {
        id: 'geo-10',
        title: 'Art Deco Brass & Charcoal Grid Wallpaper',
        spec: 'Size: 57 sq.ft roll • Luxury Grade • Living Room',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        finish: 'Satin Shimmer',
        room: 'Living Room'
      },
      {
        id: 'geo-11',
        title: 'Modernist Grid & Curve Harmony Wallpaper',
        spec: 'Size: 57 sq.ft roll • Non-Woven • Staircase',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        finish: 'Smooth Matte',
        room: 'Staircase Wall'
      },
      {
        id: 'geo-12',
        title: 'Pastel Geometric Symmetry Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Eco Vinyl • Bedroom',
        image: localImg('3d-scallop-wallpaper-pastel'),
        finish: 'Fine Velvet Texture',
        room: 'Guest Bedroom'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Modern Wall Makeovers for Every Space',
        subtext: 'Laser-guided installation guarantees zero pattern mismatch along vertical joints.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Pair With Fluted Wood Panels',
        subtext: 'Combine geometric wallpapers with fluted panels for a high-end architectural feature wall.',
        ctaText: 'EXPLORE PANELS',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('luxury-marble-fluted-panel-living-room'),
    faqs: [
      { q: 'How do you ensure geometric patterns line up perfectly across seams?', a: 'Our experienced installation crew uses self-leveling cross-line lasers to set the vertical plumb line and matches every repeat seam with millimeter precision.' },
      { q: 'Will geometric wallpaper make a small room feel smaller?', a: 'Not when chosen carefully! Vertical patterns increase visual ceiling height, while subtle low-contrast geometric prints add depth without overpowering compact spaces.' },
      { q: 'Is geometric wallpaper suitable for TV walls and media units?', a: 'Absolutely. Geometric and architectural line wallpapers create a structured backdrop that frames wall-mounted televisions and acoustic soundbars beautifully.' }
    ]
  },

  'marble-effect-wallpaper': {
    categoryName: 'Marble Effect Wallpaper',
    resultCount: '120+ Designs',
    h1: 'Marble Effect Wallpaper Designs',
    shortIntro: 'Experience the grandeur of natural Italian marble, Brazilian quartzite, and dramatic onyx veining at a fraction of the cost and weight of slab stone. Seamless luxury for living rooms and statement walls.',
    extendedIntro: [
      'Marble effect wallpaper brings the timeless visual luxury of bookmatched Calacatta, Carrara white, Nero Marquina, and emerald onyx stone to your home without the structural weight, grout lines, or maintenance of natural marble.',
      'Specially treated high-resolution printing captures natural stone crystallization, deep translucent vein gradients, and metallic mineral fissures.',
      'Ideal for TV backdrops, foyer entrance features, executive boardrooms, and dining room alcoves.'
    ],
    trendingTitle: 'Top Trending Marble Effect Designs',
    trendingSubtitle: 'Opulent stone veining and mineral textures curated for high-end interiors',
    trendingDesigns: [
      {
        id: 'marb-trend-1',
        title: 'Calacatta Gold Bookmatched Marble Wall',
        subtitle: 'Living Room • High Gloss & Matte Inlay',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        tag: 'Bestseller',
        spec: 'Bookmatched Vein Alignment | Custom Sized'
      },
      {
        id: 'marb-trend-2',
        title: 'Emerald Green Jade Marble Accent Wall',
        subtitle: 'Dining & Foyer • Gold Mineral Flecks',
        image: localImg('marble-wood-green-feature-wall'),
        tag: 'Trending',
        spec: 'Rich Stone Depth | Scratch Resistant'
      },
      {
        id: 'marb-trend-3',
        title: 'Nero Marquina Black & White Veined Wall',
        subtitle: 'TV Unit & Lounge • Deep Contrast',
        image: localImg('marble-fluted-panel-tv-wall'),
        tag: 'Luxury Pick',
        spec: 'High Drama Contrast | Washable Vinyl'
      }
    ],
    designs: [
      {
        id: 'mb-1',
        title: 'Calacatta Statuario Marble Feature Wallpaper',
        spec: 'Size: Custom Dimension • High Definition • Living Room',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        finish: 'Silk Luster',
        room: 'Living Room'
      },
      {
        id: 'mb-2',
        title: 'Emerald Onyx & Wood Slat Accent Wall',
        spec: 'Size: Custom Dimension • Washable Vinyl • Dining',
        image: localImg('marble-wood-green-feature-wall'),
        finish: 'Stone Texture',
        room: 'Dining Room'
      },
      {
        id: 'mb-3',
        title: 'Black Gold Vein Marble Feature TV Wall',
        spec: 'Size: Custom Fit • Metallic Shimmer • TV Wall',
        image: localImg('marble-fluted-panel-tv-wall'),
        finish: 'Gloss Luster',
        room: 'TV Wall'
      },
      {
        id: 'mb-4',
        title: 'Modern Marble Hallway Accent Treatment',
        spec: 'Size: Custom Wall • Non-Woven • Corridor',
        image: localImg('marble-fluted-hallway-design'),
        finish: 'Matte Stone',
        room: 'Hallway'
      },
      {
        id: 'mb-5',
        title: 'Classic White Carrara Veined Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Surface • Foyer',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
        finish: 'Subtle Sheen',
        room: 'Foyer'
      },
      {
        id: 'mb-6',
        title: 'Warm Beige Travertine Stone Effect Wall',
        spec: 'Size: 57 sq.ft roll • Textured Relief • Bedroom',
        image: localImg('3d-panel-textures-stone-display'),
        finish: 'Travertine Texture',
        room: 'Bedroom'
      },
      {
        id: 'mb-7',
        title: 'Grey Liquid Agate Stone Fluid Wallpaper',
        spec: 'Size: Custom Dimension • Gold Ribbons • Living',
        image: localImg('wallpaper-showroom-abstract-wave'),
        finish: 'Satin Marble',
        room: 'Living Room'
      },
      {
        id: 'mb-8',
        title: 'Portoro Gold & Black Marble Mural',
        spec: 'Size: Custom Dimension • Deep Pigments • Lounge',
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
        finish: 'Velvet Matte',
        room: 'Lounge'
      },
      {
        id: 'mb-9',
        title: 'Soft Cloud White Onyx Wall Treatment',
        spec: 'Size: 57 sq.ft roll • Washable Vinyl • Bathroom Accent',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        finish: 'Water Repellent',
        room: 'Powder Room'
      },
      {
        id: 'mb-10',
        title: 'Gold Fractured Quartzite Luxury Wallpaper',
        spec: 'Size: Custom Mural • Gold Flecked • Dining Area',
        image: localImg('golden-metallic-wallpaper-rolls'),
        finish: 'Gold Fleck Texture',
        room: 'Dining Area'
      },
      {
        id: 'mb-11',
        title: 'Linear Marble Vein Architectural Wallpaper',
        spec: 'Size: 57 sq.ft roll • Commercial Grade • Office',
        image: localImg('wave-pattern-wallpaper-silver'),
        finish: 'Honed Stone Touch',
        room: 'Commercial Office'
      },
      {
        id: 'mb-12',
        title: 'Marble & Wood Combo Integrated Feature Wall',
        spec: 'Size: Custom Sized • Hybrid Panels • Living Area',
        image: localImg('marble-fluted-panel-feature-wall'),
        finish: 'Multi-finish Relief',
        room: 'Living Room'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'The Look of Natural Stone Without the Weight',
        subtext: 'Zero structural loading, quick 1-day installation, seamless bookmatched veining.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Also Explore UV Marble Sheets',
        subtext: 'Looking for a high-gloss rigid panel? Check our 3mm UV coated marble sheets.',
        ctaText: 'VIEW UV MARBLE',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('luxury-marble-fluted-panel-living-room'),
    faqs: [
      { q: 'What is the difference between marble wallpaper and UV marble sheets?', a: 'Marble wallpaper is a flexible vinyl roll ideal for full walls, curved surfaces, and seamless artistic murals. UV marble sheets are 3mm rigid PVC panels with a high-gloss UV resin coat, providing stone-like hardness and waterproofing.' },
      { q: 'Can marble wallpaper be bookmatched?', a: 'Yes! For our custom printed marble murals, we can generate symmetrical bookmatched patterns where veining mirrors seamlessly across the central axis.' },
      { q: 'Is marble wallpaper moisture resistant?', a: 'Our heavy-duty vinyl substrates resist ambient humidity, steam, and everyday household moisture, making them suitable for living spaces, dining rooms, and dry bathroom vanity zones.' }
    ]
  },

  'tropical-wallpaper': {
    categoryName: 'Tropical Wallpaper',
    resultCount: '140+ Designs',
    h1: 'Tropical Wallpaper Designs',
    shortIntro: 'Bring the lush vibrancy of exotic rainforests, palm fronds, banana leaves, and paradisiacal flora into your home. Create an uplifting, nature-connected sanctuary in bedrooms, dining areas, and balconies.',
    extendedIntro: [
      'Tropical wallpapers infuse spaces with organic vitality, deep jungle greens, warm sunlight golds, and botanical serenity. Whether you prefer vibrant oversized Monstera leaves or tranquil sepia palm groves, tropical patterns evoke exotic vacation luxury right at home.',
      'Perfect for statement bedroom accent walls behind headboards, tropical dining rooms, relaxing powder rooms, and stylish living room nooks.',
      'Our color-locked pigment inks resist UV degradation, preserving the deep verdant greens and vibrant floral highlights without fading.'
    ],
    trendingTitle: 'Top Trending Tropical Designs',
    trendingSubtitle: 'Lush botanicals and exotic foliage selected by homeowners for vibrant interiors',
    trendingDesigns: [
      {
        id: 'trop-trend-1',
        title: 'Amazonian Emerald Palm Frond Wallpaper',
        subtitle: 'Living & Bedroom • Rich Botanical Depth',
        image: localImg('tropical-leaf-wallpaper-green'),
        tag: 'Bestseller',
        spec: 'Washable Vinyl | Multi-Layer Pigments'
      },
      {
        id: 'trop-trend-2',
        title: 'Tropical Palace & Peacock Heritage Mural',
        subtitle: 'Master Bedroom • Architectural Grandeur',
        image: localImg('tropical-palace-wallpaper-mural'),
        tag: 'Trending',
        spec: 'Custom Wall Dimensions | Canvas Finish'
      },
      {
        id: 'trop-trend-3',
        title: 'Vintage Sepia Palm Grove Scenic Wall',
        subtitle: 'Dining Room • Calming Earth Tones',
        image: localImg('peacock-wallpaper-design-warm'),
        tag: 'Staff Pick',
        spec: 'Textured Surface | Warm Golden Undertones'
      }
    ],
    designs: [
      {
        id: 'tr-1',
        title: 'Lush Green Tropical Palm Leaf Wallpaper',
        spec: 'Size: 57 sq.ft roll • Washable Vinyl • Living Room',
        image: localImg('tropical-leaf-wallpaper-green'),
        finish: 'Matte Botanical',
        room: 'Living Room'
      },
      {
        id: 'tr-2',
        title: 'Imperial Peacock in Tropical Palace Garden',
        spec: 'Size: Custom Mural • Canvas Texture • Bedroom',
        image: localImg('tropical-palace-wallpaper-mural'),
        finish: 'Canvas Texture',
        room: 'Master Bedroom'
      },
      {
        id: 'tr-3',
        title: 'Vintage Jungle Flora & Avian Illustration',
        spec: 'Size: Custom Size • Silk Finish • Dining Room',
        image: localImg('peacock-wallpaper-vintage'),
        finish: 'Vintage Lithograph',
        room: 'Dining Room'
      },
      {
        id: 'tr-4',
        title: 'Emerald Rainforest Canopy Feature Wallpaper',
        spec: 'Size: 57 sq.ft roll • Non-Woven • Balcony Lounge',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80',
        finish: 'Deep Forest Matte',
        room: 'Lounge'
      },
      {
        id: 'tr-5',
        title: 'Soft Sage Palm Silhouette Wallpaper',
        spec: 'Size: 57 sq.ft roll • Wipe-Clean Vinyl • Powder Room',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        finish: 'Fine Grain',
        room: 'Powder Room'
      },
      {
        id: 'tr-6',
        title: 'Golden Banana Leaf Botanical Feature Wall',
        spec: 'Size: 57 sq.ft roll • Metallic Foil Accents • Foyer',
        image: localImg('gold-leaf-pattern-wallpaper'),
        finish: 'Gold Foil Veins',
        room: 'Foyer'
      },
      {
        id: 'tr-7',
        title: 'Contemporary Boho Palm Art Wallpaper',
        spec: 'Size: 57 sq.ft roll • Eco Non-Woven • Kids Bedroom',
        image: localImg('boho-botanical-wall-art'),
        finish: 'Clay Matte',
        room: 'Kids Bedroom'
      },
      {
        id: 'tr-8',
        title: 'Island Orchid & Monstera Paradise Mural',
        spec: 'Size: Custom Sized • Seamless Substrate • Living',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
        finish: 'Vivid Pigment',
        room: 'Living Room'
      },
      {
        id: 'tr-9',
        title: 'Dark Botanical Rainforest Luxury Wallpaper',
        spec: 'Size: 57 sq.ft roll • Commercial Vinyl • Entertainment',
        image: localImg('geometric-leaf-wallpaper-dark'),
        finish: 'Night Jungle Matte',
        room: 'Entertainment Lounge'
      },
      {
        id: 'tr-10',
        title: 'Tropical Plant Wall With Greenery Accent',
        spec: 'Size: Custom Fit • Biophilic Harmony • Terrace',
        image: localImg('marble-wood-green-feature-wall'),
        finish: 'Hybrid Surface',
        room: 'Terrace Room'
      },
      {
        id: 'tr-11',
        title: 'Minimalist Fern & Palm Line Art Wallpaper',
        spec: 'Size: 57 sq.ft roll • Textured Paper • Study',
        image: localImg('minimalist-leaf-wall-art'),
        finish: 'Organic Paper Touch',
        room: 'Study Room'
      },
      {
        id: 'tr-12',
        title: 'Blue Peacock & Paradise Blossoms Wall',
        spec: 'Size: Custom Mural • Shimmer Texture • Bedroom',
        image: localImg('peacock-wallpaper-design-blue'),
        finish: 'Shimmer Silk',
        room: 'Bedroom'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Bring Nature Indoors With Biophilic Design',
        subtext: 'Studies show natural greenery patterns reduce stress and create tranquil living spaces.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Combine With Artificial Plant Walls',
        subtext: 'Add 3D lush vertical garden panels to match your tropical wallpaper theme.',
        ctaText: 'EXPLORE GREEN WALLS',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('tropical-leaf-wallpaper-green'),
    faqs: [
      { q: 'Will the rich green colors in tropical wallpaper fade with sunlight?', a: 'No. We use UV-resistant, colorfast ink formulations that prevent fading, even on walls adjacent to bright windows or balconies.' },
      { q: 'Can tropical wallpaper work in a smaller room?', a: 'Yes! In compact spaces like powder rooms or study nooks, a bold tropical accent wall creates a dramatic, jewel-box effect that feels intentional and luxurious.' },
      { q: 'What lighting pairs best with tropical wallpaper?', a: 'Warm white lighting (3000K) highlights the rich green tones and gold accents, while subtle picture lights or backlighting add dimension to leaf contours.' }
    ]
  },

  'custom-wallpaper': {
    categoryName: 'Customised Wallpaper',
    resultCount: 'Bespoke On-Demand',
    h1: 'Customised Wallpaper & Wall Murals',
    shortIntro: 'Your vision, printed to perfection. Whether you desire personalized family portraiture, custom city skylines, high-resolution bespoke art murals, or corporate branded graphics, we design and produce wallpaper made to measure.',
    extendedIntro: [
      'Customized wallpaper eliminates the limitations of pre-printed standard rolls. Every artwork is adjusted digitally to match your exact wall height and width, accounting for doorways, electrical switch plates, and furniture placement.',
      'Choose from premium substrates including Belgian textured canvas, pearl shimmer silk, heavy stucco relief vinyl, or breathable eco-friendly non-woven fabric.',
      'Our graphic design studio prepares realistic 3D room mockups before printing, so you can preview the scale, color balance, and crop on your actual wall.'
    ],
    trendingTitle: 'Trending Custom Wallpaper Concepts',
    trendingSubtitle: 'Bespoke designs tailored to custom architecture across Hyderabad',
    trendingDesigns: [
      {
        id: 'cust-trend-1',
        title: 'Imperial Heritage Palace Scenic Wall Mural',
        subtitle: 'Living & Master Bedroom • Custom Wall Dimensions',
        image: localImg('tropical-palace-wallpaper-mural'),
        tag: 'Most Popular',
        spec: 'Made-To-Measure | Seamless Alignment'
      },
      {
        id: 'cust-trend-2',
        title: 'Abstract Wave Sculpture Custom Mural',
        subtitle: 'Commercial & Foyer • Scaled Artwork',
        image: localImg('wallpaper-showroom-abstract-wave'),
        tag: 'Bespoke Studio',
        spec: 'High DPI Print | Non-Reflective Matte'
      },
      {
        id: 'cust-trend-3',
        title: 'Contemporary Boho Arches Custom Art Wall',
        subtitle: 'Dining & Lounge • Tailored Color Palette',
        image: localImg('modern-boho-wall-art-set'),
        tag: 'Design Choice',
        spec: 'Custom Palette Match | Eco Substrate'
      }
    ],
    designs: [
      {
        id: 'cw-1',
        title: 'Heritage Palace Tropical Mural Custom Sized',
        spec: 'Size: Made-to-measure • Canvas Substrate • Living',
        image: localImg('tropical-palace-wallpaper-mural'),
        finish: 'Textured Canvas',
        room: 'Living Room'
      },
      {
        id: 'cw-2',
        title: 'Gold Inlay Peacock Heritage Art Mural',
        spec: 'Size: Custom Scale • Silk Shimmer • Master Bed',
        image: localImg('peacock-wallpaper-design-warm'),
        finish: 'Silk Shimmer',
        room: 'Master Bedroom'
      },
      {
        id: 'cw-3',
        title: 'Abstract Fluid Sculpture Mural Print',
        spec: 'Size: Wall Dimension • Zero-Seam • Reception',
        image: localImg('wallpaper-showroom-abstract-wave'),
        finish: 'Ultra-Fine Grain',
        room: 'Reception Wall'
      },
      {
        id: 'cw-4',
        title: 'Modern Geometric Architectural Custom Mural',
        spec: 'Size: Tailored Repeat • Matte Vinyl • TV Unit',
        image: localImg('geometric-leaf-wallpaper-dark'),
        finish: 'Velvet Matte',
        room: 'TV Wall'
      },
      {
        id: 'cw-5',
        title: 'Botanical Leaf Trio Customized Wall Treatment',
        spec: 'Size: Multi-Panel Set • Canvas Feel • Dining',
        image: localImg('boho-wall-art-collection'),
        finish: 'Stretched Linen',
        room: 'Dining Room'
      },
      {
        id: 'cw-6',
        title: 'Bespoke Blue Floral Dimensional Wall Mural',
        spec: 'Size: Custom Dimension • Deep Ink • Guest Room',
        image: localImg('3d-floral-wallpaper-blue'),
        finish: 'High Density Print',
        room: 'Guest Bedroom'
      },
      {
        id: 'cw-7',
        title: 'Custom Golden Metallic Swirl Wall Covering',
        spec: 'Size: Measured Width • Reflective Shimmer • Foyer',
        image: localImg('wallpaper-showroom-swirl-pattern'),
        finish: 'Pearlescent Foil',
        room: 'Foyer'
      },
      {
        id: 'cw-8',
        title: 'Minimalist Botanical Silhouette Custom Panel',
        spec: 'Size: Custom Scale • Non-Woven • Home Office',
        image: localImg('minimalist-leaf-wall-art'),
        finish: 'Smooth Eggshell',
        room: 'Home Office'
      },
      {
        id: 'cw-9',
        title: 'Artistic Botanical Earth Tone Wall Mural',
        spec: 'Size: Custom Sized • Organic Paper • Living Area',
        image: localImg('abstract-botanical-wall-art'),
        finish: 'Fine Art Matte',
        room: 'Living Area'
      },
      {
        id: 'cw-10',
        title: 'Customized Showroom Collection Display Wallpaper',
        spec: 'Size: Client Selected • Washable Heavy Vinyl • Gallery',
        image: localImg('wallpaper-shop-rolls-collection'),
        finish: 'Commercial Grade',
        room: 'Commercial Space'
      },
      {
        id: 'cw-11',
        title: 'Luxury Fluted & Marble Custom Combination Wall',
        spec: 'Size: Hybrid Blueprint • Wood + Stone • Feature Wall',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        finish: 'Integrated Surface',
        room: 'Living Room'
      },
      {
        id: 'cw-12',
        title: 'Pastel 3D Architectural Wall Illusion',
        spec: 'Size: Custom Perspective • Matte Vinyl • Bedroom',
        image: localImg('3d-scallop-wallpaper-pastel'),
        finish: 'Dimensional Illusion',
        room: 'Bedroom'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Any Image, Any Size, Any Color',
        subtext: 'Share your high-res photo or Pinterest inspiration. Our studio formats it for your wall.',
        ctaText: 'REQUEST CUSTOM QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Free 3D Digital Room Mockup',
        subtext: 'Preview exactly how your custom wallpaper looks in your room before committing to print.',
        ctaText: 'SEND YOUR PHOTO',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('tropical-palace-wallpaper-mural'),
    faqs: [
      { q: 'Can I provide my own photograph or artwork for printing?', a: 'Yes! We accept high-resolution JPEG, TIFF, PSD, or PDF files (minimum 150 DPI at actual size). If needed, our graphic designers can upscale and enhance your image.' },
      { q: 'How long does a custom wallpaper order take from design to installation?', a: 'Digital proofing takes 24 hours. Once you approve the mockup, printing takes 2–3 days, followed by installation scheduled at your convenience.' },
      { q: 'Are there visible joints in large customized murals?', a: 'Our custom murals are printed in numbered vertical panels designed with overlap-and-trim seam technology, resulting in virtually undetectable, hairline seams.' }
    ]
  },

  '3d-wallpaper': {
    categoryName: '3D Wallpaper',
    resultCount: '130+ Designs',
    h1: '3D Wallpaper Designs',
    shortIntro: 'Create optical depth, tactile relief, and dramatic dimensional visual effects on flat walls. Our 3D wallpapers simulate architectural curves, sculptured plaster, textured brick, and futuristic geometric prisms.',
    extendedIntro: [
      '3D wallpapers use advanced shadowing, perspective illustration, and heavy embossed vinyl substrates to trick the eye and turn ordinary flat drywall into dynamic sculptural features.',
      'From contemporary wave ripples and scallop arches to faux brick, stone textures, and geometric prisms, 3D patterns create dynamic shadow play when illuminated by directional downlights or warm LED strip lighting.',
      'Durable, washable, and high-impact — ideal for home theater backdrops, TV walls, and commercial reception lounges.'
    ],
    trendingTitle: 'Top Trending 3D Wallpaper Designs',
    trendingSubtitle: 'High-impact tactile reliefs and optical illusions chosen by modern interior stylists',
    trendingDesigns: [
      {
        id: '3d-trend-1',
        title: 'Pastel Architectural Scallop 3D Wallpaper',
        subtitle: 'Living & Bedroom • Sculpted Illusion',
        image: localImg('3d-scallop-wallpaper-pastel'),
        tag: 'Bestseller',
        spec: 'Heavy Emboss | Perspective Shadow'
      },
      {
        id: '3d-trend-2',
        title: 'Dimensional Blue & White Floral 3D Wall',
        subtitle: 'Master Bedroom • Tactile Petals',
        image: localImg('3d-floral-wallpaper-blue'),
        tag: 'Trending',
        spec: 'Embossed Relief | Washable Vinyl'
      },
      {
        id: '3d-trend-3',
        title: '3D Geometric Cubes & Prism Rolls',
        subtitle: 'Office & TV Wall • Optical Depth',
        image: localImg('3d-wallpaper-rolls-geometric'),
        tag: 'Top Rated',
        spec: 'Multi-Depth Effect | Anti-Glare'
      }
    ],
    designs: [
      {
        id: '3d-1',
        title: 'Pastel Arch & Scallop Dimensional Wallpaper',
        spec: 'Size: 57 sq.ft roll • Heavyweight Embossed • Bedroom',
        image: localImg('3d-scallop-wallpaper-pastel'),
        finish: 'Sculptural Relief',
        room: 'Master Bedroom'
      },
      {
        id: '3d-2',
        title: 'Sculpted Blue Floral 3D Relief Wall',
        spec: 'Size: 57 sq.ft roll • Washable Vinyl • Living Room',
        image: localImg('3d-floral-wallpaper-blue'),
        finish: 'Embossed Petals',
        room: 'Living Room'
      },
      {
        id: '3d-3',
        title: 'Geometric Hexagon Prism 3D Rolls',
        spec: 'Size: 57 sq.ft roll • Shadow Relief • TV Unit',
        image: localImg('3d-wallpaper-rolls-geometric'),
        finish: 'Prism Geometry',
        room: 'TV Wall'
      },
      {
        id: '3d-4',
        title: 'Curated 3D Texture Wallpaper Rolls Collection',
        spec: 'Size: 57 sq.ft roll • Deep Texture • Hallway',
        image: localImg('3d-wallpaper-rolls-collection'),
        finish: 'Multi-Texture Pack',
        room: 'Hallway'
      },
      {
        id: '3d-5',
        title: 'Fluid Wave Ripple 3D Accent Wallpaper',
        spec: 'Size: 57 sq.ft roll • Silver Foil • Drawing Room',
        image: localImg('wave-pattern-wallpaper-silver'),
        finish: 'Liquid Wave',
        room: 'Drawing Room'
      },
      {
        id: '3d-6',
        title: 'Textured Stone & Brick Effect 3D Surface',
        spec: 'Size: 57 sq.ft roll • Tactile Granules • Foyer',
        image: localImg('3d-panel-textures-stone-display'),
        finish: 'Tactile Stone',
        room: 'Foyer'
      },
      {
        id: '3d-7',
        title: 'Abstract Dimensional Ribbon Wave Wallpaper',
        spec: 'Size: Custom Mural • Optical Perspective • Lounge',
        image: localImg('wallpaper-showroom-abstract-wave'),
        finish: 'Illusion Depth',
        room: 'Lounge'
      },
      {
        id: '3d-8',
        title: 'Modern Diamond Backlit Relief Illusion Wall',
        spec: 'Size: Custom Dimension • High Contrast • Home Theater',
        image: localImg('3d-diamond-panel-installation'),
        finish: 'Diamond Facet',
        room: 'Home Theater'
      },
      {
        id: '3d-9',
        title: 'Luxury Bedroom Wave Panel 3D Background',
        spec: 'Size: Custom Dimension • Headboard Wall • Bedroom',
        image: localImg('3d-wave-panel-bedroom-design'),
        finish: 'Curved Ripple',
        room: 'Bedroom'
      },
      {
        id: '3d-10',
        title: 'White Floral 3D Ceramic Look Wall Accent',
        spec: 'Size: Custom Wall • Plaster Effect • Dining',
        image: localImg('3d-floral-wall-panel-white'),
        finish: 'Cast Plaster Look',
        room: 'Dining Room'
      },
      {
        id: '3d-11',
        title: 'Geometric Acoustic Tile 3D Illusion Wallpaper',
        spec: 'Size: 57 sq.ft roll • Non-Woven • Commercial',
        image: localImg('3d-geometric-panel-tiles-display'),
        finish: 'Acoustic Visual',
        room: 'Office'
      },
      {
        id: '3d-12',
        title: 'Golden Metallic Dimensional Swirl Wallpaper',
        spec: 'Size: 57 sq.ft roll • Metallic Vinyl • Living',
        image: localImg('wallpaper-showroom-swirl-pattern'),
        finish: 'Metallic Emboss',
        room: 'Living Room'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Add Real Dimension to Flat Walls',
        subtext: 'Enhance your 3D wallpaper with cove lighting or warm spotlights for dramatic shadows.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Also Compare Real 3D Wall Panels',
        subtext: 'We also offer solid PVC, charcoal, and polyurethane 3D relief wall panels.',
        ctaText: 'VIEW 3D WALL PANELS',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('3d-scallop-wallpaper-pastel'),
    faqs: [
      { q: 'Is 3D wallpaper physically raised or an optical illusion?', a: 'We offer both! Our heavy embossed vinyl wallpapers have genuine raised tactile textures (1–2mm relief) enhanced by trompe-l’œil shadow illustration that creates dramatic optical depth.' },
      { q: 'What lighting works best with 3D wallpapers?', a: 'Grazing light from ceiling spotlights, wall sconces, or hidden LED strips casts soft shadows across the dimensional textures, bringing the 3D relief dramatically to life.' },
      { q: 'Can 3D wallpaper be cleaned without damaging the raised texture?', a: 'Yes. The vinyl surface is resilient and washable. A soft cloth or gentle vacuum brush attachment removes dust effortlessly.' }
    ]
  }
};

/* ── Wall Panels Category Configurations ── */
export const wallPanelDesignData = {
  'fluted-panels': {
    categoryName: 'Fluted Panels',
    resultCount: '120+ Variations',
    h1: 'Fluted Wall Panel Designs',
    shortIntro: 'Architectural vertical ribbed louvers that introduce structured depth, tactile warmth, and acoustic dampening to modern Indian interiors. The premier choice for luxury TV units and bedroom feature walls.',
    extendedIntro: [
      'Fluted panels (also called ribbed or slat louvers) have become the hallmark of modern luxury interior architecture. Their precision vertical flutes cast rhythmic linear shadows that elongate wall height and lend refined elegance to living spaces.',
      'Manufactured from premium Wood Plastic Composite (WPC) and charcoal-polymer blends, our fluted panels are 100% waterproof, borer-free, termite-proof, and flame-retardant.',
      'Our Hyderabad team ensures concealed interlocking tongue-and-groove fitting with hidden fasteners, perfectly matched corner trims, and seamless integration with LED backlighting channels.'
    ],
    trendingTitle: 'Top Trending Fluted Panel Designs',
    trendingSubtitle: 'Architect-favorite vertical groove profiles for TV backdrops and luxury living rooms',
    trendingDesigns: [
      {
        id: 'flute-trend-1',
        title: 'Teak Wood & Charcoal Two-Tone Fluted Panel',
        subtitle: 'TV Unit & Foyer • WPC Composite',
        image: localImg('wpc-fluted-panels-color-range'),
        tag: 'Bestseller',
        spec: 'Interlocking Tongue & Groove | Waterproof'
      },
      {
        id: 'flute-trend-2',
        title: 'Luxury Backlit Foyer Fluted Wall Design',
        subtitle: 'Foyer & Entrance • Integrated LED Channel',
        image: localImg('luxury-fluted-panel-foyer'),
        tag: 'Architect Pick',
        spec: 'Two-Tone Louvers | Hidden Fasteners'
      },
      {
        id: 'flute-trend-3',
        title: 'Marble & Fluted Slat Integrated TV Feature Wall',
        subtitle: 'Living Room • Hybrid Stone & Wood',
        image: localImg('marble-fluted-panel-tv-wall'),
        tag: 'Trending',
        spec: 'Combined Surface | Clean Joint System'
      }
    ],
    designs: [
      {
        id: 'fp-1',
        title: 'Natural Walnut WPC Fluted Slat Wall',
        spec: 'Size: 8ft x 5in per plank • Termite Proof • TV Wall',
        image: localImg('wpc-fluted-panel-wood-colors'),
        finish: 'Natural Wood Grain',
        room: 'TV Wall'
      },
      {
        id: 'fp-2',
        title: 'Charcoal Grey Designer Fluted Louver Panel',
        spec: 'Size: 8ft x 6in • Acoustic Core • Master Bed',
        image: localImg('designer-fluted-panel-grey'),
        finish: 'Matte Charcoal',
        room: 'Master Bedroom'
      },
      {
        id: 'fp-3',
        title: 'Luxury Two-Tone Foyer Fluted Feature Panel',
        spec: 'Size: Custom Wall • Backlit Profile • Foyer',
        image: localImg('luxury-fluted-panel-foyer'),
        finish: 'Dual Accent Finish',
        room: 'Foyer Entrance'
      },
      {
        id: 'fp-4',
        title: 'White & Champagne Gold Architectural Flutes',
        spec: 'Size: 8ft x 5in • Lightweight WPC • Drawing Room',
        image: localImg('designer-fluted-panels-white-brown'),
        finish: 'Gold Accent Grooves',
        room: 'Drawing Room'
      },
      {
        id: 'fp-5',
        title: 'Full Spectrum WPC Fluted Color Range Display',
        spec: 'Size: 12 Color Options • Interlocking • Showroom',
        image: localImg('wpc-fluted-panels-color-range'),
        finish: 'Full Range Samples',
        room: 'Whole Home'
      },
      {
        id: 'fp-6',
        title: 'Fluted Wall With Built-In Display Shelving',
        spec: 'Size: Custom Built-In • Integrated LED • Study',
        image: localImg('fluted-panel-shelving-interior'),
        finish: 'Oak Fluted & Glass',
        room: 'Study Room'
      },
      {
        id: 'fp-7',
        title: 'Luxury Feather Sculpture Backlit Fluted Wall',
        spec: 'Size: Custom Statement • Warm Ambient LED • Living',
        image: localImg('luxury-fluted-panel-feather-wall'),
        finish: 'Sculptural Louver',
        room: 'Living Room'
      },
      {
        id: 'fp-8',
        title: 'Marble Slab & Fluted Wood Combination Feature Wall',
        spec: 'Size: Custom Dimensions • UV Marble + WPC • Living',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        finish: 'Stone & Wood Hybrid',
        room: 'Living Room'
      },
      {
        id: 'fp-9',
        title: 'Hallway Fluted Panel With Concealed Flush Door',
        spec: 'Size: Continuous Cladding • Hidden Joints • Corridor',
        image: localImg('marble-fluted-hallway-design'),
        finish: 'Architectural Seamless',
        room: 'Hallway'
      },
      {
        id: 'fp-10',
        title: 'Navy Blue & Brass Fluted Feature Wall Accent',
        spec: 'Size: Custom Panel • Metallic Ribs • Dining',
        image: localImg('designer-feature-wall-fluted'),
        finish: 'Navy & Brass',
        room: 'Dining Room'
      },
      {
        id: 'fp-11',
        title: 'Handheld Fluted Slat Samples Multi-Finish',
        spec: 'Size: Doorstep Preview • Wood & Stone Look • All Rooms',
        image: localImg('fluted-panel-samples-handheld'),
        finish: 'Various Finishes',
        room: 'All Spaces'
      },
      {
        id: 'fp-12',
        title: 'Close-Up Micro Fluted Slat Joint Precision',
        spec: 'Size: 12mm Slat Pitch • Zero Gap Click • TV Unit',
        image: localImg('fluted-panels-closeup-colors'),
        finish: 'Micro Fluted Slat',
        room: 'TV Wall'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: '100% Termite Proof & Water Resistant WPC',
        subtext: 'Engineered wood-plastic composite that never warps, rots, or requires polishing.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Integrated LED Strip Lighting Channels',
        subtext: 'Our fluted panels feature built-in aluminum extrusion slots for concealed ambient lighting.',
        ctaText: 'TALK TO AN EXPERT',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('luxury-fluted-panel-foyer'),
    faqs: [
      { q: 'Can fluted panels be installed on damp or uneven walls?', a: 'Yes. Fluted panels can be mounted on lightweight aluminum or treated wood furring strips, providing an air gap that protects against wall dampness and corrects uneven plastering.' },
      { q: 'Are fluted panels fire retardant and safe for homes?', a: 'Our WPC and polymer fluted panels carry Class B1 flame retardant certification, meaning they self-extinguish and will not propagate fire.' },
      { q: 'How are cables concealed behind fluted TV panels?', a: 'During framing, we create hidden cable conduits behind the panels so power cords, HDMI cables, and speaker wires remain 100% invisible.' }
    ]
  },

  'uv-marble-sheets': {
    categoryName: 'UV Marble Sheets',
    resultCount: '80+ Finishes',
    h1: 'UV Marble Sheets & High-Gloss Stone Panels',
    shortIntro: 'High-gloss 3mm engineered PVC marble sheets that replicate natural Italian marble, granite, and translucent onyx with mirror-like brilliance. Waterproof, lightweight, and scratch resistant.',
    extendedIntro: [
      'UV Marble Sheets provide the breathtaking mirror-like reflection of polished Italian slab marble without the heavy structural load, poriferous staining, or high installation cost of natural stone.',
      'Coated with an ultra-durable ultraviolet cured polyurethane layer, these 8ft x 4ft sheets are impervious to moisture, kitchen grease, stains, and daily wear.',
      'Popular for TV backdrops, luxury dining accent walls, executive bathroom vanities, lobby reception features, and elevator cladding across Hyderabad.'
    ],
    trendingTitle: 'Top Trending UV Marble Sheets',
    trendingSubtitle: 'High-gloss mirror stone finishes preferred for TV walls and luxury backdrops',
    trendingDesigns: [
      {
        id: 'uv-trend-1',
        title: 'Statuario White Mirror UV Marble Slab',
        subtitle: 'Living Room TV Wall • 3mm High Gloss',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        tag: 'Bestseller',
        spec: '8ft x 4ft Sheet | Waterproof & Stain Proof'
      },
      {
        id: 'uv-trend-2',
        title: 'Emerald Green Royal Onyx UV Marble Sheet',
        subtitle: 'Dining Room & Foyer • Translucent Look',
        image: localImg('marble-wood-green-feature-wall'),
        tag: 'Trending',
        spec: 'Ultra High Gloss | Gold Veining'
      },
      {
        id: 'uv-trend-3',
        title: 'Nero Portoro Black Gold UV Marble Cladding',
        subtitle: 'TV Unit & Bar • Deep Contrast',
        image: localImg('marble-fluted-panel-tv-wall'),
        tag: 'Luxury Choice',
        spec: 'Scratch Resistant UV Layer | 3mm Rigid'
      }
    ],
    designs: [
      {
        id: 'uv-1',
        title: 'Statuario White Marble UV Sheet TV Wall',
        spec: 'Size: 8ft x 4ft • 3mm PVC Core • Living Room',
        image: localImg('luxury-marble-fluted-panel-living-room'),
        finish: 'High Gloss UV Mirror',
        room: 'Living Room'
      },
      {
        id: 'uv-2',
        title: 'Emerald Jade Onyx UV Marble Cladding',
        spec: 'Size: 8ft x 4ft • Gold Veined • Dining Area',
        image: localImg('marble-wood-green-feature-wall'),
        finish: 'Deep Gloss Stone',
        room: 'Dining Area'
      },
      {
        id: 'uv-3',
        title: 'Black Marble UV Sheet With LED Profile Slat',
        spec: 'Size: Custom Wall • Backlit • TV Unit',
        image: localImg('marble-fluted-panel-tv-wall'),
        finish: 'High Reflective Gloss',
        room: 'TV Wall'
      },
      {
        id: 'uv-4',
        title: 'Classic Calacatta Gold UV Marble Sheet',
        spec: 'Size: 8ft x 4ft • Scratch Proof • Foyer',
        image: localImg('marble-fluted-hallway-design'),
        finish: 'Italian Polished Look',
        room: 'Foyer'
      },
      {
        id: 'uv-5',
        title: 'Bookmatched Twin Symmetrical UV Marble Wall',
        spec: 'Size: 8ft x 8ft Pair • Mirror Symmetry • Living',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
        finish: 'Bookmatched Mirror',
        room: 'Living Room'
      },
      {
        id: 'uv-6',
        title: 'Grey Armani Marble UV Panel Feature Wall',
        spec: 'Size: 8ft x 4ft • Neutral Tone • Master Bed',
        image: localImg('3d-panel-textures-stone-display'),
        finish: 'Polished Honed Gloss',
        room: 'Master Bedroom'
      },
      {
        id: 'uv-7',
        title: 'Translucent Backlit UV Marble Sheet Counter',
        spec: 'Size: Custom Sized • Diffused Glow • Bar Area',
        image: localImg('backlit-wall-panel-installation'),
        finish: 'Translucent Resin',
        room: 'Bar & Lounge'
      },
      {
        id: 'uv-8',
        title: 'Marble & Compact PVC Trim Profile Samples',
        spec: 'Size: Full Display • Metal Trims • Showroom',
        image: localImg('hpl-compact-pvc-edging-samples'),
        finish: 'Trim Edge Samples',
        room: 'Whole Home'
      },
      {
        id: 'uv-9',
        title: 'Backlit Oval Marble Cutout Wall Feature',
        spec: 'Size: Custom Curved Cut • Ambient LED • Living',
        image: localImg('backlit-panel-closeup-detail'),
        finish: 'Illuminated Edge',
        room: 'Living Room'
      },
      {
        id: 'uv-10',
        title: 'Onyx Honey Amber UV Marble Wall Treatment',
        spec: 'Size: 8ft x 4ft • Warm Veins • Powder Room',
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
        finish: 'Amber Gloss',
        room: 'Powder Room'
      },
      {
        id: 'uv-11',
        title: 'Travertine Vein Cut UV Marble Wall Panel',
        spec: 'Size: 8ft x 4ft • Linear Texture • Office Reception',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        finish: 'Modern Linear Gloss',
        room: 'Reception Wall'
      },
      {
        id: 'uv-12',
        title: 'Navy Blue & Marble Architectural Feature Panel',
        spec: 'Size: Custom Composition • Mixed Finish • Foyer',
        image: localImg('designer-feature-wall-fluted'),
        finish: 'Multi-Tone Gloss',
        room: 'Foyer'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Mirror-Like Polish With Zero Maintenance',
        subtext: 'No waxing, no sealing, no grout lines. Wipes spotless with regular glass cleaner.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: '1-Day Quick Wall Makeover',
        subtext: 'Installs directly over old tiles, plastered walls, or plywood backings without demolition.',
        ctaText: 'SCHEDULE MEASUREMENT',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('luxury-marble-fluted-panel-living-room'),
    faqs: [
      { q: 'How are UV marble sheets installed onto walls?', a: 'They are bonded directly to smooth plaster, plywood, or existing ceramic tiles using structural silicone and heavy-duty polymer adhesive, framed with slim aluminium or brass T-profiles at joints.' },
      { q: 'Can UV marble sheets be installed in bathrooms and kitchen splashbacks?', a: 'Yes. Being 100% waterproof and impervious to oil, grease, and soap scum, they are ideal for vanity walls and kitchen backsplashes away from direct flame.' },
      { q: 'What is the standard size and thickness of UV marble sheets?', a: 'Standard sheets measure 8ft x 4ft (2440mm x 1220mm) with a 3mm heavy-density PVC core coated with high-impact UV cured resin.' }
    ]
  },

  'pvc-panels': {
    categoryName: 'PVC Panels & Wall Moulding',
    resultCount: '90+ Designs',
    h1: 'PVC Wall Panels & Decorative Moulding',
    shortIntro: 'Waterproof, durable, and highly versatile PVC wall cladding and architectural wall mouldings. Perfect for transforming damp walls, living room wainscoting, bedroom accent frames, and commercial spaces.',
    extendedIntro: [
      'PVC wall panels and decorative moulding profiles combine timeless architectural framing with modern polymer durability. Create sophisticated Parisian-style wall frames, modern box mouldings, or full waterproof wall cladding with zero moisture risk.',
      'Unlike traditional plaster of Paris (POP) or wood mouldings that chip, crack, or suffer termite damage, high-density PVC moulding is pre-finished, moisture-proof, and impact-resistant.',
      'Our carpenters and installers use precision miter saws to ensure seamless 45-degree corner joints and laser-aligned frame symmetry on every wall.'
    ],
    trendingTitle: 'Top Trending PVC Panels & Mouldings',
    trendingSubtitle: 'Classic wainscoting and modern waterproof wall cladding designs',
    trendingDesigns: [
      {
        id: 'pvc-trend-1',
        title: 'Classic Neoclassical PVC Wall Box Moulding',
        subtitle: 'Living & Master Bedroom • Primed & Painted',
        image: localImg('3d-diamond-panel-installation'),
        tag: 'Bestseller',
        spec: 'Precision Miter Cut | Termite Proof'
      },
      {
        id: 'pvc-trend-2',
        title: 'Geometric Textured PVC Feature Wall Panel',
        subtitle: 'TV Unit & Reception • Interlocking Tongue',
        image: localImg('3d-geometric-panel-tiles-display'),
        tag: 'Trending',
        spec: '100% Waterproof | Washable'
      },
      {
        id: 'pvc-trend-3',
        title: '3D Wave Textured PVC Bedroom Wall Cladding',
        subtitle: 'Headboard Wall • Integrated Backlighting',
        image: localImg('3d-wave-panel-bedroom-design'),
        tag: 'Modern Pick',
        spec: 'Lightweight Polymer | Seamless Joint'
      }
    ],
    designs: [
      {
        id: 'pvc-1',
        title: '3D Diamond Pattern PVC Wall Panel Installation',
        spec: 'Size: 500mm x 500mm tiles • Waterproof • TV Wall',
        image: localImg('3d-diamond-panel-installation'),
        finish: 'Paintable Matte',
        room: 'TV Wall'
      },
      {
        id: 'pvc-2',
        title: 'Geometric 3D Wall Panels in Black, White & Gold',
        spec: 'Size: Modular Tiles • High Impact • Living Room',
        image: localImg('3d-wall-panels-geometric-display'),
        finish: 'Multi-Tone Polymer',
        room: 'Living Room'
      },
      {
        id: 'pvc-3',
        title: '3D Wave Relief PVC Bedroom Feature Wall',
        spec: 'Size: Custom Wall • Acoustic Cushion • Master Bed',
        image: localImg('3d-wave-panel-bedroom-design'),
        finish: 'Sculptured Wave',
        room: 'Master Bedroom'
      },
      {
        id: 'pvc-4',
        title: 'Showroom Geometric 3D PVC Wall Tiles Display',
        spec: 'Size: Interlocking • Damp Proof • Commercial',
        image: localImg('3d-geometric-panel-tiles-display'),
        finish: 'Modular Geometric',
        room: 'Commercial Lounge'
      },
      {
        id: 'pvc-5',
        title: '3D Wall Panel Showroom Collection Display',
        spec: 'Size: Diverse Patterns • High Density • Hallway',
        image: localImg('3d-wall-panel-showroom-display'),
        finish: 'Display Assortment',
        room: 'Hallway'
      },
      {
        id: 'pvc-6',
        title: '3D Wave Pattern Single Tile Sample Close-Up',
        spec: 'Size: 500x500mm • Smooth Finish • Accent Wall',
        image: localImg('3d-wave-panel-tile-sample'),
        finish: 'Smooth Relief',
        room: 'Accent Wall'
      },
      {
        id: 'pvc-7',
        title: 'White Floral 3D Relief Wall Panel Cladding',
        spec: 'Size: Custom Size • Matte Enamel • Dining Room',
        image: localImg('3d-floral-wall-panel-white'),
        finish: 'Enamel White',
        room: 'Dining Room'
      },
      {
        id: 'pvc-8',
        title: 'Stone & Ripple Hybrid PVC Surface Textures',
        spec: 'Size: Textured Polymer • Lightweight • Foyer',
        image: localImg('3d-panel-textures-stone-display'),
        finish: 'Tactile Polymer',
        room: 'Foyer'
      },
      {
        id: 'pvc-9',
        title: 'Modern Wood Grain Finished PVC Cladding Slats',
        spec: 'Size: 8ft x 6in • Waterproof • Balcony & Utility',
        image: localImg('wpc-fluted-panel-wood-colors'),
        finish: 'Wood Grain Laminated',
        room: 'Balcony'
      },
      {
        id: 'pvc-10',
        title: 'Compact PVC Profile & Edging Sample Set',
        spec: 'Size: Precision Molded • Corner & T-Profiles • All Rooms',
        image: localImg('hpl-compact-pvc-edging-samples'),
        finish: 'Color Matched Trims',
        room: 'All Spaces'
      },
      {
        id: 'pvc-11',
        title: 'Classic French Wainscoting Wall Moulding Set',
        spec: 'Size: Custom Wall Layout • Polyurethane Moulding • Drawing',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        finish: 'Primed & Painted',
        room: 'Drawing Room'
      },
      {
        id: 'pvc-12',
        title: 'Backlit Geometric PVC Panel Feature Wall',
        spec: 'Size: Backlit Module • Ambient LED • Entertainment',
        image: localImg('backlit-wall-panel-installation'),
        finish: 'Backlit Relief',
        room: 'Entertainment Room'
      }
    ],
    promotions: [
      {
        position: 3,
        headline: 'Permanently Solve Damp Wall Headaches',
        subtext: '100% moisture-proof PVC panels conceal efflorescence and flaking paint permanently.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Classic Parisian Wall Moulding & Framing',
        subtext: 'Elevate your bedroom or living room with architectural wall frames and picture mouldings.',
        ctaText: 'EXPLORE MOULDINGS',
        theme: 'gold'
      }
    ],
    largeVisual: localImg('3d-diamond-panel-installation'),
    faqs: [
      { q: 'Can PVC wall panels be painted in any color?', a: 'Yes! Our high-density PVC panels and mouldings can be installed in their factory finish or primed and painted with premium acrylic or PU enamel in any shade of your choice.' },
      { q: 'Do PVC panels create hollow sounds on walls?', a: 'When bonded flush with specialized polymer adhesive or mounted with acoustic mineral backing, PVC panels feel solid to the touch and eliminate hollow acoustic resonance.' },
      { q: 'How long do PVC panels last in Indian weather conditions?', a: 'High-density PVC is virtually indestructible indoors. It is immune to termites, fungal rot, high humidity, and does not crack with seasonal temperature shifts.' }
    ]
  }
};

/* ── Universal Category Data Accessor ── */
export function getCategoryDesignData(slug) {
  if (wallpaperDesignData[slug]) return wallpaperDesignData[slug];
  if (wallPanelDesignData[slug]) return wallPanelDesignData[slug];

  // Dynamically generate category data for any other category slug
  const titleWords = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const isWallpaper = slug.includes('wallpaper');
  const isPanel = slug.includes('panel') || slug.includes('marble') || slug.includes('tiles') || slug.includes('flooring') || slug.includes('grass') || slug.includes('plants');

  // Pick representative hero image from gallery
  let hero = localImg('luxury-marble-fluted-panel-living-room');
  if (slug.includes('leaf') || slug.includes('green') || slug.includes('tropical') || slug.includes('natural')) {
    hero = localImg('tropical-leaf-wallpaper-green');
  } else if (slug.includes('metallic') || slug.includes('gold')) {
    hero = localImg('golden-metallic-wallpaper-rolls');
  } else if (slug.includes('fluted')) {
    hero = localImg('wpc-fluted-panel-wood-colors');
  } else if (slug.includes('charcoal')) {
    hero = localImg('designer-fluted-panel-grey');
  } else if (slug.includes('bedroom')) {
    hero = localImg('3d-wave-panel-bedroom-design');
  } else if (slug.includes('living')) {
    hero = localImg('luxury-marble-fluted-panel-living-room');
  } else if (slug.includes('tv')) {
    hero = localImg('marble-fluted-panel-tv-wall');
  }

  // Filter gallery items for designs
  const filtered = galleryImages.filter(img => {
    if (isWallpaper) return img.category === 'wallpapers' || img.category === 'showroom';
    if (isPanel) return img.category === 'fluted-panels' || img.category === '3d-panels' || img.category === 'feature-walls';
    return true;
  });

  const sampleDesigns = filtered.slice(0, 14).map((img, idx) => ({
    id: `${slug}-${idx + 1}`,
    title: `${titleWords} Design ${idx + 1} • Premium Collection`,
    spec: `Size: Standard Specification • ${isWallpaper ? '57 sq.ft Roll • Washable Vinyl' : 'Engineered Material • Moisture Proof'} • Hyderabad`,
    image: img.src,
    finish: 'Architectural Finish',
    room: 'Versatile Application'
  }));

  while (sampleDesigns.length < 12) {
    const fallbackImg = galleryImages[sampleDesigns.length % galleryImages.length];
    sampleDesigns.push({
      id: `${slug}-${sampleDesigns.length + 1}`,
      title: `${titleWords} Specialty Finish ${sampleDesigns.length + 1}`,
      spec: `Size: Custom Sized • Premium Substrate • Professional Installation Included`,
      image: fallbackImg.src,
      finish: 'Curated Texture',
      room: 'Interior Living Space'
    });
  }

  return {
    categoryName: titleWords,
    resultCount: '120+ Designs',
    h1: `${titleWords} Designs`,
    shortIntro: `Explore our premium collection of ${titleWords} curated specifically for modern Indian interiors. Discover exceptional textures, patterns, and architectural finishes installed across Hyderabad.`,
    extendedIntro: [
      `Our ${titleWords} collection combines premium material durability with sophisticated contemporary aesthetics. Each design has been selected to transform living rooms, bedrooms, dining spaces, and executive offices.`,
      `Engineered for longevity, our products resist moisture, withstand regular household cleaning, and maintain rich pigmentation under natural and architectural lighting.`,
      `Create You Wallpapers provides full-service installation across Hyderabad, including complimentary in-home catalog previews, laser measurements, and precision installation by our in-house master craftsmen.`
    ],
    trendingTitle: `🔥 Top Trending ${titleWords} Designs`,
    trendingSubtitle: `Selected by Hyderabad homeowners and interior architects this season`,
    trendingDesigns: [
      {
        id: `${slug}-trend-1`,
        title: `Curated ${titleWords} Statement Design`,
        subtitle: `Living & Master Bedroom • Architectural Grade`,
        image: hero,
        tag: 'Bestseller',
        spec: isWallpaper ? 'Heavyweight Washable Vinyl | 57 sq.ft Roll' : 'Precision Interlocking | Water Resistant'
      },
      {
        id: `${slug}-trend-2`,
        title: `Modern ${titleWords} Feature Treatment`,
        subtitle: `Dining & Foyer • High Definition`,
        image: sampleDesigns[1]?.image || hero,
        tag: 'Trending',
        spec: 'Scratch Resistant | Seamless Fitting'
      },
      {
        id: `${slug}-trend-3`,
        title: `Designer ${titleWords} Accent Wall`,
        subtitle: `TV Unit & Lounge • Premium Finish`,
        image: sampleDesigns[2]?.image || hero,
        tag: 'Top Rated',
        spec: 'Custom Scaled | Professional Installation'
      }
    ],
    designs: sampleDesigns,
    promotions: [
      {
        position: 3,
        headline: 'Transform Your Walls Starting Today',
        subtext: 'Doorstep catalog preview & laser measurement service anywhere in Hyderabad.',
        ctaText: 'GET FREE QUOTE',
        theme: 'dark'
      },
      {
        position: 8,
        headline: 'Professional Installation Guaranteed',
        subtext: 'Installed cleanly by trained in-house specialists with 100% satisfaction assurance.',
        ctaText: 'BOOK CONSULTATION',
        theme: 'gold'
      }
    ],
    largeVisual: hero,
    faqs: [
      { q: `How do I select the right ${titleWords} for my space?`, a: `Consider your room dimensions, existing lighting, and furniture color palette. Our design specialists can visit your site with physical samples to guide your choice during a free consultation.` },
      { q: `What is the installation process for ${titleWords}?`, a: `Our team assesses the wall, tests for moisture, prepares the substrate, applies primer if required, and executes precision fitting with zero mess left behind.` },
      { q: `How do I book a consultation or get an accurate quotation?`, a: `Click "Get Quote" or "Book Free Consultation" on any design, or contact us directly on WhatsApp with your room dimensions for a quick estimate.` }
    ]
  };
}

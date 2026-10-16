// Gallery data — categorized photos for the gallery page and across the site
// Each item has: src (public path), alt (accessible description), category (for filtering)

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'wallpapers', label: 'Wallpapers' },
  { id: 'wall-panels', label: 'Wall Panels' },
  { id: 'fluted-panels', label: 'Fluted Panels' },
  { id: '3d-panels', label: '3D Panels' },
  { id: 'feature-walls', label: 'Feature Walls' },
  { id: 'showroom', label: 'Our Showroom' },
  { id: 'wall-art', label: 'Wall Art' },
];

export const galleryImages = [
  // ── WALLPAPERS ──────────────────────────────────────────
  { src: '/gallery/wallpaper-shop-rolls-collection.jpeg', alt: 'Wallpaper shop with premium rolls and designer samples on display', category: 'showroom' },
  { src: '/gallery/wallpaper-shop-collection-rolls.jpeg', alt: 'Wallpaper collection with textured and patterned rolls', category: 'showroom' },
  { src: '/gallery/wallpaper-display-wall-showroom.jpeg', alt: 'Wallpaper display wall with samples and artificial grass accent', category: 'showroom' },
  { src: '/gallery/wallpaper-showroom-swirl-pattern.jpeg', alt: 'Showroom display with swirl pattern wallpaper and 3D panel wall', category: 'showroom' },
  { src: '/gallery/wallpaper-showroom-abstract-wave.jpeg', alt: 'Abstract wave pattern wallpaper in showroom setting', category: 'wallpapers' },
  { src: '/gallery/tropical-leaf-wallpaper-green.jpeg', alt: 'Tropical green leaf pattern wallpaper design', category: 'wallpapers' },
  { src: '/gallery/gold-leaf-pattern-wallpaper.jpeg', alt: 'Gold leaf pattern wallpaper with botanical design', category: 'wallpapers' },
  { src: '/gallery/geometric-leaf-wallpaper-dark.jpeg', alt: 'Dark geometric leaf pattern wallpaper', category: 'wallpapers' },
  { src: '/gallery/wave-pattern-wallpaper-silver.jpeg', alt: 'Silver wave pattern wallpaper design', category: 'wallpapers' },
  { src: '/gallery/peacock-wallpaper-design-warm.jpeg', alt: 'Peacock wallpaper design with warm floral tones', category: 'wallpapers' },
  { src: '/gallery/peacock-wallpaper-design-blue.jpeg', alt: 'Blue peacock wallpaper design with cherry blossoms', category: 'wallpapers' },
  { src: '/gallery/peacock-wallpaper-vintage.jpeg', alt: 'Vintage style peacock wallpaper illustration', category: 'wallpapers' },
  { src: '/gallery/tropical-palace-wallpaper-mural.jpeg', alt: 'Tropical palace mural wallpaper with peacock', category: 'wallpapers' },
  { src: '/gallery/3d-floral-wallpaper-blue.jpeg', alt: '3D floral wallpaper in blue and white tones', category: 'wallpapers' },
  { src: '/gallery/3d-scallop-wallpaper-pastel.jpeg', alt: '3D scallop pattern wallpaper in pastel colors', category: 'wallpapers' },
  { src: '/gallery/3d-wallpaper-rolls-collection.jpeg', alt: 'Collection of 3D pattern wallpaper rolls', category: 'wallpapers' },
  { src: '/gallery/3d-wallpaper-rolls-geometric.jpeg', alt: 'Geometric 3D pattern wallpaper rolls display', category: 'wallpapers' },
  { src: '/gallery/metallic-wallpaper-rolls.jpeg', alt: 'Metallic wallpaper rolls in silver, black, gold and bronze', category: 'wallpapers' },
  { src: '/gallery/golden-metallic-wallpaper-rolls.jpeg', alt: 'Premium golden metallic wallpaper rolls collection', category: 'wallpapers' },

  // ── FLUTED PANELS ────────────────────────────────────────
  { src: '/gallery/fluted-panel-samples-handheld.jpeg', alt: 'Fluted wall panel samples in multiple finishes', category: 'fluted-panels' },
  { src: '/gallery/wpc-fluted-panels-color-range.jpeg', alt: 'WPC fluted panels in full color range display', category: 'fluted-panels' },
  { src: '/gallery/fluted-panels-closeup-colors.jpeg', alt: 'Close-up of fluted panels in wood, marble and solid colors', category: 'fluted-panels' },
  { src: '/gallery/wpc-fluted-panel-wood-colors.jpeg', alt: 'WPC fluted panel samples in natural wood and grey tones', category: 'fluted-panels' },
  { src: '/gallery/designer-fluted-panels-white-brown.jpeg', alt: 'Designer fluted panels in white and brown with leaf motif', category: 'fluted-panels' },
  { src: '/gallery/designer-fluted-panel-grey.jpeg', alt: 'Designer fluted panel in grey with geometric leaf pattern', category: 'fluted-panels' },
  { src: '/gallery/fluted-panel-shelving-interior.jpeg', alt: 'Fluted panel wall with built-in shelving and decor', category: 'fluted-panels' },
  { src: '/gallery/luxury-fluted-panel-feather-wall.jpeg', alt: 'Luxury fluted panel wall with feather sculptures and backlighting', category: 'fluted-panels' },
  { src: '/gallery/luxury-fluted-panel-foyer.jpeg', alt: 'Luxury foyer with two-tone fluted panels and pendant lights', category: 'fluted-panels' },

  // ── 3D WALL PANELS ──────────────────────────────────────
  { src: '/gallery/3d-wall-panel-samples-wood-grey.jpeg', alt: '3D wall panel samples in wood and grey finishes', category: '3d-panels' },
  { src: '/gallery/3d-diamond-panel-installation.jpeg', alt: '3D diamond pattern wall panel installed with backlighting', category: '3d-panels' },
  { src: '/gallery/3d-wave-panel-bedroom-design.jpeg', alt: '3D wave panel behind bed in luxury bedroom design', category: '3d-panels' },
  { src: '/gallery/3d-wave-panel-tile-sample.jpeg', alt: '3D wave pattern wall panel tile sample', category: '3d-panels' },
  { src: '/gallery/3d-wall-panel-showroom-display.jpeg', alt: '3D wall panel showroom with geometric patterns display', category: '3d-panels' },
  { src: '/gallery/3d-wall-panels-geometric-display.jpeg', alt: '3D geometric wall panels in black, white and gold', category: '3d-panels' },
  { src: '/gallery/3d-floral-wall-panel-white.jpeg', alt: 'White 3D floral pattern wall panel with pendant light', category: '3d-panels' },
  { src: '/gallery/3d-geometric-panel-tiles-display.jpeg', alt: 'Showroom display wall with geometric 3D decorative tiles and acoustic panels', category: '3d-panels' },
  { src: '/gallery/3d-panel-textures-stone-display.jpeg', alt: '3D panel textures including stone, wave and geometric styles', category: '3d-panels' },

  // ── FEATURE WALLS ────────────────────────────────────────
  { src: '/gallery/luxury-marble-fluted-panel-living-room.jpeg', alt: 'Luxury living room with marble and fluted panel feature wall', category: 'feature-walls' },
  { src: '/gallery/backlit-wall-panel-installation.jpeg', alt: 'Backlit wall panel installation with oval cutout design', category: 'feature-walls' },
  { src: '/gallery/backlit-panel-closeup-detail.jpeg', alt: 'Close-up of backlit wall panel with LED lighting detail', category: 'feature-walls' },
  { src: '/gallery/marble-fluted-panel-feature-wall.jpeg', alt: 'Marble and wood fluted panel feature wall with plants', category: 'feature-walls' },
  { src: '/gallery/designer-feature-wall-fluted.jpeg', alt: 'Designer feature wall with navy and gold fluted panels', category: 'feature-walls' },
  { src: '/gallery/marble-wood-green-feature-wall.jpeg', alt: 'Feature wall combining marble, wood panels and greenery', category: 'feature-walls' },
  { src: '/gallery/marble-fluted-panel-tv-wall.jpeg', alt: 'Marble and fluted panel TV wall with backlighting', category: 'feature-walls' },
  { src: '/gallery/marble-fluted-hallway-design.jpeg', alt: 'Marble and fluted panel hallway wall design', category: 'feature-walls' },

  // ── WALL ART / DECORATIVE ────────────────────────────────
  { src: '/gallery/boho-wall-art-collection.jpeg', alt: 'Boho style wall art collection with botanical prints', category: 'wall-art' },
  { src: '/gallery/boho-botanical-wall-art.jpeg', alt: 'Botanical boho wall art prints in earth tones', category: 'wall-art' },
  { src: '/gallery/minimalist-leaf-wall-art.jpeg', alt: 'Minimalist leaf wall art panels in muted tones', category: 'wall-art' },
  { src: '/gallery/abstract-botanical-wall-art.jpeg', alt: 'Abstract botanical wall art with pampas grass motifs', category: 'wall-art' },
  { src: '/gallery/modern-boho-wall-art-set.jpeg', alt: 'Modern boho wall art set with arches and leaves', category: 'wall-art' },

  // ── OTHER / SHOWROOM ────────────────────────────────────
  { src: '/gallery/hpl-compact-pvc-edging-samples.jpeg', alt: 'HPL compact and PVC edging material samples display', category: 'showroom' },
  { src: '/gallery/mosaic-mirror-tiles-display.jpeg', alt: 'Mosaic and mirror tile samples in various patterns', category: 'showroom' },
  { src: '/gallery/decorative-glass-partition.jpeg', alt: 'Decorative glass flower partition screens', category: 'showroom' },
];

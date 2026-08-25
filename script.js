/**
 * LUMINA E-COMMERCE APPLICATION
 * Complete vanilla JavaScript controller: Cart, Wishlist, Search, Filters, Quick View, Checkout & Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. PRODUCT CATALOG DATA
  // =========================================================================
  const PRODUCTS = [
    {
      id: 1,
      title: 'SoundPro Max Wireless ANC Headphones',
      category: 'Electronics',
      price: 249.00,
      originalPrice: 329.00,
      rating: 4.9,
      reviewsCount: 142,
      inStock: true,
      stockCount: 14,
      onSale: true,
      freeShipping: true,
      isFeatured: true,
      badge: 'Sale',
      description: 'Masterfully engineered spatial audio with custom 40mm beryllium drivers, active hybrid noise cancellation, and 45-hour battery life.',
      specs: ['40mm Beryllium Drivers', '45h Battery Life', 'Bluetooth 5.3 + Multipoint', 'Hybrid ANC + Transparency'],
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#1e293b', '#e2e8f0', '#94a3b8']
    },
    {
      id: 2,
      title: 'AeroCore Ultra Mechanical Keyboard',
      category: 'Electronics',
      price: 129.00,
      originalPrice: 189.00,
      rating: 4.8,
      reviewsCount: 98,
      inStock: true,
      stockCount: 9,
      onSale: true,
      freeShipping: true,
      isFeatured: true,
      badge: 'Deal',
      description: 'CNC machined aerospace aluminum chassis with pre-lubed linear switches, hot-swappable sockets, and south-facing RGB lighting.',
      specs: ['Hot-Swappable PCB', 'Custom Linear Switches', 'Gasket Mount System', 'Triple Mode Connectivity'],
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#0f172a', '#e2e8f0']
    },
    {
      id: 3,
      title: 'Merino Wool Knit Relaxed Overshirt',
      category: 'Apparel',
      price: 115.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 64,
      inStock: true,
      stockCount: 22,
      onSale: false,
      freeShipping: true,
      isFeatured: false,
      badge: 'New',
      description: 'Ethically sourced 100% superfine merino wool. Naturally thermoregulating, odor resistant, and tailored with horn buttons.',
      specs: ['100% Extrafine Merino Wool', 'Natural Horn Buttons', 'Pre-washed for Zero Shrinkage', 'Tailored Casual Fit'],
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#334155', '#78716c', '#0284c7']
    },
    {
      id: 4,
      title: 'Chronos Minimalist Sapphire Watch',
      category: 'Accessories',
      price: 195.00,
      originalPrice: 240.00,
      rating: 4.9,
      reviewsCount: 81,
      inStock: true,
      stockCount: 5,
      onSale: true,
      freeShipping: true,
      isFeatured: true,
      badge: 'Hot',
      description: 'Sleek Scandinavian design featuring a scratch-proof sapphire crystal lens, Miyota quartz movement, and genuine Italian leather strap.',
      specs: ['Sapphire Crystal Glass', '5 ATM Water Resistant', 'Italian Leather Strap', '316L Stainless Steel'],
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#1e293b', '#b45309']
    },
    {
      id: 5,
      title: 'Artisan Ceramic Pour-Over Carafe Set',
      category: 'Home',
      price: 58.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 112,
      inStock: true,
      stockCount: 18,
      onSale: false,
      freeShipping: false,
      isFeatured: false,
      badge: null,
      description: 'Hand-thrown stoneware coffee dripper with heat-resistant borosilicate glass server and ergonomic walnut handle collar.',
      specs: ['Handmade Matte Ceramic', '600ml Borosilicate Glass', 'Double Wall Insulation', 'Includes 40 Micro-Filters'],
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#f8fafc', '#475569']
    },
    {
      id: 6,
      title: 'Polarized Geometric Acetate Sunglasses',
      category: 'Accessories',
      price: 89.00,
      originalPrice: 120.00,
      rating: 4.6,
      reviewsCount: 53,
      inStock: true,
      stockCount: 12,
      onSale: true,
      freeShipping: true,
      isFeatured: false,
      badge: 'Sale',
      description: 'Handcrafted Italian cellulose acetate frames with UV400 polarized mineral glass lenses providing crisp optical clarity.',
      specs: ['UV400 Category 3 Protection', 'Italian Mazzucchelli Acetate', '5-Barrel Stainless Hinges', 'Includes Leather Case'],
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#0f172a', '#78350f', '#0284c7']
    },
    {
      id: 7,
      title: 'Heavyweight French Terry Everyday Hoodie',
      category: 'Apparel',
      price: 88.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 175,
      inStock: true,
      stockCount: 30,
      onSale: false,
      freeShipping: true,
      isFeatured: true,
      badge: 'Popular',
      description: 'Cut from 480 GSM organic cotton loopback French terry. Ribbed side gussets, double-layer hood, and seamless clean silhouette.',
      specs: ['480 GSM 100% Organic Cotton', 'Pre-Shrunk Heavyweight Fabric', 'Ribbed Elastic Side Panels', 'Flatlock Stitching'],
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#1e293b', '#64748b', '#15803d']
    },
    {
      id: 8,
      title: 'Botanical Hinoki Wood Aromatherapy Diffuser',
      category: 'Wellness',
      price: 74.00,
      originalPrice: 95.00,
      rating: 4.7,
      reviewsCount: 42,
      inStock: true,
      stockCount: 8,
      onSale: true,
      freeShipping: false,
      isFeatured: false,
      badge: 'Sale',
      description: 'Ultrasonic whisper-quiet cold mist diffusion encased in sustainably harvested Japanese Hinoki wood and ambient warm LED ring.',
      specs: ['Ultrasonic 2.4MHz Vibrations', '350ml Tank / 12hr Runtime', 'Auto Safety Shut-off', 'Warm 2700K Ambient Glow'],
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#d97706', '#f8fafc']
    },
    {
      id: 9,
      title: 'Minimalist Vegan Leather Laptop Sleeve',
      category: 'Accessories',
      price: 49.00,
      originalPrice: null,
      rating: 4.5,
      reviewsCount: 38,
      inStock: true,
      stockCount: 16,
      onSale: false,
      freeShipping: false,
      isFeatured: false,
      badge: null,
      description: 'Ultra-slim magnetic envelope sleeve lined with ultra-soft scratch-free microfiber for 13-14 inch laptops.',
      specs: ['Waterproof Bio-Based PU', 'Microfiber Interior Protection', 'Concealed Magnetic Flap', 'Fits 13" - 14" Devices'],
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#0f172a', '#78350f']
    },
    {
      id: 10,
      title: 'Studio Hi-Fi Desktop Speaker Pair',
      category: 'Electronics',
      price: 219.00,
      originalPrice: 280.00,
      rating: 4.8,
      reviewsCount: 67,
      inStock: false,
      stockCount: 0,
      onSale: true,
      freeShipping: true,
      isFeatured: false,
      badge: 'Sold Out',
      description: 'Acoustically tuned MDF wooden enclosures with silk dome tweeters, dedicated subwoofer output, and optical/Bluetooth inputs.',
      specs: ['60W RMS Total Output', 'Acoustic Wood Cabinet', 'Optical, AUX & Bluetooth 5.0', 'Wireless IR Remote Included'],
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#1e293b', '#b45309']
    },
    {
      id: 11,
      title: 'Sculptural Marble & Oak Desk Lamp',
      category: 'Home',
      price: 135.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 89,
      inStock: true,
      stockCount: 11,
      onSale: false,
      freeShipping: true,
      isFeatured: true,
      badge: 'New',
      description: 'Solid Carrara marble base paired with brushed brass hardware and solid white oak pivoting lamp arm with capacitive touch dimmer.',
      specs: ['Solid Carrara Marble Base', 'FSC-Certified White Oak', 'Touch Dimming 10%-100%', 'Warm 3000K LED Module'],
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#f8fafc', '#1e293b']
    },
    {
      id: 12,
      title: 'Organic Botanical Facial Recovery Oil',
      category: 'Wellness',
      price: 46.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 57,
      inStock: true,
      stockCount: 25,
      onSale: false,
      freeShipping: false,
      isFeatured: false,
      badge: null,
      description: 'Cold-pressed rosehip seed, squalane, and blue tansy extract to replenish vital hydration and calm tired skin.',
      specs: ['100% Plant-Derived Oils', 'Cold-Pressed Extraction', 'Cruelty-Free & Vegan', '30ml Frosted Amber Dropper'],
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      thumbnails: [
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80'
      ],
      colors: ['#0284c7']
    }
  ];

  // Promo codes configuration
  const PROMO_CODES = {
    'WELCOME15': 0.15,
    'SUMMER20': 0.20,
    'SAVE10': 0.10
  };

  const FREE_SHIPPING_THRESHOLD = 75.00;
  const STANDARD_SHIPPING_RATE = 9.99;

  // =========================================================================
  // 2. STATE MANAGEMENT & LOCAL STORAGE
  // =========================================================================
  const State = {
    cart: JSON.parse(localStorage.getItem('lumina_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('lumina_wishlist') || '[]'),
    appliedPromo: localStorage.getItem('lumina_promo') || null,
    newsletterSubscribed: JSON.parse(localStorage.getItem('lumina_subscribed') || 'false'),
    filters: {
      category: 'all',
      searchQuery: '',
      maxPrice: 500,
      minRating: 0,
      inStockOnly: false,
      onSaleOnly: false,
      freeShippingOnly: false,
      sortBy: 'featured'
    }
  };

  function saveCart() {
    localStorage.setItem('lumina_cart', JSON.stringify(State.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('lumina_wishlist', JSON.stringify(State.wishlist));
    updateWishlistUI();
    renderProducts();
  }

  // =========================================================================
  // 3. DOM ELEMENTS SELECTION
  // =========================================================================
  const el = {
    // Header & Navigation
    mainHeader: document.getElementById('mainHeader'),
    cartToggleBtn: document.getElementById('cartToggleBtn'),
    wishlistToggleBtn: document.getElementById('wishlistToggleBtn'),
    cartCount: document.getElementById('cartCount'),
    wishlistCount: document.getElementById('wishlistCount'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    searchDropdown: document.getElementById('searchDropdown'),
    searchResultsList: document.getElementById('searchResultsList'),
    searchResultCount: document.getElementById('searchResultCount'),
    desktopNavLinks: document.querySelectorAll('.desktop-nav .nav-link'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    mobileDrawerOverlay: document.getElementById('mobileDrawerOverlay'),
    mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    mobileWishlistBadge: document.getElementById('mobileWishlistBadge'),
    mobileCartBadge: document.getElementById('mobileCartBadge'),
    mobileOpenWishlist: document.getElementById('mobileOpenWishlist'),
    mobileOpenCart: document.getElementById('mobileOpenCart'),
    copyPromoBtn: document.getElementById('copyPromoBtn'),

    // Hero & Deals
    heroShopNowBtn: document.getElementById('heroShopNowBtn'),
    heroFeaturedBtn: document.getElementById('heroFeaturedBtn'),
    heroPillQuickView: document.getElementById('heroPillQuickView'),
    dealAddToCartBtn: document.getElementById('dealAddToCartBtn'),
    cdHours: document.getElementById('cdHours'),
    cdMinutes: document.getElementById('cdMinutes'),
    cdSeconds: document.getElementById('cdSeconds'),

    // Category pills strip
    catPills: document.querySelectorAll('.cat-pill'),

    // Store & Filters
    productsGrid: document.getElementById('productsGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyStateResetBtn: document.getElementById('emptyStateResetBtn'),
    resultsCount: document.getElementById('resultsCount'),
    activeChipsContainer: document.getElementById('activeChipsContainer'),
    sortSelect: document.getElementById('sortSelect'),
    sidebarSearchInput: document.getElementById('sidebarSearchInput'),
    categoryRadios: document.querySelectorAll('input[name="categoryFilter"]'),
    priceRangeInput: document.getElementById('priceRangeInput'),
    priceDisplay: document.getElementById('priceDisplay'),
    ratingRadios: document.querySelectorAll('input[name="ratingFilter"]'),
    filterInStockOnly: document.getElementById('filterInStockOnly'),
    filterOnSaleOnly: document.getElementById('filterOnSaleOnly'),
    filterFreeShippingOnly: document.getElementById('filterFreeShippingOnly'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    filterSidebar: document.getElementById('filterSidebar'),
    mobileFilterTrigger: document.getElementById('mobileFilterTrigger'),

    // Category Counts
    countAll: document.getElementById('countAll'),
    countElectronics: document.getElementById('countElectronics'),
    countApparel: document.getElementById('countApparel'),
    countHome: document.getElementById('countHome'),
    countAccessories: document.getElementById('countAccessories'),
    countWellness: document.getElementById('countWellness'),

    // Cart Drawer
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartHeaderCount: document.getElementById('cartHeaderCount'),
    shippingTrackerMsg: document.getElementById('shippingTrackerMsg'),
    shippingProgressBar: document.getElementById('shippingProgressBar'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartEmptyView: document.getElementById('cartEmptyView'),
    cartFooter: document.getElementById('cartFooter'),
    cartPromoInput: document.getElementById('cartPromoInput'),
    applyPromoBtn: document.getElementById('applyPromoBtn'),
    promoFeedback: document.getElementById('promoFeedback'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    discountRow: document.getElementById('discountRow'),
    discountPercent: document.getElementById('discountPercent'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartShipping: document.getElementById('cartShipping'),
    cartGrandTotal: document.getElementById('cartGrandTotal'),
    checkoutBtnTotal: document.getElementById('checkoutBtnTotal'),
    proceedCheckoutBtn: document.getElementById('proceedCheckoutBtn'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    cartStartShoppingBtn: document.getElementById('cartStartShoppingBtn'),

    // Wishlist Drawer
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    wishlistCloseBtn: document.getElementById('wishlistCloseBtn'),
    wishlistHeaderCount: document.getElementById('wishlistHeaderCount'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    wishlistEmptyView: document.getElementById('wishlistEmptyView'),
    wishlistFooter: document.getElementById('wishlistFooter'),
    wishlistStartShoppingBtn: document.getElementById('wishlistStartShoppingBtn'),
    moveAllWishlistToCartBtn: document.getElementById('moveAllWishlistToCartBtn'),

    // Quick View Modal
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewOverlay: document.getElementById('quickViewOverlay'),
    quickViewCloseBtn: document.getElementById('quickViewCloseBtn'),
    quickViewContainer: document.getElementById('quickViewContainer'),

    // Checkout Modal
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutModalOverlay: document.getElementById('checkoutModalOverlay'),
    checkoutModalCloseBtn: document.getElementById('checkoutModalCloseBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutItemsSummary: document.getElementById('checkoutItemsSummary'),
    checkItemsTotal: document.getElementById('checkItemsTotal'),
    checkDiscountRow: document.getElementById('checkDiscountRow'),
    checkDiscountVal: document.getElementById('checkDiscountVal'),
    checkShippingVal: document.getElementById('checkShippingVal'),
    checkTotalDue: document.getElementById('checkTotalDue'),
    checkoutOrderFinalTotal: document.getElementById('checkoutOrderFinalTotal'),

    // Order Success Modal
    orderSuccessModal: document.getElementById('orderSuccessModal'),
    orderSuccessOverlay: document.getElementById('orderSuccessOverlay'),
    receiptOrderNum: document.getElementById('receiptOrderNum'),
    receiptTotal: document.getElementById('receiptTotal'),
    continueShoppingSuccessBtn: document.getElementById('continueShoppingSuccessBtn'),

    // Newsletter & Global
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    newsletterFeedback: document.getElementById('newsletterFeedback'),
    toastContainer: document.getElementById('toastContainer'),
    backToTopBtn: document.getElementById('backToTopBtn')
  };

  // =========================================================================
  // 4. TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fa-circle-check success';
    if (type === 'info') icon = 'fa-circle-info info';
    if (type === 'warning') icon = 'fa-triangle-exclamation warning';
    if (type === 'danger') icon = 'fa-circle-xmark warning';

    toast.innerHTML = `
      <i class="fa-solid ${icon} toast-icon"></i>
      <span>${message}</span>
    `;

    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3500);
  }

  // =========================================================================
  // 5. PRODUCT RENDERING & FILTERING
  // =========================================================================
  function updateCategoryCounts() {
    el.countAll.textContent = `(${PRODUCTS.length})`;
    el.countElectronics.textContent = `(${PRODUCTS.filter(p => p.category === 'Electronics').length})`;
    el.countApparel.textContent = `(${PRODUCTS.filter(p => p.category === 'Apparel').length})`;
    el.countHome.textContent = `(${PRODUCTS.filter(p => p.category === 'Home').length})`;
    el.countAccessories.textContent = `(${PRODUCTS.filter(p => p.category === 'Accessories').length})`;
    el.countWellness.textContent = `(${PRODUCTS.filter(p => p.category === 'Wellness').length})`;
  }

  function getFilteredProducts() {
    return PRODUCTS.filter(p => {
      // Category filter
      if (State.filters.category !== 'all' && p.category !== State.filters.category) {
        return false;
      }
      // Search query
      if (State.filters.searchQuery.trim() !== '') {
        const query = State.filters.searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesSpecs = p.specs.some(s => s.toLowerCase().includes(query));
        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesSpecs) return false;
      }
      // Price slider
      if (p.price > State.filters.maxPrice) {
        return false;
      }
      // Rating
      if (State.filters.minRating > 0 && p.rating < State.filters.minRating) {
        return false;
      }
      // Availability & Deals
      if (State.filters.inStockOnly && !p.inStock) {
        return false;
      }
      if (State.filters.onSaleOnly && !p.onSale) {
        return false;
      }
      if (State.filters.freeShippingOnly && !p.freeShipping) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (State.filters.sortBy === 'price-asc') return a.price - b.price;
      if (State.filters.sortBy === 'price-desc') return b.price - a.price;
      if (State.filters.sortBy === 'rating') return b.rating - a.rating;
      if (State.filters.sortBy === 'name-asc') return a.title.localeCompare(b.title);
      // default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }

  function renderProducts() {
    const products = getFilteredProducts();

    // Update summary count
    el.resultsCount.innerHTML = `Showing <strong>${products.length}</strong> ${products.length === 1 ? 'product' : 'products'}`;

    // Render active filter chips
    renderActiveChips();

    if (products.length === 0) {
      el.productsGrid.innerHTML = '';
      el.emptyState.classList.remove('hidden');
      return;
    }

    el.emptyState.classList.add('hidden');
    el.productsGrid.innerHTML = products.map(product => {
      const isWishlisted = State.wishlist.some(id => id === product.id);
      const isCarted = State.cart.some(item => item.id === product.id);
      const discountPercent = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

      let badgeHtml = '';
      if (product.badge) {
        let badgeClass = 'badge-new';
        if (product.badge.toLowerCase().includes('sale') || product.badge.toLowerCase().includes('deal')) badgeClass = 'badge-sale';
        if (product.badge.toLowerCase().includes('hot') || product.badge.toLowerCase().includes('popular')) badgeClass = 'badge-featured';
        badgeHtml = `<span class="badge ${badgeClass}">${product.badge}</span>`;
      }

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
            <div class="product-badges">
              ${badgeHtml}
            </div>
            <div class="product-floating-actions">
              <button class="card-action-btn ${isWishlisted ? 'active-wishlist' : ''}" 
                data-action="wishlist" 
                data-id="${product.id}" 
                title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}" 
                aria-label="Wishlist toggle">
                <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
              <button class="card-action-btn" 
                data-action="quickview" 
                data-id="${product.id}" 
                title="Quick View Details" 
                aria-label="Quick view product">
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>

          <div class="product-body">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating.toFixed(1)}</span>
                <span class="rating-count">(${product.reviewsCount})</span>
              </div>
            </div>

            <h3 class="product-title" title="${product.title}">${product.title}</h3>
            <p class="product-desc">${product.description}</p>

            <div class="product-price-row">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<s class="price-old">$${product.originalPrice.toFixed(2)}</s>` : ''}
              ${discountPercent ? `<span class="price-discount-tag">-${discountPercent}%</span>` : ''}
            </div>

            <button class="product-add-btn ${isCarted ? 'added-state' : ''}" 
              data-action="add-to-cart" 
              data-id="${product.id}" 
              ${!product.inStock ? 'disabled' : ''}>
              <i class="fa-solid ${!product.inStock ? 'fa-ban' : isCarted ? 'fa-check' : 'fa-cart-plus'}"></i>
              <span>${!product.inStock ? 'Out of Stock' : isCarted ? 'In Cart' : 'Add to Cart'}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderActiveChips() {
    const chips = [];

    if (State.filters.category !== 'all') {
      chips.push({ type: 'category', label: `Category: ${State.filters.category}` });
    }
    if (State.filters.searchQuery.trim()) {
      chips.push({ type: 'search', label: `Search: "${State.filters.searchQuery}"` });
    }
    if (State.filters.maxPrice < 500) {
      chips.push({ type: 'price', label: `Under $${State.filters.maxPrice}` });
    }
    if (State.filters.minRating > 0) {
      chips.push({ type: 'rating', label: `Rating ${State.filters.minRating}★+` });
    }
    if (State.filters.inStockOnly) {
      chips.push({ type: 'inStock', label: 'In Stock' });
    }
    if (State.filters.onSaleOnly) {
      chips.push({ type: 'onSale', label: 'On Sale' });
    }
    if (State.filters.freeShippingOnly) {
      chips.push({ type: 'freeShipping', label: 'Free Shipping' });
    }

    el.activeChipsContainer.innerHTML = chips.map(chip => `
      <span class="filter-chip">
        ${chip.label}
        <i class="fa-solid fa-xmark chip-remove" data-chip-type="${chip.type}"></i>
      </span>
    `).join('');
  }

  function syncFilterInputs() {
    // Sync category radios
    el.categoryRadios.forEach(radio => {
      radio.checked = (radio.value === State.filters.category);
    });

    // Sync category pills
    el.catPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.category === State.filters.category);
    });

    // Sync desktop nav links
    el.desktopNavLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.category === State.filters.category);
    });

    // Sync mobile nav items
    el.mobileNavItems.forEach(item => {
      if (item.dataset.category) {
        item.classList.toggle('active', item.dataset.category === State.filters.category);
      }
    });

    // Price input
    el.priceRangeInput.value = State.filters.maxPrice;
    el.priceDisplay.textContent = `$${State.filters.maxPrice}`;

    // Search inputs
    el.searchInput.value = State.filters.searchQuery;
    el.sidebarSearchInput.value = State.filters.searchQuery;
    el.mobileSearchInput.value = State.filters.searchQuery;
    el.searchClearBtn.classList.toggle('visible', State.filters.searchQuery.length > 0);

    // Rating
    el.ratingRadios.forEach(radio => {
      radio.checked = (parseFloat(radio.value) === State.filters.minRating);
    });

    // Checkboxes
    el.filterInStockOnly.checked = State.filters.inStockOnly;
    el.filterOnSaleOnly.checked = State.filters.onSaleOnly;
    el.filterFreeShippingOnly.checked = State.filters.freeShippingOnly;

    renderProducts();
  }

  function resetAllFilters() {
    State.filters.category = 'all';
    State.filters.searchQuery = '';
    State.filters.maxPrice = 500;
    State.filters.minRating = 0;
    State.filters.inStockOnly = false;
    State.filters.onSaleOnly = false;
    State.filters.freeShippingOnly = false;
    State.filters.sortBy = 'featured';
    el.sortSelect.value = 'featured';

    syncFilterInputs();
    showToast('Filters reset to default catalog view.', 'info');
  }

  // =========================================================================
  // 6. LIVE SEARCH AUTOCOMPLETE DROPDOWN
  // =========================================================================
  function handleLiveSearch(query) {
    State.filters.searchQuery = query;
    el.searchClearBtn.classList.toggle('visible', query.length > 0);

    if (!query.trim()) {
      el.searchDropdown.classList.remove('open');
      renderProducts();
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.specs.some(s => s.toLowerCase().includes(query.toLowerCase()))
    );

    el.searchResultCount.textContent = `${matches.length} found`;

    if (matches.length === 0) {
      el.searchResultsList.innerHTML = `
        <div style="padding: 12px; font-size: 0.85rem; color: var(--text-secondary); text-align: center;">
          No matching products for "${query}"
        </div>
      `;
    } else {
      el.searchResultsList.innerHTML = matches.slice(0, 5).map(p => `
        <div class="search-dropdown-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.title}" class="search-item-thumb">
          <div class="search-item-info">
            <div class="search-item-title">${p.title}</div>
            <div class="search-item-meta">$${p.price.toFixed(2)} &bull; ${p.category}</div>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem; color: var(--text-muted);"></i>
        </div>
      `).join('');
    }

    el.searchDropdown.classList.add('open');
    renderProducts();
  }

  // =========================================================================
  // 7. CART SYSTEM
  // =========================================================================
  function addToCart(productId, quantity = 1, selectedColor = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !product.inStock) {
      showToast('Sorry, this product is currently out of stock.', 'warning');
      return;
    }

    const color = selectedColor || product.colors[0];
    const existingIndex = State.cart.findIndex(item => item.id === productId && item.color === color);

    if (existingIndex > -1) {
      State.cart[existingIndex].quantity += quantity;
    } else {
      State.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        color: color,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added "${product.title}" to cart!`, 'success');
    openCartDrawer();
  }

  function updateCartQuantity(index, delta) {
    if (!State.cart[index]) return;
    State.cart[index].quantity += delta;
    if (State.cart[index].quantity <= 0) {
      State.cart.splice(index, 1);
    }
    saveCart();
  }

  function removeCartItem(index) {
    if (!State.cart[index]) return;
    const item = State.cart[index];
    State.cart.splice(index, 1);
    saveCart();
    showToast(`Removed "${item.title}" from cart.`, 'info');
  }

  function clearCart() {
    if (State.cart.length === 0) return;
    State.cart = [];
    saveCart();
    showToast('Shopping cart cleared.', 'info');
  }

  function calculateCartTotals() {
    const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountRate = State.appliedPromo ? (PROMO_CODES[State.appliedPromo] || 0) : 0;
    const discountAmount = subtotal * discountRate;
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
    const shipping = isFreeShipping ? 0 : STANDARD_SHIPPING_RATE;
    const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

    return {
      subtotal,
      discountRate,
      discountAmount,
      isFreeShipping,
      shipping,
      grandTotal,
      itemCount: State.cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }

  function updateCartUI() {
    const totals = calculateCartTotals();

    // Badges count
    el.cartCount.textContent = totals.itemCount;
    el.mobileCartBadge.textContent = totals.itemCount;
    el.cartHeaderCount.textContent = `${totals.itemCount} ${totals.itemCount === 1 ? 'item' : 'items'}`;

    // Free Shipping Progress
    if (totals.subtotal >= FREE_SHIPPING_THRESHOLD) {
      el.shippingTrackerMsg.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-success);"></i> You've qualified for <strong>FREE Shipping!</strong>`;
      el.shippingProgressBar.style.width = '100%';
      el.shippingProgressBar.style.backgroundColor = 'var(--color-success)';
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - totals.subtotal).toFixed(2);
      const progressPercent = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      el.shippingTrackerMsg.innerHTML = `Add <strong>$${remaining}</strong> more to unlock <strong>FREE Shipping!</strong>`;
      el.shippingProgressBar.style.width = `${progressPercent}%`;
      el.shippingProgressBar.style.backgroundColor = 'var(--color-accent)';
    }

    // Render Items
    if (State.cart.length === 0) {
      el.cartItemsList.innerHTML = '';
      el.cartEmptyView.classList.remove('hidden');
      el.cartFooter.classList.add('hidden');
    } else {
      el.cartEmptyView.classList.add('hidden');
      el.cartFooter.classList.remove('hidden');

      el.cartItemsList.innerHTML = State.cart.map((item, idx) => `
        <div class="cart-item-card" data-cart-index="${idx}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-variant">
              <span>Category: ${item.category}</span>
            </div>
            <div class="cart-item-price-row">
              <div class="qty-stepper">
                <button class="qty-btn" data-cart-action="dec" data-cart-index="${idx}" aria-label="Decrease quantity">-</button>
                <span class="qty-input">${item.quantity}</span>
                <button class="qty-btn" data-cart-action="inc" data-cart-index="${idx}" aria-label="Increase quantity">+</button>
              </div>
              <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
          <button class="cart-item-remove" data-cart-action="remove" data-cart-index="${idx}" title="Remove item" aria-label="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }

    // Totals calculations
    el.cartSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;
    
    if (totals.discountAmount > 0) {
      el.discountRow.classList.remove('hidden');
      el.discountPercent.textContent = `${Math.round(totals.discountRate * 100)}%`;
      el.cartDiscount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
    } else {
      el.discountRow.classList.add('hidden');
    }

    if (totals.subtotal === 0) {
      el.cartShipping.textContent = '$0.00';
    } else if (totals.isFreeShipping) {
      el.cartShipping.innerHTML = `<strong style="color: var(--color-success);">FREE</strong>`;
    } else {
      el.cartShipping.textContent = `$${STANDARD_SHIPPING_RATE.toFixed(2)}`;
    }

    el.cartGrandTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;
    el.checkoutBtnTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;

    // Promo input sync
    if (State.appliedPromo) {
      el.cartPromoInput.value = State.appliedPromo;
      el.promoFeedback.className = 'promo-feedback success';
      el.promoFeedback.textContent = `Promo code "${State.appliedPromo}" applied! (${Math.round(totals.discountRate * 100)}% off)`;
    }
  }

  function applyPromoCode(code) {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) {
      el.promoFeedback.className = 'promo-feedback error';
      el.promoFeedback.textContent = 'Please enter a promo code.';
      return;
    }

    if (PROMO_CODES[cleanCode]) {
      State.appliedPromo = cleanCode;
      localStorage.setItem('lumina_promo', cleanCode);
      el.promoFeedback.className = 'promo-feedback success';
      el.promoFeedback.textContent = `Coupon applied! ${Math.round(PROMO_CODES[cleanCode] * 100)}% discount.`;
      saveCart();
      showToast(`Promo code "${cleanCode}" applied!`, 'success');
    } else {
      el.promoFeedback.className = 'promo-feedback error';
      el.promoFeedback.textContent = 'Invalid promo code. Try WELCOME15 or SUMMER20.';
    }
  }

  // =========================================================================
  // 8. WISHLIST SYSTEM
  // =========================================================================
  function toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = State.wishlist.indexOf(productId);
    if (index > -1) {
      State.wishlist.splice(index, 1);
      showToast(`Removed "${product.title}" from wishlist.`, 'info');
    } else {
      State.wishlist.push(productId);
      showToast(`Saved "${product.title}" to wishlist!`, 'success');
    }
    saveWishlist();
  }

  function updateWishlistUI() {
    el.wishlistCount.textContent = State.wishlist.length;
    el.mobileWishlistBadge.textContent = State.wishlist.length;
    el.wishlistHeaderCount.textContent = `${State.wishlist.length} saved`;

    if (State.wishlist.length === 0) {
      el.wishlistItemsList.innerHTML = '';
      el.wishlistEmptyView.classList.remove('hidden');
      el.wishlistFooter.classList.add('hidden');
      return;
    }

    el.wishlistEmptyView.classList.add('hidden');
    el.wishlistFooter.classList.remove('hidden');

    const items = PRODUCTS.filter(p => State.wishlist.includes(p.id));
    el.wishlistItemsList.innerHTML = items.map(p => `
      <div class="wishlist-item-card" data-id="${p.id}">
        <img src="${p.image}" alt="${p.title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${p.title}</h4>
          <span class="cart-item-variant">${p.category} &bull; $${p.price.toFixed(2)}</span>
          <div class="cart-item-price-row" style="margin-top: 8px;">
            <button class="btn btn-primary btn-sm" data-wishlist-action="add-cart" data-id="${p.id}">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            <button class="cart-item-remove" data-wishlist-action="remove" data-id="${p.id}" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 9. QUICK VIEW MODAL
  // =========================================================================
  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let selectedThumbIndex = 0;
    let selectedColor = product.colors[0];
    let quantity = 1;
    const isWishlisted = State.wishlist.includes(product.id);

    el.quickViewContainer.innerHTML = `
      <div class="qv-gallery">
        <div class="qv-main-img-wrap">
          <img src="${product.thumbnails[0] || product.image}" alt="${product.title}" class="qv-main-img" id="qvMainImg">
        </div>
        <div class="qv-thumbs-row">
          ${product.thumbnails.map((t, idx) => `
            <img src="${t}" alt="Thumbnail" class="qv-thumb ${idx === 0 ? 'active' : ''}" data-thumb-index="${idx}">
          `).join('')}
        </div>
      </div>

      <div class="qv-details">
        <span class="qv-category">${product.category}</span>
        <h2 class="qv-title">${product.title}</h2>
        
        <div class="qv-rating-row">
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating.toFixed(1)}</span>
            <span class="rating-count">(${product.reviewsCount} customer reviews)</span>
          </div>
          <span style="color: var(--border-medium);">|</span>
          <span style="font-size: 0.82rem; color: ${product.inStock ? 'var(--color-success)' : 'var(--color-danger)'}; font-weight: 700;">
            <i class="fa-solid ${product.inStock ? 'fa-check' : 'fa-circle-xmark'}"></i>
            ${product.inStock ? `In Stock (${product.stockCount} units available)` : 'Currently Out of Stock'}
          </span>
        </div>

        <div class="qv-price-row">
          <span class="qv-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<s class="price-old" style="font-size: 1.1rem;">$${product.originalPrice.toFixed(2)}</s>` : ''}
          ${product.freeShipping ? '<span class="badge badge-featured">Free Shipping</span>' : ''}
        </div>

        <p class="qv-desc">${product.description}</p>

        <span class="qv-option-label">Color Finish</span>
        <div class="qv-swatches" id="qvSwatches">
          ${product.colors.map((c, idx) => `
            <span class="qv-swatch ${idx === 0 ? 'active' : ''}" style="background-color: ${c};" data-color="${c}"></span>
          `).join('')}
        </div>

        <span class="qv-option-label">Key Specifications</span>
        <ul style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
          ${product.specs.map(s => `<li><i class="fa-solid fa-check" style="color: var(--color-accent); margin-right: 6px;"></i>${s}</li>`).join('')}
        </ul>

        <div class="qv-action-row">
          <div class="qty-stepper" style="height: 48px; border-radius: var(--radius-md);">
            <button class="qty-btn" id="qvDecBtn" style="width: 36px; font-size: 1rem;">-</button>
            <span class="qty-input" id="qvQtyDisplay" style="width: 44px; font-size: 1rem;">1</span>
            <button class="qty-btn" id="qvIncBtn" style="width: 36px; font-size: 1rem;">+</button>
          </div>

          <button class="btn btn-primary qv-add-btn" id="qvAddToCartBtn" ${!product.inStock ? 'disabled' : ''}>
            <i class="fa-solid fa-cart-plus"></i>
            <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>

          <button class="qv-wishlist-btn" id="qvWishlistBtn" title="Add to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isWishlisted ? 'color: var(--color-danger);' : ''}"></i>
          </button>
        </div>
      </div>
    `;

    // Modal internal event listeners
    const mainImg = document.getElementById('qvMainImg');
    const thumbEls = el.quickViewContainer.querySelectorAll('.qv-thumb');
    thumbEls.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbEls.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const idx = parseInt(thumb.dataset.thumbIndex, 10);
        mainImg.src = product.thumbnails[idx];
      });
    });

    const swatchEls = el.quickViewContainer.querySelectorAll('.qv-swatch');
    swatchEls.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatchEls.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        selectedColor = swatch.dataset.color;
      });
    });

    const qvQtyDisplay = document.getElementById('qvQtyDisplay');
    document.getElementById('qvDecBtn').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qvQtyDisplay.textContent = quantity;
      }
    });

    document.getElementById('qvIncBtn').addEventListener('click', () => {
      if (quantity < (product.stockCount || 10)) {
        quantity++;
        qvQtyDisplay.textContent = quantity;
      }
    });

    document.getElementById('qvAddToCartBtn').addEventListener('click', () => {
      addToCart(product.id, quantity, selectedColor);
      closeQuickView();
    });

    const qvWishlistBtn = document.getElementById('qvWishlistBtn');
    qvWishlistBtn.addEventListener('click', () => {
      toggleWishlist(product.id);
      const isNowWishlisted = State.wishlist.includes(product.id);
      qvWishlistBtn.innerHTML = `<i class="${isNowWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isNowWishlisted ? 'color: var(--color-danger);' : ''}"></i>`;
    });

    el.quickViewOverlay.classList.add('active');
    el.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    el.quickViewOverlay.classList.remove('active');
    el.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 10. CHECKOUT & ORDER COMPLETION
  // =========================================================================
  function openCheckoutModal() {
    if (State.cart.length === 0) {
      showToast('Your cart is empty. Add products before checking out.', 'warning');
      return;
    }

    closeCartDrawer();
    const totals = calculateCartTotals();

    // Populate order summary in checkout
    el.checkoutItemsSummary.innerHTML = State.cart.map(item => `
      <div class="checkout-item-mini">
        <span>${item.quantity}x ${item.title}</span>
        <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
      </div>
    `).join('');

    el.checkItemsTotal.textContent = `$${totals.subtotal.toFixed(2)}`;

    if (totals.discountAmount > 0) {
      el.checkDiscountRow.classList.remove('hidden');
      el.checkDiscountVal.textContent = `-$${totals.discountAmount.toFixed(2)}`;
    } else {
      el.checkDiscountRow.classList.add('hidden');
    }

    el.checkShippingVal.textContent = totals.isFreeShipping ? 'Free Express' : `$${STANDARD_SHIPPING_RATE.toFixed(2)}`;
    el.checkTotalDue.textContent = `$${totals.grandTotal.toFixed(2)}`;
    el.checkoutOrderFinalTotal.textContent = `$${totals.grandTotal.toFixed(2)}`;

    el.checkoutModalOverlay.classList.add('active');
    el.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    el.checkoutModalOverlay.classList.remove('active');
    el.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const form = el.checkoutForm;

    // Validate inputs
    const requiredInputs = form.querySelectorAll('input[required]');
    let isValid = true;
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'var(--color-danger)';
      } else {
        input.style.borderColor = '';
      }
    });

    if (!isValid) {
      showToast('Please complete all required shipping & payment fields.', 'danger');
      return;
    }

    const totals = calculateCartTotals();
    const orderNum = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    const paidAmount = totals.grandTotal.toFixed(2);

    // Disable button & simulate processing
    const submitBtn = document.getElementById('checkoutSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Payment...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-shield-check"></i> Place Secure Order`;

      // Clear cart
      State.cart = [];
      saveCart();
      closeCheckoutModal();

      // Show receipt modal
      el.receiptOrderNum.textContent = `#${orderNum}`;
      el.receiptTotal.textContent = `$${paidAmount}`;
      el.orderSuccessOverlay.classList.add('active');
      el.orderSuccessModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      showToast(`Order #${orderNum} placed successfully!`, 'success');
    }, 1200);
  }

  function closeSuccessModal() {
    el.orderSuccessOverlay.classList.remove('active');
    el.orderSuccessModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 11. DRAWER TOGGLES & INTERFACE HELPERS
  // =========================================================================
  function openCartDrawer() {
    closeWishlistDrawer();
    closeMobileDrawer();
    el.cartOverlay.classList.add('active');
    el.cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    el.cartOverlay.classList.remove('active');
    el.cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openWishlistDrawer() {
    closeCartDrawer();
    closeMobileDrawer();
    el.wishlistOverlay.classList.add('active');
    el.wishlistDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlistDrawer() {
    el.wishlistOverlay.classList.remove('active');
    el.wishlistDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMobileDrawer() {
    el.mobileDrawerOverlay.classList.add('active');
    el.mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    el.mobileDrawerOverlay.classList.remove('active');
    el.mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 12. DEAL COUNTDOWN TIMER
  // =========================================================================
  function startDealCountdown() {
    // Initial 14h 35m 48s in seconds
    let totalSeconds = (14 * 3600) + (35 * 60) + 48;

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        totalSeconds = 86400; // Reset to 24 hours
      }

      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      el.cdHours.textContent = String(hrs).padStart(2, '0');
      el.cdMinutes.textContent = String(mins).padStart(2, '0');
      el.cdSeconds.textContent = String(secs).padStart(2, '0');
    }, 1000);
  }

  // =========================================================================
  // 13. NEWSLETTER REGEX VALIDATION & SUBMISSION
  // =========================================================================
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = el.newsletterEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      el.newsletterFeedback.className = 'newsletter-feedback error';
      el.newsletterFeedback.textContent = 'Please enter an email address.';
      return;
    }

    if (!emailRegex.test(email)) {
      el.newsletterFeedback.className = 'newsletter-feedback error';
      el.newsletterFeedback.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
      return;
    }

    if (State.newsletterSubscribed) {
      el.newsletterFeedback.className = 'newsletter-feedback success';
      el.newsletterFeedback.textContent = 'You are already subscribed! Use discount code WELCOME15 at checkout.';
      showToast('You are already subscribed to the Lumina Dispatch.', 'info');
      return;
    }

    State.newsletterSubscribed = true;
    localStorage.setItem('lumina_subscribed', 'true');
    el.newsletterEmail.value = '';
    el.newsletterFeedback.className = 'newsletter-feedback success';
    el.newsletterFeedback.innerHTML = `<i class="fa-solid fa-check"></i> Subscribed! Your exclusive code is <strong>WELCOME15</strong> (15% off).`;
    showToast('Subscribed to Lumina Dispatch! Check your email for $15 credit.', 'success');
  }

  // =========================================================================
  // 14. GLOBAL EVENT LISTENERS BINDING
  // =========================================================================
  function bindEventListeners() {
    
    // Header & Announcement Bar
    el.cartToggleBtn.addEventListener('click', openCartDrawer);
    el.wishlistToggleBtn.addEventListener('click', openWishlistDrawer);
    el.mobileMenuBtn.addEventListener('click', openMobileDrawer);
    el.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    el.mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

    el.copyPromoBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('WELCOME15').then(() => {
        showToast('Promo code "WELCOME15" copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Code: WELCOME15', 'info');
      });
    });

    // Drawers close
    el.cartCloseBtn.addEventListener('click', closeCartDrawer);
    el.cartOverlay.addEventListener('click', closeCartDrawer);
    el.wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
    el.wishlistOverlay.addEventListener('click', closeWishlistDrawer);

    // Modals close
    el.quickViewCloseBtn.addEventListener('click', closeQuickView);
    el.quickViewOverlay.addEventListener('click', closeQuickView);
    el.checkoutModalCloseBtn.addEventListener('click', closeCheckoutModal);
    el.checkoutModalOverlay.addEventListener('click', closeCheckoutModal);
    el.continueShoppingSuccessBtn.addEventListener('click', closeSuccessModal);
    el.orderSuccessOverlay.addEventListener('click', closeSuccessModal);

    // Desktop Nav Category Filtering
    el.desktopNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.dataset.category;
        const filter = link.dataset.filter;
        if (filter === 'sale') {
          State.filters.category = 'all';
          State.filters.onSaleOnly = true;
        } else if (cat) {
          State.filters.category = cat;
          State.filters.onSaleOnly = false;
        }
        syncFilterInputs();
        document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Mobile Nav Category Filtering
    el.mobileNavItems.forEach(item => {
      item.addEventListener('click', () => {
        const cat = item.dataset.category;
        const filter = item.dataset.filter;
        if (filter === 'sale') {
          State.filters.category = 'all';
          State.filters.onSaleOnly = true;
        } else if (cat) {
          State.filters.category = cat;
          State.filters.onSaleOnly = false;
        }
        syncFilterInputs();
        closeMobileDrawer();
        document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
      });
    });

    el.mobileOpenWishlist.addEventListener('click', () => {
      closeMobileDrawer();
      openWishlistDrawer();
    });

    el.mobileOpenCart.addEventListener('click', () => {
      closeMobileDrawer();
      openCartDrawer();
    });

    // Category Pills Strip
    el.catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        State.filters.category = pill.dataset.category;
        syncFilterInputs();
      });
    });

    // Sidebar Category Radios
    el.categoryRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        State.filters.category = e.target.value;
        syncFilterInputs();
      });
    });

    // Price Range Slider
    el.priceRangeInput.addEventListener('input', (e) => {
      State.filters.maxPrice = parseInt(e.target.value, 10);
      el.priceDisplay.textContent = `$${State.filters.maxPrice}`;
      renderProducts();
    });

    // Rating Filter Radios
    el.ratingRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        State.filters.minRating = parseFloat(e.target.value);
        renderProducts();
      });
    });

    // Checkbox Filters
    el.filterInStockOnly.addEventListener('change', (e) => {
      State.filters.inStockOnly = e.target.checked;
      renderProducts();
    });
    el.filterOnSaleOnly.addEventListener('change', (e) => {
      State.filters.onSaleOnly = e.target.checked;
      renderProducts();
    });
    el.filterFreeShippingOnly.addEventListener('change', (e) => {
      State.filters.freeShippingOnly = e.target.checked;
      renderProducts();
    });

    // Sort Dropdown
    el.sortSelect.addEventListener('change', (e) => {
      State.filters.sortBy = e.target.value;
      renderProducts();
    });

    // Reset Buttons
    el.resetFiltersBtn.addEventListener('click', resetAllFilters);
    el.emptyStateResetBtn.addEventListener('click', resetAllFilters);

    // Active Filter Chip Remove Delegation
    el.activeChipsContainer.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.chip-remove');
      if (!removeBtn) return;
      const type = removeBtn.dataset.chipType;
      if (type === 'category') State.filters.category = 'all';
      if (type === 'search') State.filters.searchQuery = '';
      if (type === 'price') State.filters.maxPrice = 500;
      if (type === 'rating') State.filters.minRating = 0;
      if (type === 'inStock') State.filters.inStockOnly = false;
      if (type === 'onSale') State.filters.onSaleOnly = false;
      if (type === 'freeShipping') State.filters.freeShippingOnly = false;
      syncFilterInputs();
    });

    // Live Search Handling
    el.searchInput.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });

    el.sidebarSearchInput.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });

    el.mobileSearchInput.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });

    el.searchClearBtn.addEventListener('click', () => {
      handleLiveSearch('');
      el.searchInput.focus();
    });

    // Search Dropdown Item Click
    el.searchResultsList.addEventListener('click', (e) => {
      const item = e.target.closest('.search-dropdown-item');
      if (!item) return;
      const id = parseInt(item.dataset.id, 10);
      el.searchDropdown.classList.remove('open');
      openQuickView(id);
    });

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#searchWrapper')) {
        el.searchDropdown.classList.remove('open');
      }
    });

    // Products Grid Click Delegation (Cart, Wishlist, Quick View)
    el.productsGrid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-action="add-to-cart"]');
      if (addBtn) {
        const id = parseInt(addBtn.dataset.id, 10);
        addToCart(id, 1);
        return;
      }

      const wishlistBtn = e.target.closest('[data-action="wishlist"]');
      if (wishlistBtn) {
        const id = parseInt(wishlistBtn.dataset.id, 10);
        toggleWishlist(id);
        return;
      }

      const quickViewBtn = e.target.closest('[data-action="quickview"]');
      if (quickViewBtn) {
        const id = parseInt(quickViewBtn.dataset.id, 10);
        openQuickView(id);
        return;
      }
    });

    // Hero CTAs
    el.heroShopNowBtn.addEventListener('click', () => {
      document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
    });

    el.heroFeaturedBtn.addEventListener('click', () => {
      State.filters.category = 'all';
      State.filters.onSaleOnly = true;
      syncFilterInputs();
      document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
    });

    el.heroPillQuickView.addEventListener('click', () => {
      openQuickView(1);
    });

    el.dealAddToCartBtn.addEventListener('click', () => {
      addToCart(2, 1);
    });

    // Cart Actions (Quantity Stepper & Remove)
    el.cartItemsList.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cart-action]');
      if (!btn) return;
      const action = btn.dataset.cartAction;
      const index = parseInt(btn.dataset.cartIndex, 10);

      if (action === 'inc') updateCartQuantity(index, 1);
      if (action === 'dec') updateCartQuantity(index, -1);
      if (action === 'remove') removeCartItem(index);
    });

    el.applyPromoBtn.addEventListener('click', () => {
      applyPromoCode(el.cartPromoInput.value);
    });

    el.clearCartBtn.addEventListener('click', clearCart);
    el.proceedCheckoutBtn.addEventListener('click', openCheckoutModal);
    el.cartStartShoppingBtn.addEventListener('click', () => {
      closeCartDrawer();
      document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
    });

    // Wishlist Item Actions
    el.wishlistItemsList.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-wishlist-action="add-cart"]');
      if (addBtn) {
        const id = parseInt(addBtn.dataset.id, 10);
        addToCart(id, 1);
        toggleWishlist(id); // remove from wishlist once added
        return;
      }

      const removeBtn = e.target.closest('[data-wishlist-action="remove"]');
      if (removeBtn) {
        const id = parseInt(removeBtn.dataset.id, 10);
        toggleWishlist(id);
        return;
      }
    });

    el.moveAllWishlistToCartBtn.addEventListener('click', () => {
      if (State.wishlist.length === 0) return;
      State.wishlist.forEach(id => addToCart(id, 1));
      State.wishlist = [];
      saveWishlist();
      closeWishlistDrawer();
      showToast('All wishlist items moved to cart!', 'success');
    });

    el.wishlistStartShoppingBtn.addEventListener('click', () => {
      closeWishlistDrawer();
      document.getElementById('storeSection').scrollIntoView({ behavior: 'smooth' });
    });

    // Checkout Form
    el.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Payment Method Radio Switcher
    const payMethodRadios = document.querySelectorAll('input[name="payMethod"]');
    payMethodRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.pay-method-option').forEach(opt => opt.classList.remove('selected'));
        radio.closest('.pay-method-option').classList.add('selected');
        const cardFields = document.getElementById('cardFields');
        if (radio.value === 'card') {
          cardFields.classList.remove('hidden');
        } else {
          cardFields.classList.add('hidden');
        }
      });
    });

    // Mobile Filter Sidebar Trigger
    el.mobileFilterTrigger.addEventListener('click', () => {
      el.filterSidebar.classList.toggle('mobile-open');
    });

    // Newsletter Form
    el.newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Scroll Header Shadow & Back to Top Button
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      el.mainHeader.classList.toggle('scrolled', scrollY > 20);
      el.backToTopBtn.classList.toggle('visible', scrollY > 400);
    });

    el.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Keyboard ESC to close all drawers & modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeWishlistDrawer();
        closeMobileDrawer();
        closeQuickView();
        closeCheckoutModal();
        closeSuccessModal();
      }
    });
  }

  // =========================================================================
  // 15. INITIALIZATION
  // =========================================================================
  function init() {
    updateCategoryCounts();
    syncFilterInputs();
    updateCartUI();
    updateWishlistUI();
    startDealCountdown();
    bindEventListeners();
  }

  init();
});

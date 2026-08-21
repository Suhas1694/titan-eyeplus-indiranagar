// Default fallback offers data in case fetch from local file fails (e.g. file:// protocol)
const defaultData = {
  "monthTitle": "Special Monthly Offers & Promotions",
  "storeInfo": {
    "name": "Titan Eye+ Flagship Store",
    "location": "100 Feet Road, Indiranagar, Bengaluru",
    "fullAddress": "777 E, 100 Feet Rd, opp. to New Horizon Public School, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
    "phone": "080 2521 2737",
    "phoneRaw": "+918025212737",
    "whatsapp": "918025212737",
    "googleRating": "4.9",
    "reviewCount": "3,300+",
    "timings": "10:00 AM – 9:30 PM (All 7 Days)",
    "googleMapsUrl": "https://maps.google.com/?q=Titan+Eye+Plus+777+E+100+Feet+Rd+Indiranagar+Bengaluru"
  },
  "offers": [
    {
      "id": "bogo-frames",
      "category": "eyeglasses",
      "badge": "FLAGSHIP SPECIAL",
      "title": "Buy 1 Get 1 Free on Branded Eyewear",
      "discount": "BUY 1 GET 1 FREE",
      "description": "Buy any branded frame or sunglasses and get the second pair absolutely FREE! Choose from over 1,500+ latest trendy designs.",
      "validity": "Valid for this month",
      "terms": "Applicable on select house and international brands. T&C apply.",
      "isFeatured": true,
      "icon": "glasses",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I want to avail the Buy 1 Get 1 Free offer on frames. Please share details."
    },
    {
      "id": "free-eye-test",
      "category": "services",
      "badge": "100% FREE",
      "title": "20-Step Zero-Error Eye Test",
      "discount": "WORTH ₹300 • FREE",
      "description": "Comprehensive 20-step computerized eye test by certified optometrists using Zeiss & Topcon technology. Complete vision health checkup.",
      "validity": "Free for all store visitors",
      "terms": "Takes 15 mins. Walk-ins welcome or pre-book for priority slot.",
      "isFeatured": true,
      "icon": "eye",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I would like to book a Free 20-Step Eye Test appointment."
    },
    {
      "id": "smart-eyex",
      "category": "smart",
      "badge": "TECH DEAL",
      "title": "Titan EyeX & Fastrack Vibes Smart Audio Frames",
      "discount": "FLAT 30% OFF",
      "description": "Bluetooth calling, open-ear stereo sound, touch controls, voice assistant & prescription lens compatibility in one sleek frame.",
      "validity": "Limited Stock",
      "terms": "Valid on Titan EyeX 2.0 and Fastrack Vibes audio sunglasses.",
      "isFeatured": true,
      "icon": "headphones",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I am interested in testing the Titan EyeX / Fastrack Vibes smart audio glasses."
    },
    {
      "id": "luxury-carnival",
      "category": "sunglasses",
      "badge": "BRAND CARNIVAL",
      "title": "Up to 40% Off on Ray-Ban, Vogue & Oakley",
      "discount": "UP TO 40% OFF",
      "description": "Exclusive flagship store discounts on 100% authentic Ray-Ban, Vogue Eyewear, Oakley, Maui Jim, Polaroid and Burberry collections.",
      "validity": "Valid this month",
      "terms": "100% genuine brand warranty card and original case included.",
      "isFeatured": false,
      "icon": "sparkles",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, please share catalog and offers on Ray-Ban and Vogue sunglasses."
    },
    {
      "id": "contact-lenses",
      "category": "contact-lenses",
      "badge": "COMBO SAVER",
      "title": "Contact Lenses: Buy 2 Boxes + Free Solution",
      "discount": "FREE ₹450 SOLUTION",
      "description": "Buy 2 monthly or daily disposable lens packs (Bausch + Lomb, Alcon Air Optix, or Acuvue) and get a 300ml multi-purpose solution bottle FREE.",
      "validity": "Ongoing Monthly Offer",
      "terms": "Free contact lens trial and fitting consultation included.",
      "isFeatured": false,
      "icon": "disc",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I need contact lenses (Bausch+Lomb/Alcon/Acuvue) with the free solution offer."
    },
    {
      "id": "free-service-repairs",
      "category": "services",
      "badge": "ALWAYS FREE",
      "title": "Free Specs Repair, Alignment & Ultrasonic Cleaning",
      "discount": "100% COMPLIMENTARY",
      "description": "Bring any spectacles (any brand) for deep ultrasonic cleaning, frame re-alignment, screw tightening, and silicone nose-pad replacement by master technician Murshid.",
      "validity": "Walk-in Anytime",
      "terms": "Instant service in under 10 minutes at our Indiranagar showroom.",
      "isFeatured": false,
      "icon": "wrench",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I need frame repair/alignment service at your store."
    },
    {
      "id": "prog-lens-upgrade",
      "category": "eyeglasses",
      "badge": "CLEAR VISION",
      "title": "Progressive Lenses: Free Blue-Cut & Anti-Glare Upgrade",
      "discount": "SAVE ₹1,500",
      "description": "Upgrade your progressive or bifocal lenses with free blue-light filter & anti-reflective coating for seamless digital screen comfort.",
      "validity": "Valid this month",
      "terms": "Available on Titan ClearSight and Crizal progressive ranges.",
      "isFeatured": false,
      "icon": "monitor",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I want to know more about Progressive Lenses with free blue-cut coating."
    },
    {
      "id": "corporate-student",
      "category": "eyeglasses",
      "badge": "SPECIAL PASS",
      "title": "Indiranagar Tech & Student Privilege: Extra 10% Off",
      "discount": "EXTRA 10% OFF",
      "description": "Working in Indiranagar/Domlur/HAL or a student? Flash your corporate badge or student ID to claim an extra 10% discount on total billing.",
      "validity": "Valid with valid ID card",
      "terms": "Can be clubbed with select existing frame discounts.",
      "isFeatured": false,
      "icon": "badge-percent",
      "whatsappMessage": "Hi Titan Eye+ Indiranagar, I would like to avail the Corporate/Student privilege discount."
    }
  ]
};

let storeData = defaultData;
let activeCategory = 'all';

// Initialize the app on DOM Load
document.addEventListener('DOMContentLoaded', async () => {
  // Set current year
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // Set default booking date to today/tomorrow
  const dateInput = document.getElementById('cust-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  // Load offers data from localStorage or offers.json
  await loadOffersData();

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Load Offers Data from offers.json or LocalStorage
async function loadOffersData() {
  const savedLocal = localStorage.getItem('titan_indiranagar_offers');
  if (savedLocal) {
    try {
      storeData = JSON.parse(savedLocal);
      console.log('Loaded offers from local storage cache');
      renderOffers();
      return;
    } catch (e) {
      console.warn('Failed to parse local storage offers, falling back to offers.json', e);
    }
  }

  try {
    const response = await fetch('offers.json');
    if (response.ok) {
      storeData = await response.json();
      console.log('Loaded offers from offers.json');
    } else {
      console.warn('offers.json not found, using bundled default offers');
      storeData = defaultData;
    }
  } catch (error) {
    console.warn('Network error fetching offers.json, using bundled defaults:', error);
    storeData = defaultData;
  }

  renderOffers();
}

// Render offers on the page
function renderOffers() {
  // Update Month Titles
  const monthTitle = storeData.monthTitle || 'Exclusive Monthly Deals';
  const heroMonthTag = document.getElementById('hero-month-tag');
  const monthBadgeDisplay = document.getElementById('month-badge-display');
  
  if (heroMonthTag) heroMonthTag.textContent = monthTitle;
  if (monthBadgeDisplay) monthBadgeDisplay.textContent = `Active Deals: ${monthTitle}`;

  // Update Category Count
  const allCount = storeData.offers ? storeData.offers.length : 0;
  const countAllElem = document.getElementById('count-all');
  if (countAllElem) countAllElem.textContent = allCount;

  // Filter offers based on active category
  const offersToDisplay = activeCategory === 'all' 
    ? storeData.offers 
    : storeData.offers.filter(o => o.category === activeCategory);

  const container = document.getElementById('offers-container');
  if (!container) return;

  if (!offersToDisplay || offersToDisplay.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-3xl border border-slate-200 p-8">
        <i data-lucide="info" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
        <h3 class="font-bold text-lg text-slate-800">No active offers in this category right now</h3>
        <p class="text-sm text-slate-500 mt-1">Please check back soon or browse all deals.</p>
        <button onclick="filterOffers('all')" class="mt-4 bg-titan-red text-white text-xs font-bold px-4 py-2 rounded-xl">View All Deals</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Generate HTML for each offer card
  container.innerHTML = offersToDisplay.map(offer => {
    const isFeatured = offer.isFeatured;
    const iconName = offer.icon || 'tag';
    const cleanWhatsappMsg = encodeURIComponent(offer.whatsappMessage || `Hi Titan Eye+ Indiranagar, I'm interested in the ${offer.title} offer.`);

    return `
      <div class="bg-white rounded-3xl p-6 sm:p-7 border ${isFeatured ? 'border-amber-300 ring-2 ring-amber-400/20 shadow-md' : 'border-slate-200/90 shadow-sm'} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
        
        <!-- Card Top Bar: Badge & Icon -->
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase ${isFeatured ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700'}">
              ${isFeatured ? '<i data-lucide="flame" class="w-3 h-3 text-amber-600 fill-amber-600"></i>' : ''}
              ${offer.badge || 'SPECIAL OFFER'}
            </span>

            <div class="w-10 h-10 rounded-2xl bg-titan-lightRed text-titan-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <i data-lucide="${iconName}" class="w-5 h-5"></i>
            </div>
          </div>

          <!-- Discount Title Pill -->
          <div class="mb-2">
            <span class="text-xs font-extrabold text-titan-red tracking-wide uppercase bg-red-50 px-2.5 py-0.5 rounded-md">
              ${offer.discount}
            </span>
          </div>

          <!-- Offer Title -->
          <h3 class="font-heading font-extrabold text-xl text-slate-900 leading-snug mb-2 group-hover:text-titan-red transition-colors">
            ${offer.title}
          </h3>

          <!-- Description -->
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
            ${offer.description}
          </p>
        </div>

        <!-- Card Footer Info & CTAs -->
        <div class="pt-4 border-t border-slate-100 space-y-3">
          
          <div class="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span class="flex items-center gap-1">
              <i data-lucide="clock" class="w-3 h-3 text-slate-400"></i>
              ${offer.validity || 'Valid this month'}
            </span>
            <span class="text-emerald-600 font-semibold">100 Feet Rd Branch</span>
          </div>

          <!-- Buttons -->
          <div class="grid grid-cols-2 gap-2 pt-1">
            <a href="https://wa.me/918025212737?text=${cleanWhatsappMsg}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>Claim on WA</span>
            </a>

            <button onclick="openVoucherModal('${offer.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 transition-colors">
              <i data-lucide="ticket" class="w-4 h-4 text-titan-red"></i>
              <span>Show Coupon</span>
            </button>
          </div>

        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Filter Offers by Category
function filterOffers(category) {
  activeCategory = category;
  
  // Update Tab buttons styling
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('bg-titan-red', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-titan-red', 'text-white', 'shadow-sm');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });

  renderOffers();
}

// Eye Test Booking Modal
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Handle Eye Test Booking Form Submission
function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const date = document.getElementById('cust-date').value;
  const time = document.getElementById('cust-time').value;
  const interest = document.getElementById('cust-interest').value;

  const msg = `*Appointment Request - Titan Eye+ Indiranagar*%0A%0A` +
    `👤 *Name:* ${encodeURIComponent(name)}%0A` +
    `📱 *Phone:* ${encodeURIComponent(phone)}%0A` +
    `📅 *Preferred Date:* ${encodeURIComponent(date)}%0A` +
    `⏰ *Preferred Slot:* ${encodeURIComponent(time)}%0A` +
    `🎯 *Looking For:* ${encodeURIComponent(interest)}%0A%0A` +
    `_Please confirm my Free 20-Step Eye Test appointment at the 100 Feet Rd flagship store._`;

  closeBookingModal();
  window.open(`https://wa.me/918025212737?text=${msg}`, '_blank');
}

// Coupon / Voucher Modal
function openVoucherModal(offerId) {
  const offer = storeData.offers.find(o => o.id === offerId);
  if (!offer) return;

  const modal = document.getElementById('voucher-modal');
  const title = document.getElementById('voucher-title');
  const desc = document.getElementById('voucher-desc');
  const badge = document.getElementById('voucher-badge');
  const code = document.getElementById('voucher-code');
  const waBtn = document.getElementById('voucher-whatsapp-btn');

  if (title) title.textContent = offer.title;
  if (desc) desc.textContent = offer.description;
  if (badge) badge.textContent = offer.badge || 'EXCLUSIVE DEAL';
  if (code) code.textContent = `TITAN-INDIRA-${offer.id.toUpperCase()}`;

  const cleanWhatsappMsg = encodeURIComponent(`Hi Titan Eye+ Indiranagar, I want to lock in coupon code TITAN-INDIRA-${offer.id.toUpperCase()} for: ${offer.title}`);
  if (waBtn) waBtn.href = `https://wa.me/918025212737?text=${cleanWhatsappMsg}`;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
}

function closeVoucherModal() {
  const modal = document.getElementById('voucher-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Monthly Offer Manager / Admin Modal
function openAdminModal() {
  const modal = document.getElementById('admin-modal');
  const monthInput = document.getElementById('admin-month-input');
  const jsonEditor = document.getElementById('admin-json-editor');

  if (monthInput) monthInput.value = storeData.monthTitle || 'Exclusive Monthly Deals';
  if (jsonEditor) jsonEditor.value = JSON.stringify(storeData, null, 2);

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
}

function closeAdminModal() {
  const modal = document.getElementById('admin-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveLocalOffers() {
  const monthInput = document.getElementById('admin-month-input').value.trim();
  const jsonEditor = document.getElementById('admin-json-editor').value;

  try {
    const parsed = JSON.parse(jsonEditor);
    if (monthInput) parsed.monthTitle = monthInput;
    
    storeData = parsed;
    localStorage.setItem('titan_indiranagar_offers', JSON.stringify(storeData));
    
    renderOffers();
    closeAdminModal();
    alert('✅ Updated offers preview loaded on the page successfully!');
  } catch (e) {
    alert('❌ Invalid JSON format! Please check commas and quotes in your editor.');
  }
}

function copyAdminJSON() {
  const monthInput = document.getElementById('admin-month-input').value.trim();
  const jsonEditor = document.getElementById('admin-json-editor').value;

  try {
    const parsed = JSON.parse(jsonEditor);
    if (monthInput) parsed.monthTitle = monthInput;
    const formatted = JSON.stringify(parsed, null, 2);

    navigator.clipboard.writeText(formatted).then(() => {
      const copyBtn = document.getElementById('copy-btn');
      if (copyBtn) {
        copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Copied to Clipboard!`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i> Copy Updated JSON`;
          if (window.lucide) lucide.createIcons();
        }, 2500);
      }
    });
  } catch (e) {
    alert('❌ Invalid JSON format! Please check the JSON code before copying.');
  }
}

function resetDefaultOffers() {
  if (confirm('Reset to default Titan Eye+ Indiranagar store offers?')) {
    localStorage.removeItem('titan_indiranagar_offers');
    storeData = defaultData;
    renderOffers();
    closeAdminModal();
    alert('Default offers restored.');
  }
}

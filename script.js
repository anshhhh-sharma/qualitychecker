
(function () {
  const issues = {
    'Meta Data': [],
    'Content':[],
    'Heading': [],
    'Image': [],
    'Link/Button': [],
    'Broken Link/Redirect':[],
    'Link in New Window': [],
    'URL Checks':[],
    'Form': [],
    'Video': [],
    'Color Contrast': [],
    'PDF': [],
     'Table': []
  };
  

  const issueImages = {
  // 'Meta Data': 'ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â·ÃƒÂ¯Ã‚Â¸Ã‚Â',
  // 'Content': 'ÃƒÂ¢Ã…â€œÃ‚ÂÃƒÂ¯Ã‚Â¸Ã‚Â',
  // 'Heading': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬â€Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¸Ã‚Â',
  // 'Image': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬â€œÃ‚Â¼ÃƒÂ¯Ã‚Â¸Ã‚Â',
  // 'Link/Button': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ‹Å“',
  // 'Broken Link/Redirect': 'ÃƒÂ¢Ã‚ÂÃ…â€™ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬â€',
  // 'Link in New Window': 'ÃƒÂ°Ã…Â¸Ã‚ÂªÃ…Â¸',
  // 'URL Checks': 'ÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â',
  // 'Form': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â',
  // 'Video': 'ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â¥',
  // 'Color Contrast': 'ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â¨',
  // 'Disclaimer/Copyright': 'Ãƒâ€šÃ‚Â©ÃƒÂ¯Ã‚Â¸Ã‚Â',
  // 'PDF': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Ëœ',
  // 'Table Accessibility': 'ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã… '
  'Meta Data': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/tag-icon.svg',
  'Content': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/pencil-icon.svg',
  'Heading': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/hierarchy-icon.svg',
  'Image': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/picture-icon.svg',
  'Link/Button': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/link-icon.svg',
  'Broken Link/Redirect': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/broken-link-icon.svg',
  'Link in New Window': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/new-window-icon.svg',
  'URL Checks': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/url-icon.svg',
  'Form': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/form-icon.svg',
  'Video': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/video-icon.svg',
  'Color Contrast': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/color-palette-icon.svg',
  //'Disclaimer/Copyright': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/copyright-icon.svg',
  'PDF': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/pdf-icon.svg',
  'Table': 'https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/table-icon.svg'
};

  const issueHelpText = {
    'Meta Data': 'Meta title should be language-specific and within character limits.',
    'Content':'Checks for body word count 500-2000 | Check for Thin content word count less than 200 words | Check for keyword count 1-2% of total content | check for page size and page load time'|'Ensure content, such as copyright year, is current.',
    'Heading': 'Ensure proper heading hierarchy (h1 -> h2 -> h3), no skipped levels, and only one <h1> per page.',
    'Image': 'All images should have descriptive alt text. Ensure image files are not broken.',
    'Link/Button': 'Avoid repeating hidden text, use descriptive labels, and provide context for generic links.',
    'Link in New Window': 'Checks if link is openining in new window',
    'URL Checks': 'Validates URL length, separator usage (-), protocol (http/https), and type (relative/absolute). | internal link count 2-5',
    'Form': 'All form inputs should have a descriptive <label> tag or an aria-label.',
    'Video': 'All video content should have a captions track for accessibility.',
    'Color Contrast': 'Text and background colors should have sufficient contrast for readability.',
   // 'Disclaimer/Copyright': 'Ensure content, such as copyright year, is current.',
    'PDF': 'PDF file names should be descriptive, lowercase, use dashes instead of spaces, and be under 40 characters.',
    'Table': 'Tables should have headings, avoid merged cells, and not contain empty or hyphen-only cells.',
    'Broken Link/Redirect':'Checks for broken links and briken links in redirect. Please it will only check internal links. All external pages will appear broken'
  };
  const businessCategoryMapping = [
  ["Meta Title (title tag)", "Page title not exceed more than 60 character limit and have updated 40 characters limit before the pipe (|) to get exact char. count from requester; should be unique", "Business"],
  ["Meta Description", "Meta Description not exceed more than 150-160 characters; should be unique", "Business"],
  ["Meta URL Length", "110-120 Characters Max; Use hyphens (-) to separate words", "Business"],
  ["Heading - H1 missing", "Each web page must have & only <h1> heading", "Publisher"],
  ["Heading Character Limit (H2-H6)", "50-70 Characters", "Business"],
  ["Broken Link", "The target URL returns a 4xx or 5xx status", "Publisher"],
  ["Broken Redirect URLs", "URL redirecting to another target URL returns a 4xx or 5xx status", "Publisher"],
  ["Broken Image", "An image is returning a 4xx status code", "Publisher"],
  ["Image", "Image Alt text missing", "Publisher"],
  ["Internal Links", "2-5 per Page (Min.)", "Business"],
  ["Link/Button Behaviour", "Any link should not open in new window", "Publisher"],
  ["Keyword Density ", "1-2% of Total Content", "Business"],
  ["Page Load Speed ", "Under 2.5 Seconds", "Publisher"],
  ["Total Page Size", "As per akamai page size should be max. 1MB elese it returns to 5XX", "Publisher"],
  ["Thin Content", "Less than 200 word count on the page", "Business"],
  ["Body Content Word Count", "500-2000 Words", "Business"],
  ["HTTP URLs", "HTTP, being unencrypted, leaves data vulnerable to eavesdropping and potential attacks", "Publisher"],
  ["Redirecting URLs", "Remove the redirected URL and use the final relative URL instead", "Publisher"],
  ["Absolute Internal URLs", "Please use relative internal URLs rather than absolute URLs", "Publisher"],
  ["Meta Data", "Browser title should be language specific", "Business"],
  ["Meta Data", "Browser title should be unique", "Business"],
  ["Meta Data", "Browser title should not exceed more than 65 character limit and have updated 45 characters limit before the pipe (|) to get exact char. count from requester", "Business"],
  ["Heading - H1 missing", "Each web page must have <h1> heading which is Level-1 heading at the start of the web page.", "Publisher"],
  ["Heading - H1 tag count", "Only one <h1> tag is allowed per page", "Publisher"],
  ["Heading - H1 char. Limit", "H1 char. Limit set upto 65 char. ", "Business"],
  ["Heading - Empty headings", "Headings from H1 to H6 should not be left empty.", "Publisher"],
  ["Heading ", "Heading structure should be followed. (break this issue as per scenario to scenario)", "Publisher"],
  ["Heading", "All text that looks like a heading is marked up as a heading instead marking as bold or strong.", "Publisher"],
  ["Heading", "All text that is marked up as a heading is really a conceptual section heading (do not add sentences in heading tags, use <p> tag for sentences)", "Publisher"],
  ["Link/Button Hidden text", "Link Title and Hidden text should not be repeated, As the screen reader will read the input twice. If link text is self explanatory then no need to add hidden text.", "Publisher"],
  ["Link/Button Hidden text", "Learn more, Read more - if hidden text empty for these type of links or buttons then It's better to provide a text alternative that can stand alone, clearly describing the destination or purpose of the link. ", "Publisher"],
  ["Link/Button", "All links and buttons should open in current window or same tab.", "Publisher"],
  ["Link/Button Hidden text", "Avoid Using URLs as Link Text. Long URLs can be confusing and difficult to read, especially for screen readers, instead, use a link text that represents the linkÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s destination", "Publisher"],
  ["Table", "Table header row is missing -  Always add a table header.", "Publisher"],
  ["Table", "Table Header should not be left empty", "Publisher"],
  ["Table", "Blank cells in table - Table cells should not be left empty instead add N/A with footnote.", "Publisher"],
  ["Table", "Avoid table cell merge (if too complex table structure, use alternate component instead of using tables)", "Publisher"],
  ["Bold <b> tag is not allowed", "Instead of <b> tag use <strong> tag, if any component not allow, then raise ITO by discussing with production leads.", "Publisher"],
  ["Page is zoomed upto 200%-400% (Responsive mode - starts from 400%)", "(Image and text) Ensures that content can be displayed without loss of information or functionality when the page is zoomed upto 400%.", "Publisher"],
  ["Page Content - Multiple Languages used", "Mixing different or multiple languages in the same page is not allowed", "Business"],
  ["Empty containers", "Some roles are designed to contain other roles. <div> or <ul><li> element has this type of role, but it doesn't contain any required-owned elements.", "Publisher"],
  ["Image", "Image Alt text wrongly added - Every meaningful image has alt with appropriate alternative text", "Business"],
  ["Image - Alt Text", "125 Characters Max limit should follow for image alt text", "Business"],
  ["Image - Title Text", "image title text is optional. Add only when it is necessary as per business requirement to showcase as tooltip for sighted users and should be different than alt text to avoid repetition.", "Business"],
  ["Image", "Link on Image Hidden Text - If Image alt text is added then hidden text should not be added, if required then it should be unique and should not get repeat with alt text", "Publisher"],
  ["Image", "Text on image - No go! In case of exception alt text or complete image description should be added", "Business"],
  ["Image", "Translated text is not present on images - Text translation on respective language pages. e.g., DE page should have DE text on visuals", "Business"],
  ["Image", "Broken images", "Publisher"],
  ["Image", "Animated images - No Gif animation allowed. ", "Publisher"],
  ["Video", "Video transcript file should be uploaded ", "Business"],
  ["Video", "Video transcript should match with video language and spoken words in every time frame", "Business"],
  ["Video", "Burned in videos - Open captions is prohibited always use close caption in videos in the form of text.", "Business"],
  ["Video", "Burned in videos - Open captions and closed captions should not overlap - add in exception list in required cases", "Publisher"],
  ["Audio", "Audio transcripts - Title and description should be added in audio file while uploading the file on DAM.", "Business"],
  ["Document files", "PDF Tagging should be done - checking whether PDF is tagged or not", "Business"],
  ["Document files", "PDF Tagging + PDF should be accessible till maturity index level up to 4", "Business"],
  ["Keyboard Testing", "Keyboard accessible - Check that the visual focus and logical order of clickable elements allow proper navigation throughout the page without using a mouse.", "Publisher"],
  ["Screen ReaderTesting ", "Narrator or NVDA tools should be used for conducting screen reader testing on desktops.", "Publisher"],
];
const initialPendingCount = 3; // or however many checks you have
let pendingChecks = [
  'Broken Link/Redirect',
  'PDF'
  // 'Content' // or 'Page Size' if that's your async check
];
// --- Exclude any elements that belong to the audit panel itself ---
const AUDIT_PANEL_SELECTOR = '#auditBalloon';
function isFromAuditPanel(el) {
  return !!el && el.closest(AUDIT_PANEL_SELECTOR) !== null;
}

// Query helper that returns elements NOT inside the audit panel
function $$(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter(el => !isFromAuditPanel(el));
}

  const criticalTypes = ['Heading', 'Link/Button', 'Image', 'Form'];
  let searchQuery = '', isMinimized = false;
  const sectionStates = {};
  let currentFilter = 'all'; // 'all', 'a11y', 'seo'

  const a11yTypes = ['Heading', 'Image', 'Link/Button','Form', 'Video', 'Color Contrast', 'Table'];
  const seoTypes = ['Meta Data', 'Heading', 'Content','URL Checks','Link in New Window','Broken Link/Redirect','Content'];
  const publisherTypes = ['Heading','Image','URL Checks','Broken Link/Redirect','Image','Link/Button', 'Table'/* add relevant types */];
  const businessTypes = ['Meta Data', 'Content','URL Checks','Heading','Image','Video','PDF' /* add relevant types */];
// Helper: detect which button is active (category vs owner)
const isCategoryFilter = f => ['a11y', 'seo', 'other'].includes((f || '').toLowerCase());
const isOwnerFilter    = f => ['publisher', 'business'].includes((f || '').toLowerCase());

// Map fallback owners 'A11y'/'SEO' (from resolveOwner) to the side who usually owns them
const normalizeOwnerForFilter = (o) => {
  if (!o) return 'Other';
  if (o === 'A11y') return 'Publisher'; // a11y remediation is operational (Publisher)
  if (o === 'SEO')  return 'Business';  // SEO is typically a Business responsibility
  return o; // 'Publisher' | 'Business' | 'Other'
};
  //goal is that clicking ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œA11yÃƒÂ¢Ã¢â€šÂ¬Ã‚Â shows only issues categorized as A11y even within a section that mixes A11y/SEO/Other items, add a small helper and filter items on the way out.
  const getCategoryForItem = (type, item) => {
  const c = (item?.category || '').toLowerCase();
  if (c) return c;                       // Prefer the per-item category
  if (a11yTypes.includes(type)) return 'a11y';  // Fallback to type bucket
  if (seoTypes.includes(type))  return 'seo';
  return 'other';
};
  function getBusinessCategory(type, message) {
  // Example mapping, adjust to your real mapping!
  if (type === 'Image') {
    if (message.includes('missing descriptive alt')) return 'Publisher';
    if (message.includes('broken')) return 'Business';
  }
  if (type === 'Disclaimer/Copyright') return 'Business';
  // ...add more rules as needed...
  return null;
}
// --- Owner classifier helpers ---

// Lightweight rules to infer owner from each itemÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s message/snippet.
// Extend or fine-tune as needed.
const ownerRules = {
  'Heading': [
    [/no\s*<h1>|missing\s*h1/i, 'Publisher'],
    [/multiple .*h1|only one\s*<h1>/i, 'Publisher'],
    [/exceeds\s*60\s*characters/i, 'Business'],
    [/empty\s*<h[1-6]>/i, 'Publisher'],
    [/improper heading order|skipped/i, 'Publisher']
  ],
  'Image': [
    [/missing.*alt/i, 'Business'],
    [/appears to be broken|broken image/i, 'Publisher'],
    [/gif images detected/i, 'Publisher'],
    [/125\s*characters.*alt/i, 'Business'],
  ],
  'URL Checks': [
    [/internal link uses absolute/i, 'Publisher'],
    [/uses unencrypted http/i, 'Publisher'],
    [/less than 2 internal links|more than 5 internal links/i, 'Business'],
    [/page url exceeds|page url is less|does not use hyphens/i, 'Business'],
  ],
  'Content': [
    [/page load time.*under 2\.5/i, 'Publisher'],
    [/page size.*1MB/i, 'Publisher'],
    [/thin content|less than 200 words/i, 'Business'],
    [/body content word count.*out of range/i, 'Business'],
    [/keyword .* density/i, 'Business']
  ],
  'Link/Button': [
    [/no visible or hidden text|generic link\/button|duplicate link text|hidden span text/i, 'Publisher']
  ],
  'Link in New Window': [
    [/opens in a new window|target="_blank"/i, 'Publisher']
  ],
  'PDF': [
    [/invalid pdf file name/i, 'Publisher'],
    [/does NOT appear to be tagged|missing title|missing language|missing description|bookmark|alternative text/i, 'Business'],
    [/could not check pdf properties/i, 'Publisher']
  ],
  'Video': [
    [/no captions|transcript.*missing/i,'Business'],
    [/autoplaying without controls|lacks controls/i,'Publisher']
  ],
  'Table': [
    [/missing header cells|header row is missing/i, 'Publisher'],
    [/merged rows|merged columns|contains only a hyphen|empty|blank cells/i, 'Publisher']
  ]
};

// Compute owner of a specific issue item.
// Priority: explicit item.owner (if you ever add it) -> message/regex rules -> main-type fallback.
function resolveOwner(type, item) {
  if (item && item.owner) return item.owner; // future-proofing

  const rules = ownerRules[type] || [];
  const hay = `${item?.message || ''} ${item?.snippet || ''}`;
  for (const [re, who] of rules) {
    if (re.test(hay)) return who;
  }

  // Fallback to your existing type buckets:
  if (publisherTypes.includes(type)) return 'Publisher';
  if (businessTypes.includes(type)) return 'Business';
  if (a11yTypes.includes(type)) return 'A11y';
  if (seoTypes.includes(type)) return 'SEO';
  return 'Other';
}

  /**
 * Formats and returns a string of CSS styles for UI buttons.
- Inputs: color (string) - optional button background color.
- Outputs: CSS string for inline styling.
- Dependencies: None.
 */
function buttonStyle(color = '#0078D4') {
    return `margin: 3px 5px 3px 0px; padding: 5px; border:none;background:${color}; color:#fff; border-radius:3px; cursor:pointer; font-size: 13px`
  }

  /**
 * Highlights a DOM element visually for user inspection.
- Inputs: el (HTMLElement) - element to highlight.
- Outputs: None (manipulates DOM styles).
- Dependencies: isVisible(), document DOM API.
 */
/**
 * Opens any collapsed ancestors of the given element so it becomes visible.
 * Handles accordions, newdropdown/linklist, tab panels, and <details>.
 */
function isCollapsed(el) {
  if (!el) return false;
  const style = getComputedStyle(el);

  // Component-specific collapsed states
  const isVerticalShrinkCollapsed =
    el.classList.contains('verticalshrink__base') &&
    !el.classList.contains('verticalshrink__base--expanded');

  // Generic collapsed/hidden checks
  const ariaHidden = el.getAttribute('aria-hidden') === 'true';
  const displayNone = style.display === 'none';
  const visibilityHidden = style.visibility === 'hidden';
  const heightZero = style.height === '0px' || style.maxHeight === '0px';

  return (
    ariaHidden ||
    displayNone ||
    visibilityHidden ||
    heightZero ||
    isVerticalShrinkCollapsed
  );
}

function clickAllTogglersFor(id) {
  if (!id) return false;
  let didClick = false;
  // Common patterns: aria-controls / data-controls / data-target="#id"
  const selectors = [
    `[aria-controls="${id}"]`,
    `[data-controls="${id}"]`,
    `[data-target="#${id}"]`,
    // Specific components (ensure we don't miss local buttons)
    `.newdropdown__button[aria-controls="${id}"]`,
    `.accordion__split[aria-controls="${id}"]`,
    `[role="tab"][aria-controls="${id}"]`,
  ];
  const togglers = document.querySelectorAll(selectors.join(','));
  togglers.forEach((btn) => {
    const expanded = btn.getAttribute('aria-expanded');
    // If the control claims it's not expanded, or has no explicit state, click it.
    if (expanded === 'false' || expanded === null) {
      btn.click();
      didClick = true;
    }
    // For tabs, prefer clicking even if aria-selected is currently false
    const role = btn.getAttribute('role');
    if (role === 'tab' && btn.getAttribute('aria-selected') !== 'true') {
      btn.click();
      didClick = true;
    }
  });
  return didClick;
}

function openParentContainers(element) {
  let el = element;
  const seen = new Set();

  while (el && el !== document.body) {
    if (seen.has(el)) break;
    seen.add(el);

    // 1) Expand <details>
    if (el.tagName === 'DETAILS' && !el.open) {
      el.open = true;
    }

    // 2) Component-specific buckets

    // Accordion (existing behavior kept)
    if (el.classList && el.classList.contains('accordion__contentWrapper')) {
      const contentId = el.id;
      if (el.getAttribute('aria-hidden') === 'true') {
        clickAllTogglersFor(contentId);
      }
    }

    // New dropdown / linklist (your HTML sample uses these classes)
    // <ul id="dropdown--XYZ" class="newdropdown__list ... verticalshrink__base ...">
    if (el.classList && el.classList.contains('newdropdown__list')) {
      const listId = el.id;
      if (isCollapsed(el)) {
        clickAllTogglersFor(listId); // clicks .newdropdown__button[aria-controls=listId]
      }
    }

    // Generic ARIA-controlled regions (including tab panels)
    // If the ancestor has an id and looks collapsed, try clicking any controller.
    if (isCollapsed(el) && el.id) {
      clickAllTogglersFor(el.id);
    }

    // Tab panels (role="tabpanel")
    if (el.getAttribute && el.getAttribute('role') === 'tabpanel') {
      const panelId = el.id;
      const isHidden = el.getAttribute('aria-hidden') === 'true' || isCollapsed(el);
      if (isHidden) {
        clickAllTogglersFor(panelId); // clicks corresponding [role="tab"][aria-controls=panelId]
      }
    }

    el = el.parentElement;
  }
}
/**
 * Wait until the element becomes visible (or timeout).
 * Returns true if visible within the timeout, else false.
 */
function waitUntilVisible(el, timeout = 2000) {
  const start = performance.now();
  return new Promise((resolve) => {
    function tick() {
      if (isVisible(el)) return resolve(true);
      if (performance.now() - start > timeout) return resolve(false);
      requestAnimationFrame(tick);
    }
    tick();
  });
}


async function highlight(el) {
  openParentContainers(el);
  const becameVisible = await waitUntilVisible(el, 2000);

  // Clear previous highlights
  document.querySelectorAll('[data-audit-highlighted]').forEach((h) => {
    h.style.outline = '';
    h.removeAttribute('data-audit-highlighted');
  });

  if (becameVisible && isVisible(el)) {
    el.style.outline = '4px solid red';
    el.setAttribute('data-audit-highlighted', 'true');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    // Fallback overlay if still not visible (unchanged from your logic)
    const rect = el.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.style = `position: fixed; top: ${rect.top}px; left: ${rect.left}px; width: ${rect.width}px; height: ${rect.height}px; background: red; opacity: 0.5; z-index: 10000; transition: all 0.5s;`;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 2000);
  }

  const auditPanel = document.getElementById('auditBalloon');
  if (auditPanel) {
    auditPanel.style.opacity = '0.4';
    auditPanel.onmouseenter = () => { auditPanel.style.opacity = '1'; };
  }
}



  /**
 * Determines if an element is visible in the DOM.
- Inputs: el (HTMLElement)
- Outputs: Boolean (true if visible).
- Dependencies: DOM API, getComputedStyle.
 */
function isVisible(el) {
  if (isFromAuditPanel(el)) return false; // Globally ignore panel elements
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
         && getComputedStyle(el).visibility !== 'hidden';
}

  // --- helper: detect if an element is inside the audit panel ---
function isInsideAuditPanel(el) {
  // Exclude anything rendered inside the Audit Result panel
  return !!(el && el.closest && el.closest('#auditBalloon'));
}

  /**
 * Calculates perceived luminance of an RGB color.
- Inputs: r, g, b (0-255 integers)
- Outputs: Float (luminance ratio).
- Dependencies: None.
 */
function getTextLuminance(r, g, b) {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }

  /**
 * Extracts RGB values from a CSS color string.
- Inputs: color (string, e.g., 'rgb(255, 255, 255)')
- Outputs: List of three integers [R,G,B].
- Dependencies: DOM API to parse color.
 */
function getColorValues(color) {
    if (color === 'rgba(0, 0, 0, 0)') return [255, 255, 255];
    const el = document.createElement('div');
    el.style.color = color;
    document.body.appendChild(el);
    const style = getComputedStyle(el);
    const rgb = style.color.match(/\d+/g);
    document.body.removeChild(el);
    return rgb ? rgb.map(Number) : null;
  }
// --- helpers: choose best preview URL for an <img> ---
function getImageSrc(img) {
  if (!img) return '';
  const candidates = [
    img.currentSrc,
    ...(img.srcset ? img.srcset.split(',').map(s => s.trim().split(' ')[0]) : []),
    img.getAttribute('data-src'),
    img.getAttribute('data-lazy'),
    img.getAttribute('data-original'),
    img.src
  ].filter(Boolean);

  // Prefer absolute URLs if available
  const absolute = candidates.find(u => /^https?:\/\//i.test(u));
  return absolute || candidates[0] || '';
}

// Returns [thumbUrlOrText, kind] where kind ÃƒÂ¢Ã‹â€ Ã‹â€  {'image','text','none'}
function getIssueThumbnail(type, el) {
  const tn = (type || '').toLowerCase();
  if (tn === 'image' && el && el.tagName?.toLowerCase() === 'img') {
    return [getImageSrc(el), 'image'];
  }
  if ((tn === 'link/button accessibility' || tn === 'link in new window') && el) {
    const text =
      (el.textContent || '').trim() ||
      el.getAttribute?.('aria-label') ||
      (el.getAttribute?.('aria-labelledby') &&
       (document.getElementById(el.getAttribute('aria-labelledby'))?.textContent || '').trim()) ||
      el.getAttribute?.('title') ||
      (el.tagName?.toLowerCase() === 'a' ? (el.getAttribute('href') || '') : '');
    return [text, 'text'];
  }
  return ['', 'none'];
}
  /**
 * Main entry point for running all audit checks.
- Inputs: None
- Outputs: Populates global `issues` object with found problems.
- Dependencies: All individual check*() functions.
 */
async function runAudit() { // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ CHANGED: Made the main audit function async
    
    Object.keys(issues).forEach(key => issues[key] = []);

    /**
 * Validates HTML <title> <description> and <html lang> attributes.
- Inputs: None
- Outputs: Adds SEO-related issues to `issues['Meta Data']`.
 */
function checkMetaDescription() {
  const metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    issues['Meta Data'].push({
      message: "Meta description tag is missing.",
      severity: "warning",
      category: 'SEO'
    });
    return;
  }
  const desc = metaDesc.getAttribute('content') || '';
  if (desc.length > 160) {
    issues['Meta Data'].push({
      message: `Meta description exceeds 160 characters (${desc.length}).`,
      severity: "warning",
      category: 'SEO'
    });
  } else if (desc.length > 150) {
    issues['Meta Data'].push({
      message: `Meta description is longer than 150 characters (${desc.length}).`,
      severity: "warning",
      category: 'SEO'
    });
  }
}

const checkMetaTitle = () => {
      const htmlLang = document.documentElement.lang;
      const title = document.title;
      if (!htmlLang || htmlLang.length < 2) {
        issues['Meta Data'].push({ message: "Page language not declared in <html lang='...'>", severity: "critical",category: 'A11y' });
      }
      if (htmlLang === "de" && !title.match(/(Willkommen|Startseite)/i)) {
        issues['Meta Data'].push({ message: "Title may not be language-specific for German page", severity: "warning",category: 'A11y' });
      }
      if (title.length > 65) {
        issues['Meta Data'].push({ message: `Title exceeds 65 characters (${title.length})<br><strong>${title}</strong>`, severity: "warning",category: 'SEO' });
      }
      const pipeIndex = title.indexOf('|');
if (pipeIndex > -1) {
  const beforePipe = title.substring(0, pipeIndex).trim();
  if (beforePipe.length > 45) {
    issues['Meta Data'].push({
      message: `Title before pipe (|) exceeds 45 characters (${beforePipe.length})<br><strong>${beforePipe}</strong>`,
      severity: "warning", category: 'A11y'
    });
  }
}

    };

window.addEventListener('message', (e) => {
  try {
    if (e && e.data && e.data.__auditHighlightSelector) {
      const sel = e.data.__auditHighlightSelector;
      const el = document.querySelector(sel);
      if (el) {
        if (typeof highlight === 'function') {
          highlight(el);
        } else {
          el.style.outline = '4px solid red';
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        console.warn('Audit highlight: selector not found', sel);
      }
    }
  } catch (err) {
    console.error('Error handling audit report message', err);
  }
});

    /**
 * Validates heading structure for accessibility and SEO compliance.
- Inputs: None
- Outputs: Adds heading structure issues to `issues['Heading']`.
 */
const checkHeadings = () => {
  const h1Tags = $$("h1");

  if (h1Tags.length === 0) {
    issues['Heading'].push({
      message: "<h1>No h1 tag found on the page.</h1>",
      severity: "critical",
      category: 'SEO'
    });
  }

  const visibleH1s = Array.from(h1Tags).filter(h1 => isVisible(h1));

  if (visibleH1s.length > 1) {
    visibleH1s.forEach((h1, index) => {
      issues['Heading'].push({
        message: `Multiple visible h1 <h1> tags found. Visible <h1> tag #${index + 1}: "${h1.textContent.trim()}"`,
        severity: "critical",
        category: 'SEO',
        element: h1,
        snippet: h1.outerHTML
      });
    });
  }

  visibleH1s.forEach(h1 => {
    const h1Text = h1.textContent.trim();
    if (h1Text.length > 70) {
      issues['Heading'].push({
        message: `<h1> exceeds 70 characters (${h1Text.length})`,
        severity: "warning",
        category: 'SEO',
        element: h1,
        snippet: h1Text
      });
    }
  });

const headings = $$('h2, h3, h4, h5, h6');
  const visibleHeadings = Array.from(headings).filter(h => isVisible(h));
  let lastLevel = 0;

  visibleHeadings.forEach(heading => {
    const text = heading.textContent.trim();
    if (!heading.textContent.trim()) {
      issues['Heading'].push({
        message: `Empty <${heading.tagName.toLowerCase()}> tag found`,
        severity: "critical",
         category: 'A11y',
        element: heading,
        snippet: heading.outerHTML
      });
    }
    if (text.length > 70) {
    issues['Heading'].push({
      message: `<${heading.tagName.toLowerCase()}> exceeds 60 characters (${text.length})`,
      severity: "warning",
       category: 'SEO',
      element: heading,
      snippet: text
    });
  }
    
        const level = parseInt(heading.tagName.substring(1));
    if (lastLevel !== 0 && level > lastLevel + 1) {
      issues['Heading'].push({
        message: `Improper heading order: <h${lastLevel}> is followed by <h${level}>`,
        severity: "critical",
         category: 'A11y',
        element: heading,
        snippet: heading.outerHTML
      });
    }

    lastLevel = level;
  });
};


    /**
 * Checks images for alt text a
 * nd broken sources.
- Inputs: None
- Outputs: Adds to `issues['Image']`.
 */
const checkImageAccessibility = () => {const gifImages = [];
document.querySelectorAll('img').forEach(img => {
  // Skip images/icons that belong to the audit panel UI
    if (isInsideAuditPanel(img)) return;
    // Extra guard: skip the thumbnail previews rendered by the panel itself
    if (img.closest('.issue-thumb')) return;
    const altText = img.getAttribute('alt');
    if (isVisible(img) && (altText === null || altText.trim() === '')) {
        issues['Image'].push({
            message: `Image is missing descriptive alt text.`,
            severity: "critical",
            category: 'A11y',
            element: img,
            snippet: img.outerHTML
        });
    }
    if (img.naturalWidth === 0 && img.naturalHeight === 0 && isVisible(img)) {
        issues['Image'].push({
            message: `Image appears to be broken.`,
            severity: "critical",
            category: 'SEO',
            element: img,
            snippet: img.outerHTML
        });
    }
    // --- GIF check ---
    if (img.src && img.src.toLowerCase().endsWith('.gif')) {
        gifImages.push(img);
    }
});

// After the loop, add a warning if any GIFs found
if (gifImages.length > 0) {
    issues['Image'].push({
        message: `GIF images detected on the page (${gifImages.length} found). GIFs are discouraged for accessibility and performance reasons.`,
        severity: "warning",
        category: 'A11y',
        element: gifImages[0], // Optionally reference the first GIF image
        snippet: gifImages.map(img => img.src).join(', ')
    });
}}
      
    /** Table check CSS */
(function () {
  // Inject CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .highlight-cell {
      outline: 2px solid red !important;
      background-color: #ffe6e6 !important;
      position: relative !important;
      z-index: 10;
      cursor: help;
    }

    .highlight-table {
      outline: 3px dashed orange !important;
    }

    .highlight-cell::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 100%;
      left: 0;
      background-color: #333;
      color: #fff;
      padding: 6px 8px;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-5px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      z-index: 1000;
    }

    .highlight-cell:hover::after {
      opacity: 1;
      transform: translateY(-10px);
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
    }

    .highlight-pulse {
      animation: pulse 1s ease-out;
    }
  `;
  document.head.appendChild(style);
  /** Table check CSS end */
window.highlightAllTableIssues = function () {
  const issueList = issues['Table'] || [];
  issueList.forEach(issue => {
    const el = issue.element;
    if (el) {
      el.classList.add('highlight-cell', 'highlight-pulse');
      setTimeout(() => {
        el.classList.remove('highlight-pulse');
      }, 1000);
    }
  });
  // Optionally scroll to the first issue
  if (issueList.length > 0 && issueList[0].element) {
    issueList[0].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

  // Accessibility checker function
  function checkTableAccessibility(config = { showTooltips: true }) {
    if (!window.issues) window.issues = {};
    if (!issues['Table']) issues['Table'] = [];

    let issueCounter = 0;

    document.querySelectorAll('table').forEach(table => {
      const tableStyle = window.getComputedStyle(table);
      if (tableStyle.display === 'none' || tableStyle.visibility === 'hidden') return;

      const headers = table.querySelectorAll('th');
      if (headers.length === 0) {
        const tableId = `table-issue-${issueCounter++}`;
        table.setAttribute('data-accessibility-id', tableId);

        issues['Table'].push({
          message: 'Table is missing header cells (<th>).',
          severity: 'critical',
          category: 'A11y',
          element: table,
          elementId: tableId,
          snippet: table.outerHTML
        });
      }

      table.querySelectorAll('td, th').forEach(cell => {
        const style = window.getComputedStyle(cell);
        if (style.display === 'none' || style.visibility === 'hidden') return;

        const cellType = cell.tagName.toLowerCase();
        const rawHTML = cell.innerHTML || '';
        const rawText = cell.textContent || '';
        const cleanedText = rawText.replace(/\u00a0/g, '').trim();
        const isMeaningless = cleanedText === '' || /^(&nbsp;|\s)*$/.test(rawHTML);

        const addIssue = (message, severity) => {
          const cellId = `cell-issue-${issueCounter++}`;
          cell.setAttribute('data-accessibility-id', cellId);
          if (config.showTooltips) {
            cell.setAttribute('data-tooltip', message);
          }

          issues['Table'].push({
            message,
            severity,
            category: 'A11y',
            element: cell,
            elementId: cellId,
            snippet: cell.outerHTML
          });
        };

        if (cell.hasAttribute('rowspan') && parseInt(cell.getAttribute('rowspan'), 10) > 1) {
          addIssue(`${cellType.toUpperCase()} cell has merged rows (rowspan > 1).`, 'warning');
        }

        if (cell.hasAttribute('colspan') && parseInt(cell.getAttribute('colspan'), 10) > 1) {
          addIssue(`${cellType.toUpperCase()} cell has merged columns (colspan > 1).`, 'warning');
        }

        if (cleanedText === '-') {
          addIssue(`${cellType.toUpperCase()} cell contains only a hyphen (-), which may not be meaningful.`, 'warning');
        }

        if (isMeaningless) {
          const msg = cellType === 'th'
            ? 'Header cell (<th>) is empty or contains only non-breaking space.'
            : 'Data cell (<td>) is empty or contains only non-breaking space.';
          addIssue(msg, 'warning');
        }
      });
    });
  }

  // Highlight and scroll to issue on click
  window.highlightIssueById = function (issueId) {
    const el = document.querySelector(`[data-accessibility-id="${issueId}"]`);
    if (el) {
      el.classList.add('highlight-cell', 'highlight-pulse');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        el.classList.remove('highlight-pulse');
      }, 1000);
    }
  };

  // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ NEW: Highlight all issues for a specific table
  window.highlightIssuesForTable = function (tableId) {
    const issueList = issues['Table'] || [];
    const relatedIssues = issueList.filter(issue => {
      const el = issue.element;
      return el.closest('table')?.getAttribute('data-accessibility-id') === tableId;
    });

    relatedIssues.forEach(issue => {
      const el = issue.element;
      if (el) {
        el.classList.add('highlight-cell', 'highlight-pulse');
        setTimeout(() => {
          el.classList.remove('highlight-pulse');
        }, 1000);
      }
    });

    if (relatedIssues.length > 0) {
      relatedIssues[0].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Expose the checker
  window.checkTableAccessibility = checkTableAccessibility;
})();

/** Table function end */
/**Link open in New Window */
/** Link open in New Window */
const checkLinksOpenInNewWindow = () => {
  $$('a[target="_blank"]').forEach(link => {
    const text = (link.textContent || '').trim();
    issues['Link in New Window'].push({
      message: `Link "${text}" opens in a new window/tab (target="_blank").`,
      severity: "warning", // <-- fixed: all lowercase
      category: "SEO",
      element: link,
      snippet: link.outerHTML
    });
  });
};

/** Link open New Window Ends */
    /**
 * Checks that links/buttons have descriptive text and no duplication.
- Inputs: None
- Outputs: Adds to `issues['Link/Button']`.
 */

const checkLinksAndButtons = () => {
  const genericLabels = ['learn more', 'read more', 'click here'];
  $$('a, button').forEach(el => {
    const text = (el.textContent || '').trim();

    if (!text && !el.hasAttribute('aria-label') && !el.hasAttribute('aria-labelledby')) {
      issues['Link/Button'].push({
        message: `${el.tagName.toLowerCase()} "${text}" has no visible or hidden text.`,
        severity: "critical",
        category:"A11y",
        element: el,
        snippet: el.outerHTML
      });
    }

    if (genericLabels.includes(text.toLowerCase()) && !el.hasAttribute('aria-label') && !el.hasAttribute('aria-labelledby')) {
      issues['Link/Button'].push({
        message: `Generic link/button "${text}" lacks sufficient context.`,
        severity: "warning",
        category:"A11y",
        element: el,
        snippet: el.outerHTML
      });
    }

    if (el.tagName.toLowerCase() === 'a' && /^https?:\/\//.test(text)) {
      issues['Link/Button'].push({
        message: `Link "${text}" uses raw URL as text.`,
        severity: "warning",
        category:"A11y",
        element: el,
        snippet: el.outerHTML
      });
    }

    // New check for hidden visually hidden span text duplication or empty
    const hiddenSpan = el.querySelector('span.hidden.is-visuallyHidden');
    if (hiddenSpan) {
      const hiddenText = (hiddenSpan.textContent || '').trim();
      if (hiddenText === '' || hiddenText.toLowerCase() === text.toLowerCase()) {
        issues['Link/Button'].push({
          message: `Hidden span text is empty or duplicates visible text for ${el.tagName.toLowerCase()} "${text}".`,
          severity: "warning",
          category:"A11y",
          element: el,
          snippet: el.outerHTML
        });
      }
    }
  });

  const linkTexts = new Map();
 $$('a').forEach(link => {
    const text = (link.textContent || '').trim();
    if (!text) return;
    const href = link.href.replace(/\/$/, '');
    const key = `${text.toLowerCase()}-${href}`;
    if (!linkTexts.has(key)) {
      linkTexts.set(key, []);
    }
    linkTexts.get(key).push(link);
  });

  for (const [key, elements] of linkTexts.entries()) {
    if (elements.length > 1) {
      const text = elements[0].textContent.trim();
      issues['Link/Button'].push({
        message: `Duplicate link text found: "${text}" (${elements.length} instances).`,
        severity: "warning",
        category:"A11y",
        element: elements[0],
        snippet: elements[0].outerHTML
      });
    }
  }
};

//Check for Broken links and Redirect links 




function addUniqueIssue(type, issue) {
  const selector = issue.selector || (issue.element ? getCssSelector(issue.element) : '');
  const exists = issues[type].some(item =>
    (item.selector || (item.element ? getCssSelector(item.element) : '')) === selector &&
    item.message === issue.message
  );
  if (!exists) {
    issues[type].push({ ...issue, selector });
  }
}

async function checkBrokenAndRedirectLinks() {
  const links = $$('a[href]');
  for (const link of links) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('javascript:') || href === '#' || href.trim() === '') {
      continue;
    }

    try {
      const absoluteHref = link.href;
      const response = await fetch(absoluteHref, { method: 'HEAD', redirect: 'follow' });

      if (!response.ok) {
        // Broken link (400/500)
        addUniqueIssue('Broken Link/Redirect', {
          message: `Broken link: "${absoluteHref}" (Status: ${response.status})`,
          severity: "critical",
          category: "SEO",
          element: link,
          snippet: link.outerHTML,
          status: response.status
        });
      } else if (response.url !== absoluteHref) {
        // Redirect detected
        if (!response.ok) {
          addUniqueIssue('Broken Link/Redirect', {
            message: `Link "${absoluteHref}" redirects to a broken destination: "${response.url}" (Status: ${response.status})`,
            severity: "critical",
            category: "SEO",
            element: link,
            snippet: link.outerHTML,
            status: response.status
          });
        } else {
          addUniqueIssue('Broken Link/Redirect', {
            message: `Link "${absoluteHref}" redirects to "${response.url}" (Status: ${response.status})`,
            severity: "warning",
            category: "SEO",
            element: link,
            snippet: link.outerHTML,
            status: response.status // <-- FIXED typo here!
          });
        }
      } else {
        // OK link
        addUniqueIssue('Broken Link/Redirect', {
          message: `Link "${absoluteHref}" is OK (Status: ${response.status})`,
          severity: "warning",
          category: "SEO",
          element: link,
          snippet: link.outerHTML,
          status: response.status
        });
      }
    } catch (err) {
      addUniqueIssue('Broken Link/Redirect', {
        message: `Error checking link: "${link.href}" (${err.message})`,
        severity: "critical",
        category: "SEO",
        element: link,
        snippet: link.outerHTML,
        status: null // Not fetched
      });
    }
  }

  // SORTING CODE
  issues['Broken Link/Redirect'].sort((a, b) => {
    function getPriority(issue) {
      // Ensure status is a number
      let status = issue.status;
      if (status === null || status === undefined) return 3; // Not fetched
      if (typeof status === 'string') status = parseInt(status, 10);
      if (status >= 400 && status < 600) return 0; // Broken
      if (status === 200) return 1; // OK
      return 2; // Other (redirects, etc.)
    }
    const prioA = getPriority(a);
    const prioB = getPriority(b);
    if (prioA !== prioB) return prioA - prioB;
    // For broken links, show higher status first (e.g., 500 before 404)
    if (prioA === 0) return b.status - a.status;
    return 0;
  });
}
//Check for Broken links and Redirect links end

    /**
 * Ensures form fields have associated labels.
- Inputs: None
- Outputs: Adds to `issues['Form']`.
 */
const checkFormAccessibility = () => {
      document.querySelectorAll('input, textarea, select').forEach(input => {
        const hasAriaLabel = input.hasAttribute('aria-label') || input.hasAttribute('aria-labelledby');
        const hasVisibleLabel = input.id && document.querySelector(`label[for="${input.id}"]`);

        if (!hasAriaLabel && !hasVisibleLabel) {
          issues['Form'].push({ message: `Form field is missing a descriptive label.`, severity: "critical", category:"A11y", element: input, snippet: input.outerHTML });
        }
      });
    };

    /**
 * Checks video elements for caption tracks.
- Inputs: None
- Outputs: Adds to `issues['Video']`.
 */
// Function to check videos and add issues with thumbnail info
const checkVideosAccessibilityAndSEO = () => {
  document.querySelectorAll('video').forEach(video => {
    const issuesForVideo = [];
    const videoTitle = video.getAttribute('title') || video.getAttribute('aria-label') || '';
    const videoId = video.id || '';

    // Check for captions/subtitles
    const hasCaptions = [...video.querySelectorAll('track')].some(track =>
      ['captions', 'subtitles'].includes(track.kind)
    );
    if (!hasCaptions) {
      issuesForVideo.push({
        message: `Video "${videoTitle || videoId}" has no captions/subtitles.`,
        severity: 'warning',
        category:"A11y"
      });
    }

    // Check for transcript (assuming linked via aria-describedby)
    const transcriptId = video.getAttribute('aria-describedby') || '';
    const transcriptElement = document.getElementById(transcriptId);
    if (transcriptId && (!transcriptElement || !transcriptElement.textContent.trim())) {
      issuesForVideo.push({
        message: `Video "${videoTitle || videoId}" references a transcript that is missing.`,
        severity: 'warning',
        category:"A11y"
      });
    }

    // Check autoplay
    if (video.hasAttribute('autoplay') && !video.hasAttribute('controls')) {
      issuesForVideo.push({
        message: `Video "${videoTitle || videoId}" is autoplaying without controls.`,
        severity: 'critical',
        category:"A11y"
      });
    }

    // Check controls
    if (!video.hasAttribute('controls')) {
      issuesForVideo.push({
        message: `Video "${videoTitle || videoId}" lacks controls.`,
        severity: 'critical',
        category:"A11y"
      });
    }

    // Get thumbnail (poster attribute)
    const thumbnailSrc = video.getAttribute('poster') || '';
    const thumbnail = thumbnailSrc;

    // Push issues with thumbnail info into the global issues collection
    issuesForVideo.forEach(issue => {
      issues['Video'].push({
        ...issue,
        element: video,
        snippet: video.outerHTML,
        thumbnail: thumbnail,
        title: videoTitle || videoId,
      });
    });
  });

  // Deduplicate video accessibility issues by message (or use 'type' if available),
  // prioritizing critical severity over warning
  const dedupedIssues = {};
  issues['Video'].forEach(issue => {
    const key = issue.message;  // Use a unique identifier here if available (e.g., issue.type)
    if (!dedupedIssues[key] || issue.severity === 'critical') {
      dedupedIssues[key] = issue;
    }
  });
  // Replace the issues list with the deduplicated issues
  issues['Video'] = Object.values(dedupedIssues);

  // Filter issues by severity for display or reporting
  const criticalIssues = issues['Video'].filter(issue => issue.severity === 'critical');
  const warningIssues = issues['Video'].filter(issue => issue.severity === 'warning');

  // Proceed with rendering or further processing using criticalIssues and warningIssues
};


    /**
 * Checks text contrast ratio vs. background for accessibility.
- Inputs: None
- Outputs: Adds to `issues['Color Contrast']`.
 */

const checkColorContrast = () => {
  document.querySelectorAll('p, a, h1, h2, h3, h4, h5, h6, span, li, button').forEach(el => {
    if (el.closest && el.closest('#auditBalloon')) return;
    if (!isVisible(el) || !el.textContent.trim()) return;
    const style = getComputedStyle(el);
    const textColor = getColorValues(style.color);
    let parent = el.parentElement;
    let bgColor = null;
    while(parent) {
      const parentBgColor = getComputedStyle(parent).backgroundColor;
      if (parentBgColor !== 'rgba(0, 0, 0, 0)') {
        bgColor = getColorValues(parentBgColor);
        break;
      }
      if (parent === document.body) break;
      parent = parent.parentElement;
    }
    if (!bgColor) bgColor = [255, 255, 255];
    if (!textColor) return;
    const l1 = getTextLuminance(...textColor);
    const l2 = getTextLuminance(...bgColor);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    if (ratio < 4.5) {
      const roundedRatio = ratio.toFixed(1);
      addUniqueIssue('Color Contrast', {
        message: `Text contrast ratio is too low (${roundedRatio}).`,
        severity: "warning",
        category: "A11y",
        element: el,
        snippet: el.textContent.trim().substring(0, 50) + '...',
        selector: getCssSelector(el)
      });
    }
  });
};

    /**
 * Checks that copyright year in text matches current year.
- Inputs: None
- Outputs: Adds to `issues['Content Issues']`.
 */
const checkDisclaimerYear = () => {
  const text = document.body.textContent || document.documentElement.textContent;
  const currentYear = new Date().getFullYear();

  // Match © or 'copyright' followed by any text and the current year (even in ranges like 1998 - 2025)
  const yearRegex = new RegExp(`(©|copyright)[^\\n]*\\b${currentYear}\\b`, 'i');

  if (!yearRegex.test(text)) {
    issues['Content'].push({
      message: `Copyright year may not be current. Expected ${currentYear}.`,
      severity: "critical",
      category: "SEO"
    });
  }
};
    /**
 * Validates PDF filenames for accessibility and SEO compliance.
- Inputs: None
- Outputs: Adds to `issues['PDF']`.
 */
const checkPDFTagging = async () => {
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');

  for (let link of pdfLinks) {
      const fileName = link.href.split('/').pop();

      const isValidName = /^[a-z0-9\-]{1,40}\.pdf$/i.test(fileName);
      if (!isValidName) {
         addUniqueIssue('PDF',{
              message: `Invalid PDF file name: ${fileName}. Use lowercase letters, numbers, dashes, and keep under 40 characters.`,
              severity: "warning",
              category:"A11y",
              element: link,
              snippet: link.outerHTML
          });
      }

      try {
          const res = await fetch(link.href);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const buf = await res.arrayBuffer();
          const text = new TextDecoder().decode(buf);

          const has = (needle) => text.includes(needle);

          // Tagging checks
          if (!has('/StructTreeRoot')) {
               addUniqueIssue('PDF',{
                  message: `PDF does NOT appear to be tagged.`,
                  severity: "critical",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          // Metadata checks
          if (!has('/Title (') && !has('<dc:title>')) {
               addUniqueIssue('PDF',{
                  message: `PDF missing title in metadata.`,
                  severity: "critical",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          if (!has('/Subject (') && !has('<dc:description>')) {
              addUniqueIssue('PDF',{
                  message: `PDF missing description/subject in metadata.`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          const langRegex = /\/Lang\s*(\(|\/)[a-zA-Z\-]+/;
          if (!langRegex.test(text)) {
              addUniqueIssue('PDF',{
                  message: `PDF missing language metadata.`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          if (!has('/Author (') && !has('<dc:creator>')) {
              addUniqueIssue('PDF',{
                  message: `PDF missing author metadata.`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          if (has('/MarkInfo') && !has('/Marked true')) {
              addUniqueIssue('PDF',{
                  message: `PDF has /MarkInfo but is not marked as tagged (/Marked true missing).`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          // Additional suggested checks (conceptual)
          if (!has('/Outlines')) {
              addUniqueIssue('PDF',{
                  message: `PDF missing bookmark/outlines structure.`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          if (!has('/Alt')) {
              addUniqueIssue('PDF',{
                  message: `PDF may be missing alternative text for images.`,
                  severity: "warning",
                  category: "A11y",
                  element: link,
                  snippet: link.outerHTML
              });
          }

          // Note: deeper semantic tag and reading order checks would require full PDF parsing, 
          // potentially beyond client-side abilities without specialized libraries.

      } catch (err) {
          addUniqueIssue('PDF',{
              message: `Could not check PDF properties for ${fileName} (${err.message}).`,
              severity: "warning",
              category: "A11y",
              element: link,
              snippet: link.outerHTML
          });
      }
  }
};
//Render function
    checkMetaTitle();
    checkMetaDescription();
    checkHeadings();
    checkImageAccessibility();
    checkLinksAndButtons();
    checkPageURL();
    checkRelativeInternalURLs();
    checkHTTPLinks();
    checkInternalLinkingCount();
    checkLinksOpenInNewWindow();
    checkFormAccessibility();
    checkVideosAccessibilityAndSEO();
    checkColorContrast();
    checkDisclaimerYear();
    window.checkTableAccessibility?.();
    
render(); // Show panel immediately

updatePendingMessage(); // Show initial pending message

setTimeout(async () => {
  await checkBrokenAndRedirectLinks();
  pendingChecks = pendingChecks.filter(c => c !== 'Broken Link/Redirect');
  updatePendingMessage();

  await checkPDFTagging();
  pendingChecks = pendingChecks.filter(c => c !== 'PDF');
  updatePendingMessage();
  render();

  if (typeof checkPageSize === 'function') {
    await checkPageSize();
   pendingChecks = pendingChecks.filter(c => c !== 'Content');
    updatePendingMessage();
  }

  
render(); // Re-render panel with new results
  updatePendingMessage(); // <--- ADD THIS LINE!
}, 100);

        
  }
function getCssSelector(el) {
  if (!el) return '';
  if (el.id) return `#${el.id}`;
  let path = [];
  while (el && el.nodeType === 1 && el !== document.body) {
    let selector = el.tagName.toLowerCase();
    if (el.className) {
      selector += '.' + el.className.trim().split(/\s+/).join('.');
    }
    let sibling = el;
    let nth = 1;
    while ((sibling = sibling.previousElementSibling)) {
      if (sibling.tagName === el.tagName) nth++;
    }
    selector += `:nth-of-type(${nth})`;
    path.unshift(selector);
    el = el.parentElement;
  }
  return path.join(' > ');
}
  /**
 * Generates downloadable HTML report of found issues.
- Inputs: None
- Outputs: Triggers download of HTML file.
 */
function downloadReport() {

  function escapeHTML(str) {
    if (!str && str !== 0) return '';
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  


  const flat = [];
Object.entries(issues).forEach(([type, items]) => {
  
  // Keep your category mapping (type-level classification)
  const category =
    a11yTypes.includes(type)      ? "A11y" :
    seoTypes.includes(type)       ? "SEO"  :
     "Other";

  items.forEach(item => {
    const message = item.message || "";
    const snippet = item.snippet || (item.element ? (item.element.outerHTML || item.element.textContent || '') : '');
   const thumb = (type === 'Image' && item.element) ? getImageSrc(item.element) : '';
    const selector = item.element ? getCssSelector(item.element) : '';

    // ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ¢â‚¬Â° NEW: compute per-item owner (Publisher/Business/Other) using your helper
    const owner = resolveOwner(type, item);

    // ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ¢â‚¬Â° Push the 'owner' into each flat row
    flat.push({
      type,
      category, // keep category (A11y/SEO/etc.)
      owner,    // NEW field
      severity: (item.severity || 'info').toLowerCase(),
      message,
      snippet,
      thumb,
      selector
    });
  });
});

  const summary = { total: flat.length, bySeverity: {}, byCategory: {}, byType: {} };
  flat.forEach(it => {
    summary.bySeverity[it.severity] = (summary.bySeverity[it.severity] || 0) + 1;
    summary.byCategory[it.category] = (summary.byCategory[it.category] || 0) + 1;
    summary.byType[it.type] = (summary.byType[it.type] || 0) + 1;
  });

  const html = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Audit Report - ${escapeHTML(location.href)}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      :root{
        --bg:#ffffff; --muted:#666; --border:#cccabc;
        --critical:#ffebec; --warning:#fdf6e3; --info:#eff4fb; --ok:#f3f6da;
        --criticalHover:#ffdddf; --warningHover:#fdf3d7; --infoHover:#e1ecfb; --okHover:#f6fbcc;
      }
      
      body{margin:0;padding:18px;background:var(--bg);color:#222; font-family: "Roboto", sans-serif;}
      header{display:flex;align-items:center;justify-content:space-between;gap:12px}
      h1{margin:0;font-size:18px; margin-bottom: 20px;}
      .meta{font-size:13px;color:var(--muted)}
      .controls{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap}
      input[type="search"]{padding:8px;border:1px solid var(--border);border-radius:6px;min-width:200px}
      select,button{padding:8px;border-radius:6px;border:1px solid var(--border);background:#fff;cursor:pointer}
      .dashboard{display:flex;gap:12px;margin-top:14px;flex-wrap:wrap}
      .card{padding:10px;border-radius:8px;border:1px solid var(--border);background:#fafafa;min-width:110px}
      .card .small.bold{margin-bottom: 15px;}
      table{width:100%;border-collapse:collapse;margin-top:14px}
      th,td{padding:8px;border:1px solid var(--border);vertical-align:top;font-size:13px}
      th{background:#f7f7f7;cursor:pointer;text-align: left;}
      tr.critical{background:var(--critical)}
      tr.warning{background:var(--warning)}
      tr.info{background:var(--info)}
      tr.critical:hover{background:var(--criticalHover)}
      tr.warning:hover{background:var(--warningHover)}
      tr.info:hover{background:var(--infoHover)}
      .snippet{white-space:pre-wrap;max-width:600px;word-break:break-word;background:#fff;padding:6px;border-radius:4px;border:1px solid #eee}
      img.thumb{max-width:120px;max-height:90px;border:1px solid #ddd;border-radius:4px}
      .small{font-size:12px;color:var(--muted); margin-bottom: 3px;}
      .badge{display:inline-block;padding:2px 8px;border-radius:999px;border:1px solid #ddd;background:#fff;font-size:12px;padding: 5px 15px;}
      .badge:hover, .badge:focus, .badge:active{ background: #e0e0e0; border: 1px solid #ccc;}
       #typeCounts a:hover, #typeCounts a:focus, #typeCounts a:active{ background: #e0e0e0;}
      #typeCounts a {display: block;}
      .filters{display:flex;gap:8px;align-items:center}
      .group-title{margin-top:18px;font-weight:600}
      .actions{margin-left:auto;display:flex;gap:8px}
      .hint{font-size:12px;color:#777;margin: 20px 0;}
      .bold{font-weight: bold;}
      footer{margin-top:18px;font-size:12px;color:var(--muted);font-weight: bold;}
      #exportCsvBtn{background: #e60000;color: #fff;height: 2.5rem;border-radius: 0.125rem;padding: 0rem 24px;border: none;font-weight: bold;}
       #exportCsvBtn:hover{background-color: #bd000c;}
      #openInPageBtn{background-color: #fff;box-shadow: 0 0 0 1px #1c1c1c inset;height: 2.5rem;border-radius: 0.125rem;padding: 0rem 24px;font-weight: bold;}
       #openInPageBtn:hover{box-shadow: 0 0 0 2px #1c1c1c inset;}
       #typeCounts .small:hover{color: #000;}
      @media (max-width:900px){ .snippet{max-width:300px} }
    </style>
  </head>
  <body>
    <header>
      <div>
        <h1>Website Audit Report</h1>
        <div class="meta"><span style="font-weight: bold;">Source: </span><a href="${escapeHTML(location.href)}" target="_blank" rel="noopener">${escapeHTML(location.href)}</a></div>
      </div>
      <div class="actions">
        <button id="exportCsvBtn">Export CSV</button>
        <button id="openInPageBtn">Open source page</button>
      </div>
    </header>

    <div class="controls">
      <input id="searchBox" type="search" placeholder="Search messages or snippets...">
      <div class="filters">
        <label class="small bold">Severity</label>
        <select id="severityFilter">
          <option value="all">All</option>
          <option value="critical">Critical</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        <label class="small bold">Category</label>
        <select id="categoryFilter">
          <option value="all">All</option>
          <option value="a11y">A11y</option>
          <option value="seo">SEO</option>
          <option value="other">Other</option>          
                 </select>
        <label class="small bold">Owner</label>
<select id="ownerFilter">
  <option value="all">All</option>
  <option value="publisher">Publisher</option>
  <option value="business">Business</option>
</select>
        <label class="small bold">Type</label>
        <select id="typeFilter"><option value="all">All Types</option></select>
        


      </div>
    </div>

    <div class="dashboard" id="dashboard">
      <div class="card"><div class="small bold">Total issues:</div><div id="totalCount" style="font-weight:700;font-size:20px;color: #e60000;">${summary.total}</div></div>
      <div class="card"><div class="small bold">By severity:</div><div id="sevCounts" style="margin-top:6px"></div></div>
      <div class="card"><div class="small bold">By category:</div><div id="catCounts" style="margin-top:6px"></div></div>
      <div class="card"><div class="small bold">By type:</div><div id="typeCounts" style="margin-top:6px"></div></div>
    </div>

    <div class="hint"><span class="bold">Tip:</span> Click column headers to sort.</div>

    <div id="tableWrap"></div>

    <footer>Report generated on: ${new Date().toLocaleString()}</footer>

    <script>
      const DATA = ${JSON.stringify(flat.map(it => ({
  
 type: (it.type || '').toLowerCase(),
category: ((it.category || 'other')).toLowerCase(), // <- ensure ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“otherÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢
owner: ((it.owner || 'other')).toLowerCase(),       // if you keep Owner
severity: (it.severity || 'info').toLowerCase(),
message: it.message, snippet: it.snippet, thumb: it.thumb, selector: it.selector


      })))};

      const searchBox = document.getElementById('searchBox');
      const severityFilter = document.getElementById('severityFilter');
      const categoryFilter = document.getElementById('categoryFilter');
      const typeFilter = document.getElementById('typeFilter');
      const ownerFilter = document.getElementById('ownerFilter');
      const tableWrap = document.getElementById('tableWrap');
      const exportCsvBtn = document.getElementById('exportCsvBtn');
      const exportJsonBtn = document.getElementById('exportJsonBtn');
      const openInPageBtn = document.getElementById('openInPageBtn');

      (function populateTypeFilter(){
        const types = Array.from(new Set(DATA.map(d => d.type))).sort();
        types.forEach(t => {
          const opt = document.createElement('option'); opt.value = t; opt.textContent = t;
          typeFilter.appendChild(opt);
        });
      })();

      (function buildSummary(){
    const bySeverity = {};
    const byCategory = {};
    const byType = {};
    DATA.forEach(d => {
        // Normalize severity to lowercase and trim spaces
        const sev = (d.severity || '').trim().toLowerCase();
        if (sev) bySeverity[sev] = (bySeverity[sev]||0)+1;

        // You can also normalize category/type if needed
        const cat = (d.category || '').trim();
        if (cat) byCategory[cat] = (byCategory[cat]||0)+1;

        const typ = (d.type || '').trim();
        if (typ) byType[typ] = (byType[typ]||0)+1;
    });

    // Now use bySeverity, byCategory, byType for your badges
    // Example for severity badges:
    const sevDiv = document.getElementById('sevCounts');
sevDiv.innerHTML = '';
Object.keys(bySeverity)
  .filter(sev => typeof sev === 'string' && sev.length > 0)
  .forEach(sev => {                     // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ proper callback
    const filterBtn = document.createElement('button');
    filterBtn.className = 'badge';
    filterBtn.textContent = sev.charAt(0).toUpperCase() + sev.slice(1) + ' ' + bySeverity[sev];
    filterBtn.style.marginRight = '6px';
    filterBtn.style.cursor = 'pointer';
    filterBtn.onclick = function () {
  severityFilter.value = sev.toLowerCase();
  renderTable();
};
    sevDiv.appendChild(filterBtn);
  });


const categoryValueMap = {
  'A11y': 'a11y',
  'SEO': 'seo',
  'Other': 'other'
  // Add more if you have more categories
};

   const catDiv = document.getElementById('catCounts');
catDiv.innerHTML = '';

// Only show core categories (e.g., A11y, SEO, Other). Hide Publisher/Business here.
Object.keys(byCategory)
  .filter(k => !['publisher', 'business'].includes(k.toLowerCase()))
  .forEach(k => {
    const filterBtn = document.createElement('button');
    filterBtn.className = 'badge';
    filterBtn.textContent = k + ' ' + byCategory[k];
    filterBtn.style.marginRight = '6px';
    filterBtn.style.cursor = 'pointer';
    filterBtn.onclick = function () {
      categoryFilter.value = k.toLowerCase();
      renderTable();
    };
    catDiv.appendChild(filterBtn);
  });

       const typeDiv = document.getElementById('typeCounts');
typeDiv.innerHTML = ''; // Clear container first
Object.keys(byType).sort().forEach(k => {
    const itypeList = document.createElement('a');
    itypeList.className = 'small';
    itypeList.textContent = k + ': ' + byType[k];
    itypeList.style.cursor = 'pointer'; // Make it look clickable
    itypeList.onclick = function() {
        typeFilter.value = k;       // Set filter value
        renderTable();              // Re-render table
    };
    typeDiv.appendChild(itypeList);
});

      })();

      function escapeHTML(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

      function downloadFile(filename, text, mime='text/plain') {
        const blob = new Blob([text], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
      }

      let currentSort = { col: 'type', dir: 1 };
      function renderTable() {
        const q = (searchBox.value||'').toLowerCase();
        const sev = severityFilter.value;
        const cat = categoryFilter.value;
        const tp = typeFilter.value;
        const own = ownerFilter ? ownerFilter.value : 'all'; 

        let rows = DATA.filter(d => {
          if (sev !== 'all' && d.severity.toLowerCase() !== sev.toLowerCase()) return false;
          if (cat !== 'all' && d.category.toLowerCase() !== cat.toLowerCase()) return false;
          if (tp !== 'all' && d.type.toLowerCase() !== tp.toLowerCase()) return false;
          if (own !== 'all' && (d.owner || 'other').toLowerCase() !== own.toLowerCase()) return false;
          if (!q) return true;
          return (d.message||'').toLowerCase().includes(q) || (d.snippet||'').toLowerCase().includes(q) || (d.type||'').toLowerCase().includes(q);
        });

        rows.sort((a,b) => {
          const av = (a[currentSort.col]||'').toString().toLowerCase();
          const bv = (b[currentSort.col]||'').toString().toLowerCase();
          if (av < bv) return -1 * currentSort.dir;
          if (av > bv) return 1 * currentSort.dir;
          return 0;
        });

        let html = '<table id="issuesTable"><thead><tr>';
        const cols = [
          {k:'type', label:'Type'},
          {k:'category', label:'Category'},
           {k:'owner',    label:'Owner'}, 
          {k:'severity', label:'Severity'},
          {k:'message', label:'Message'},
          //{k:'message', label:'Snippet'},
          {k:'thumb', label:'Thumbnail'},
          //{k:'actions', label:'Actions'}
        ];
        cols.forEach(c => html += '<th data-col="'+c.k+'">'+escapeHTML(c.label)+'</th>');
        html += '</tr></thead><tbody>';
        if (rows.length === 0) {
          html += '<tr><td colspan="'+cols.length+'" class="small">No issues match the filters/search.</td></tr>';
        } else {
          rows.forEach(r => {
            const rowClass = (r.severity === 'critical' ? 'critical' : r.severity === 'warning' ? 'warning' : 'info');
            html += '<tr class="'+rowClass+'">';
            html += '<td>'+escapeHTML(r.type)+'</td>';
            html += '<td>'+escapeHTML(r.category)+'</td>';
            html += '<td>'+escapeHTML(r.owner || '')+'</td>'; 
            html += '<td>'+escapeHTML(r.severity)+'</td>';
            html += '<td>'+escapeHTML(r.message)+'</td>';
            //html += '<td><div class="snippet">'+escapeHTML(r.snippet)+'</div></td>';
            html += '<td>'+(r.thumb ? ('<a target="_blank" rel="noopener" href="'+escapeHTML(r.thumb)+'"><img class="thumb" src="'+escapeHTML(r.thumb)+'" /></a>') : '')+'</td>';
            // html += '<td>';
           // html += (r.selector ? '<button data-selector="'+escapeHTML(r.selector)+'" class="highlightBtn">Highlight</button> ' : '');
           //html += (r.thumb ? '<button data-thumb="'+escapeHTML(r.thumb)+'" class="openImgBtn">Open</button>' : '');
            // html += '</td>';
            html += '</tr>';
          });
        }
        html += '</tbody></table>';
        tableWrap.innerHTML = html;

        document.querySelectorAll('#issuesTable th[data-col]').forEach(th => {
          th.onclick = () => {
            const col = th.getAttribute('data-col');
            if (currentSort.col === col) currentSort.dir = -currentSort.dir; else { currentSort.col = col; currentSort.dir = 1; }
            renderTable();
          };
        });

        document.querySelectorAll('.highlightBtn').forEach(btn => {
          btn.onclick = () => {
            const sel = btn.getAttribute('data-selector');
            if (window.opener && !window.opener.closed) {
              try {
                window.opener.postMessage({ __auditHighlightSelector: sel }, '*');
              } catch (err) {
                alert('Could not send highlight message to source window (cross-origin).');
              }
            } else {
              alert('Highlight requires you to open this report from the audit panel. Alternatively, open the page and search for this selector:\\n' + sel);
            }
          };
        });

        document.querySelectorAll('.openImgBtn').forEach(b => {
          b.onclick = () => { const url = b.getAttribute('data-thumb'); window.open(url, '_blank'); };
        });
      }

      renderTable();

      [searchBox, severityFilter, categoryFilter, typeFilter, ownerFilter]
  .filter(Boolean)
  .forEach(el => {
    el.addEventListener('input', () => renderTable());
    el.addEventListener('change', () => renderTable());
  });
      exportCsvBtn.onclick = () => {
        const rows = [['Type','Category','Owner','Severity','Message','Snippet','ImageURL','Selector']];
DATA.forEach(d => rows.push([d.type,d.category,d.owner || '',d.severity,
  d.message.replace(/"/g,'""'), d.snippet.replace(/"/g,'""'), d.thumb, d.selector]));
        const csv = rows.map(r => r.map(c=>'"'+String(c||'').replace(/"/g,'""')+'"').join(',')).join('\\n');
        downloadFile('audit-report-${new Date().toISOString().slice(0,10)}.csv', csv, 'text/csv');
      };

      
      openInPageBtn.onclick = () => {
        window.open('${escapeHTML(location.href)}', '_blank');
      };

    </script>
  </body>
  </html>`;

  // Count critical issues from your flat array
const criticalCount = flat.filter(d => d.severity === 'critical').length;

// Get a sanitized version of the page URL (pathname)
const urlPart = location.pathname.replace(/[\/\\?%*:|"<>]/g, '-').slice(0, 40); // safe for filenames, max 40 chars

// Get today's date in YYYY-MM-DD format
const dateStr = new Date().toISOString().slice(0,10);

// Build the filename
const fileName = `audit-report-${urlPart}-critical-${criticalCount}-${dateStr}.html`;

// Trigger the download
downloadFile(fileName, html, 'text/html');

// Download function
function downloadFile(name, text, mime) {
  const blob = new Blob([text], { type: mime || 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

}

  // Url checks | Check for url length and - hypen deperated url | check for http and https links | check for relative and absolute urls| minimum internal link 2-5 per page.
function checkPageURL() {
  const url = window.location.pathname; // Use pathname for relative URL, or href for full URL
  // Check length
  if (url.length > 120) {
    issues['URL Checks'].push({
      message: `Page URL exceeds 120 characters (${url.length}): ${url}`,
      severity: "warning",
      category:"SEO"
    });
  } else if (url.length < 110) {
    issues['URL Checks'].push({
      message: `Page URL is less than 110 characters (${url.length}): ${url}`,
      severity: "warning",
      category:"SEO"
    });
  }
  
// Check for underscores
if (url.includes('_')) {
  issues['URL Checks'].push({
    message: `Page URL contains an underscore (_): ${url}`,
    severity: "warning"
  });
}

}
function checkRelativeInternalURLs() {
  $$('a[href]').forEach(link =>  {
    const href = link.getAttribute('href');
    // Internal link: same host, but not starting with /
    if (
      href &&
      href.startsWith('http') &&
      href.includes(window.location.hostname) &&
      !href.startsWith('/')
    ) {
      issues['URL Checks'].push({
        message: `Internal link uses absolute URL instead of relative: ${href}`,
        severity: "critical",
        category:"SEO",
        element: link,
        snippet: link.outerHTML
      });
    }
  });
}
function checkHTTPLinks() {
   $$('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('http://')) {
      issues['URL Checks'].push({
        message: `Link uses unencrypted HTTP: ${href}`,
        severity: "warning",
        category:"SEO",
        element: link,
        snippet: link.outerHTML
      });
    }
  });
}
function checkInternalLinkingCount() {
  // Select all anchor tags with href
 const links = $$('a[href]');
  // Filter for internal links (relative URLs)
  
const internalLinks = links.filter(link => {
  const href = link.getAttribute('href');
  // Exclude links inside navigation, footer, or breadcrumb containers
  if (
    link.closest('.metanavigation') ||
    link.closest('.mainnavigation__base') ||
    link.closest('.primaryheader__itemsWrapper--mainNavigation') ||
    link.closest('.primaryheader__itemsWrapper--metaNavigation') ||
    link.closest('.footer__highlight') ||
    link.closest('.footer__wrapper') ||
    link.closest('.doormat') ||
    link.closest('.linklist-v2--doormat') ||
    link.closest('.footer__breadcrumb')
  ) {
    return false;
  }
  return href && href.startsWith('/') && !href.startsWith('http');
});
  const count = internalLinks.length;
  if (count < 2) {
    issues['URL Checks'].push({
      message: `Page has less than 2 internal links (${count}). Minimum recommended is 2.`,
      severity: "warning",
      category:"SEO"
    });
  } else if (count > 5) {
    issues['URL Checks'].push({
      message: `Page has more than 5 internal links (${count}). Maximum recommended is 5.`,
      severity: "warning",
      category:"SEO"
    });
  }
}





function updatePendingMessage() {
  const pendingDiv = document.getElementById('pendingChecks');
  if (!pendingDiv) return;
  if (pendingChecks.length === initialPendingCount) { // e.g., 3
    pendingDiv.textContent = 'Running audit checks...';
    pendingDiv.style.display = 'block';
  } else if (pendingChecks.length === 0) {
    pendingDiv.textContent = 'All checks complete!';
    pendingDiv.style.display = 'block';
  } else {
    pendingDiv.textContent = 'Pending checks: ' + pendingChecks.join(', ');
    pendingDiv.style.display = 'block';
  }
}





//Heading function
  function checkHeadings() {
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    const issues = [];
    let lastLevel = 0;
    let h1Count = 0;

    if (headings.length === 0) {
        issues.push({ message: 'No headings found on this page', severity: 'warning', category:"SEO", element: heading, });
        return issues;
    }

    headings.forEach(heading => {
        const text = heading.innerText.trim();
        const level = parseInt(heading.tagName.substring(1), 10);

        if (level === 1) h1Count++;

        if (!text) {
            issues.push({
                message: `Empty heading (${heading.tagName}) found.`,
                severity: 'warning',
                category:"A11y",
                element: heading
                
            });
        }

        if (lastLevel !== 0 && level > lastLevel + 1) {
            issues.push({
                message: `Improper heading structure: ${heading.tagName} after H${lastLevel}`,
                severity: 'warning',
                category:"A11y",
                element: heading
                
            });
        }

        lastLevel = level;
    });

    if (h1Count > 1) {
        issues.push({
            message: `Multiple H1 headings found (${h1Count} total).`,
            severity: 'critical',
            category:"SEO",
            element: heading
        });
    }

    if (h1Count === 0) {
        issues.push({
            message: 'No H1 heading found on the page.',
            severity: 'critical',
            category:"SEO"
            
        });
    }

    return issues;
}

function buildHeadingTree() {
   const headings = $$('h1,h2,h3,h4,h5,h6');
    const tree = [];
    const stack = [];
    let h1Count = 0;

    headings.forEach(h => {
        const level = parseInt(h.tagName.substring(1), 10);
        const node = {
            text: h.innerText.trim() || `[Empty ${h.tagName}]`,
            level,
            children: [],
            element: h,
            error: false,
            errorType: null
        };

        // Check for multiple <h1> tags
        if (level === 1) {
            h1Count++;
            if (h1Count > 1) {
                node.error = true;
                node.errorType = 'Multiple <h1> tags';
            }
        }

        // Check for skipped heading levels
        if (stack.length && level > stack[stack.length - 1].level + 1) {
            node.error = true;
            node.errorType = 'Skipped heading level';
        }

        // Maintain tree structure
        while (stack.length && stack[stack.length - 1].level >= level) {
            stack.pop();
        }

        if (stack.length === 0) {
            tree.push(node);
        } else {
            stack[stack.length - 1].children.push(node);
        }

        stack.push(node);
    });

    return tree;
}


function renderHeadingTree(treeData) {
    const ul = document.createElement('ul');
    ul.style = 'list-style-type:disc; padding-left: 15px; font-size: 13px;';

    treeData.forEach(node => {
        const li = document.createElement('li');
        li.style = 'margin: 3px 0;';

        const headingEl = document.createElement('span');
        headingEl.style = `color:${node.error ? 'red' : '#333'}; font-weight:${node.error ? 'bold' : 'normal'}; cursor:pointer;`;
        headingEl.innerHTML = `${node.text} <small>(H${node.level})</small>`;

        headingEl.addEventListener('mouseenter', () => {
            if (node.element) node.element.style.outline = '3px solid orange';
        });
        headingEl.addEventListener('mouseleave', () => {
            if (node.element) node.element.style.outline = '';
        });

        headingEl.addEventListener('click', (e) => {
            e.stopPropagation();
            if (node.element) {
                highlight(node.element);
            }
        });

        li.appendChild(headingEl);

        if (node.children.length) {
            li.appendChild(renderHeadingTree(node.children));
        }
        ul.appendChild(li);
    });

    return ul;
}

function render() {
  
 let scrollTop = 0;
 const existingPanel = document.getElementById('auditBalloon');
 if (existingPanel) scrollTop = existingPanel.scrollTop

    const existing = document.getElementById('auditBalloon');
    if (existing) existing.remove();

    if (isMinimized) {
        renderMinimizedButton();
        return;
    }

    const container = document.createElement('div');
    container.id = 'auditBalloon';
    container.style = `position: fixed; top: 20px; right: 20px; z-index: 9999; background: #f9f9f7; border-radius: 8px; border: 1px solid #ddd; padding: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-height: 80vh; overflow-y: auto; width: 380px; resize: both; overflow: auto; min-width: 300px; min-height: 200px;`;

    const titleBar = document.createElement('div');
    titleBar.classList.add('title-bar'); // Add class name
    titleBar.style =  `display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 10px; cursor: move;`;
    titleBar.innerHTML = `<span style="font-size:16px; font-weight: bold"><img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/online_search.svg" style="width: 24px; height: auto;"> CheckMate </span>`;

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('header-buttons'); // Add class name
    iconContainer.style = `display: flex; align-items: center`;

    const minimizeBtn = document.createElement('button');
    minimizeBtn.innerHTML = `&#8212;`;
    minimizeBtn.style = `border: none; background: transparent; font-size: 18px; cursor: pointer; margin-right: 5px;`;
    minimizeBtn.onclick = () => { isMinimized = true; render(); };
    iconContainer.appendChild(minimizeBtn);

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `&times;`;
    closeBtn.style = `border: none; background: transparent; font-size: 24px; cursor: pointer;`;
    closeBtn.onclick = () => {
        document.querySelectorAll('[data-audit-highlighted]').forEach(h => {
            h.style.outline = '';
            h.removeAttribute('data-audit-highlighted');
        });
        document.getElementById('auditBalloon').remove();
    };

     let pendingDiv = document.getElementById('pendingChecks');
if (!pendingDiv) {
  pendingDiv = document.createElement('div');
  pendingDiv.id = 'pendingChecks';
  pendingDiv.style ='color:#469A6C; font-size:13px; margin-bottom:8px; width: 60%;';
  // ÃƒÂ¢Ã‚ÂÃ…â€™ Do not set text here; let updatePendingMessage() decide.
}
    iconContainer.appendChild(closeBtn);
    container.appendChild(titleBar);     // First: title bar
     titleBar.appendChild(iconContainer); //  Second: icon buttons (if needed)
    // titleBar.insertAdjacentElement('afterend', pendingDiv); // Third: pending section

   const actionBtn = document.createElement('div');
    actionBtn.classList.add('action-buttons'); // Add class name
    actionBtn.style = `display: flex; align-items: center;`;
    const toggleAllBtn = document.createElement('button');
    toggleAllBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/collapse-icon.svg" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7470%) hue-rotate(116deg) brightness(109%) contrast(109%);">`;
    toggleAllBtn.style = buttonStyle('#0078D4');
    toggleAllBtn.title = "Toggle issue accordion";
    toggleAllBtn.onclick = () => {
        const allCollapsed = Object.values(sectionStates).every(state => state === 'collapsed');
        Object.keys(sectionStates).forEach(key => sectionStates[key] = allCollapsed ? 'expanded' : 'collapsed');
        render();
    };
        actionBtn.appendChild(pendingDiv);
    actionBtn.appendChild(toggleAllBtn);

    const downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/download-icon.svg" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7470%) hue-rotate(116deg) brightness(109%) contrast(109%);">`;
    downloadBtn.style = buttonStyle('#0078D4');
    downloadBtn.title = "Download Report";
    downloadBtn.onclick = downloadReport;
    actionBtn.appendChild(downloadBtn);

    const feedbackBtn = document.createElement('button');
    feedbackBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/feedback-icon.svg" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7470%) hue-rotate(116deg) brightness(109%) contrast(109%);">`;
    feedbackBtn.style = buttonStyle('#0078D4');
    feedbackBtn.title = "Submit Feedback";
      feedbackBtn.onclick = () => {
        window.open('https://ubscloud.sharepoint.com/sites/int-mp-learning-hub/_layouts/15/listforms.aspx?cid=ZDA4MmRhYzQtZWJkOS00ODNhLWJiYTMtNmRjZjAyN2E4YTkz&nav=YTc1YmYxZGYtMjViYi00YzdlLTg1ZTItY2I5NzQ3NjAyZTU4&xsdata=MDV8MDJ8fDNhNTllMjJhM2I5YTQyMzhhNTk5MDhkZGVhMWZiMmVhfGZiNmVhNDAzN2NmMTQ5MDU4MTBhZmU1NTQ3ZTk4MjA0fDB8MHw2Mzg5MjQxNDQwMjMwODY0ODl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pBM01UVTRNalZqTFRFMU9UZ3RORGsyWlMxaFl6Z3lMV1k1TnpGaVkyWmtPREZsTjE4NE4yUmtNVGMwTmkwM09XRmlMVFEwTmprdE9XWm1OUzA1T1dJME1UQmxOR05sTm1aQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU5qZ3hOell3TVRZM01nPT18YjA3MDA3Nzc4NzA4NDM4YmE1OTkwOGRkZWExZmIyZWF8Y2UwNjJjZDZmZDViNDJiZDk4MTExOTA0NDA2ZGJmODA%3D&sdata=SjErK0NJczBVQVpBN3VqbEthbnN2akdybkhWcU5UYlNmN1UwWVgvcXpZdz0%3D&ovuser=fb6ea403-7cf1-4905-810a-fe5547e98204%2Cleena.sonawane%40ubs.com', '_blank');
    };
    actionBtn.appendChild(feedbackBtn);


    const refreshBtn = document.createElement('button');
    refreshBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/refresh-icon.svg" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7470%) hue-rotate(116deg) brightness(109%) contrast(109%);">`;
    refreshBtn.style = buttonStyle('#0078D4');
    refreshBtn.title = "Refresh DOM";
    refreshBtn.onclick = async () => { // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ CHANGED: Made the click handler async
        document.querySelectorAll('[data-audit-highlighted]').forEach(h => h.style.outline = '');
        refreshBtn.textContent = 'Refreshing...';
        refreshBtn.disabled = true;
        await runAudit(); // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ CHANGED: Await the audit before re-rendering
        refreshBtn.textContent = 'Refresh DOM';
        refreshBtn.disabled = false;
        render();
    };
    actionBtn.appendChild(refreshBtn);

container.appendChild(actionBtn);

const roleWrapper = document.createElement('div');
    roleWrapper.classList.add('roleBtn'); // Add class name
    roleWrapper.style = `display: inline-block; border-right: 1px solid #ccc; margin-right: 15px;`;

    const roleSpan = document.createElement('div');
    roleSpan.classList.add('roleBlockTitle'); // Add class name
    roleSpan.innerHTML = `Roles:`;
    roleSpan.style = `font-size: 13px; font-weight: bold; width: 100%;`;
    roleWrapper.appendChild(roleSpan);

    const a11yFilterBtn = document.createElement('button');
    a11yFilterBtn.textContent = 'A11y';
    a11yFilterBtn.style = buttonStyle(currentFilter === 'a11y' ? '#cccabc' : '#6c757d');
    a11yFilterBtn.style.padding = '5px 10px';
    a11yFilterBtn.onclick = () => {
        currentFilter = currentFilter === 'a11y' ? 'all' : 'a11y';
        render();
    };
    roleWrapper.appendChild(a11yFilterBtn);

    const seoFilterBtn = document.createElement('button');
    seoFilterBtn.textContent = 'SEO';
    seoFilterBtn.style = buttonStyle(currentFilter === 'seo' ? '#cccabc' : '#6c757d');
    seoFilterBtn.style.marginRight = '15px';
    seoFilterBtn.style.padding = '5px 10px';
    seoFilterBtn.onclick = () => {
        currentFilter = currentFilter === 'seo' ? 'all' : 'seo';
        render();
    };

    roleWrapper.appendChild(seoFilterBtn);
    // --- Place this after the SEO filter button code ---

      container.appendChild(roleWrapper);



    const ownerWrapper = document.createElement('div');
    ownerWrapper.classList.add('ownerBtn'); // Add class name
    ownerWrapper.style = `display: inline-block;`;

    const ownerSpan = document.createElement('div');
    ownerSpan.classList.add('ownerBlockTitle'); // Add class name
    ownerSpan.innerHTML = `Owners:`;
    ownerSpan.style = `font-size: 13px; font-weight: bold; width: 100%;`;
    ownerWrapper.appendChild(ownerSpan);

const publisherFilterBtn = document.createElement('button');
publisherFilterBtn.textContent = 'Publisher';
publisherFilterBtn.style = buttonStyle(currentFilter === 'publisher' ? '#cccabc' : '#6c757d');
publisherFilterBtn.style.padding = '5px 10px';
publisherFilterBtn.onclick = () => {
  currentFilter = currentFilter === 'publisher' ? 'all' : 'publisher';
  render();
};
ownerWrapper.appendChild(publisherFilterBtn);

const businessFilterBtn = document.createElement('button');
businessFilterBtn.textContent = 'Business';
businessFilterBtn.style = buttonStyle(currentFilter === 'business' ? '#cccabc' : '#6c757d');
businessFilterBtn.style.padding = '5px 10px';
businessFilterBtn.onclick = () => {
  currentFilter = currentFilter === 'business' ? 'all' : 'business';
  render();
};
ownerWrapper.appendChild(businessFilterBtn);

    container.appendChild(ownerWrapper);

    const list = document.createElement('div');
    Object.entries(issues).forEach(([type, items]) => {
           
     let filteredItems = items;
     
/*if (currentFilter !== 'all') {
const hasInCategory = items.some(it => getCategoryForItem(type, it) === currentFilter);
if (!hasInCategory) return;
}*/
// ---- Section gate: category-aware and owner-aware ----
if (isCategoryFilter(currentFilter)) {
  const hasCategory = items.some(it => getCategoryForItem(type, it) === currentFilter);
  if (!hasCategory) return;
}
if (isOwnerFilter(currentFilter)) {
  const ownerLabel = currentFilter === 'publisher' ? 'Publisher' : 'Business';
  const hasOwner   = items.some(it => normalizeOwnerForFilter(resolveOwner(type, it)) === ownerLabel);
  if (!hasOwner) return;
}
/*if (currentFilter === 'seo') {
  filteredItems = filteredItems.filter(item => item.category === 'SEO');
}
if (currentFilter === 'a11y') {
  filteredItems = filteredItems.filter(item => (item.category || '').toLowerCase() === 'a11y');
}*/

      
const q = searchQuery.trim().toLowerCase();

// One and only declaration
//let filteredItems = items;

// 1) Owner filter (Publisher / Business)

// 1) Owner filtering (when Publisher/Business is selected)
if (isOwnerFilter(currentFilter)) {
  const ownerLabel = currentFilter === 'publisher' ? 'Publisher' : 'Business';
  filteredItems = filteredItems.filter(it => normalizeOwnerForFilter(resolveOwner(type, it)) === ownerLabel);
}

// 2) Category filtering (when A11y/SEO/Other is selected)
if (isCategoryFilter(currentFilter)) {
  filteredItems = filteredItems.filter(it => getCategoryForItem(type, it) === currentFilter);
}


// 2) Text search filter
if (q) {
  filteredItems = filteredItems.filter(item => {
    const msg  = (item.message || '').toLowerCase();
    const snip = (item.snippet || '').toLowerCase();
    return msg.includes(q) || snip.includes(q);
  });
}

if (q && filteredItems.length === 0) return;

// 3) Severity pills (fix the variable name bug too)
if (sectionStates[type] === 'critical') {
  filteredItems = filteredItems.filter(tem => tem.severity === 'critical');
} else if (sectionStates[type] === 'warning') {
  filteredItems = filteredItems.filter(tem => tem.severity === 'warning');
}

//Important: base the empty check on filteredItems (not raw items) except heading structure
//if (!q && filteredItems.length === 0 && type !== 'Heading') return;
// hide all categories with zero issues
if (items.length === 0) return;

      if (sectionStates[type] === undefined) {
          sectionStates[type] = 'collapsed';
      }

      const section = document.createElement('div');
      
      section.style = 'margin-top: 15px; border:1px solid #e0dfd7; border-radius:3px; box-shadow: rgb(224, 223, 215) 1px 1px 1px 0px; background:#fff;';

      const header = document.createElement('div');
      header.style = 'padding:10px; background:#fff; font-weight: bold; cursor:pointer; display:flex; justify-content:space-between; align-items:center;align-items:center; font-size: 14px;';
      const issueCount = filteredItems.length;
      const iconUrl = issueImages[type] || '';
      // header.innerHTML = `<span>${issueIcons[type] || ''} ${type}: ${issueCount} ${issueCount === 1 ? 'issue' : 'issues'}</span>`;
      header.innerHTML = `<span><img src="${iconUrl}" alt="${type} icon" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 6px;"> ${type}: <span style="color: #095f95; text-underline-offset: 4px; text-decoration: underline">(${issueCount})</span></span>`;

      header.onclick = (e) => {
  e.stopPropagation(); // Prevents the click from affecting parent elements (like closing the panel)
  sectionStates[type] = sectionStates[type] === 'collapsed' ? 'expanded' : 'collapsed'; 
  render();


  // Highlight all table issues if "Table Accessibility" section is clicked
  if (type === 'Table' && window.highlightAllTableIssues) {
    window.highlightAllTableIssues();
    
  }
};


      section.appendChild(header);

      const sectionControls = document.createElement('div');
      sectionControls.style.display = 'flex';

      const criticalCount = items.filter(item => item.severity === 'critical').length;
      const warningCount = items.filter(item => item.severity === 'warning').length;

      if (criticalCount > 0) {
        const criticalBtn = document.createElement('button');
        
  // Add tooltip on hover
  criticalBtn.title = "View critical issues";

        // criticalBtn.textContent = `Critical (${criticalCount})`;
        //  criticalBtn.innerHTML = `<span style="position: relative;" title="Critical"><img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/triangle-icon-sharp.svg" style="width: 50px; max-width: 50px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(334deg) brightness(103%) contrast(103%);"> <span style="position: absolute; width: 100%;right:0; left: 0; top: 66%;">${criticalCount}</span></span>`;
        // criticalBtn.style = `font-size:13px; background-color: ${sectionStates[type] === 'critical' ? '#E60000' : 'transparent'}; color: ${sectionStates[type] === 'critical' ? '#fff' : '#E60000'};`;
        criticalBtn.innerHTML = `<span>${criticalCount}</span>`;
        criticalBtn.style = `font-size:13px; border: 2px solid #E60000; color:#E60000; margin: 0 0 0 5px; width: 30px; height: 30px; min-width: 30px; min-height: 30px; border-radius: 2px;`;
        criticalBtn.onclick = (e) => { e.stopPropagation(); sectionStates[type] = sectionStates[type] === 'critical' ? 'expanded' : 'critical'; render(); };
        sectionControls.appendChild(criticalBtn);
      }

      if (warningCount > 0) {
        const warningBtn = document.createElement('button');
        // Add tooltip on hover
  warningBtn.title = "View all warnings";
        // warningBtn.textContent = `Warning (${warningCount})`;
        // warningBtn.innerHTML = `<span style="position: relative;" title="Warning"><img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/triangle-icon-sharp.svg" style="width: 50px; max-width: 50px; height: auto; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(334deg) brightness(103%) contrast(103%);"> <span style="position: absolute; width: 100%;right:0; left: 0; top: 66%;">${warningCount}</span></span>`;
        warningBtn.innerHTML = `<span>${warningCount}</span>`;
        warningBtn.style = `font-size:13px; border: 2px solid #e4a911; color:#e4a911; margin: 0 0 0 5px; width: 30px; height: 30px; min-width: 30px; min-height: 30px; border-radius: 2px;`;
        warningBtn.onclick = (e) => { e.stopPropagation(); sectionStates[type] = sectionStates[type] === 'warning' ? 'expanded' : 'warning'; render(); };
        sectionControls.appendChild(warningBtn);
        

if (type === 'Heading') {
    const treeBtn = document.createElement('button');
    // treeBtn.textContent = 'View Tree';
    // Add tooltip on hover
  treeBtn.title = "View heading hierarchy";
      treeBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/view-icon.svg" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(37%) sepia(98%) saturate(876%) hue-rotate(162deg) brightness(99%) contrast(101%);">`;
    // treeBtn.style = buttonStyle('#0097cc');
    treeBtn.style = `font-size:13px; border: 2px solid #0097cc; color:#0097cc; margin: 0 0 0 5px; width: 30px; height: 30px; min-width: 30px; min-height: 30px; border-radius: 2px;`;
    treeBtn.onclick = (e) => {
        e.stopPropagation();
        const existingTree = section.querySelector('.heading-tree-view');
        if (existingTree) {
            existingTree.remove();
        } else {
            const treeData = buildHeadingTree();
            const treeContainer = document.createElement('div');
            treeContainer.className = 'heading-tree-view';
            treeContainer.style = 'margin-top: 10px; background: #f3f6da; padding: 8px; border-radius: 2px; border: 1px solid #ccc; max-height:200px; overflow:auto;';
            treeContainer.appendChild(renderHeadingTree(treeData));
            section.appendChild(treeContainer);
        }
    };
    sectionControls.appendChild(treeBtn);
}

      }
let helpTextEl = document.createElement('div');
helpTextEl.style = 'font-size: 12px; color: #555; background: #eff4fb; padding: 10px; display: none;';

helpTextEl.textContent = issueHelpText[type] || '';

if (issueHelpText[type]) {
    const helpBtn = document.createElement('button');
    
// Add tooltip on hover
  helpBtn.title = "Help";

     helpBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/help-icon.svg" title="Help" style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(37%) sepia(98%) saturate(876%) hue-rotate(162deg) brightness(99%) contrast(101%);">`;
    // helpBtn.style = buttonStyle('#0097cc');
     helpBtn.style = `font-size:14px; border: 2px solid #0097cc; color:#0097cc; margin: 0 0 0 5px; width: 30px; height: 30px; min-width: 30px; min-height: 30px; border-radius: 2px;`;
    helpBtn.onclick = (e) => {
        e.stopPropagation();
        helpTextEl.style.display = helpTextEl.style.display === 'none' ? 'block' : 'none';
    };
    sectionControls.appendChild(helpBtn);
}
      section.appendChild(helpTextEl);
      header.appendChild(sectionControls);

      if (sectionStates[type] === 'collapsed') {
          list.appendChild(section);
          return;
      }

      const content = document.createElement('div');
      content.style = 'padding:10px; max-height: 250px; overflow-y: auto;';


      filteredItems.forEach(item => {
  // 1) Build the issue card
  const issueCard = document.createElement('div');
  issueCard.style = ` margin-top:8px; padding:6px; border-left:4px solid ${item.severity === 'critical' ? '#E60000' : item.severity === 'warning' ? '#f0ad4e' : item.severity === 'good' ? '#28a745' : '#5bc0de'}; background: ${item.severity === 'good' ? '#e6ffe6' : '#fdfdfd'}; border-radius:4px; font-size:13px`;
  const sev = (typeof item.severity === 'string' && item.severity.length > 0) ? item.severity.toUpperCase() : '';
  issueCard.innerHTML = `<strong>${sev}:</strong> ${item.message}`;

  // 2) Optional snippet block
  if (item.snippet) {
    const snippetEl = document.createElement('div');
    snippetEl.style = `font-size: 12px; margin-top: 5px; color: #555;
                       background: #eee; padding: 4px; border-radius: 3px; overflow-x: auto;
                       white-space: pre-wrap; word-break: break-all;`;
    const sn = (item.snippet || '').trim();
    snippetEl.textContent = sn.substring(0, 200) + (sn.length > 200 ? '...' : '');
    issueCard.appendChild(snippetEl);
   
// --- Video poster thumbnail (place right after issueCard.appendChild(snippetEl);) ---
if (type === 'Video') {
  var poster =
    (item && item.thumbnail) ||
    ((item && item.element && item.element.getAttribute)
      ? item.element.getAttribute('poster')
      : '') ||
    '';

  if (poster) {
    var posterWrap = document.createElement('div');
    posterWrap.style.marginTop = '6px';

    var link = document.createElement('a');
    link.href = poster;
    link.target = '_blank';
    link.rel = 'noopener';

    var thumb = document.createElement('img');
    thumb.alt = (item && item.title) ? item.title : 'Video thumbnail';
    thumb.src = poster;
    thumb.loading = 'lazy';
    thumb.style.maxWidth = '100%';
    thumb.style.maxHeight = '140px';
    thumb.style.border = '1px solid #ddd';
    thumb.style.borderRadius = '4px';

    link.appendChild(thumb);
    posterWrap.appendChild(link);
    issueCard.appendChild(posterWrap); // or 'card' if thatÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s your variable name
  }
}


  }

  // 3) Thumbnail logic (compute + render)
  [thumb, thumbKind] = getIssueThumbnail(type, item.element);

  if (thumb) {
    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'issue-thumb';
    thumbWrap.style = 'margin-top:6px; display:flex; align-items:center; gap:8px;';

    if (thumbKind === 'image') {
      const preview = document.createElement('img');
      preview.src = thumb;
      preview.alt = (item.element && item.element.alt) ? item.element.alt : 'Image preview';
      preview.loading = 'lazy';
      preview.decoding = 'async';
      preview.style.maxWidth = '120px';
      preview.style.maxHeight = '90px';
      preview.style.border = '1px solid #ddd';
      preview.style.borderRadius = '4px';
      preview.style.background = '#fff';
      preview.onerror = () => {
        const ph = document.createElement('span');
        ph.textContent = 'ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â© preview unavailable';
        ph.style.fontSize = '12px';
        ph.style.color = '#666';
        preview.replaceWith(ph);
      };

      // OPTIONAL: if you do NOT want image clicks to trigger highlight:
      // preview.onclick = (e) => e.stopPropagation();

      thumbWrap.appendChild(preview);

      // Quick "Open" button for the image
      const openBtn = document.createElement('button');
      openBtn.textContent = 'Open';
      openBtn.style = buttonStyle('#6c757d');
      openBtn.onclick = (e) => {
        e.stopPropagation();        // don't trigger card highlight
        window.open(thumb, '_blank', 'noopener');
      };
      thumbWrap.appendChild(openBtn);
    } else if (thumbKind === 'text') {
      const label = document.createElement('span');
      label.textContent = thumb;
      label.style.fontSize = '12px';
      label.style.color = '#555';
      thumbWrap.appendChild(label);
    }

    issueCard.appendChild(thumbWrap);
  }

  // 4) Hover/Click highlight behavior (use issueCard here)
  if (item.element || item.elementId) {
    issueCard.style.cursor = 'pointer';

    issueCard.onmouseenter = () => {
      if (item.element && isVisible(item.element)) {
        item.element.style.outline = '3px solid orange';
      }
    };

    issueCard.onmouseleave = () => {
      if (item.element && isVisible(item.element)) {
        item.element.style.outline = '';
      }
    };

    issueCard.onclick = (e) => {
      e.stopPropagation();
      if (item.element) {
        highlight(item.element);
      } else if (item.elementId) {
        const el = document.querySelector(`[data-accessibility-id="${item.elementId}"]`);
        if (el) highlight(el);
      }
    };
  }

  // 5) Append card to the section content
  content.appendChild(issueCard);
});


      section.appendChild(content);
      list.appendChild(section);
    });

    container.appendChild(list);
    
    let isDragging = false;
    let offsetX, offsetY;

    titleBar.onmousedown = (e) => {
        if (e.target.tagName === 'BUTTON') return;
        isDragging = true;
        offsetX = e.clientX - container.getBoundingClientRect().left;
        offsetY = e.clientY - container.getBoundingClientRect().top;
        container.style.userSelect = 'none';
        document.onmousemove = (e) => {
            if (isDragging) {
                container.style.left = `${e.clientX - offsetX}px`;
                container.style.top = `${e.clientY - offsetY}px`;
            }
        };
        document.onmouseup = () => {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
            container.style.userSelect = '';
        };
    };

    const scrollTopBtn = document.createElement('button');
      scrollTopBtn.title = "Scroll to Top";
    scrollTopBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/up-icon-bold.svg"  style="width: 20px; height: auto; filter: brightness(0) saturate(100%) invert(10%) sepia(70%) saturate(7496%) hue-rotate(1deg) brightness(105%) contrast(108%);">`;
    scrollTopBtn.style = `position: sticky; bottom: 10px; right: 10px; background:#fff; border: 2px solid #e60000; border-radius: 2px; width: 35px; height: 35px; cursor: pointer; display: none; float: right; z-index: 10;`;
    scrollTopBtn.onclick = () => { container.scrollTo({ top: 0, behavior: 'smooth' }); };
    container.appendChild(scrollTopBtn);

    container.onscroll = () => {
      if (container.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
      
    };
    
    document.body.appendChild(container);
    
const newPanel = document.getElementById('auditBalloon');
if (newPanel) newPanel.scrollTop = scrollTop;
updatePendingMessage(); // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ sync the banner text after every render


    setTimeout(() => {
  const btn = document.getElementById('checkKeywordBtn');
  if (btn) {
    btn.onclick = function() {
      const keyword = document.getElementById('keywordInput').value.trim();
      const resultSpan = document.getElementById('keywordResult');
      resultSpan.style.display = 'none';
      resultSpan.textContent = '';
      if (!keyword) {
        resultSpan.textContent = 'Please enter a keyword.';
        resultSpan.style.display = 'inline';
        return;
      }
      checkKeywordDensity(keyword);
      const bodyText = document.body.innerText || '';
      const words = bodyText.match(/\b\w+\b/g) || [];
      const totalWords = words.length;
      const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const keywordCount = (bodyText.match(keywordRegex) || []).length;
      const density = totalWords ? ((keywordCount / totalWords) * 100).toFixed(2) : 0;

      let status = '';
      let statusColor = '#0078D4';
      if (density < 1) {
        status = 'Low density';
        statusColor = '#e4a911';
      } else if (density > 2) {
        status = 'High density';
        statusColor = '#E60000';
      } else {
        status = 'Good density';
        statusColor = '#28a745';
      }

      resultSpan.innerHTML = `
        <div style="font-size:12px; line-height: 16px;">
          <span style="font-weight:bold">Keyword:</span> <span style="color:#0078D4;">${keyword}</span><br>
          <span style="font-weight:bold">Total words:</span> ${totalWords}<br>
          <span style="font-weight:bold">Keyword count:</span> ${keywordCount}<br>
          <span style="font-weight:bold">Density:</span> ${density}%<br>
          <span style="font-weight:bold">Status:</span> <span style="color:${statusColor}; font-weight:bold;">${status}</span>
          <div style="background:#eee; border-radius:4px; width:100px; height:8px; margin-top:4px;">
            <div style="background:${statusColor}; width:${Math.min(density,2)*50}px; height:8px; border-radius:4px;"></div>
          </div>
        </div>
      `;
      resultSpan.style.display = 'inline';
    };
  }
}, 0);

    
    
  }

function renderMinimizedButton() {
      const existing = document.getElementById('auditBalloon');
      if (existing) existing.remove();

      const minimizedBtn = document.createElement('div');
      minimizedBtn.title = "Open CheckMate";
      minimizedBtn.id = 'auditBalloon';
       minimizedBtn.style = `position: fixed; bottom: 20px; right: 20px; z-index: 9999; color: #fff; padding: 10px 15px; border-radius: 0.125rem; cursor: pointer; background-color: #fff; box-shadow: #e60000 0px 0px 0px 1px inset; border: 1px solid #e60000;`;
        minimizedBtn.innerHTML = `<img src="https://www.ubs.com/content/dam/content-fragments/html-custom-code/global-use/quality-checker/icons/online_search.svg" style="width: 24px; height: auto;">`;
      minimizedBtn.onclick = () => { isMinimized = false; render(); };
      document.body.appendChild(minimizedBtn);
  }
  function waitForPanelUpdate(panel) {
    return new Promise(resolve => {
        const observer = new MutationObserver(() => {
            observer.disconnect();
            resolve();
        });
        observer.observe(panel, { childList: true, subtree: true });
        // Fallback: resolve after 2 seconds if no mutation
        setTimeout(() => {
            observer.disconnect();
            resolve();
        }, 2000);
    });
}
function showAllTabPanels() {
    const tabPanels = document.querySelectorAll('[id^="tab-"]');
    tabPanels.forEach(panel => {
        panel.style.display = 'block';
        panel.setAttribute('aria-hidden', 'false');
    });
}

function restoreTabPanels() {
    // Restore the original visibility logic here
    // (You may need to track which panel was originally visible)
}
(async () => {
    showAllTabPanels();
    await runAudit();
    restoreTabPanels();
    render();
})();

/*async function auditAllTabs() {
    const tabHeaders = document.querySelectorAll('li.insectionnav__tab[role="tab"]');
    const originalActiveTab = document.querySelector('li.insectionnav__tab.insectionnav__tab--active');
    let allTabIssues = {};

    for (let i = 0; i < tabHeaders.length; i++) {
    // Activate tab
    tabHeaders[i].click();

    // Get the panel for this tab
    const panelId = tabHeaders[i].getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    // Wait for panel to update (if panel exists)
    if (panel) {
        await waitForPanelUpdate(panel);
    } else {
        // If no panel found, fallback to a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Run the audit
    await runAudit();

    // Store issues for this tab
    const tabLabel = tabHeaders[i].querySelector('.insectionnav__tabItem')?.innerText.trim() || `Tab${i+1}`;
    allTabIssues[tabLabel] = JSON.parse(JSON.stringify(issues));
}

        // Restore original tab
    if (originalActiveTab) originalActiveTab.click();

    return allTabIssues;
}

(async () => {
    // Uncomment one of the following lines depending on your needs:

    // To audit only the current tab (original behavior):
    // await runAudit();

    // To audit all tabs:
    const allTabIssues = await auditAllTabs();

    // Optionally: process or display allTabIssues
    // For now, you can log it to the console:
    console.log(allTabIssues);

    // If you want to render the results for the last tab, call render()
    render();
})();*/
async function preloadAllTabs() {
    const tabHeaders = document.querySelectorAll('li.insectionnav__tab[role="tab"]');
    const originalActiveTab = document.querySelector('li.insectionnav__tab.insectionnav__tab--active');

    for (let item = 0; item < tabHeaders.length; item++) {
        tabHeaders[item].click();
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for content to load
    }

    // Restore original tab
    if (originalActiveTab) originalActiveTab.click();
}
(async () => {
    // 1. Preload all tabs (so all content is loaded into DOM)
    await preloadAllTabs();

    // 2. Now run the audit (on all loaded content)
    await runAudit();

    // 3. Render the audit panel
    render();
})();


  // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ CHANGED: Wrapped the initial execution in an async IIFE
  (async () => {
    Object.keys(issues).forEach(key => issues[key] = []);
    await runAudit();
    render();
  })();

})();

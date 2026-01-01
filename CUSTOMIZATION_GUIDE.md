# Picker Wheel Customization System

This document explains how customization controls have been added to all picker wheel pages.

## Files Created

1. **`js/customization.js`** - Reusable JavaScript logic for all customization controls
2. **`_settings-panel.html`** - HTML snippet for the settings panel

## Pages with Full Customization

✅ **index.html** - Main I Picker Wheel
✅ **country-picker-wheel.html** - Country Picker

### Remaining Pages to Update:
- color-picker-wheel.html
- date-picker-wheel.html
- image-picker-wheel.html
- instagram-comment-picker.html
- letter-picker-wheel.html
- mlb-picker-wheel.html
- nba-picker-wheel.html
- nfl-picker-wheel.html
- number-picker-wheel.html
- state-picker-wheel.html
- team-picker-wheel.html
- yes-no-picker-wheel.html

## How to Add Customization to a Page

### Step 1: Include the Customization Script

Add this script tag **after** `wheel-engine.js` and **before** your page's custom script:

```html
<script src="js/utils.js"></script>
<script src="js/wheel-engine.js"></script>
<script src="js/customization.js"></script>  <!-- ADD THIS -->
<script>
  // Your page-specific code
</script>
```

### Step 2: Add the Settings Panel HTML

Insert the settings panel HTML **after the modal** and **before the "Other Tools" section**:

```html
</div> <!-- End modal -->

<!-- Settings Section -->
<div class="settings-section">
    <button class="settings-toggle" id="settings-toggle">
        <span>⚙️ Customization Settings</span>
        <span id="toggle-arrow" class="toggle-arrow">▼</span>
    </button>
    <div class="settings-panel" id="settings-panel">
        <div class="settings-grid">
            <!-- Copy all setting items from _settings-panel.html -->
        </div>
    </div>
</div>

<!-- SEO Content / Other Tools -->
```

### Step 3: Initialize Customization in JavaScript

After creating your wheel object, call `initWheelCustomization()`:

```javascript
// Create wheel
const wheel = new PickerWheel('wheel-canvas', {
    onSpinStart: () => { /* ... */ },
    onSpinEnd: (winner) => { /* ... */ }
});

// Initialize customization
const settings = initWheelCustomization(wheel, 'page-name-settings');

// Update spin button to use settings
spinBtn.addEventListener('click', () => {
    if (/* validation */) {
        wheel.spin(settings.spinDuration * 1000, settings.spinSpeed);
    }
});
```

### Step 4: Center the Wheel Container

The wheel container is already centered in `css/style.css` at 500px with `margin: 0 auto`.

## Customization Features

### ⚙️ Spin Settings
- **Spin Duration** (1.5s - 8s)
- **Spin Speed** (1x - 10x)
- **Confetti Toggle**

### 🎨 Appearance Settings (Instant Apply)
- **Theme Colors** - Dynamic color palette (2-12 colors)
- **Center Image** - URL or file upload
- **Font Style** - Family + color picker
- **Font Size** - Slider (10-40px)
- **Border Thickness** - Slider (0-10px)
- **Pointer Design** - Outer and inner color pickers

## Technical Details

### localStorage Keys
Each page uses its own storage key:
- `picker-settings` - Main index.html
- `country-picker-settings` - Country picker
- `{page-name}-settings` - Other pages

### Instant Application
Changes are applied via:
1. `wheel.updateConfig()` - Updates wheel appearance
2. Dynamic CSS injection - Updates pointer colors
3. `Utils.storage.set()` - Persists settings

### Wheel Position
- Container: `.wheel-container` at 500px max-width
- Centering: `margin: 0 auto`
- Spin button: Centered with `position: absolute` + `transform: translate(-50%, -50%)`
- Hidden during spin: `.wheel-container.spinning .spin-btn-container { opacity: 0 }`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Edge, Safari)
- localStorage API required
- HTML5 canvas required
- File API for image uploads

## Notes

- All settings are optional
- If elements don't exist, the code gracefully skips them
- Settings persist across page reloads
- Mobile responsive (wheel scales down automatically)

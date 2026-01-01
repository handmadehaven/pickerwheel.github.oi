# Advanced Settings Implementation Guide

This guide explains how to implement the comprehensive advanced settings system across all picker wheel pages.

## 📁 Files Created

### CSS Files
1. **`css/advanced-settings.css`** - Styles for advanced settings panel
2. **`css/button-animations.css`** - Spin button animation styles

### JavaScript Files
1. **`js/advanced-settings.js`** - Complete logic for all advanced features

### HTML Templates
1. **`_advanced-settings-panel.html`** - HTML structure for advanced settings

## 🎯 Features Implemented

### 1. **Spin Behavior**
- ⚡ **Spinning Speed Level** (1-10): Controls rotation multiplier
- ⏱️ **Spinning Duration** (1-30s): Animation length
- ⏹️ **Manual Stop**: Click button to stop (max 1 minute)
- 🎭 **Mystery Spin**: Hides text during spin
- 🎲 **Random Initial Angle**: Randomizes wheel position
- 🔄 **Initial Spinning**: Slow idle rotation on page load

### 2. **Confetti & Sound**
- 🎊 Confetti toggle
- 🔊 Sound effects toggle
- 🎯 Spin count display

### 3. **Background**
- 🎨 **Color**: Solid background color
- 🖼️ **Image**: Upload or URL
- 🌈 **Gradient**: Two-color gradient

### 4. **Spin Button**
- 🎨 **8 Color Presets**: Including gradients
- ✨ **6 Animations**: Pulse, Bounce, Spin, Glow, Shake, None

### 5. **Banner/Logo**
- 🏷️ Show/hide header
- 🖼️ Custom logo image
- ✍️ Custom banner text

## 🚀 How to Implement

### Step 1: Add CSS Files

In your HTML `<head>`, add:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/advanced-settings.css">
<link rel="stylesheet" href="css/button-animations.css">
```

### Step 2: Add HTML Structure

After your existing settings panel, add the advanced settings HTML from `_advanced-settings-panel.html`.

Or insert manually:
```html
<!-- Copy content from _advanced-settings-panel.html -->
```

### Step 3: Add JavaScript

Add the script **after** `wheel-engine.js` and **before** your page script:

```html
<script src="js/utils.js"></script>
<script src="js/wheel-engine.js"></script>
<script src="js/advanced-settings.js"></script>
<script>
  // Your page script
</script>
```

### Step 4: Initialize in Your Code

```javascript
// Create wheel
const wheel = new PickerWheel('wheel-canvas', {
    onSpinStart: () => {
        advControls.showManualStopButton();
        advControls.incrementSpinCount();
    },
    onSpinEnd: (winner) => {
        advControls.hideManualStopButton();
        if (advControls.settings.confetti) {
            Utils.triggerConfetti();
        }
        if (advControls.settings.sound) {
            Utils.playSound('win');
        }
        // ... show winner
    }
});

// Initialize advanced settings
const advControls = initAdvancedSettings(wheel, 'page-name-adv-settings');

// Update spin button to use advanced settings
spinBtn.addEventListener('click', () => {
    const duration = advControls.settings.duration * 1000;
    const speed = advControls.settings.speedLevel;
    wheel.spin(duration, speed);
});
```

## 📊 Settings Storage

Settings are saved to localStorage with keys:
- `{page-name}-adv-settings` - Advanced settings
- Includes all user preferences

## 🎨 Customization

### Adding Custom Button Colors

Edit `_advanced-settings-panel.html`:

```html
<div class="color-option" data-color="#your-color" 
     style="background:#your-color;"></div>
```

### Adding Custom Animations

1. Add CSS animation in `css/button-animations.css`
2. Add option in HTML:
```html
<div class="animation-option" data-animation="your-anim">Your Name</div>
```

## 💡 Feature Details

### Manual Stop
When enabled, shows a red STOP button below the wheel during spin. Max duration: 1 minute.

### Mystery Spin
When enabled, wheel text becomes blurred or hidden during spin animation.

### Initial Spinning
Creates a slow, continuous rotation when page loads. Stops during active spins.

### Random Initial Angle
Randomizes wheel position when new items are added.

### Spin Count
Shows badge with total spin count in top-right corner.

### Background Options
- **Color**: Simple solid color
- **Image**: Upload or provide URL for background image
- **Gradient**: Two-color gradient (default: #667eea to #764ba2)

### Button Animations
- **Pulse**: Gentle scale in/out
- **Bounce**: Up and down movement
- **Spin**: Continuous rotation
- **Glow**: Pulsing shadow effect
- **Shake**: Rapid left/right shake
- **None**: No animation

## 🔧 Advanced Usage

### Access Settings Programmatically

```javascript
// Get current speed level
const speed = advControls.settings.speedLevel;

// Update setting
advControls.settings.mysterySpinEnabled = true;

// Increment spin count manually
advControls.incrementSpinCount();

// Show/hide manual stop button
advControls.showManualStopButton();
advControls.hideManualStopButton();
```

### Mystery Spin Implementation

Add to your wheel spin logic:

```javascript
if (advControls.settings.mysterySpin) {
    // Add blur/hide class to wheel
    document.querySelector('.wheel-container').classList.add('mystery');
}

// On spin end, remove it
document.querySelector('.wheel-container').classList.remove('mystery');
```

Add CSS:
```css
.wheel-container.mystery canvas {
    filter: blur(8px);
    opacity: 0.7;
}
```

## 📱 Mobile Optimization

All controls are responsive and touch-friendly:
- Toggle switches are large enough for touch
- Color pickers work on mobile browsers
- Range sliders have appropriate sizing

## 🎯 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## ⚠️ Notes

- Settings persist across page reloads via localStorage
- All color inputs use native browser color picker
- File uploads convert to base64 for storage
- Maximum manual stop duration: 60 seconds
- Initial spin uses minimal CPU (slow animation)

## 🐛 Troubleshooting

**Settings not saving?**
- Check localStorage is enabled
- Clear cache and reload

**Animations not working?**
- Verify `button-animations.css` is loaded
- Check browser console for errors

**Manual stop button not showing?**
- Ensure manual stop is enabled in settings
- Check that spin is actually active

## 📝 Example Implementation

See `index.html` and `country-picker-wheel.html` for complete working examples.

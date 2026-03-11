# Phase 3: Shared Navigation Update

## Context

- Shared nav: `docs/wireframes/_shared-navigation.js`
- NAV_FILE_MAP at line 73-94

## Overview

- **Priority:** P2
- **Status:** Pending
- **Effort:** 1h

Add product-tour entry to NAV_FILE_MAP and COMMAND_ITEMS in shared navigation.

## Changes

### 1. NAV_FILE_MAP

Add after `'billing': '20-billing.html'`:

```js
'product-tour': '21-product-tour.html'
```

### 2. COMMAND_ITEMS

Add tour command to command palette:

```js
{ label: 'Product Tour', icon: 'map', screen: 'product-tour', keywords: 'tour guide onboarding walkthrough help' }
```

## Implementation Steps

1. Read `_shared-navigation.js`
2. Add `'product-tour'` to NAV_FILE_MAP
3. Add tour to COMMAND_ITEMS array
4. Verify navigate('product-tour') works from 01-onboarding.html Step 5 tour CTA

## Todo

- [ ] Add product-tour to NAV_FILE_MAP
- [ ] Add tour to COMMAND_ITEMS
- [ ] Test navigation from onboarding → tour

## Success Criteria

- `navigate('product-tour')` from any page opens 21-product-tour.html
- Command palette search "tour" shows Product Tour option

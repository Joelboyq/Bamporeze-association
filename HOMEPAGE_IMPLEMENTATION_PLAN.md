# Homepage Implementation Plan

## Overview
This document outlines the plan to implement the new Home (Hero Page) for Bamporeze Association website based on the provided content requirements.

## Current Structure Analysis
- **Location**: `apps/web/src/app/[lang]/page.tsx`
- **Sections**: Hero, ImpactStats, AboutSectionOne, AboutSectionTwo, ProductsList, BlogHighlight, Reviews, TrustedCompanies
- **Backend**: Currently uses API calls from `utils/api.ts` - these will be commented out and replaced with mock data

## Implementation Tasks

### 1. Hero Section (`sections/homepage/hero.tsx`)
**Current**: Uses `getSlides()` API call
**Changes Needed**:
- Comment out API call
- Create mock slide data with tagline: "Empowering women. Protecting children. Transforming communities."
- Update description to match Bamporeze Association intro

### 2. "In the Green" About Section (NEW)
**Location**: Create new section or integrate into existing AboutSectionOne
**Content**: 
- Badge: "In the green"
- Description: "Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, which is committed to supporting vulnerable children, youth, women, and families through transformative approaches to alleviating poverty and building resiliency through a variety of programs ranging from education, health, child protection, environmental protection, and socio-economic empowerment."

### 3. Numbers/Infographics Section (`sections/homepage/impactStats.tsx`)
**Current**: Has 12 stats but needs updating
**Changes Needed**:
- Update all 12 statistics with exact numbers from requirements:
  1. 10,000+ women equipped with financial literacy
  2. 500 Self-help Groups
  3. 700+ youth trained in TVET
  4. 3+ Community-based ECDs
  5. 37+ Home-based ECDs
  6. 50+ awareness-raising campaigns
  7. 25,000+ trees planted
  8. 1,200 Energy-Saving Stoves
  9. 100 water harvesting tanks
  10. 300+ houses built
  11. 2 studies conducted
  12. 29 years of impact

### 4. "Who we are" Section (`sections/homepage/aboutSectionOne.tsx`)
**Current**: Has structure but needs content updates
**Changes Needed**:
- Update intro text: "At Bamporeze, we believe every child deserves protection, every woman deserves empowerment, and every family deserves hope. Together with communities, we turn challenges into opportunities for a brighter, sustainable future."
- Update "Our story" with full content provided
- Ensure Mission and Vision are correctly displayed

### 5. "Our Impact" Section (`sections/homepage/aboutSectionTwo.tsx`)
**Current**: Has structure but needs content updates
**Changes Needed**:
- Update tagline intro: "Our work is more than numbers, it's the story of families lifted from poverty, children growing up safe, and communities shaping brighter futures."
- Update achievement bullets with exact content
- Update "Beyond Numbers" section

### 6. "Our Programs" Section (`sections/homepage/productsList.tsx`)
**Current**: Shows 4 programs
**Changes Needed**:
- Update to show 5 programs:
  1. Education Support
  2. Healthcare Access
  3. Community Development
  4. Child Protection
  5. Environmental Protection
- Comment out API calls if any
- Use mock data

### 7. "Latest Stories and Updates" Section (`sections/homepage/blogHighlight.tsx`)
**Current**: Uses `getBlogHighlight()` and `getBlogs()` API calls
**Changes Needed**:
- Comment out API calls
- Create mock data with 2 success stories:
  1. Ishimwe's Story - "Building Her Future with Strength and Skill"
  2. Tuzamurane Self-Help Group - "Rising Together in Rulindo"
- Update section to display success stories instead of blog posts

### 8. Backend API Mocking (`utils/api.ts`)
**Changes Needed**:
- Comment out all actual API calls
- Create mock data functions that return simulated data
- Ensure all functions still work but return hardcoded data

### 9. Main Page Structure (`app/[lang]/page.tsx`)
**Changes Needed**:
- Reorganize sections in correct order:
  1. Hero
  2. "In the green" About section (or integrate into AboutSectionOne)
  3. Numbers/Infographics (ImpactStats)
  4. Who we are (AboutSectionOne)
  5. Our Impact (AboutSectionTwo)
  6. Our Programs (ProductsList)
  7. Latest Stories (BlogHighlight with success stories)
  8. Reviews (keep existing)
  9. TrustedCompanies (keep existing)

## Technical Considerations

### Mock Data Strategy
- Create mock data objects that match existing TypeScript interfaces
- Use realistic placeholder images from `/public/images/`
- Ensure all components render without errors

### API Call Commenting
- Use `//` comments to disable API calls
- Keep original code for future reference
- Add `// TODO: Restore API calls when backend is ready` comments

### Component Updates
- All components should work as client or server components as they currently are
- Maintain existing styling patterns
- Ensure responsive design is preserved

## Files to Modify

1. `apps/web/src/app/[lang]/page.tsx` - Main page structure
2. `apps/web/src/sections/homepage/hero.tsx` - Hero section
3. `apps/web/src/sections/homepage/impactStats.tsx` - Numbers section
4. `apps/web/src/sections/homepage/aboutSectionOne.tsx` - Who we are
5. `apps/web/src/sections/homepage/aboutSectionTwo.tsx` - Our Impact
6. `apps/web/src/sections/homepage/productsList.tsx` - Our Programs
7. `apps/web/src/sections/homepage/blogHighlight.tsx` - Latest Stories
8. `apps/web/src/utils/api.ts` - Mock API functions
9. `apps/web/src/components/units/heroSlider.tsx` - May need updates for mock data

## Success Criteria

- [ ] All sections display correct content from requirements
- [ ] No API calls are made (all commented out)
- [ ] Mock data displays correctly
- [ ] Page renders without errors
- [ ] Responsive design maintained
- [ ] All 12 infographic numbers are correct
- [ ] Both success stories are displayed
- [ ] Mission and Vision are visible
- [ ] All 5 programs are listed

## Notes

- User specified: "we will not use backend instead we will comment out some stuffs while making some that looks like simulation do it carefully"
- This means we need to be careful to preserve the original API code while making it non-functional
- Mock data should look realistic and match the expected data structures


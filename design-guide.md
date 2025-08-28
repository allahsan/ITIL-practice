# ITIL Practice Platform - Design Guide 🎨

## UI/UX Design Documentation

### 📐 Wireframe Structure

```
┌─────────────────────────────────────────────────────────┐
│                      HEADER                             │
│  ┌───────────────────────────────────────────────────┐  │
│  │  ITIL Foundation Practice Exams                   │  │
│  │  [Subtitle: Master ITIL concepts...]              │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    LANDING PAGE                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Welcome Card                         │  │
│  │  ┌─────────────────────────────────────────────┐ │  │
│  │  │  📚 80 Questions | ⏱️ 60 Min | ✅ 65% Pass  │ │  │
│  │  └─────────────────────────────────────────────┘ │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐ │  │
│  │  │  [Full Exam Mode]                           │ │  │
│  │  │  [Sample 1] [Sample 2]                      │ │  │
│  │  └─────────────────────────────────────────────┘ │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐ │  │
│  │  │  [Quick Practice]                           │ │  │
│  │  │  [10 Questions] [20 Questions]              │ │  │
│  │  └─────────────────────────────────────────────┘ │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐ │  │
│  │  │  [Review Mode]                              │ │  │
│  │  │  [Start Review]                             │ │  │
│  │  └─────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    QUIZ INTERFACE                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Question 1 of 40        Timer: 59:45  [Submit]  │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  Question Text Here...                           │  │
│  │                                                   │  │
│  │  ○ Option A                                      │  │
│  │  ○ Option B                                      │  │
│  │  ○ Option C                                      │  │
│  │  ○ Option D                                      │  │
│  │                                                   │  │
│  │  [Flag] [Clear]            [Previous] [Next]     │  │
│  ├───────────────────────────────────────────────────┤  │
│  │  Question Navigation Grid                        │  │
│  │  [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]       │  │
│  │  [11][12][13][14][15][16][17][18][19][20]       │  │
│  │  [21][22][23][24][25][26][27][28][29][30]       │  │
│  │  [31][32][33][34][35][36][37][38][39][40]       │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    RESULTS PAGE                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Exam Results                        │  │
│  │  ┌─────────────────────────────────────────────┐ │  │
│  │  │         32/40 (80%)                         │ │  │
│  │  │         [PASSED]                            │ │  │
│  │  └─────────────────────────────────────────────┘ │  │
│  │                                                   │  │
│  │  ✓ Correct: 32  ✗ Incorrect: 8  ⏱️ Time: 45:23  │  │
│  │                                                   │  │
│  │  [Review Answers]  [Retake]  [Home]             │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Primary Blue**: `#2c3e50` - Headers, primary buttons
- **Secondary Blue**: `#3498db` - Links, active states
- **Success Green**: `#27ae60` - Correct answers, pass status
- **Danger Red**: `#e74c3c` - Incorrect answers, fail status
- **Warning Orange**: `#f39c12` - Flagged items, warnings

#### Neutral Colors
- **Light Gray**: `#ecf0f1` - Background
- **Medium Gray**: `#bdc3c7` - Borders, disabled states
- **Dark Gray**: `#7f8c8d` - Secondary text
- **White**: `#ffffff` - Cards, content areas
- **Dark**: `#34495e` - Primary text

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

#### Font Sizes
- **Heading 1**: 2rem (32px)
- **Heading 2**: 1.5rem (24px)
- **Heading 3**: 1.25rem (20px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **Extra Small**: 0.75rem (12px)

#### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Buttons, labels
- **Semibold**: 600 - Headings
- **Bold**: 700 - Emphasis

### Spacing System

Using a consistent 8px grid:
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **xxl**: 48px (3rem)

### Component Styles

#### Cards
- Background: White
- Border-radius: 8px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.12)`
- Hover shadow: `0 3px 6px rgba(0,0,0,0.15)`

#### Buttons
- Height: 40px (standard), 32px (small), 48px (large)
- Border-radius: 8px
- Padding: 8px 24px
- Font-weight: 500
- Transition: 300ms ease

##### Button States
- **Default**: Background color at 100%
- **Hover**: Slight elevation, shadow
- **Active**: Scale 0.98
- **Disabled**: Opacity 0.5

#### Form Elements
- Input height: 40px
- Border: 2px solid `#bdc3c7`
- Border-radius: 4px
- Focus border: `#3498db`
- Padding: 8px 12px

#### Question Navigation Grid
- Grid item size: 50px × 50px
- Gap: 8px
- States:
  - Not visited: Gray border
  - Current: Blue background
  - Answered: Green background
  - Flagged: Orange background

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Mobile: 320px - 767px (default) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) { }
```

### Mobile Adaptations
- Single column layout
- Full-width buttons
- Collapsible navigation
- Larger touch targets (min 44px)
- Simplified question grid (5 columns)

### Interaction States

#### Timer States
- **Normal** (>10 min): Default blue
- **Warning** (5-10 min): Orange background
- **Danger** (<5 min): Red background, pulse animation

#### Question Options
- **Default**: White background, gray border
- **Hover**: Light blue background
- **Selected**: Blue border, light blue background
- **Correct** (review mode): Green border and background
- **Incorrect** (review mode): Red border and background

### Animations

#### Transitions
- **Fast**: 150ms - Hover states
- **Normal**: 300ms - Most transitions
- **Slow**: 500ms - Page transitions

#### Keyframes
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Accessibility

#### Color Contrast
- All text meets WCAG AA standards
- Primary text on white: 7.5:1 ratio
- White text on primary: 8.9:1 ratio

#### Focus Indicators
- Visible focus outline: 2px solid `#3498db`
- Offset: 2px
- Never remove outline without alternative

#### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Skip navigation links
- Descriptive button text

### Icons

Using emoji for simplicity and no dependencies:
- 📚 Education/Books
- ⏱️ Timer
- ✅ Success/Correct
- ❌ Error/Incorrect
- 🚩 Flag/Mark
- 📊 Statistics
- 🏠 Home
- 🔄 Refresh/Retry
- ⚡ Quick/Fast
- 📖 Read/Review

### Loading States

#### Skeleton Screens
- Gray animated placeholders
- Shimmer effect while loading
- Maintain layout structure

#### Progress Indicators
- Linear progress bar for exam completion
- Circular spinner for async operations
- Percentage text display

## 📱 Mobile-First Considerations

### Touch Targets
- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum
- Thumb-friendly zones for navigation

### Performance
- Lazy load images
- Minimize JavaScript execution
- Use CSS transforms for animations
- Optimize for 3G connections

### Offline Support
- Cache static assets
- Store progress locally
- Show offline indicator
- Queue actions for sync

## 🎯 User Experience Principles

1. **Clarity**: Clear visual hierarchy
2. **Feedback**: Immediate response to actions
3. **Consistency**: Uniform patterns throughout
4. **Efficiency**: Minimize clicks/taps
5. **Forgiveness**: Easy to recover from errors
6. **Accessibility**: Usable by everyone

## 🔄 Future Enhancements

- Dark mode support
- Custom themes
- Animation preferences
- High contrast mode
- Reduced motion option
- RTL language support
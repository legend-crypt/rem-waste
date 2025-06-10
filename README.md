# Rem Waste - Skip Booking Frontend Application

A modern React TypeScript application for booking waste management skips, built as a frontend take-home assignment. The application demonstrates clean architecture, responsive design, and modern React development practices.

## 🎯 Project Overview

This is a skip booking interface that integrates with the WeWantWaste API to display available waste disposal skips. Users can browse through different skip sizes, view pricing and availability, and select skips for booking. The application showcases a multi-step booking process with visual progress tracking.

## 🚀 My Approach

### Architecture Philosophy

I adopted a **separation of concerns** approach with clear distinction between:

- **Container Components** ([`src/components/`](src/components/)): Handle business logic and data fetching
- **Presentational Components** ([`src/presentational/`](src/presentational/)): Pure UI components focused on rendering
- **Custom Hooks** ([`src/hooks/`](src/hooks/)): Encapsulate data fetching and side effects
- **Utilities** ([`src/utils/`](src/utils/)): Reusable helper functions
- **Type Safety** ([`src/types/`](src/types/)): Comprehensive TypeScript interfaces

### Key Design Decisions

1. **Component Architecture**: Separated container logic from presentation for better testability and reusability
2. **Custom Hooks**: Used [`useSkips`](src/hooks/useSkips.ts) to encapsulate API logic and provide clean data interface
3. **TypeScript First**: Comprehensive type definitions in [`ISkip`](src/types/skip.ts) for type safety
4. **Responsive Design**: Mobile-first approach using Tailwind CSS utility classes
5. **Visual Feedback**: Clear selection states, loading indicators, and status badges
6. **Error Handling**: Graceful error states and loading management

## ✨ Key Features

### 📱 User Experience

- **Responsive Grid Layout**: Adapts to different screen sizes seamlessly
- **Visual Selection State**: Selected skips are highlighted with clear visual indicators
- **Status Indicators**: Color-coded availability badges (Available, Forbidden, Road Restricted)
- **Heavy Waste Support**: Special badges for skips that allow heavy waste
- **Progressive Enhancement**: Smooth animations and hover effects

### 🔧 Technical Features

- **Real-time API Integration**: Fetches live data from WeWantWaste API
- **Dynamic Image Mapping**: Contextual skip images based on size with fallback logic
- **Price Formatting**: Proper currency formatting with VAT calculation
- **Loading States**: Animated loading component with progress indicators
- **Multi-step Process**: Visual stepper showing booking progress

## 📁 File Structure

```
rem-waste/
├── 📄 Configuration & Setup
│   ├── package.json              # Dependencies and npm scripts
│   ├── vite.config.ts            # Vite configuration with React + Tailwind
│   ├── tsconfig.json             # TypeScript project references
│   ├── tsconfig.app.json         # App-specific TypeScript config
│   ├── tsconfig.node.json        # Node.js TypeScript config
│   ├── eslint.config.js          # ESLint configuration
│   └── .gitignore               # Git ignore patterns
│
├── 📄 Entry Points
│   ├── index.html               # HTML template with Vite integration
│   └── src/
│       ├── main.tsx             # React 19 app entry with StrictMode
│       ├── App.tsx              # Root component with layout
│       ├── index.css            # Tailwind CSS imports
│       ├── App.css              # Custom styles and animations
│       └── vite-env.d.ts        # Vite environment types
│
├── 🎨 Assets & Images
│   └── src/assets/
│       ├── react.svg            # React logo
│       └── images/              # Skip images by yard size
│           ├── 4-yarder-skip.jpg
│           ├── 6-yarder-skip.jpg
│           ├── 8-yarder-skip.jpg
│           ├── 12-yarder-skip.jpg
│           ├── 16-yarder-skip.jpg
│           ├── 20-yarder-skip.jpg
│           └── 40-yarder-skip.jpg
│
├── 🧩 Container Components (Business Logic)
│   └── src/components/
│       ├── loader/
│       │   └── index.tsx        # Animated loading component with skip icon
│       ├── skip/
│       │   └── Listings.tsx     # Data fetching container for skip listings
│       └── stepper/
│           └── index.tsx        # Multi-step progress indicator
│
├── 🎭 Presentational Components (UI Only)
│   └── src/presentational/skip/
│       ├── Listings.tsx         # Skip listings with selection state
│       ├── Listing.tsx          # Individual skip card with full UI logic
│       └── ListingGrid.tsx      # Responsive grid layout wrapper
│
├── 🎣 Custom Hooks (Data Layer)
│   └── src/hooks/
│       └── useSkips.ts          # API integration hook with loading states
│
├── 🔧 Utilities (Helper Functions)
│   └── src/utils/
│       └── skip.ts              # Price formatting, status logic, image mapping
│
└── 📝 Type Definitions (Type Safety)
    └── src/types/
        └── skip.ts              # Skip interface and component prop types
```

### Component Hierarchy & Data Flow

```
App (Layout & State)
├── Stepper (Progress UI)
└── Skips (Container - API Logic)
    ├── Loader (Loading State)
    └── Listings (Presentational - Selection State)
        └── ListingGrid (Layout)
            └── Listing (Individual Skip Cards)
```

## 🛠️ Technical Implementation

### Core Technologies

- **React 19.1.0**: Latest React with concurrent features and improved TypeScript support
- **TypeScript 5.8.3**: Full type safety with strict configuration
- **Vite 6.3.5**: Fast development server and optimized builds
- **Tailwind CSS 4.1.8**: Utility-first styling with custom configuration

### Key Technical Decisions

#### 1. **Custom Hook Pattern** ([`useSkips`](src/hooks/useSkips.ts))

```typescript
// Encapsulates API logic with clean interface
const { skips, loading, error } = useSkips();
```

#### 2. **Type-Safe Props** ([`ISkipLisingProps`](src/types/skip.ts))

```typescript
// Ensures component contract compliance
interface ISkipLisingProps {
  skip: ISkip;
  selected: number;
  setSelected: (id: number) => void;
}
```

#### 3. **Utility Functions** ([`skip.ts`](src/utils/skip.ts))

```typescript
// Reusable business logic
formatPrice(price: number)        // Currency formatting
getStatus(skip: ISkip)           // Status determination
getSkipImage(size: number)       // Image mapping with fallbacks
```

#### 4. **Responsive Design Strategy**

- Mobile-first approach with responsive breakpoints
- Flexible grid system using CSS Grid and Flexbox
- Progressive enhancement for larger screens

## 🎨 Design & UX Decisions

### Visual Design

- **Color Scheme**: Indigo-based palette for professional appearance
- **Status Colors**: Semantic color coding (green=available, red=forbidden, yellow=restricted)
- **Interactive States**: Clear hover, focus, and selection indicators
- **Typography**: Consistent text hierarchy with proper contrast ratios

### User Experience

- **Selection Feedback**: Immediate visual feedback on skip selection
- **Loading Experience**: Engaging animated loader with progress indicators
- **Error Prevention**: Disabled states for unavailable options
- **Accessibility**: Semantic HTML and ARIA patterns

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Clone and install
git clone <repository-url>
cd rem-waste
npm install

# Start development server
npm run dev
# → Opens http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Features Showcase

### Skip Selection Interface

- **Visual Cards**: Each skip displays size, price, location, and availability
- **Selection State**: Selected skips are highlighted with checkmarks and color changes
- **Status Badges**: Clear indicators for availability and restrictions
- **Price Display**: VAT-inclusive pricing with proper currency formatting

### Loading Experience

- **Animated Loader**: Custom skip-themed loading animation
- **Progress Indicators**: Visual feedback during data fetching
- **Error Handling**: Graceful error states (implemented in hook)

### Responsive Design

- **Mobile Optimized**: Touch-friendly interface with appropriate sizing
- **Desktop Enhanced**: Larger cards and improved hover states
- **Grid Layout**: Automatic responsive grid that adapts to screen size

## 🔍 Code Quality Features

### TypeScript Integration

- **Strict Mode**: Enabled strict TypeScript checking
- **Interface Definitions**: Comprehensive type coverage
- **Type Safety**: Catch errors at compile time

### Modern React Patterns

- **Functional Components**: Hooks-based architecture
- **Custom Hooks**: Reusable stateful logic
- **Component Composition**: Clear separation of concerns

### Development Experience

- **Fast Refresh**: Instant feedback during development
- **ESLint Integration**: Consistent code quality
- **Vite Optimization**: Fast builds and tree-shaking

## 🎯 Assignment Requirements Met

✅ **Clean Code Architecture**: Separated concerns with clear component hierarchy  
✅ **Modern React Practices**: Hooks, functional components, TypeScript  
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS  
✅ **API Integration**: Real-time data fetching with error handling  
✅ **User Experience**: Intuitive interface with visual feedback  
✅ **Code Organization**: Logical file structure and naming conventions  
✅ **Type Safety**: Comprehensive TypeScript implementation  
✅ **Performance**: Optimized builds and efficient rendering

## 🔮 Future Enhancements

Given more time, I would implement:

- **Unit Testing**: Jest + React Testing Library test suite
- **E2E Testing**: Cypress or Playwright integration
- **State Management**: Redux Toolkit for complex state
- **Form Validation**: Comprehensive booking form with validation
- **Accessibility**: Enhanced ARIA support and keyboard navigation
- **Performance**: React.memo, useMemo for optimization
- **Error Boundaries**: Graceful error handling
- **Internationalization**: Multi-language support

## 💭 Reflection

This assignment demonstrates my approach to frontend development:

1. **Planning First**: Analyzed requirements and planned component structure
2. **Type Safety**: Used TypeScript throughout for better development experience
3. **Component Design**: Separated presentational and container components
4. **User Experience**: Focused on intuitive interactions and visual feedback
5. **Code Quality**: Maintained clean, readable, and maintainable code
6. **Modern Practices**: Leveraged latest React patterns and tooling

The result is a production-ready component that can be easily extended and maintained.

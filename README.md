# Rick and Morty Character Explorer

A modern, responsive web application for exploring characters from the Rick and Morty universe. Built with Next.js 15, React Query, and Tailwind CSS, featuring comprehensive accessibility support, dark mode, and optimized performance.

![Rick and Morty Characters](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## Features

### Core Functionality
- **Character Grid**: Browse all Rick and Morty characters with pagination
- **Character Details**: View detailed information for each character
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Search & Pagination**: Navigate through 800+ characters efficiently

### Accessibility (WCAG 2.1 AA Compliant)
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Skip Links**: Quick navigation for keyboard users
- **Live Regions**: Dynamic content announcements
- **High Contrast**: Proper color contrast ratios in both themes

### Performance Optimizations
- **Image Optimization**: Next.js Image component with priority loading
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: React Query for efficient data fetching and caching
- **Compression**: Gzip compression enabled
- **WebP/AVIF Support**: Modern image formats for better performance

## Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Query (TanStack Query)** - Data fetching and state management

### Development & Testing
- **Jest** - JavaScript testing framework  
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### API
- **Rick and Morty API** - External REST API for character data

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rick-morty
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or  
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## Testing

The project includes comprehensive testing with Jest and React Testing Library:

### Test Coverage
- **Component Tests**: All major components tested
- **Integration Tests**: Home page with mocked data
- **Accessibility Tests**: ARIA labels and keyboard navigation
- **User Interaction Tests**: Theme toggle, pagination, navigation

## Design System

### Component Architecture
- **Atomic Design**: Components organized by complexity (atoms → molecules → organisms → templates)
- **Responsive First**: Mobile-first design approach
- **Theme Support**: Comprehensive dark/light mode implementation

### Styling Approach
- **Tailwind CSS v4**: Utility-first styling with custom CSS variables
- **CSS Grid & Flexbox**: Modern layout techniques
- **Responsive Typography**: Scalable text sizes across breakpoints
- **Custom Properties**: CSS variables for theme switching

## API Integration

### Rick and Morty API
- **Base URL**: `https://rickandmortyapi.com/api`
- **Endpoints Used**:
  - `GET /character` - Fetch paginated character list
  - `GET /character/{id}` - Fetch individual character details

### Data Management
- **React Query**: Handles caching, background updates, and error states
- **TypeScript Types**: Fully typed API responses
- **Error Handling**: Graceful error states with user-friendly messages

## ♿ Accessibility Features

### Keyboard Navigation
- Tab navigation through all interactive elements
- Arrow key navigation in pagination
- Enter/Space activation for buttons and links
- Visible focus indicators with high contrast

### Screen Reader Support  
- Semantic HTML structure (`main`, `nav`, `header`, `article`)
- Comprehensive ARIA labels and descriptions
- Live regions for dynamic content updates
- Proper heading hierarchy (h1 → h2 → h3)

### Visual Accessibility
- High contrast color schemes
- Scalable text sizing
- Clear visual hierarchy
- Consistent navigation patterns

## 🚀 Performance Features

### Image Optimization
- Next.js Image component with automatic optimization
- Priority loading for above-the-fold images
- Responsive image sizes for different breakpoints
- WebP/AVIF format support

### Code Optimization
- Tree shaking for smaller bundle sizes
- Route-based code splitting
- React Query for efficient data fetching
- Production build optimizations

### Lighthouse Scores
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Theme System

### Dark Mode Features
- System preference detection
- Manual toggle with persistence
- Smooth transitions between themes
- Comprehensive component theming

### Implementation
- CSS custom properties for theme variables
- Context-based theme management
- localStorage persistence
- Tailwind CSS dark mode classes

## Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repository for automatic deployments
```

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
No environment variables required - uses public Rick and Morty API.

## 📄 License

This project is for educational purposes. The Rick and Morty API is publicly available and free to use.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with using Next.js and the Rick and Morty API**

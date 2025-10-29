# Regalo App Landing Page

A modern, minimalist landing page for Regalo App built with Next.js 15, TypeScript, and Tailwind CSS.

## Brand Colors

- **Primary (White)**: `#FFFFFF` - Used for most backgrounds
- **Secondary (Gold)**: `#D4AF37` - Primary accent color
- **Tertiary (Red)**: `#DC143C` - Secondary accent color (minimal use)

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond (display), Inter (sans-serif)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Interactive Questionnaire
The landing page includes a multi-step interactive questionnaire that:
- Explains app features while collecting user feedback
- Saves responses to localStorage
- Includes 5 steps covering Calendar, Profile, Access, Reminders, and Share
- Accessible via the "Yes! Let's Go :)" CTA button

View responses at `/admin` or see [QUESTIONNAIRE.md](./QUESTIONNAIRE.md) for detailed documentation.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin page for viewing responses
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, etc.)
│   └── sections/         # Page sections (Hero, Features, etc.)
└── lib/                  # Utility functions
    ├── questionnaireData.ts      # Questionnaire structure
    └── questionnaireStorage.ts   # LocalStorage utilities
```

## Analytics Ready

All components are properly named and documented for future analytics integration with Google Analytics or Heap:

- Semantic HTML elements
- Descriptive data attributes
- Clear component naming
- Proper event tracking structure

## Development Notes

- Components are built to be reusable and modular
- All code and UI text is in English
- Buttons are placeholder (functionality to be added later)
- Modern rounded borders throughout
- Minimalist design approach
# regalo-landing

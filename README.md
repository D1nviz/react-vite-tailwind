# React + Vite + TailwindCSS Template

A modern React application template with TypeScript, TailwindCSS, and essential development tools.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 📚 **Storybook** - UI component development environment
- 🔍 **TypeScript** - Type safety and better DX
- 🧪 **Vitest** - Unit testing with Storybook integration
- 📡 **TanStack Query** - Data fetching and state management
- 🛠️ **Husky & lint-staged** - Git hooks for code quality
- 🎯 **ESLint & Prettier** - Code quality and formatting
- 🔄 **React Router** - Client-side routing
- 🎭 **Radix UI** - Accessible component primitives

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run Storybook
yarn storybook

# Build Storybook
yarn build-storybook
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   └── ui/            # Base UI components
├── lib/               # Utilities and configurations
│   ├── api/          # API client and queries
│   └── utils/        # Helper functions
├── layouts/           # Layout components
├── pages/            # Page components
│   └── [feature]/    # Feature-specific pages
└── providers/        # React context providers
```

## Development Tools

### Storybook

- UI component development environment
- Access at `http://localhost:6006`
- Includes a11y and test addons
- Auto-generates documentation

### Code Quality

- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- lint-staged for staged files

### API Integration

- TanStack Query for data fetching
- Ky for HTTP client
- Type-safe API responses
- Built-in error handling

## Git Hooks

- **pre-commit**: Runs ESLint and Prettier on staged files
- Automatically fixes formatting issues
- Blocks commit if there are unfixable issues

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn storybook` - Start Storybook
- `yarn build-storybook` - Build Storybook
- `yarn lint` - Run ESLint

### Styling

Uses TailwindCSS with:

- Custom color schemes
- Dark mode support
- Responsive design utilities
- Animation classes

## Shadcn UI Components

This template includes [Shadcn UI](https://ui.shadcn.com/), a collection of beautifully designed, accessible, and customizable React components:

- 🎨 **Beautifully designed** components that you can copy and paste into your apps
- ♿️ **Accessible** components following WAI-ARIA guidelines
- 🛠️ **Customizable** - components can be styled and modified to match your design
- 🔄 **Re-usable** - components can be copied and customized for your needs
- 🎯 **Type-safe** - built with TypeScript for better developer experience

### Available Components

Components are located in `src/components/ui/` and include:

- Button
- Dropdown Menu
- More components can be added using the Shadcn CLI

### Adding New Components

To add a new Shadcn component:

```bash
# Use the Shadcn CLI
npx shadcn-ui@latest add [component-name]
```

## Best Practices

1. **Component Development**
   - Use Storybook for component development
   - Write stories for all components
   - Include documentation and examples

2. **Code Organization**
   - Follow feature-based folder structure
   - Keep components small and focused
   - Use TypeScript for type safety

3. **State Management**
   - Use TanStack Query for server state
   - React Context for global UI state
   - Local state for component-specific data

## Contributing

1. Create a new branch
2. Make your changes
3. Run linting
4. Submit a pull request

## License

MIT

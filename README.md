# Next.js Scaffold

A modern, production-ready Next.js scaffold with all the essential tools and best practices pre-configured.

## 🚀 Tech Stack

This scaffold includes:

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Small, fast state management
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[ESLint](https://eslint.org/)** - Code linting

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (will be installed automatically if you don't have it)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-js-scaffold
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
next-js-scaffold/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Shadcn UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   ├── axios.ts           # Axios configuration
│   └── utils.ts           # Utility functions
├── store/
│   └── counter.ts         # Zustand store example
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Features Demonstrated

### 1. State Management with Zustand
Simple, lightweight global state management:
```typescript
// store/counter.ts
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

### 2. Form Validation with React Hook Form + Zod
Type-safe form handling with validation:
```typescript
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(formSchema),
});
```

### 3. Shadcn UI Components
Pre-built, customizable components that you own:
- Button with multiple variants
- Input fields
- Cards
- And many more can be added!

### 4. Axios Configuration
Pre-configured HTTP client with interceptors:
```typescript
import axiosInstance from '@/lib/axios';

const response = await axiosInstance.post('/api/endpoint', data);
```

### 5. Toast Notifications
Easy-to-use notifications:
```typescript
import { toast } from 'react-toastify';

toast.success('Success message!');
toast.error('Error message!');
```

## 🎯 Adding More Shadcn Components

To add more Shadcn UI components, you can manually copy them from [ui.shadcn.com](https://ui.shadcn.com/docs/components) or use the CLI:

```bash
# Install shadcn CLI (optional)
pnpm dlx shadcn@latest add [component-name]
```

## 🔧 Customization

### Tailwind Theme
Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Global Styles
Modify `app/globals.css` for custom CSS and CSS variables.

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Zod Documentation](https://zod.dev/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

## 📄 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Happy coding! 🚀**

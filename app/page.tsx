import { Card } from '@nextui-org/react';
import { Database, Github, Moon, Palette, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Authentication Ready',
    description: 'Next-Auth v4 integration with multiple providers',
    icon: Shield,
  },
  {
    title: 'Multiple Database Options',
    description: 'Supabase, PocketBase, PostgreSQL, and SQLite support',
    icon: Database,
  },
  {
    title: 'Modern UI Libraries',
    description: 'NextUI, shadcn/ui, and DaisyUI integration',
    icon: Palette,
  },
  {
    title: 'Dark Mode Support',
    description: 'Seamless dark/light mode switching',
    icon: Moon,
  },
  {
    title: 'Type Safety',
    description: 'TypeScript & Zod for runtime type checking',
    icon: Zap,
  },
  {
    title: 'Developer Experience',
    description: 'ESLint, Prettier, and Husky setup',
    icon: Github,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r leading-[2em] from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SSR (Simple Setup, Roger!)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The ultimate Next.js 14 starter template with everything you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
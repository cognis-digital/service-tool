export const techStackOptions = {
  frontend: [
    {
      id: 'react',
      name: 'React',
      description: 'Modern UI development with React ecosystem',
      features: ['Component-based', 'Virtual DOM', 'Large ecosystem'],
      price: 0,
      frameworks: ['Next.js', 'Remix', 'Gatsby']
    },
    {
      id: 'vue',
      name: 'Vue.js',
      description: 'Progressive JavaScript framework',
      features: ['Component-based', 'Reactive', 'Easy learning curve'],
      price: 0,
      frameworks: ['Nuxt.js', 'Vite', 'Quasar']
    },
    {
      id: 'svelte',
      name: 'Svelte',
      description: 'Compile-time framework with no runtime',
      features: ['No virtual DOM', 'True reactivity', 'Small bundle size'],
      price: 0,
      frameworks: ['SvelteKit', 'Elder.js']
    }
  ],
  backend: [
    {
      id: 'node',
      name: 'Node.js',
      description: 'JavaScript runtime for server-side development',
      features: ['Event-driven', 'Non-blocking I/O', 'Large ecosystem'],
      price: 0,
      frameworks: ['Express', 'NestJS', 'Fastify']
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Versatile language for backend development',
      features: ['Easy to learn', 'Rich libraries', 'AI/ML support'],
      price: 0,
      frameworks: ['FastAPI', 'Django', 'Flask']
    },
    {
      id: 'go',
      name: 'Go',
      description: 'High-performance systems programming',
      features: ['Fast compilation', 'Built-in concurrency', 'Static typing'],
      price: 0,
      frameworks: ['Gin', 'Echo', 'Fiber']
    }
  ],
  mobile: [
    {
      id: 'react-native',
      name: 'React Native',
      description: 'Cross-platform mobile development with React',
      features: ['Native components', 'Hot reloading', 'Large community'],
      price: 0,
      frameworks: ['Expo', 'React Native CLI']
    },
    {
      id: 'flutter',
      name: 'Flutter',
      description: 'Google\'s UI toolkit for mobile, web, and desktop',
      features: ['Single codebase', 'Custom widgets', 'Native performance'],
      price: 0,
      frameworks: ['Flutter SDK']
    }
  ],
  database: [
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database',
      features: ['ACID compliance', 'JSON support', 'Extensions'],
      price: 0
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'NoSQL document database',
      features: ['Flexible schema', 'Horizontal scaling', 'Rich queries'],
      price: 0
    }
  ]
};
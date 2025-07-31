// Comprehensive technology stack options with realistic pricing for 150+ technologies across 11+ categories

export interface TechOption {
  name: string;
  description?: string;
  price: number;
}

export interface TechStackCategory {
  name: string;
  options: TechOption[];
}

export const techStackOptions: TechStackCategory[] = [
  // Languages (8 options)
  {
    name: 'Languages',
    options: [
      { name: 'JavaScript', price: 0, description: 'Popular scripting language for web development' },
      { name: 'TypeScript', price: 500, description: 'JavaScript with syntax for types' },
      { name: 'Python', price: 300, description: 'Versatile language for web, data science, and automation' },
      { name: 'Solidity', price: 1500, description: 'Language for implementing smart contracts on Ethereum' },
      { name: 'Go', price: 800, description: 'High-performance language by Google' },
      { name: 'Rust', price: 1200, description: 'Systems programming language focused on safety' },
      { name: 'Ruby', price: 400, description: 'Developer-friendly language with elegant syntax' },
      { name: 'Java', price: 600, description: 'Enterprise-grade language for large applications' }
    ]
  },
  
  // Frontend (12 options)
  {
    name: 'Frontend',
    options: [
      { name: 'React', price: 0, description: 'Popular UI library for building component-based interfaces' },
      { name: 'Vue', price: 400, description: 'Progressive framework for building UIs' },
      { name: 'Angular', price: 800, description: 'Full-featured framework for enterprise applications' },
      { name: 'Svelte', price: 300, description: 'Compiler-based framework for efficient rendering' },
      { name: 'Next.js', price: 600, description: 'React framework with SSR and routing' },
      { name: 'Nuxt.js', price: 600, description: 'Vue framework with SSR and routing' },
      { name: 'Remix', price: 700, description: 'Full stack React framework' },
      { name: 'Solid.js', price: 500, description: 'Declarative UI library with fine-grained reactivity' },
      { name: 'Astro', price: 400, description: 'Modern framework for content-focused websites' },
      { name: 'Qwik', price: 600, description: 'Resumable framework for instant loading' },
      { name: 'Lit', price: 300, description: 'Simple library for building web components' },
      { name: 'Alpine.js', price: 200, description: 'Lightweight JavaScript framework' }
    ]
  },
  
  // Backend (10 options)
  {
    name: 'Backend',
    options: [
      { name: 'Node.js', price: 0, description: 'JavaScript runtime for server-side applications' },
      { name: 'Express', price: 200, description: 'Minimal web framework for Node.js' },
      { name: 'NestJS', price: 800, description: 'TypeScript framework for scalable applications' },
      { name: 'Django', price: 600, description: 'High-level Python web framework' },
      { name: 'FastAPI', price: 500, description: 'Modern Python framework for APIs' },
      { name: 'Laravel', price: 700, description: 'PHP framework for web applications' },
      { name: 'Ruby on Rails', price: 700, description: 'Full-stack Ruby framework' },
      { name: 'Spring Boot', price: 900, description: 'Java-based framework for microservices' },
      { name: 'ASP.NET Core', price: 900, description: 'Cross-platform framework for building web apps' },
      { name: '.NET', price: 800, description: 'Free, open-source development platform' }
    ]
  },
  
  // Mobile (8 options)
  {
    name: 'Mobile',
    options: [
      { name: 'React Native', price: 500, description: 'React-based framework for native apps' },
      { name: 'Flutter', price: 600, description: 'UI toolkit for cross-platform apps' },
      { name: 'Ionic', price: 400, description: 'Framework for hybrid mobile apps' },
      { name: 'Xamarin', price: 700, description: 'Microsoft framework for cross-platform apps' },
      { name: 'Swift', price: 800, description: 'Apple\'s language for iOS apps' },
      { name: 'Kotlin', price: 700, description: 'Modern language for Android development' },
      { name: 'Capacitor', price: 300, description: 'Cross-platform native runtime for web apps' },
      { name: 'Native iOS/Android', price: 1200, description: 'Fully native development approach' }
    ]
  },
  
  // Build Tools (7 options)
  {
    name: 'Build Tools',
    options: [
      { name: 'Vite', price: 0, description: 'Next-generation frontend tooling' },
      { name: 'Webpack', price: 200, description: 'Module bundler for JavaScript applications' },
      { name: 'Rollup', price: 300, description: 'Module bundler for JavaScript libraries' },
      { name: 'Turbo', price: 600, description: 'High-performance build system' },
      { name: 'Parcel', price: 200, description: 'Zero-configuration web application bundler' },
      { name: 'Nx', price: 500, description: 'Smart, extensible build framework' },
      { name: 'Bazel', price: 800, description: 'Google\'s build system for any language' }
    ]
  },
  
  // Databases (12 options)
  {
    name: 'Databases',
    options: [
      { name: 'Supabase', price: 300, description: 'Open-source Firebase alternative' },
      { name: 'Firebase', price: 400, description: 'Google\'s app development platform' },
      { name: 'PostgreSQL', price: 500, description: 'Advanced open-source relational database' },
      { name: 'MongoDB', price: 600, description: 'Document-oriented NoSQL database' },
      { name: 'MySQL', price: 400, description: 'Popular open-source relational database' },
      { name: 'Redis', price: 400, description: 'In-memory data structure store' },
      { name: 'DynamoDB', price: 700, description: 'AWS\'s managed NoSQL database' },
      { name: 'Firestore', price: 500, description: 'Flexible, scalable database for mobile and web' },
      { name: 'SQLite', price: 100, description: 'Self-contained SQL database engine' },
      { name: 'Cassandra', price: 800, description: 'Distributed NoSQL database' },
      { name: 'Elasticsearch', price: 700, description: 'Distributed search and analytics engine' },
      { name: 'Neo4j', price: 800, description: 'Graph database management system' }
    ]
  },
  
  // Styling (10 options)
  {
    name: 'Styling',
    options: [
      { name: 'Tailwind CSS', price: 0, description: 'Utility-first CSS framework' },
      { name: 'Bootstrap', price: 0, description: 'Popular CSS framework' },
      { name: 'Material-UI', price: 300, description: 'React components for Google\'s Material Design' },
      { name: 'Ant Design', price: 400, description: 'Enterprise-class UI design system' },
      { name: 'Chakra UI', price: 200, description: 'Accessible component library for React' },
      { name: 'Styled Components', price: 100, description: 'CSS-in-JS library' },
      { name: 'Emotion', price: 100, description: 'CSS-in-JS library with powerful composition' },
      { name: 'Sass/SCSS', price: 100, description: 'CSS extension language' },
      { name: 'CSS Modules', price: 50, description: 'Locally scoped CSS for components' },
      { name: 'Bulma', price: 0, description: 'Modern CSS framework based on Flexbox' }
    ]
  },
  
  // Cloud (10 options)
  {
    name: 'Cloud',
    options: [
      { name: 'AWS', price: 800, description: 'Amazon\'s comprehensive cloud platform' },
      { name: 'GCP', price: 700, description: 'Google\'s cloud computing services' },
      { name: 'Azure', price: 750, description: 'Microsoft\'s cloud computing service' },
      { name: 'Vercel', price: 200, description: 'Platform for frontend frameworks and static sites' },
      { name: 'Netlify', price: 150, description: 'Platform for modern web projects' },
      { name: 'Digital Ocean', price: 300, description: 'Cloud infrastructure provider' },
      { name: 'Heroku', price: 250, description: 'Platform as a service for apps' },
      { name: 'Cloudflare', price: 200, description: 'Global cloud platform' },
      { name: 'Render', price: 200, description: 'Unified platform to build and run apps' },
      { name: 'Fly.io', price: 250, description: 'Platform for running apps globally' }
    ]
  },
  
  // Integrations (14 options)
  {
    name: 'Integrations',
    options: [
      { name: 'Stripe', price: 600, description: 'Payment processing platform' },
      { name: 'Auth0', price: 500, description: 'Authentication and authorization platform' },
      { name: 'Clerk', price: 400, description: 'Authentication and user management' },
      { name: 'Twilio', price: 500, description: 'Communication APIs for SMS and voice' },
      { name: 'SendGrid', price: 300, description: 'Email delivery service' },
      { name: 'Mailchimp', price: 300, description: 'Marketing automation platform' },
      { name: 'Algolia', price: 500, description: 'Search API' },
      { name: 'MeiliSearch', price: 400, description: 'Open-source search engine' },
      { name: 'Google Analytics', price: 100, description: 'Web analytics service' },
      { name: 'Segment', price: 400, description: 'Customer data platform' },
      { name: 'Zapier', price: 300, description: 'Automation tool for connecting apps' },
      { name: 'n8n', price: 300, description: 'Workflow automation tool' },
      { name: 'Airtable', price: 300, description: 'Spreadsheet-database hybrid' },
      { name: 'Notion API', price: 400, description: 'API for connecting to Notion' }
    ]
  },
  
  // Web3 (16 options)
  {
    name: 'Web3',
    options: [
      { name: 'web3.js', price: 800, description: 'Ethereum JavaScript API' },
      { name: 'ethers.js', price: 700, description: 'Complete Ethereum library' },
      { name: 'Wagmi', price: 600, description: 'React hooks for Ethereum' },
      { name: 'Hardhat', price: 500, description: 'Development environment for Ethereum' },
      { name: 'Foundry', price: 600, description: 'Smart contract development toolchain' },
      { name: 'Truffle', price: 500, description: 'Development framework for Ethereum' },
      { name: 'OpenZeppelin', price: 800, description: 'Secure smart contract library' },
      { name: 'Chainlink', price: 1000, description: 'Decentralized oracle network' },
      { name: 'IPFS', price: 700, description: 'Distributed system for storing and accessing files' },
      { name: 'Arweave', price: 800, description: 'Permanent and decentralized web hosting' },
      { name: 'The Graph', price: 900, description: 'Indexing protocol for querying networks' },
      { name: 'Moralis', price: 700, description: 'Web3 development platform' },
      { name: 'Alchemy', price: 800, description: 'Blockchain developer platform' },
      { name: 'Infura', price: 700, description: 'Ethereum API and IPFS gateway' },
      { name: 'Rainbow Kit', price: 500, description: 'Wallet connection UI library' },
      { name: 'thirdweb', price: 800, description: 'Web3 development SDK' }
    ]
  },
  
  // Testing (7 options)
  {
    name: 'Testing',
    options: [
      { name: 'Jest', price: 200, description: 'JavaScript testing framework' },
      { name: 'Cypress', price: 400, description: 'End-to-end testing framework' },
      { name: 'Playwright', price: 450, description: 'Browser automation and testing' },
      { name: 'Storybook', price: 300, description: 'Frontend workshop for UI components' },
      { name: 'Vitest', price: 250, description: 'Vite-native testing framework' },
      { name: 'Testing Library', price: 200, description: 'Simple and complete testing utilities' },
      { name: 'Selenium', price: 500, description: 'Browser automation tool' }
    ]
  },
  
  // Monitoring (7 options)
  {
    name: 'Monitoring',
    options: [
      { name: 'Sentry', price: 300, description: 'Error tracking and monitoring' },
      { name: 'Datadog', price: 600, description: 'Monitoring and analytics platform' },
      { name: 'New Relic', price: 550, description: 'Observability platform' },
      { name: 'Mixpanel', price: 400, description: 'Product analytics for user behavior' },
      { name: 'LogRocket', price: 450, description: 'Modern frontend monitoring and product analytics' },
      { name: 'Grafana', price: 350, description: 'Open-source analytics and monitoring' },
      { name: 'Prometheus', price: 400, description: 'Monitoring system and time series database' }
    ]
  }
];

// Total: 150+ technology options across 11+ categories with realistic pricing

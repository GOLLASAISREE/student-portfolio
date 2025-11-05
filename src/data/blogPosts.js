export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Micro-Frontends",
    excerpt: "Learn how to break down large React applications into smaller, manageable pieces using micro-frontend architecture.",
    content: `
      <p>Micro-frontends have revolutionized how we build large-scale web applications. In this comprehensive guide, we'll explore:</p>
      
      <h3>What are Micro-Frontends?</h3>
      <p>Micro-frontends extend the microservices concept to frontend development. Instead of building a monolithic frontend application, we break it down into smaller, more manageable pieces.</p>
      
      <h3>Benefits:</h3>
      <ul>
        <li><strong>Independent Deployment:</strong> Teams can deploy their features without coordinating with others</li>
        <li><strong>Technology Flexibility:</strong> Different teams can use different frameworks</li>
        <li><strong>Faster Development:</strong> Parallel development across multiple teams</li>
        <li><strong>Easier Maintenance:</strong> Smaller codebases are easier to understand and maintain</li>
      </ul>
      
      <h3>Implementation Strategies:</h3>
      <p>We'll cover Module Federation, Single-SPA, and iframe-based approaches with practical examples.</p>
      
      <p>By implementing micro-frontends, our team reduced deployment conflicts by 80% and improved development velocity by 40%.</p>
    `,
    author: "Alex Johnson",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Micro-Frontends", "Architecture", "Webpack"],
    image: "/images/blog/micro-frontends.jpg",
    featured: true,
    slug: "building-scalable-react-applications-with-micro-frontends"
  },
  {
    id: 2,
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.",
    content: `
      <p>TypeScript has become the de facto standard for large-scale JavaScript applications. Here are some advanced patterns:</p>
      
      <h3>Conditional Types</h3>
      <p>Learn how to create types that depend on other types, enabling powerful generic programming.</p>
      
      <h3>Template Literal Types</h3>
      <p>Manipulate string literal types to create type-safe APIs and utilities.</p>
      
      <h3>Advanced Utility Types</h3>
      <p>Go beyond the built-in utility types and create your own reusable type utilities.</p>
    `,
    author: "Alex Johnson",
    publishDate: "2024-01-08",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Advanced Patterns", "Best Practices"],
    image: "/images/blog/typescript-patterns.jpg",
    featured: true,
    slug: "mastering-typescript-advanced-patterns-and-best-practices"
  },
  {
    id: 3,
    title: "The Complete Guide to React Performance Optimization",
    excerpt: "Practical techniques to identify and fix performance bottlenecks in your React applications.",
    content: `
      <p>Performance is crucial for user experience. Here's how to optimize your React apps:</p>
      
      <h3>React.memo and useMemo</h3>
      <p>When and how to use these optimization techniques effectively.</p>
      
      <h3>Code Splitting</h3>
      <p>Reduce initial bundle size and improve load times.</p>
      
      <h3>Virtualization</h3>
      <p>Handle large lists efficiently without compromising performance.</p>
    `,
    author: "Alex Johnson",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Web Vitals"],
    image: "/images/blog/react-performance.jpg",
    featured: false,
    slug: "complete-guide-to-react-performance-optimization"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications: A Developer's Guide",
    excerpt: "Learn how to create web applications that are usable by everyone, regardless of abilities.",
    content: `
      <p>Accessibility isn't just a feature—it's a necessity. Here's how to build inclusive web applications:</p>
      
      <h3>Semantic HTML</h3>
      <p>The foundation of accessibility starts with proper HTML structure.</p>
      
      <h3>ARIA Attributes</h3>
      <p>When and how to use ARIA to enhance accessibility.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure your application is fully navigable without a mouse.</p>
    `,
    author: "Alex Johnson",
    publishDate: "2023-12-10",
    readTime: "7 min read",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "ARIA", "Inclusive Design"],
    image: "/images/blog/web-accessibility.jpg",
    featured: false,
    slug: "building-accessible-web-applications-developers-guide"
  }
];

export const blogCategories = ["All", "React", "TypeScript", "Accessibility", "Performance"];
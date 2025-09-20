// Website configuration system for easy customization
export const websiteConfig = {
  // Brand information
  brandName: "BrandName",
  tagline: "Transform Your Business",
  subtitle: "With Innovation",
  description: "Discover the power of modern solutions designed to elevate your business to new heights. Join thousands of satisfied customers worldwide.",
  
  // Hero section
  hero: {
    badge: "🚀 New Feature Launch",
    primaryCTA: "Get Started Free",
    secondaryCTA: "Watch Demo",
    trustedBy: "Trusted by industry leaders",
    companies: ["COMPANY", "BRAND", "CORP", "TECH"]
  },
  
  // Features section
  features: {
    title: "Why Choose Us?",
    subtitle: "We provide cutting-edge solutions that drive real results for your business.",
    items: [
      {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Built with modern technology for optimal performance and speed."
      },
      {
        icon: "Shield",
        title: "Secure & Reliable",
        description: "Enterprise-grade security with 99.9% uptime guarantee."
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Work together seamlessly with powerful collaboration tools."
      },
      {
        icon: "Heart",
        title: "User Friendly",
        description: "Intuitive design that your users will love and understand."
      }
    ]
  },
  
  // Testimonials section
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Don't just take our word for it. Here's what real customers think about our solution.",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechCorp",
        content: "This solution transformed our business. The results exceeded all expectations.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Designer, Creative Studio",
        content: "Beautiful design and incredible functionality. Exactly what we needed.",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "Founder, StartupXYZ",
        content: "The best investment we've made. Our productivity increased by 300%.",
        rating: 5
      }
    ]
  },
  
  // CTA section
  cta: {
    title: "Ready to Get Started?",
    subtitle: "Join thousands of satisfied customers and transform your business today.",
    primaryCTA: "Start Free Trial",
    secondaryCTA: "Contact Sales"
  },
  
  // Footer
  footer: {
    description: "Transforming businesses with innovative solutions since 2020.",
    sections: [
      {
        title: "Product",
        links: ["Features", "Pricing", "Security", "Updates"]
      },
      {
        title: "Company",
        links: ["About", "Blog", "Careers", "Contact"]
      },
      {
        title: "Support",
        links: ["Help Center", "Documentation", "Community", "Status"]
      }
    ]
  },
  
  // Navigation
  navigation: [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ],
  
  // Theme colors (can be customized for different website types)
  theme: {
    primary: "hsl(220, 100%, 50%)",
    secondary: "hsl(220, 14%, 96%)",
    accent: "hsl(220, 14%, 96%)",
    background: "hsl(0, 0%, 100%)",
    foreground: "hsl(220, 9%, 9%)"
  }
}

// Website type configurations
export const websiteTypes = {
  business: {
    brandName: "BusinessPro",
    tagline: "Grow Your Business",
    subtitle: "With Smart Solutions",
    description: "Streamline operations, boost productivity, and scale your business with our comprehensive suite of professional tools.",
    hero: {
      badge: "💼 Business Solutions",
      primaryCTA: "Start Free Trial",
      secondaryCTA: "Schedule Demo"
    }
  },
  
  portfolio: {
    brandName: "Creative Studio",
    tagline: "Showcase Your Work",
    subtitle: "With Style",
    description: "Present your creative projects in stunning detail with our portfolio platform designed for artists, designers, and creators.",
    hero: {
      badge: "🎨 Creative Portfolio",
      primaryCTA: "View Portfolio",
      secondaryCTA: "Get In Touch"
    }
  },
  
  ecommerce: {
    brandName: "ShopSmart",
    tagline: "Shop the Future",
    subtitle: "Today",
    description: "Discover amazing products at unbeatable prices. Fast shipping, easy returns, and exceptional customer service guaranteed.",
    hero: {
      badge: "🛍️ New Arrivals",
      primaryCTA: "Shop Now",
      secondaryCTA: "View Catalog"
    }
  },
  
  blog: {
    brandName: "ThoughtLeader",
    tagline: "Ideas That Matter",
    subtitle: "Stories That Inspire",
    description: "Explore insightful articles, expert opinions, and thought-provoking content that shapes the future of our industry.",
    hero: {
      badge: "📝 Latest Articles",
      primaryCTA: "Read Blog",
      secondaryCTA: "Subscribe"
    }
  },
  
  agency: {
    brandName: "Digital Agency",
    tagline: "We Create Digital",
    subtitle: "Experiences",
    description: "Full-service digital agency specializing in web design, development, and digital marketing solutions for modern businesses.",
    hero: {
      badge: "🚀 Digital Solutions",
      primaryCTA: "Start Project",
      secondaryCTA: "View Work"
    }
  },
  
  creative: {
    brandName: "ArtSpace",
    tagline: "Where Art Meets",
    subtitle: "Innovation",
    description: "A creative platform for artists, designers, and innovators to showcase their work and connect with like-minded individuals.",
    hero: {
      badge: "🎭 Creative Community",
      primaryCTA: "Join Community",
      secondaryCTA: "Explore Art"
    }
  }
}

// Color themes for different website types
export const colorThemes = {
  business: {
    primary: "hsl(220, 100%, 50%)", // Blue
    accent: "hsl(220, 14%, 96%)"
  },
  portfolio: {
    primary: "hsl(270, 100%, 50%)", // Purple
    accent: "hsl(270, 14%, 96%)"
  },
  ecommerce: {
    primary: "hsl(120, 100%, 40%)", // Green
    accent: "hsl(120, 14%, 96%)"
  },
  blog: {
    primary: "hsl(30, 100%, 50%)", // Orange
    accent: "hsl(30, 14%, 96%)"
  },
  agency: {
    primary: "hsl(340, 100%, 50%)", // Pink
    accent: "hsl(340, 14%, 96%)"
  },
  creative: {
    primary: "hsl(180, 100%, 40%)", // Teal
    accent: "hsl(180, 14%, 96%)"
  }
}


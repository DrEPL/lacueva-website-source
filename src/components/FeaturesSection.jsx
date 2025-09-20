import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Rocket, Shield, Users, Zap, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import FeatureCard from './FeatureCard.jsx'

export default function FeaturesSection() {
  const scrollContainerRef = useRef(null)

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Smart Automation",
      description: "Automate workflows and boost productivity effortlessly."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade protection for your business data."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Enhanced communication tools for seamless teamwork."
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Scalable Growth",
      description: "Flexible solutions that grow with your business."
    },
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollContent = container.querySelector('.scroll-content')
    if (!scrollContent) return

    // Get the height of a single feature pair for smooth calculations
    const singlePairHeight = scrollContent.querySelector('.feature-pair')?.offsetHeight || 0
    const gap = 24 // 1.5rem = 24px gap between pairs
    const itemHeight = singlePairHeight + gap

    // Create continuous animation
    const tl = gsap.timeline({ repeat: -1 })
    
    tl.to(scrollContent, {
      y: -itemHeight,
      duration: 3,
      ease: "none"
    })
    .set(scrollContent, { y: 0 })

    return () => {
      tl.kill()
    }
  }, [])

  // Create pairs of features for the scrolling animation
  const featurePairs = []
  for (let i = 0; i < features.length; i += 2) {
    featurePairs.push(features.slice(i, i + 2))
  }

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-6 text-sm">
              Premium Quality
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-[600] mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Unlock Your Business
              <br />
              Potential
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Discover how TechFlow Solutions can revolutionize your operations with cutting-edge technology and innovative approaches.
            </p>
            
            <Button variant="outline" size="lg" className="group">
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Scrolling Features */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Fade overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-muted/20 via-muted/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/20 via-muted/10 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div ref={scrollContainerRef} className="h-full">
              <div className="scroll-content space-y-6">
                {/* Create enough duplicates to fill the container and ensure seamless loop */}
                {Array.from({ length: 6 }).map((_, setIndex) => 
                  featurePairs.map((pair, pairIndex) => (
                    <div key={`${setIndex}-${pairIndex}`} className="feature-pair grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {pair.map((feature, index) => (
                        <FeatureCard
                          key={`${setIndex}-${pairIndex}-${index}`}
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                          className="min-h-[180px]"
                        />
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
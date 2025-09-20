import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm">
            Premium Quality
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-[600] mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Embrace the modern
            <br />
            design transition
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Begin our journey to build supremely outstanding websites.
          </p>
          
          <Button variant="outline" size="lg" className="group">
            Check all services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Freelancers Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-8 md:p-12">
              <Badge variant="secondary" className="mb-6 text-xs">
                Exclusive
              </Badge>
              
              <h3 className="text-2xl md:text-3xl font-[600] mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                For Businesses
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Unlock the Power of Superior Web Design.
              </p>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group/btn w-full md:w-auto"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
            
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
          </Card>

          {/* Customers Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-8 md:p-12">
              <Badge variant="default" className="mb-6 text-xs bg-green-600 hover:bg-green-700">
                New
              </Badge>
              
              <h3 className="text-2xl md:text-3xl font-[600] mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                For Customers
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Craft a Cutting-Edge Digital Experience.
              </p>
              
              <Button 
                size="lg" 
                className="group/btn w-full md:w-auto"
              >
                Start Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
            
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
          </Card>
        </div>
      </div>
    </section>
  )
}
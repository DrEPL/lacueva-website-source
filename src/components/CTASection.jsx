import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm">
            Get In Touch
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-[600] mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Ready to Transform
            <br />
            Your Business?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how TechFlow Solutions can help automate and optimize your operations.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Contact Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[600] mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Email Us
                  </h3>
                  <a 
                    href="mailto:hello@techflowsolutions.com"
                    className="text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    hello@techflowsolutions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-muted">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-[600] mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Call Us
                  </h3>
                  <a 
                    href="tel:+15551234567"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </CardContent>
            
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
          </Card>

          {/* Location & Hours */}
          <div className="space-y-6">
            {/* Location */}
            <div className="p-6 rounded-lg border bg-muted/20 hover:bg-muted/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-background border">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-[600] mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Visit Our Office
                  </h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive, Suite 100<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-lg border hover:border-muted-foreground/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-[600] mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Business Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Weekends: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
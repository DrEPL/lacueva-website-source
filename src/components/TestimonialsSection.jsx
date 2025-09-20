import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card.jsx'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, InnovateCorp",
      content: "TechFlow Solutions has been a game-changer for us. Our efficiency has skyrocketed, and we've seen a significant reduction in operational costs. Highly recommended!",
      rating: 5
    },
    {
      name: "David Lee",
      role: "Operations Manager, GrowthLink",
      content: "The AI automation capabilities are incredible. It's like having an extra team member, but smarter and faster. Our team loves it!",
      rating: 5
    },
    {
      name: "Emily White",
      role: "Founder, Apex Dynamics",
      content: "From setup to daily use, TechFlow Solutions made automation accessible and impactful. It's truly a powerful tool for any growing business.",
      rating: 5
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-[600] mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed with TechFlow Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-[600]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
              
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
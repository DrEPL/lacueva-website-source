import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export default function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <Card className={`relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group bg-background/50 backdrop-blur-sm ${className}`}>
      <CardContent className="p-4 md:p-6">
        <div className="mb-3">
          {icon}
        </div>
        
        <CardTitle className="text-lg md:text-xl font-[600] mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          {title}
        </CardTitle>
        
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-500" />
    </Card>
  )
}
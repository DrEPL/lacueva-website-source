import { Star } from 'lucide-react'

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          {/* First Stat */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                50%
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Innovative design tools can thrust your business ahead by engaging new customers across new platforms.
            </p>
          </div>

          {/* Second Stat - Stars */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <div className="flex justify-center md:justify-start items-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 md:w-10 md:h-10 fill-foreground text-foreground mr-1" 
                  />
                ))}
                <span className="text-5xl md:text-6xl font-bold ml-2">—</span>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cutting-edge design equipment can propel your enterprise forward by attracting fresh clients on channels.
            </p>
          </div>

          {/* Third Stat */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                30K+
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Revolutionary design instruments can propel your enterprise forward by captivating new consumers on platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
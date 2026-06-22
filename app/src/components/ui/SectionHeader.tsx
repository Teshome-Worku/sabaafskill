import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({
  className,
  title,
  subtitle,
  align = 'center',
  ...props
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-2 mb-10",
        align === 'center' ? "items-center text-center" : "",
        align === 'left' ? "items-start text-left" : "",
        align === 'right' ? "items-end text-right" : "",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mt-3">
          {subtitle}
        </p>
      )}
      <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/20 mt-6 rounded-full shadow-[0_0_10px_rgba(26,107,240,0.5)]" />
    </div>
  )
}

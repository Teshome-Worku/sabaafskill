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
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-[800px] mt-2">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
    </div>
  )
}

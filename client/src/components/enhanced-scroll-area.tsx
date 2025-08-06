import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const EnhancedScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    showScrollbar?: boolean;
    scrollbarVariant?: 'modern' | 'minimal' | 'gradient';
  }
>(({ className, children, showScrollbar = true, scrollbarVariant = 'modern', ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    {showScrollbar && <EnhancedScrollBar variant={scrollbarVariant} />}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
EnhancedScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const EnhancedScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
    variant?: 'modern' | 'minimal' | 'gradient';
  }
>(({ className, orientation = "vertical", variant = 'modern', ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const variantStyles = {
    modern: {
      track: "bg-gray-100/20 hover:bg-gray-100/30 backdrop-blur-sm",
      thumb: "bg-gradient-to-b from-blue-500/70 to-blue-600/70 hover:from-blue-400/80 hover:to-blue-500/80 shadow-lg",
      size: orientation === "vertical" ? "w-3 hover:w-4" : "h-3 hover:h-4"
    },
    minimal: {
      track: "bg-transparent hover:bg-gray-50/10",
      thumb: "bg-gray-400/60 hover:bg-gray-300/80",
      size: orientation === "vertical" ? "w-2 hover:w-3" : "h-2 hover:h-3"
    },
    gradient: {
      track: "bg-gradient-to-b from-purple-100/20 to-pink-100/20 hover:from-purple-100/30 hover:to-pink-100/30",
      thumb: "bg-gradient-to-b from-purple-500/70 via-pink-500/70 to-red-500/70 hover:from-purple-400/80 hover:via-pink-400/80 hover:to-red-400/80 shadow-lg",
      size: orientation === "vertical" ? "w-3 hover:w-5" : "h-3 hover:h-5"
    }
  };

  const currentVariant = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          "flex touch-none select-none transition-all duration-300 ease-out rounded-full",
          currentVariant.track,
          currentVariant.size,
          orientation === "vertical" &&
            "h-full border-l border-l-transparent p-[2px] ml-1",
          orientation === "horizontal" &&
            "flex-col border-t border-t-transparent p-[2px] mt-1",
          className
        )}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        {...props}
      >
        <motion.div
          animate={{
            scale: isDragging ? 1.1 : isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ScrollAreaPrimitive.ScrollAreaThumb 
            className={cn(
              "relative flex-1 rounded-full transition-all duration-300 ease-out",
              currentVariant.thumb,
              isDragging && "shadow-xl ring-2 ring-white/30",
              "before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
            )} 
          />
        </motion.div>
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    </motion.div>
  )
})
EnhancedScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

// Progress indicator for scroll position
export function ScrollProgress({ 
  className,
  orientation = "vertical",
  showPercentage = false 
}: {
  className?: string;
  orientation?: "vertical" | "horizontal";
  showPercentage?: boolean;
}) {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollableElement = document.documentElement;
      const scrollTop = scrollableElement.scrollTop;
      const scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed z-50 bg-white/10 backdrop-blur-sm rounded-full",
      orientation === "vertical" 
        ? "top-4 right-4 w-1 h-32" 
        : "bottom-4 left-4 h-1 w-32",
      className
    )}>
      <motion.div
        className="bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
        initial={{ [orientation === "vertical" ? "height" : "width"]: "0%" }}
        animate={{ [orientation === "vertical" ? "height" : "width"]: `${scrollProgress}%` }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      {showPercentage && (
        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-xs text-white/70 font-mono">
          {Math.round(scrollProgress)}%
        </div>
      )}
    </div>
  );
}

export { EnhancedScrollArea, EnhancedScrollBar }
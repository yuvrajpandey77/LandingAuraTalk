/**
 * Layout Container Component
 * 
 * Single source of truth for horizontal spacing and alignment.
 * All content sections must use this container to align with header/footer.
 * 
 * Usage:
 * - Regular content sections: <Container>content</Container>
 * - Full-bleed sections: Use Container only on inner content, not on section wrapper
 */

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 md:px-12 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Standard vertical spacing for sections
 * Use: py-12 sm:py-16 md:py-24
 */
export const SECTION_SPACING = "py-12 sm:py-16 md:py-24"


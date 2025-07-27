import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

type ContentLayoutProps = {
  className?: string
  children: ReactNode
}

const ContentLayout = ({ className, children }: ContentLayoutProps) => (
  <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>
)

export default ContentLayout

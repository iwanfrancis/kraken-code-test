import ContentLayout from '@/components/layouts/content-layout'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <ContentLayout className="h-12 flex justify-between px-4 py-1">
        <div className="w-1/2 max-w-80 relative h-12">
          <Image src="/octopus-logo.svg" alt="Logo" fill={true} />
        </div>
        <Image src="/basket.svg" alt="Basket" width={24} height={24} />
      </ContentLayout>
    </header>
  )
}

export default Header

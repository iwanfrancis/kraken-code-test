import type { Metadata } from 'next'
import '@/styles/globals.css'
import ContentLayout from '@/components/layouts/content-layout'
import Footer from '@/features/footer/components/footer'
import Header from '@/features/header/components/header'

export const metadata: Metadata = {
  title: 'Kraken Code Test',
  description: 'A frontend code test for Kraken',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://static.octopuscdn.com/fonts/Gotham/fonts.min.css"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://static.octopuscdn.com/favicons/favicon-32x32.png"
          sizes="32x32"
        ></link>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <ContentLayout className="flex-1">{children}</ContentLayout>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

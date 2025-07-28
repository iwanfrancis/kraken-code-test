'use client'

import { CartProvider } from '@/features/cart/stores/cart-provider'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <CartProvider>{children}</CartProvider>
}

'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: string
  name: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  totalItems: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

type CartProviderProps = {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        : [...prev, item]
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, totalItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

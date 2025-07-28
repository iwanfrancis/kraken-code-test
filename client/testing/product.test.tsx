import { CartProvider } from '@/features/cart/stores/cart-provider'
import Header from '@/features/header/components/header'
import Product, { ProductProps } from '@/features/product/components/product'
import { render, fireEvent } from '@testing-library/react'

const mockProduct = {
  id: 1,
  name: 'Energy saving light bulb',
  power: '25W',
  description:
    'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
  price: 1299,
  quantity: 4,
  brand: 'Philips',
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: 'E27 ES',
  colour: 'Cool daylight',
  img_url: '/philips-plumen.jpg',
} as ProductProps['product']

// These tests assume that the cart icon is in the product component, but I didn't lay out the components that way.
// Instead I'm just rendering the header and product component together in the test.
// In a real world scenario I would say that this would be a good candidate for an E2E test.
const renderProduct = (product: ProductProps['product']) => {
  return render(
    <CartProvider>
      <Header />
      <Product product={product} />
    </CartProvider>
  )
}

// When creating the page I decided to have the quantity be a readonly number input as
// I believe that to be more semantic. This meant that I had to change the test to use
// 'toHaveValue' instead of 'toHaveTextContent' for the quantity input.
it('should be able to increase and decrease product quantity', async () => {
  const { getByText, getByTitle } = renderProduct(mockProduct)

  const increaseQuantity = getByText('+')

  const currentQuantity = getByTitle('Current quantity')

  expect(currentQuantity).toHaveValue(1)

  fireEvent.click(increaseQuantity)
  expect(currentQuantity).toHaveValue(2)

  const decreaseQuantity = getByText('-')

  fireEvent.click(decreaseQuantity)
  expect(currentQuantity).toHaveValue(1)
})

it('should be able to add items to the basket', async () => {
  const { getByText, getByTitle } = renderProduct(mockProduct)

  const increaseQuantity = getByText('+')

  const currentQuantity = getByTitle('Current quantity')

  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)

  expect(currentQuantity).toHaveValue(4)

  const addToBasketElement = getByText('Add to cart')
  fireEvent.click(addToBasketElement)

  const basketItems = getByTitle('Basket items')
  expect(basketItems).toHaveTextContent('4')
})

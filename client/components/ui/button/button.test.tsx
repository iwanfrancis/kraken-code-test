import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('inline-flex')
    expect(button).toHaveTextContent('Click me')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Test</Button>)
    const button = screen.getByRole('button', { name: /test/i })
    expect(button).toHaveClass('custom-class')
  })

  it('renders with icon size', () => {
    render(<Button size="icon">Icon</Button>)
    const button = screen.getByRole('button', { name: /icon/i })
    expect(button.className).toContain('size-8')
  })

  it('renders with disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    const button = screen.getByRole('button', { name: /click/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )
    const button = screen.getByRole('button', { name: /disabled/i })
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})

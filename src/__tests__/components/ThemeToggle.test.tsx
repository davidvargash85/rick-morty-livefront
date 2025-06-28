import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/test-utils'
import ThemeToggle from '@/components/atoms/ThemeToggle'

describe('ThemeToggle', () => {
  test('renders theme toggle button', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  test('has proper accessibility attributes', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Toggle theme')
  })

  test('is keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    const button = screen.getByRole('button')

    await user.tab()
    expect(button).toHaveFocus()

    await user.keyboard('{Enter}')
    expect(button).toBeInTheDocument()
  })

  test('can be clicked', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    const button = screen.getByRole('button')

    await user.click(button)
    expect(button).toBeInTheDocument()
  })
}) 
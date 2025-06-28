import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/test-utils'
import Pagination from '@/components/molecules/Pagination'

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 5,
    totalPages: 10,
    onPageChange: jest.fn(),
    hasNext: true,
    hasPrev: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders pagination navigation', () => {
    render(<Pagination {...defaultProps} />)

    expect(screen.getByRole('navigation', { name: /pagination/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  test('shows current page with proper aria attributes', () => {
    render(<Pagination {...defaultProps} />)

    const currentPageButton = screen.getByRole('button', { name: /current page, page 5 of 10/i })
    expect(currentPageButton).toBeInTheDocument()
    expect(currentPageButton).toHaveAttribute('aria-current', 'page')
    expect(currentPageButton).toBeDisabled()
  })

  test('calls onPageChange when navigation buttons are clicked', async () => {
    const user = userEvent.setup()
    const mockOnPageChange = jest.fn()

    render(<Pagination {...defaultProps} onPageChange={mockOnPageChange} />)

    await user.click(screen.getByRole('button', { name: /go to previous page/i }))
    expect(mockOnPageChange).toHaveBeenCalledWith(4)

    await user.click(screen.getByRole('button', { name: /go to next page/i }))
    expect(mockOnPageChange).toHaveBeenCalledWith(6)
  })

  test('disables previous button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} hasPrev={false} />)

    const prevButton = screen.getByRole('button', { name: /previous/i })
    expect(prevButton).toBeDisabled()
  })

  test('disables next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={10} hasNext={false} />)

    const nextButton = screen.getByRole('button', { name: /next/i })
    expect(nextButton).toBeDisabled()
  })

  test('renders page numbers with proper labels', () => {
    render(<Pagination {...defaultProps} />)

    expect(screen.getByRole('button', { name: /go to page 4/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /current page, page 5/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to page 6/i })).toBeInTheDocument()
  })

  test('is keyboard accessible', async () => {
    const user = userEvent.setup()
    const mockOnPageChange = jest.fn()

    render(<Pagination {...defaultProps} onPageChange={mockOnPageChange} />)

    await user.tab()
    expect(screen.getByRole('button', { name: /previous/i })).toHaveFocus()

    await user.keyboard('{Enter}')
    expect(mockOnPageChange).toHaveBeenCalledWith(4)
  })
}) 
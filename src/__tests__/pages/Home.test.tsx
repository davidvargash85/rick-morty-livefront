import { screen, waitFor } from '@testing-library/react'
import { render } from '../utils/test-utils'
import { mockApiResponse } from '../../__mocks__/api-data'
import Home from '@/app/page'

// Better tests would consider mocking HTTP requests ... maybe using MSW
jest.mock('@/lib/api', () => ({
  api: {
    getCharacters: jest.fn(() => Promise.resolve(mockApiResponse)),
    getCharacter: jest.fn(),
  },
}))

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the app title and description', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Rick and Morty Characters'
    )
    expect(
      screen.getByText('Explore the multiverse of Rick and Morty characters')
    ).toBeInTheDocument()
  })

  test('renders character cards with mocked content', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Morty Smith')).toBeInTheDocument()
    expect(screen.getByText('Summer Smith')).toBeInTheDocument()

    expect(screen.getAllByText('Alive')).toHaveLength(3) 
    expect(screen.getAllByText('Human')).toHaveLength(3) 
  })

  test('renders character status indicators with correct content', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const statusElements = screen.getAllByText(/Status:/)
    expect(statusElements).toHaveLength(3)

    const speciesElements = screen.getAllByText(/Species:/)
    expect(speciesElements).toHaveLength(3)

    const locationElements = screen.getAllByText(/Location:/)
    expect(locationElements).toHaveLength(3)
    expect(screen.getByText('Earth (Replacement Dimension)')).toBeInTheDocument()
  })

  test('renders character images with correct alt text', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByAltText('Morty Smith')).toBeInTheDocument()
    expect(screen.getByAltText('Summer Smith')).toBeInTheDocument()
  })

  test('renders pagination component', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(
      screen.getByRole('navigation', { name: /pagination/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  test('has proper accessibility structure', () => {
    render(<Home />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()

    expect(screen.getByText('Skip to main content')).toBeInTheDocument()
  })
}) 
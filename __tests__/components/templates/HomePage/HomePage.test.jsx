import { render, screen } from '@testing-library/react'
import { HomePage } from '@/app/components/templates'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /Hello World/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
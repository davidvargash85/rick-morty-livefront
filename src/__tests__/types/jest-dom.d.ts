import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveTextContent(text: string | RegExp): R
      toHaveAttribute(attr: string, value?: string): R
      toHaveFocus(): R
      toBeVisible(): R
      toBeChecked(): R
      toBeDisabled(): R
      toBeEnabled(): R
      toHaveClass(className: string): R
      toHaveStyle(css: string | Record<string, string>): R
      toHaveValue(value: string | number | string[]): R
    }
  }
} 
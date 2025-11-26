import { render, screen } from '@testing-library/react'
import './MyCheckbox'
import { MyCheckbox } from './MyCheckbox'

test('renders button with text', () => {
  render(<MyCheckbox text='Click me' onChange={()=> console.log('dasas')}/>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
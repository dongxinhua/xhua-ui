import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType} from './button'

const defaultProps = {
  onClick: jest.fn()
}

const otherProps: ButtonProps = {
  className: 'bang',
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
}

const linkProps: ButtonProps = {
  btnType: ButtonType.Link,
  href: 'http://www.baidu.com'
}

const disableProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

test('default button', () => {
  const wrapper = render(<Button {...defaultProps}>show time</Button>)
  const element = wrapper.getByText('show time') as HTMLButtonElement
  expect(element).toBeInTheDocument()
  expect(element).toBeTruthy()
  expect(element.disabled).toBeFalsy()
  expect(element.tagName).toEqual('BUTTON')
  expect(element).toHaveClass('btn btn-default')
  fireEvent.click(element)
  expect(defaultProps.onClick).toHaveBeenCalled()
})

test('other type button', () => {
  const wrapper = render(<Button {...otherProps}>Biu</Button>)
  const element = wrapper.getByText('Biu')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('btn-primary btn-large bang')
})

test('a link button', () => {
  const wrapper = render(<Button {...linkProps}>Link</Button>)
  const element = wrapper.getByText('Link')
  expect(element).toHaveClass('btn-link')
  expect(element.tagName).toEqual('A')
  expect(element).toBeInTheDocument()
})

test('disabled button', () => {
  const wrapper = render(<Button {...disableProps}>no</Button>)
  const element = wrapper.getByText('no') as HTMLButtonElement
  expect(element.disabled).toBeTruthy()
  fireEvent.click(element)
  expect(disableProps.onClick).not.toHaveBeenCalled()
})


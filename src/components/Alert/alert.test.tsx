import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertType, AlertProps } from './alert'

const alertProps: AlertProps = {
  title: 'oh no! danger~',
  type: AlertType.Danger,
  onClose: jest.fn(),
  description: 'danger!'
}

const notCloseProps: AlertProps = {
  title: 'this is a not close alert',
  closable: false,
  type: AlertType.Warning,
}

test('default alert', () => {
  const wrapper = render(<Alert title={'this is message'} />)
  const element = wrapper.getByText('this is message').parentElement
  const alertTitle = wrapper.getByText('this is message')
  const close = wrapper.getByText('关闭')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('alert alert-default')
  expect(alertTitle).toHaveClass('alert-title')
  expect(close).toBeInTheDocument()
})

test('danger alert', () => {
  const wrapper = render(<Alert {...alertProps} />)
  const element = wrapper.getByText('danger!').parentElement
  const close = wrapper.getByText('关闭')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('alert alert-danger')
  fireEvent.click(close)
  expect(alertProps.onClose).toHaveBeenCalled()
})

test('not close alert', () => {
  const wrapper = render(<Alert {...notCloseProps} />)
  const element = wrapper.getByText('this is a not close alert').parentElement
  const close = wrapper.queryByText('关闭')
  expect(element).toBeInTheDocument()
  expect(close).toBeFalsy()
})
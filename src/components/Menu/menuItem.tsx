import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    index,
    disabled,
    className,
    style,
    children
  } = props

  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const onSelect = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={onSelect}>
      {children}
    </li>
  )
}

export default MenuItem
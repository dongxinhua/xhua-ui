import React, { FC, useState, createContext } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type selectMethod = (selectedIndex: number) => void
interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: selectMethod
}

interface IMenuContext {
  index: number
  onSelect?: selectMethod
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    children,
    mode,
    style,
    onSelect,
  } = props

  const [ currentActive, setCurrentActive ] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <MenuContext.Provider value={passedContext}>
      <ul className={classes} style={style}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
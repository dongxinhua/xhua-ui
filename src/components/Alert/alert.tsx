import React, { useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

export interface AlertProps {
  title: string
  description?: string
  type?: AlertType
  onClose?: () => void
  closable?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const [ show, setShow ] = useState(true)
  const {
    title,
    description,
    type,
    onClose,
    closable
  } = props

  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })

  const onCloseClick = () => {
    setShow(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {
        show && (
          <div className={classes}>
            <div className="alert-title">{title}</div>
            { description && <p className="alert-desc">{description}</p> }
            { closable && <div className="alert-close" onClick={() => onCloseClick()}> 关闭 </div> }
          </div>
        )
      }
    </>
  )
}

Alert.defaultProps = {
  type: AlertType.Default,
  closable: true
}

export default Alert
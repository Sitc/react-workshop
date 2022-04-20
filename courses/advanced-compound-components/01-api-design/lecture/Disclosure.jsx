import * as React from 'react'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

export function Disclosure({ children, defaultIsOpen = false, onChange }) {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  function onSelect() {
    setIsOpen(!isOpen)
    // onChange && onChange(!isOpen)
    onChange?.(!isOpen)
  }

  const panelId = `disclosure-panel-${React.useId()}`

  children = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      panelId,
      isOpen,
      onSelect,
    })
  })

  // Notice how awful it is to compose class names. We'll fix it with data-attributes

  return children
}

export const DisclosureButton = React.forwardRef(
  ({ children, onSelect, isOpen, panelId, ...rest }, forwardedRef) => {
    return (
      <button
        {...rest}
        ref={forwardedRef}
        onClick={onSelect}
        data-disclosure-button=""
        data-state={isOpen ? 'open' : 'collapsed'}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {children}
      </button>
    )
  }
)

DisclosureButton.displayName = 'DisclosureButton'

export const DisclosurePanel = ({ children, isOpen, panelId, ...rest }) => {
  return (
    <div
      {...rest}
      id={panelId}
      data-disclosure-panel=""
      data-state={isOpen ? 'open' : 'collapsed'}
      hidden={!isOpen}
    >
      {children}
    </div>
  )
}

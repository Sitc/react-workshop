import * as React from 'react'

export function Disclosure({ children, onChange, defaultIsOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  const panelId = React.useId()

  function onSelect() {
    setIsOpen(!isOpen)
    onChange(!isOpen)
  }

  children = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      panelId,
      onSelect,
      isOpen,
    })
  })

  return children
}

export const DisclosureButton = React.forwardRef(
  ({ children, onSelect, isOpen, panelId, ...props }, forwardedRef) => {
    return (
      <button
        {...props}
        ref={forwardedRef}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onSelect}
        data-disclosure-button=""
        data-state={isOpen ? 'open' : 'collapsed'}
      >
        {children}
      </button>
    )
  }
)

DisclosureButton.displayName = 'DisclosureButton'

export const DisclosurePanel = ({ children, isOpen, panelId, ...props }) => {
  return (
    <div
      {...props}
      id={panelId}
      data-disclosure-panel=""
      data-state={isOpen ? 'open' : 'collapsed'}
      hidden={!isOpen}
    >
      {children}
    </div>
  )
}

DisclosurePanel.displayName = 'DisclosurePanel'

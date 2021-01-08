import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from '@reach/menu-button'
import api from 'ProjectPlanner/api'
import { Avatar } from 'ProjectPlanner/Avatar'
import { Logo } from 'ProjectPlanner/Logo'
import { useAuthState } from 'ProjectPlanner/AuthState'
import '@reach/menu-button/styles.css'
import './PrimaryHeader.scss'

export const PrimaryHeader: React.FC = () => {
  const { authenticated, user, logout } = useAuthState()

  function handleLogout() {
    api.auth.logout().then(logout)
  }

  return (
    <header className="primary-header spacing">
      <div className="flex-split">
        <div>
          <Logo />
        </div>
        <div>
          <nav className="horizontal-spacing-large align-right">
            <NavLink to="/" exact className="primary-nav-item">
              Dashboard
            </NavLink>
            <NavLink to="/boards" className="primary-nav-item">
              Boards
            </NavLink>
            <Menu>
              <MenuButton className="primary-nav-item reset-button">
                {/* <Avatar src={user && user.avatarUrl} size={1.5} /> */}
                <Avatar size={1.5} />
              </MenuButton>
              <MenuList className="nav-user-dropdown">
                {/* <MenuLink to="/account" as={Link}>
                  My Account
                </MenuLink> */}
                <MenuItem onSelect={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </nav>
        </div>
      </div>
    </header>
  )
}

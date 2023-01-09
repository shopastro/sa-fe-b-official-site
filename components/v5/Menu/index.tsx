import React from 'react'

import useIsMobile from '../../../hooks/useIsMobile'
import MenuMobile from './index-mobile'
import MenuPC from './index-pc'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark' } = props
  const isMobile = useIsMobile()

  return isMobile ? <MenuMobile theme={theme} /> : <MenuPC theme={theme} />
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu

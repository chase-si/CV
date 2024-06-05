'use client'

import React, { useState } from 'react'

import NavWeb from './components/NavWeb'
import {
  PhoneToggleIcon as NavPhoneToggle,
  PhoneDialog as NavPhoneDialog
} from './components/NavPhone'

const NAVIGATION = [
  { name: 'Homepage', href: '/' },
  { name: 'Blog', href: 'https://dashuaibi.asia/blog/archives/' },
  { name: 'TimeZoneMap', href: '/timeZone' },
  { name: 'FlowChart', href: '/flowChart' }
]

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <NavPhoneToggle
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <NavWeb
          navigations={NAVIGATION}
        />
      </nav>
      <NavPhoneDialog
        navigations={NAVIGATION}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  )
}

export default Nav

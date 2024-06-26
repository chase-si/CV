import React, { useState } from 'react'

import { FOOTER_NAVIGATION } from './constants'

const NAVIGATION = [
  { name: 'Homepage', href: '/' },
  { name: 'Blog', href: 'https://dashuaibi.asia/blog/archives/' },
  { name: 'TimeZoneMap', href: '/timeZone' }
]

function Footer() {
  return (
    <footer className="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
      <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        {FOOTER_NAVIGATION.main.map((item) => (
          <div key={item.name} className="pb-6">
            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {FOOTER_NAVIGATION.social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2020 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

'use client'

import { Fragment, useState } from 'react'
import {
  Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { classNames } from '@/lib/utils'

import Select from '@/components/Select'

import { CITY_TIMEZONES } from '../constans'

const locations = Object.values(CITY_TIMEZONES)
  .map((item) => {
    const { short, cities } = item
    return Object.entries(cities)
      .map(([name, timeZone]) => ({
        name,
        value:
        timeZone,
        short
      }))
  }).flat()

console.log('locations', locations)

export default function Form() {
  return (
    <div className="container mx-auto">
      <form>
        <Select
          options={locations}
          selectedOpt={locations[0]}
          setSelected={() => {}}
        />
      </form>
    </div>

  )
}

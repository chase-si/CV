'use client'

import React from 'react'
// import { useSelector } from 'react-redux'

import { selectStatus } from '@/lib/redux/features/timeZone/timeZoneSlice'
import { useAppSelector } from '@/lib/redux/hooks'
import { classNames, cyclicNormalization, replaceTimeZoneToNum } from '@/lib/utils'
import { CITY_TIMEZONES } from '../constans'

const BASIC_LOCATION = {
  name: 'BeiJing',
  main: true,
  country: 'cn',
  timeZone: 'UTC+08:00',
  workTime: [9, 10, 11, 12, 13, 14, 15, 16, 17]
}

const locations = Object.values(CITY_TIMEZONES)
  .map((item) => {
    const { short, cities } = item
    return Object.entries(cities)
      .map(([name, timeZone]) => ({
        name,
        timeZone,
        country: short,
        workTime: BASIC_LOCATION.workTime.map(basicTimeItem => {
          const timeZoneDiff = replaceTimeZoneToNum(BASIC_LOCATION.timeZone)
            - replaceTimeZoneToNum(timeZone)
          return cyclicNormalization(basicTimeItem - timeZoneDiff)
        })
      }))
  }).flat()

// const locations = [
//   {
//     name: 'BeiJing',
//     main: true,
//     country: 'cn',
//     timeZone: 'UTC+08:00',
//     workTime: [9, 10, 11, 12, 13, 14, 15, 16, 17]
//   },
//   {
//     name: 'London',
//     country: 'gb',
//     timeZone: 'UTC+00:00',
//     workTime: [9, 10, 11, 12, 13, 14, 15, 16, 17].map(item => item - 8)
//   },
//   {
//     name: 'Los Angeles',
//     country: 'us',
//     timeZone: 'UTC-08:00',
//     workTime: [9, 10, 11, 12, 13, 14, 15, 16, 17].map(item => cyclicNormalization(item - 16))
//   }
//   // More people...
// ]

type TdThProps = {
  children: React.ReactNode,
  className?: string
}
function TableTh({ children, className }: TdThProps) {
  return (
    <th
      scope="col"
      className={classNames(
        'pr-3 py-3.5 text-left text-sm font-semibold text-gray-900',
        className || ''
      )}
    >
      {children}
    </th>
  )
}
function TableTd({ children, className }: TdThProps) {
  return (
    <td
      className={classNames(
        'whitespace-nowrap pr-3 py-4 text-sm text-gray-500',
        className || ''
      )}
    >
      {children}
    </td>
  )
}

export default function Table() {
  const status = useAppSelector(selectStatus)
  console.log('status', status)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <TableTh>City Name</TableTh>
                  {new Array(24).fill(0).map((_, i) => (
                    <TableTh key={i}>
                      {i}
                    </TableTh>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  BASIC_LOCATION,
                  ...locations
                ].map((location, idx) => (
                  <tr
                    key={location.name}
                    className={idx === 0 ? 'border-2 border-dashed border-indigo-400' : ''}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <span>
                        {location.name}
                      </span>
                      <span className={`fi fi-${location.country} ml-1`} />
                    </td>
                    {new Array(24).fill(0).map((_, i) => (
                      <TableTd
                        key={i}
                        className={
                          classNames(
                            location.workTime.includes(i)
                              ? 'bg-green-100'
                              : 'bg-red-100'
                          )
                        }
                      >
                        {i}
                      </TableTd>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

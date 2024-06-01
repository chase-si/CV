import React from 'react'

import { classNames } from '@/lib/utils'

const locations = [
  {
    name: 'BeiJing',
    country: 'cn',
    timeZone: 'UTC+08:00',
    workTime: [9, 18]
  },
  {
    name: 'London',
    country: 'gb',
    timeZone: 'UTC+00:00',
    workTime: [1, 10]
  },
  {
    name: 'Los Angeles',
    country: 'us',
    timeZone: 'UTC-08:00',
    workTime: [17, 2]
  }
  // More people...
]

type TdThProps = {
  children: React.ReactNode,
  className?: string
}
function TableTh({ children, className }: TdThProps) {
  return (
    <th
      scope="col"
      className={classNames(
        'px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
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
        'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
        className || ''
      )}
    >
      {children}
    </td>
  )
}

export default function Table() {
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
                {locations.map((location) => (
                  <tr key={location.name}>
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
                            i >= location.workTime[0] && i < location.workTime[1]
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

import React, { useState } from 'react'
import { Slider as NextUISlider } from '@nextui-org/react'

import { classNames } from '@/lib/utils'

type valueType = number[] | number

export default function Slider() {
  const [value, setValue] = useState<valueType>([8, 18])

  const handleSliderOnchange = (rangeValue:valueType) => {
    console.log(rangeValue)
    setValue(rangeValue)
  }

  return (
    <NextUISlider
      size="lg"
      label="Time Range"
      maxValue={36}
      step={1}
      onChange={handleSliderOnchange}
      value={value}
      formatOptions={{ style: 'currency', currency: 'USD' }}
      classNames={{
        base: 'max-w-md gap-3',
        filler: 'bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800'
      }}
      renderThumb={({ index, ...props }) => (
        <div
          {...props}
          className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span
            className={classNames(
              'transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80',
              index === 0
                ? 'from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600' // first thumb
                : 'from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800' // second thumb
            )}
          />
        </div>
      )}
    />
  )
}

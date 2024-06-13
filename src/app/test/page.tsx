'use client'

import { useState } from 'react'

export default function FlowChart() {
  const [val, setVal] = useState('')

  const handleTextArea = (e: any) => {
    setVal(e.target.value)
  }

  return (
    <div className="container pt-6 mx-auto">
      <div className="flex flex-row">
        <div>
          <h2>TextArea</h2>
          <textarea
            className="border"
            onResize={e => {}}
            onChange={handleTextArea}
            rows={25}
            cols={100}
            name="test"
          />
        </div>
        <div className="basis-1/4 ml-2">
          <h3>Checkboxes:</h3>
          {val.split('\n')
            .map((item, idx) => (
              <div key={idx}>
                <input type="checkbox" />
                {item}
              </div>
            ))}
        </div>
      </div>

      <div>
        <h2>Result:</h2>

        <div className="border">
          {val.split('\n')
            .map((item, idx) => (
              <div key={idx}>
                <input type="checkbox" />
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

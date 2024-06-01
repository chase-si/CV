// eslint-disable-next-line import/no-extraneous-dependencies
import 'flag-icons/css/flag-icons.min.css'

import Select from './components/Select'
import Table from './components/Table'

export default function TimeZone() {
  return (
    <>
      {/* form */}
      <div className="form">
        <Select />
      </div>

      {/* table */}
      <div>
        table
        {/* <span className="fi fi-cn" />
        <span className="fi fi-gr fis" /> */}

        <Table />
      </div>
    </>
  )
}

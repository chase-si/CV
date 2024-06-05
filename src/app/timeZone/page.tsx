import 'flag-icons/css/flag-icons.min.css'

import Form from './components/Form'
import Table from './components/Table'

export default function TimeZone() {
  return (
    <>
      {/* form */}
      <div className="form">
        <Form />
      </div>

      {/* table */}
      <div>
        <Table />
      </div>
    </>
  )
}

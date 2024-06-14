import DropdownMenu from './DropdownMenu'

type WebNavProps = {
  navigations: Navigations[]
}

type Navigations = {
  name: string
  href: string
}

function WebNav({
  navigations
}: WebNavProps) {
  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigations.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </a>
        ))}
        <DropdownMenu />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in
          {' '}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </>
  )
}

export default WebNav

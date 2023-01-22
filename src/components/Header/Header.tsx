import Logo from '../Icons/Logo'
import Search from './Search'

const Header = () => {
  return (
    <header className='mb-9 select-none md:flex md:w-full md:justify-between '>
      <Logo />
      <Search />
    </header>
  )
}
export default Header

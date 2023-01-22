import { FormEvent, useRef } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import {
  animateShowSearch,
  filterStays,
  selectSearch,
  setGuests,
  showSearch,
} from '../../store/searchSlice'

const Search = () => {
  const searchState = useSelector(selectSearch)
  const dispatch = useDispatch()

  const showSearchHadler = () => {
    dispatch(showSearch())
    dispatch(animateShowSearch())
  }

  return (
    <div className='flex justify-between items-center mt-10 md:mt-0 mx-5 md:mx-0 text-sm leading-none h-[55px]  rounded-2xl shadow-search overflow-hidden'>
      <div
        className='flex-1    pr-4  h-full  px-4 py-5 cursor-pointer select-none group hover:bg-[#eb5757] '
        onClick={showSearchHadler}
      >
        <p className='font-moolish font-normal group-hover:text-white'>
          {searchState.location || 'Finland'}
        </p>
      </div>
      <div
        className=' px-4 py-5  border-solid border-x-[1px] border-[#F2F2F2] select-none cursor-pointer'
        onClick={showSearchHadler}
      >
        <p className='w-full text-[#BDBDBD] focus:outline-none font-moolish font-normal'>
          {`${searchState.guests > 0 ? `Guests: ${searchState.guests}` : 'Add guests'}`}
        </p>
      </div>
      <div
        className='group h-full pr-[19px] pl-4 py-5 hover:bg-[#eb5757] cursor-pointer '
        onClick={showSearchHadler}
      >
        <HiMagnifyingGlass className='text-[#eb5757] group-hover:text-[#F2F2F2] ' />
      </div>
    </div>
  )
}
export default Search

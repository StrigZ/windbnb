import { FormEvent, useRef } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideGuestController,
  hideLocationController,
  selectSearchExtended,
  showGuestController,
  showLocationController,
} from '../../../store/searchExtendedSlice'
import {
  animateHideSearch,
  filterStays,
  hideSearch,
  selectSearch,
  setGuests,
} from '../../../store/searchSlice'

export const SearchBarDesktop = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(selectSearch)
  const searchExtendedState = useSelector(selectSearchExtended)
  const guestInputRef = useRef<HTMLInputElement>(null)
  const searchStaysHandler = () => {
    if (guestInputRef.current?.value) {
      dispatch(setGuests(+guestInputRef.current?.value))
    }
    dispatch(filterStays())
    dispatch(animateHideSearch())
    setTimeout(() => {
      return dispatch(hideSearch())
    }, 500)
  }

  const locationControllerHadler = () => {
    if (searchExtendedState.guestControllerIsActive) dispatch(hideGuestController())
    dispatch(showLocationController())
  }
  const guestControllerHadler = () => {
    if (searchExtendedState.locationControllerIsActive) dispatch(hideLocationController())
    dispatch(showGuestController())
  }

  const searchSubmitHanlder = (e: FormEvent) => {
    e.preventDefault()
    if (guestInputRef.current?.value) {
      dispatch(setGuests(+guestInputRef.current?.value))
    }
  }

  return (
    <div className='shadow-search   flex flex-col rounded-2xl mb-9 md:flex-row md:justify-between'>
      <div
        className={`${
          searchExtendedState.locationControllerIsActive ? 'outline' : ''
        } flex px-[1.625rem] rounded-2xl flex-col py-3  cursor-pointer select-none outline-1 active:outline hover:outline active:outline-[#333333] hover:outline-[#333333] md:w-[33%] mb-1 md:mb-0`}
        onClick={locationControllerHadler}
      >
        <label className='uppercase font-extrabold text-[.5625rem] mb-1 ' htmlFor='location'>
          Location
        </label>
        <p className='text-[#333333] text-sm font-normal'>{searchState.location}</p>
      </div>
      <div
        className={` ${
          searchExtendedState.guestControllerIsActive ? 'outline' : ''
        } flex px-[1.625rem] rounded-2xl flex-col py-3 md:w-[33%] outline-1 active:outline  hover:outline active:outline-[#333333] hover:outline-[#333333] relative z-50 before:absolute before:-z-10 before:top-0 before:left-0 before:h-full before:w-[.0625rem] before:bg-[#F2F2F2] cursor-pointer `}
        onClick={guestControllerHadler}
      >
        <label className={`  uppercase font-extrabold text-[.5625rem] mb-1`} htmlFor='guests'>
          Guests
        </label>

        <p
          className='placeholder:font-normal placeholder:text-[#BDBDBD] text-sm outline-none cursor-pointer'
          placeholder='Add guests'
        >
          {searchState.guests}
        </p>
      </div>
      {/* <form
        className={`md:hidden  flex px-[1.625rem] rounded-2xl flex-col py-3 md:w-[33%] md:outline-1 md:active:outline  md:hover:outline md:active:outline-[#333333] md:hover:outline-[#333333] relative z-50 before:absolute before:-z-10 before:top-0 before:left-0 before:h-full before:w-[.0625rem] before:bg-[#F2F2F2] cursor-pointer `}
        onSubmit={searchSubmitHanlder}
      >
        <label className={`  uppercase font-extrabold text-[.5625rem] mb-1`} htmlFor='guests'>
          Guests
        </label>
        <input
          className='placeholder:font-normal placeholder:text-[#BDBDBD] text-sm outline-none cursor-pointer'
          type='number'
          min={0}
          max={16}
          placeholder={`${searchState.guests > 0 ? `Guests: ${searchState.guests}` : 'Add guests'}`}
          ref={guestInputRef}
        />
      </form> */}
      <div className='items-center justify-center   rounded-2xl  text-white font-bold font-moolish text-sm hidden md:flex w-[33%] relative z-10 before:absolute before:-z-10 before:top-0 before:left-0 before:h-full before:w-[.0625rem] before:bg-[#F2F2F2] '>
        <button
          className='  items-center justify-center  bg-[#EB5757E5] rounded-2xl px-6 py-4 text-white font-bold font-moolish text-sm hidden md:flex w-[7.8125rem]'
          type='submit'
          onClick={searchStaysHandler}
        >
          <span>
            <HiMagnifyingGlass className=' w-[1.0625rem] h-[1.0625rem] mr-[.6875rem] group-hover:text-[#F2F2F2]' />
          </span>{' '}
          Search
        </button>
      </div>
    </div>
  )
}

export const SearchBarMobile = () => {
  const dispatch = useDispatch()
  const searchStaysHandler = () => {
    dispatch(filterStays())
    dispatch(animateHideSearch())
    setTimeout(() => {
      return dispatch(hideSearch())
    }, 500)
  }
  return (
    <button
      className=' w-[7.875rem] flex items-center justify-center mx-auto bg-[#EB5757E5] rounded-2xl px-6 py-4 text-white font-bold font-moolish text-sm md:hidden'
      onClick={searchStaysHandler}
    >
      <span>
        <HiMagnifyingGlass className=' w-[1.0625rem] h-[1.0625rem] mr-[.6875rem] group-hover:text-[#F2F2F2]' />
      </span>{' '}
      Search
    </button>
  )
}

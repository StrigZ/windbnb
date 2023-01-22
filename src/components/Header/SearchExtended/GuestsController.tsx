import { useState } from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseAdultsGuests,
  decreaseChildrenGuests,
  increaseAdultsGuests,
  increaseChildrenGuests,
  selectSearchExtended,
} from '../../../store/searchExtendedSlice'
import { decreaseGuests, increaseGuests } from '../../../store/searchSlice'

const GuestsController = () => {
  const dispatch = useDispatch()
  const searchExtendedState = useSelector(selectSearchExtended)
  // const [guestAdultsAmount, setGuestAdultsAmount] = useState(0)
  // const [guestChildrenAmount, setGuestChildrenAmount] = useState(0)
  const increaseChildrenGuestsHandler = () => {
    // setGuestChildrenAmount((pvs) => pvs + 1)
    dispatch(increaseChildrenGuests())
    return dispatch(increaseGuests())
  }
  const increaseAdultGuestsHandler = () => {
    // setGuestAdultsAmount((pvs) => pvs + 1)
    dispatch(increaseAdultsGuests())
    return dispatch(increaseGuests())
  }
  const decreaseAdultGuestsHandler = () => {
    // setGuestAdultsAmount((pvs) => {
    //   if (pvs === 0) return 0
    //   return pvs - 1
    // })
    if (searchExtendedState.adultsGuests === 0) return
    dispatch(decreaseAdultsGuests())
    return dispatch(decreaseGuests())
  }
  const decreaseChildrenGuestsHandler = () => {
    // setGuestChildrenAmount((pvs) => {
    //   if (pvs === 0) return 0
    //   return pvs - 1
    // })
    if (searchExtendedState.childrenGuests === 0) return
    dispatch(decreaseChildrenGuests())
    return dispatch(decreaseGuests())
  }
  return (
    <div className=' mx-8 text-sm  max-h-[50%] w-[33%] md:ml-[35%]'>
      <div className='mb-[3.25rem]'>
        <p className='font-bold text-[#333333]'>Adults</p>
        <p className='font-normal text-[#BDBDBD]'>Ages 13 or above</p>
        <div className='flex items-center mt-3'>
          <span onClick={decreaseAdultGuestsHandler}>
            <CiSquareMinus className='text-[24px] cursor-pointer' />
          </span>
          <p className='mx-4'>{searchExtendedState.adultsGuests}</p>

          <span onClick={increaseAdultGuestsHandler}>
            <CiSquarePlus className='text-[24px] cursor-pointer' />
          </span>
        </div>
      </div>
      <div>
        <p className='font-bold text-[#333333]'>Children</p>
        <p className='font-normal text-[#BDBDBD]'>Ages 2-12</p>
        <div className='flex items-center mt-3'>
          <span onClick={decreaseChildrenGuestsHandler}>
            <CiSquareMinus className='text-[24px] cursor-pointer' />
          </span>
          <p className='mx-4'>{searchExtendedState.childrenGuests}</p>
          <span onClick={increaseChildrenGuestsHandler}>
            <CiSquarePlus className='text-[24px] cursor-pointer' />
          </span>
        </div>
      </div>
    </div>
  )
}
export default GuestsController

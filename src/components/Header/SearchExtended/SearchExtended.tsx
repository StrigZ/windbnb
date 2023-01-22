import { createPortal } from 'react-dom'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, hideSearch, animateHideSearch } from '../../../store/searchSlice'
import { motion, Variants } from 'framer-motion'
import GuestsController from './GuestsController'
import LocationController from './LocationController'
import { SearchBarDesktop, SearchBarMobile } from './SearchBar'
import { useState } from 'react'
import { selectSearchExtended } from '../../../store/searchExtendedSlice'

const SearchExtendedPopup = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(selectSearch)
  const searchExtendedState = useSelector(selectSearchExtended)
  const motionVariants: Variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5 },
    },
  }
  const hideSearchHadler = () => {
    dispatch(animateHideSearch())
    setTimeout(() => {
      return dispatch(hideSearch())
    }, 500)
  }

  return (
    <motion.div
      className=' fixed z-10 min-h-[60%] bg-white  px-3 md:px-24 pt-4 md:pt-24  pb-6  text-[#333333] font-moolish w-screen select-none'
      initial={{ opacity: 0, y: '-100%' }}
      variants={motionVariants}
      animate={searchState.animateIsActive ? 'enter' : 'exit'}
    >
      <div className='max-w-[90rem] mx-auto'>
        <div className='flex items-center justify-between font-bold text-xs mb-[1.0625rem] md:hidden'>
          <p>Edit your search</p>
          <GrClose
            className='w-[.8125rem] h-[.8125rem] cursor-pointer '
            onClick={hideSearchHadler}
          />
        </div>
        <SearchBarDesktop />

        <div className='mb-5 flex md:mb-0'>
          {searchExtendedState.locationControllerIsActive && <LocationController />}
          {searchExtendedState.guestControllerIsActive && <GuestsController />}
        </div>
        <SearchBarMobile />
      </div>
    </motion.div>
  )
}
const SearchExtendedBackdrop = () => {
  const dispatch = useDispatch()
  const searchState = useSelector(selectSearch)

  const hideSearchHadler = () => {
    dispatch(animateHideSearch())
    setTimeout(() => {
      return dispatch(hideSearch())
    }, 500)
  }
  const motionVariants: Variants = {
    enter: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }
  return (
    <motion.div
      className='w-screen h-screen fixed bg-[#4f4f4f66]'
      initial={{ opacity: 0 }}
      variants={motionVariants}
      animate={searchState.animateIsActive ? 'enter' : 'exit'}
      onClick={hideSearchHadler}
    ></motion.div>
  )
}
const SearchExtendedModal = () => {
  return (
    <>
      {createPortal(<SearchExtendedPopup />, document.getElementById('modal-msg') as HTMLElement)}
      {createPortal(
        <SearchExtendedBackdrop />,
        document.getElementById('modal-backdrop') as HTMLElement,
      )}
    </>
  )
}

export default SearchExtendedModal

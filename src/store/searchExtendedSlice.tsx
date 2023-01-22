import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

interface searchExtendedSlice {
  guestControllerIsActive: boolean
  locationControllerIsActive: boolean
  adultsGuests: number
  childrenGuests: number
}

const initialState: searchExtendedSlice = {
  guestControllerIsActive: false,
  locationControllerIsActive: true,
  adultsGuests: 0,
  childrenGuests: 0,
}

export const searchExtendedSlice = createSlice({
  name: 'searchExtended',
  initialState,
  reducers: {
    showGuestController: (state) => {
      state.guestControllerIsActive = true
    },
    showLocationController: (state) => {
      state.locationControllerIsActive = true
    },
    hideGuestController: (state) => {
      state.guestControllerIsActive = false
    },
    hideLocationController: (state) => {
      state.locationControllerIsActive = false
    },
    increaseAdultsGuests: (state) => {
      if (state.adultsGuests) {
        state.adultsGuests = state.adultsGuests + 1
      } else {
        state.adultsGuests = 1
      }
    },
    decreaseAdultsGuests: (state) => {
      if (state.adultsGuests) {
        state.adultsGuests = state.adultsGuests - 1
      } else {
        state.adultsGuests = 0
      }
    },
    increaseChildrenGuests: (state) => {
      if (state.childrenGuests) {
        state.childrenGuests = state.childrenGuests + 1
      } else {
        state.childrenGuests = 1
      }
    },
    decreaseChildrenGuests: (state) => {
      if (state.childrenGuests) {
        state.childrenGuests = state.childrenGuests - 1
      } else {
        state.childrenGuests = 0
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  hideGuestController,
  hideLocationController,
  showGuestController,
  showLocationController,
  decreaseAdultsGuests,
  decreaseChildrenGuests,
  increaseAdultsGuests,
  increaseChildrenGuests,
} = searchExtendedSlice.actions
export const selectSearchExtended = (state: RootState) => state.searchExtended
export default searchExtendedSlice.reducer

import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Stay } from '../../types'
import { RootState } from './store'
import Stays from '../assets/stays.json'

interface searchSlice {
  stays: Stay[]
  isActive: boolean
  location: string
  guests: number
  animateIsActive: boolean
}

const initialState: searchSlice = {
  stays: Stays,
  isActive: false,
  location: 'Finland',
  guests: 0,
  animateIsActive: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    showSearch: (state) => {
      state.isActive = true
    },
    hideSearch: (state) => {
      state.isActive = false
    },
    animateShowSearch: (state) => {
      state.animateIsActive = true
    },
    animateHideSearch: (state) => {
      state.animateIsActive = false
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    increaseGuests: (state) => {
      if (state.guests) {
        state.guests = state.guests + 1
      } else {
        state.guests = 1
      }
    },
    decreaseGuests: (state) => {
      if (state.guests) {
        state.guests = state.guests - 1
      } else {
        state.guests = 0
      }
    },
    setGuests: (state, action: PayloadAction<number>) => {
      state.guests = action.payload
    },
    filterStays: (state) => {
      if (state.location && state.guests) {
        if (state.location === 'Finland') {
          state.stays = Stays.filter((stay) => stay.maxGuests > state.guests)
          return
        }
        console.log('Filterring by city...')
        state.stays = Stays.filter(
          (stay) => stay.city === state.location.split(',')[0] && stay.maxGuests > state.guests,
        )
      }
      // if (state.guests) {
      //   console.log('Filterring by guests...')
      //   state.stays = state.stays.filter((stay) => stay.maxGuests > state.guests)
      // }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  showSearch,
  hideSearch,
  setLocation,
  setGuests,
  animateShowSearch,
  animateHideSearch,
  decreaseGuests,
  increaseGuests,
  filterStays,
} = searchSlice.actions
export const selectSearch = (state: RootState) => state.search
export default searchSlice.reducer

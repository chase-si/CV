/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit'

import { createAppSlice } from '../../createAppSlice'

export interface TimeZoneState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TimeZoneState = {
  value: 0,
  status: 'idle'
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const timeZoneSlice = createAppSlice({
  name: 'timeZone',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    increment: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }),
    decrement: create.reducer((state) => {
      state.value -= 1
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    )
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status
  }
})

export const { selectCount, selectStatus } = timeZoneSlice.selectors

import { createSlice } from '@reduxjs/toolkit'

interface IAuth {
  login: string
  pass: string
}
interface ISlice {
  isOpenDrawer: boolean
  auth: IAuth
  isChangedPass: boolean
  isAuth: boolean
  isAuthCorrect: boolean
}

const initialState: ISlice = {
  isOpenDrawer: true,
  auth: {
    login: 'admin',
    pass: '123'
  },
  isChangedPass: false,
  isAuth: false,
  isAuthCorrect: false
}
export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toogleDrawer: (state) => {
      state.isOpenDrawer = !state.isOpenDrawer
    },
    changePass: (state,action) => {
      state.auth.pass = action.payload
      state.isChangedPass = true
    },
    onAuth: (state, action) => {
      state.isAuth = action.payload
      state.isOpenDrawer = false
      state.isChangedPass = false
    },
    onAuthCorrect: (state) => {
      state.isAuthCorrect = true
    },
    onSignOut: (state) => {
      state.isAuthCorrect = false
      state.isOpenDrawer = true
      state.isAuth = false
      state.isChangedPass = true
    }
  },
})
export const { toogleDrawer, changePass, onAuth, onSignOut, onAuthCorrect} = commonSlice.actions
export default commonSlice.reducer

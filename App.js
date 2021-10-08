1
import React from 'react'
import { Provider as StateProvider } from 'react-redux'
import store from './store'
import MainStackNavigator from './AppNavigator'

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}
import React from 'react'

const ThemeChanger = React.createContext({
  isTheme: true,
  currentTab: 'Home',
  onToddleTheme: () => {},
  onToddleTab: () => {},
  savedVideos: [],
  onAddSavedVideos: () => {},
})

export default ThemeChanger

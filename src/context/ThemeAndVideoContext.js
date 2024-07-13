import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  saveVideo: () => {},
})

export default ThemeAndVideoContext

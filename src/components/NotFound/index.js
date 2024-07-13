import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'

import {
  NotFoundContainer,
  NotFoundView,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundView>
              <NotFoundImage src={notFoundImageUrl} alt="not found" />
              <NotFoundHeading color={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDesc color={descriptionColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound

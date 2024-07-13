import {Component} from 'react'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedContainer,
  TitleIconContainer,
  SavedVideoTitle,
  SavedText,
  SavedVideoList,
  NoVideosContainer,
  NoVideosImage,
  NoVideosText,
  NoVideosDesc,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideos = (savedVideos, headingColor, noteColor) =>
    savedVideos.length > 0 ? (
      <SavedVideoList>
        {savedVideos.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SavedVideoList>
    ) : (
      <NoVideosContainer>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoVideosText headingColor={headingColor}>
          No saved videos found
        </NoVideosText>
        <NoVideosDesc noteColor={noteColor}>
          You can save your videos while watching them
        </NoVideosDesc>
      </NoVideosContainer>
    )

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
          return (
            <>
              <Header />
              <NavigationBar />
              <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
                <SavedVideoTitle>
                  <TitleIconContainer>
                    <CgPlayListAdd size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <SavedText color={textColor}>Saved Videos</SavedText>
                </SavedVideoTitle>
                {this.renderSavedVideos(savedVideos, headingColor, noteColor)}
              </SavedContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default SavedVideos

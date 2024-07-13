import {Component} from 'react'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideoLink,
  VideoCardContainer,
  Thumbnail,
  VideoDetailsContainer,
  ProfileImage,
  VideoMetaData,
  VideoTitle,
  ChannelName,
  ViewsAndPublishedContainer,
  Views,
  Dot,
  Published,
} from './styledComponents'

class VideoCard extends Component {
  renderVideoCards = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const videoTitleColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const videoDetailsColor = isDarkTheme ? '#94a3b8' : '#64748b'
        const {video} = this.props
        const {
          id,
          title,
          thumbnailUrl,
          name,
          viewCount,
          publishedAt,
          profileImageUrl,
        } = video
        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoCardContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoMetaData>
                  <VideoTitle fontColor={videoTitleColor}>{title}</VideoTitle>
                  <ChannelName fontColor={videoDetailsColor}>
                    {name}
                  </ChannelName>
                  <ViewsAndPublishedContainer>
                    <Views fontColor={videoDetailsColor}>{viewCount}</Views>
                    <Published fontColor={videoDetailsColor}>
                      <Dot> &#8226; </Dot>
                      {publishedAt}
                    </Published>
                  </ViewsAndPublishedContainer>
                </VideoMetaData>
              </VideoDetailsContainer>
            </VideoCardContainer>
          </VideoLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderVideoCards()}</>
  }
}
export default VideoCard

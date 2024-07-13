import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, saveVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const isLikeActive = isLiked ? 'active' : 'not-active'
        const isDislikeActive = isDisLiked ? 'active' : 'not-active'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const isSaveActive = isSaved ? 'active' : 'not-active'

        const onClickSave = () => {
          saveVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <LikeButton color={isLikeActive} onClick={onClickLike}>
                    <AiOutlineLike size={25} />
                    Like
                  </LikeButton>
                </BtnContainer>
                <BtnContainer>
                  <DislikeButton
                    color={isDislikeActive}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    Dislike
                  </DislikeButton>
                </BtnContainer>
                <BtnContainer>
                  <SaveButton color={isSaveActive} onClick={onClickSave}>
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SaveButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView

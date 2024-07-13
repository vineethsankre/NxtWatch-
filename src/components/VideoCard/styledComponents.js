import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    max-width: 230px;
    margin-right: 20px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 8px;
`
export const ProfileImage = styled.img`
  width: 30px;
`
export const VideoMetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  margin-bottom: 5px;
`
export const ChannelName = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
  font-weight: 500;
  margin: 0px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.fontColor};
  font-weight: 500;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const Published = styled(Views)``

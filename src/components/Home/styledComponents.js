import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 25px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
  cursor: pointer;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 2px solid ${props => props.borderColor};
  border-radius: 20px;
  margin: 20px;
  width: 90%;
  height: 40px;
  outline: none;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => props.bgColor};
  width: 70px;
  border: none;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
  padding-top: 8px;
  padding-left: 16px;
  padding-bottom: 8px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const VideoCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
  @media screen and (min-width: 576px) {
    margin: 20px;
  }
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 300px;
  margin-bottom: 15px;
`
export const NoVideosHeading = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  color: #181818;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`

export const NoVideosNote = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 14px;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  border-radius: 4px;
  padding: 8px 20px;
`

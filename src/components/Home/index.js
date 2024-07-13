import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'
import {
  HomeContainer,
  LoaderContainer,
  BannerContainer,
  BannerLeftPart,
  BannerRightPart,
  BannerImage,
  BannerText,
  BannerButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoCardList,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homeVideos} = this.state
    return homeVideos.length > 0 ? (
      <VideoCardList>
        {homeVideos.map(eachVideo => (
          <VideoCard video={eachVideo} key={eachVideo.id} />
        ))}
      </VideoCardList>
    ) : (
      <NoVideosView>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeading headingColor={this.props.headingColor}>
          No Search results found
        </NoVideosHeading>
        <NoVideosNote noteColor={this.props.noteColor}>
          Try different key words or remove search filter
        </NoVideosNote>
        <RetryButton type="button" onClick={this.onRetry}>
          Retry
        </RetryButton>
      </NoVideosView>
    )
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'block' ? 'block' : 'none'
          const searchBorderColor = isDarkTheme ? '#606060' : '#ebebeb'
          const searchBtnBgColor = isDarkTheme ? '#383838' : '#ebebeb'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer bgColor={bgColor} data-testid="home">
                {bannerDisplay ? (
                  <BannerContainer display={display} data-testid="banner">
                    <BannerLeftPart>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        data-testid="close"
                        type="button"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerContainer>
                ):(
                  null
                )}
                
                <SearchContainer borderColor={searchBorderColor}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    color={textColor}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.getSearchResults}
                    bgColor={searchBtnBgColor}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch size={20} color={textColor} />
                  </SearchButton>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home

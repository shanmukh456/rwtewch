import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomeVideos from '../HomeVideos'

import {
  HomeDiv,
  SecondDiv,
  ThirdDiv,
  Input,
  InputDiv,
  But,
  VideosUl,
  FailImg,
  FailImgDiv,
  OopsHeading,
  OopsPara,
  RetryButton,
  LoadDiv,
  NoVideosIm,
  NoVideosDiv,
  NoSrchResHeading,
  NoSrchResPara,
  BannerSecDiv,
  LogoCrossDiv,
  NxtLogoImg,
  PremiumHeading,
  UpiButton,
  Cross,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    searchInput: '',
    apiStat: apiStatus.initial,
    display: true,
  }

  componentDidMount() {
    this.gettingData()
  }

  gettingData = async () => {
    this.setState({apiStat: apiStatus.inProgress})
    const jk = Cookies.get('jwtToken')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${jk}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      console.log(data)

      const updatedData = data.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        publishedAt: each.published_at,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewsCount: each.view_count,
      }))
      this.setState({homeVideosList: updatedData, apiStat: apiStatus.success})
    } else {
      this.setState({apiStat: apiStatus.failure})
    }
  }

  onChangingSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickingSrcButton = () => {
    const {searchInput, homeVideosList} = this.state

    const newSearchList = homeVideosList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({homeVideosList: newSearchList})
  }

  onClickingRetry = () => {
    this.gettingData()
  }

  onClickingCross = () => {
    this.setState({display: false})
  }

  renderLoading = () => (
    <LoadDiv data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoadDiv>
  )

  homeVideosRender = () => {
    const {homeVideosList} = this.state

    return (
      <>
        {homeVideosList.length > 0 ? (
          <VideosUl>
            {homeVideosList.map(each => (
              <HomeVideos hv={each} key={each.id} />
            ))}
          </VideosUl>
        ) : (
          <NoVideosDiv>
            <NoVideosIm
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <NoSrchResHeading>No Search results found</NoSrchResHeading>
            <NoSrchResPara>
              Try different key words or remove search filter
            </NoSrchResPara>
            <RetryButton type="button" onClick={this.onClickingRetry}>
              Retry
            </RetryButton>
          </NoVideosDiv>
        )}
      </>
    )
  }

  onApiFailure = () => (
    <FailImgDiv>
      <FailImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <OopsHeading>Oops! Something Went Wrong</OopsHeading>
      <OopsPara>
        We are having some trouble to complete your request.Please try again.
      </OopsPara>
      <RetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </RetryButton>
    </FailImgDiv>
  )

  finalRendering = () => {
    const {apiStat} = this.state

    switch (apiStat) {
      case apiStatus.success:
        return this.homeVideosRender()

      case apiStatus.inProgress:
        return this.renderLoading()
      case apiStatus.failure:
        return this.onApiFailure()
      default:
        return null
    }
  }

  render() {
    const {searchInput, display} = this.state
    const ck = Cookies.get('jwtToken')
    if (ck === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <HomeDiv>
        <Header />
        <SecondDiv>
          <SideNavBar />
          <ThirdDiv>
            <BannerSecDiv outline={display}>
              <LogoCrossDiv>
                <NxtLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <Cross>
                  <RxCross2 onClick={this.onClickingCross} />
                </Cross>
              </LogoCrossDiv>
              <PremiumHeading>
                Buy Nxt Watch Premium Prepaid plans with UPI
              </PremiumHeading>
              <div>
                <UpiButton type="button">UPI</UpiButton>
              </div>
            </BannerSecDiv>
            <InputDiv onClick={this.onClickingSrcButton}>
              <Input
                type="search"
                value={searchInput}
                onChange={this.onChangingSearch}
              />
              <But>
                <AiOutlineSearch />
              </But>
            </InputDiv>
            {this.finalRendering()}
          </ThirdDiv>
        </SecondDiv>
      </HomeDiv>
    )
  }
}

export default Home

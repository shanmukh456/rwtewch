import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsFire} from 'react-icons/bs'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideosList from '../TrendingVideosList'

import {
  TrendingMainDiv,
  SideBarAndTrendDiv,
  TrendingDiv,
  TrendHeadConDiv,
  VideosUl,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVidList: [], apiStat: apiStatus.initial}

  componentDidMount() {
    this.gettingTrendVideosData()
  }

  gettingTrendVideosData = async () => {
    this.setState({apiStat: apiStatus.inProgress})
    const {trendingVidList} = this.state

    const jk = Cookies.get('jwtToken')

    const url = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jk}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        publishedAt: each.published_at,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewsCount: each.view_count,
      }))

      this.setState({
        trendingVidList: updatedData,
        apiStat: apiStatus.success,
      })
    } else {
      this.setState({apiStat: apiStatus.failure})
    }
  }

  renderVideos = () => {
    const {trendingVidList} = this.state

    return (
      <VideosUl>
        {trendingVidList.map(each => (
          <TrendingVideosList tv={each} key={each.id} />
        ))}
      </VideosUl>
    )
  }

  onApiRendering = () => {
    const {apiStat} = this.state

    switch (apiStat) {
      case 'SUCCESS':
        return this.renderVideos()

      default:
        return null
    }
  }

  render() {
    const {trendingVidList} = this.state

    console.log(trendingVidList)
    return (
      <TrendingMainDiv>
        <Header />
        <SideBarAndTrendDiv>
          <SideNavBar />
          <TrendingDiv>
            <TrendHeadConDiv>
              <BsFire />
              <h1>Trending</h1>
            </TrendHeadConDiv>
            {this.renderVideos()}
          </TrendingDiv>
        </SideBarAndTrendDiv>
      </TrendingMainDiv>
    )
  }
}

export default Trending

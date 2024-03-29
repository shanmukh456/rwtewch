import {Component} from 'react'
import Cookies from 'js-cookie'

import VideoPlayer from '../VideoPlayer'
import Header from '../Header'

import SideNavBar from '../SideNavBar'

import {MainDiv, SideBar, VidContent} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ParticularVideo extends Component {
  state = {videoDetails: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.gettingParticularVideoData()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  gettingParticularVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const jwtToken = Cookies.get('jwtToken')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideos = () => {
    const {videoDetails} = this.state
    console.log(videoDetails)

    return (
      <>
        <VideoPlayer vidDetails={videoDetails} />
      </>
    )
  }

  onApiRender = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideos()

      default:
        return null
    }
  }

  render() {
    return (
      <MainDiv>
        <Header />
        <SideBar>
          <SideNavBar />
          <VidContent>{this.onApiRender()}</VidContent>
        </SideBar>
      </MainDiv>
    )
  }
}

export default ParticularVideo

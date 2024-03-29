import ReactPlayer from 'react-player'
import ThemeChanger from '../../context/ThemeChanger'

import {MainD, TitlePara, SecondDiv, FirstDiv} from './styledComponents'

const VideoPlayer = props => {
  const {vidDetails} = props

  return (
    <ThemeChanger.Consumer>
      {value => {
        const {onAddSavedVideos, savedVideos} = value
        console.log(savedVideos)

        const onSave = () => {
          onAddSavedVideos(vidDetails)
        }

        return (
          <MainD>
            <ReactPlayer url={vidDetails.videoUrl} />
            <TitlePara>{vidDetails.title}</TitlePara>
            <SecondDiv>
              <FirstDiv>
                <TitlePara>{vidDetails.viewCount}</TitlePara>
                <button type="button" onClick={onSave}>
                  Save
                </button>
              </FirstDiv>
            </SecondDiv>
          </MainD>
        )
      }}
    </ThemeChanger.Consumer>
  )
}

export default VideoPlayer

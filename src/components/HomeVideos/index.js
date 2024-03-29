import {
  Li,
  Img,
  SecDiv,
  ProfileImage,
  ThirdDiv,
  TitlePara,
  ViewsAndPublished,
  Views,
  Published,
  ItemLink,
} from './styledComponents'

const HomeVideos = props => {
  const {hv} = props

  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    title,
    thumbnailUrl,
    viewsCount,
  } = hv

  console.log(viewsCount)
  const currentDate = new Date()
  const pastDate = new Date(publishedAt)
  const yearsAgo = currentDate.getFullYear() - pastDate.getFullYear()

  return (
    <ItemLink to={`videos/${id}`}>
      <Li>
        <Img src={thumbnailUrl} alt="video thumbnail" />
        <SecDiv>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <ThirdDiv>
            <TitlePara>{title}</TitlePara>
            <TitlePara>{name}</TitlePara>
            <ViewsAndPublished>
              <Views>{viewsCount} views .</Views>
              <Published>{yearsAgo} years ago</Published>
            </ViewsAndPublished>
          </ThirdDiv>
        </SecDiv>
      </Li>
    </ItemLink>
  )
}

export default HomeVideos

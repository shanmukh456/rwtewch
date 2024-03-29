import {
  LiItem,
  ImgThumb,
  ContentDiv,
  TitlePara,
  NamePara,
  ViewsandDateDiv,
} from './styledComponents'

const TrendingVideosList = props => {
  const {tv} = props

  const {
    name,
    profileImageUrl,
    publishedAt,
    title,
    thumbnailUrl,
    viewsCount,
  } = tv

  const currentDate = new Date()
  const pastDate = new Date(publishedAt)
  const yearsAgo = currentDate.getFullYear() - pastDate.getFullYear()

  return (
    <LiItem>
      <ImgThumb src={thumbnailUrl} alt="video thumbnail" />
      <ContentDiv>
        <TitlePara>{title}</TitlePara>
        <NamePara>{name}</NamePara>
        <ViewsandDateDiv>
          <NamePara>{viewsCount} views . </NamePara>
          <NamePara> {yearsAgo} years ago</NamePara>
        </ViewsandDateDiv>
      </ContentDiv>
    </LiItem>
  )
}
export default TrendingVideosList

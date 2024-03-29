import styled from 'styled-components'

export const LiItem = styled.li`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 20px;
  align-items: center;
  background-color: pink;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const ImgThumb = styled.img`
  height: 150px;

  @media screen and (max-width: 576px) {
    height: 100px;
  }
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 180px;
  }
`

export const TitlePara = styled.h1`
  font-size: 14px;
`

export const NamePara = styled.p`
  font-size: 13px;
`

export const ViewsandDateDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

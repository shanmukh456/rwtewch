import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 7px;
  width: 300px;
`

export const Img = styled.img`
  height: 180px;
`

export const SecDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitlePara = styled.p`
  font-size: 12px;
`

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-top: 13px;
  margin-right: 5px;
`
export const ViewsAndPublished = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const Views = styled.p`
  font-size: 12px;
`

export const Published = styled.p`
  margin-left: 7px;
  font-size: 12px;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

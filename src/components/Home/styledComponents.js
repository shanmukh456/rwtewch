import styled from 'styled-components'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const SecondDiv = styled.div`
  display: flex;
  height: 90vh;
`

export const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 80vw;
  padding: 10px;
`

export const Input = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  height: 25px;
`

export const InputDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid grey;
  margin-left: 2px;
  margin-bottom: 5px;
`

export const But = styled.button`
  text-align: center;
  height: 25px;
`

export const VideosUl = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`

export const FailImg = styled.img`
  height: 250px;
  width: 280px;

  margin-top: 50px;
`
export const FailImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const OopsHeading = styled.h1`
  color: black;
`

export const OopsPara = styled.p`
  color: black;
`

export const RetryButton = styled.button`
  color: white;
  background-color: blue;
`

export const LoadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const NoVideosIm = styled.img`
  height: 300px;
  width: 340px;
`
export const NoVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NoSrchResHeading = styled.h1`
  color: blue;
`

export const NoSrchResPara = styled.p`
  color: grey;
`

export const BannerSecDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.outline ? 'flex' : 'none')};
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  width: 100%;
`

export const LogoCrossDiv = styled.div`
display:flex;

justify-content:space-between:
width:90vw;
align-items:center;

`

export const NxtLogoImg = styled.img`
  height: 30px;
  width: 130px;
`

export const PremiumHeading = styled.p`
  color: black;
  font-size: 20px;
`

export const UpiButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  text-align: center;
`
export const Cross = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-end;
  text-align: center;
`

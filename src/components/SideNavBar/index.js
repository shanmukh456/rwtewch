import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'
import ThemeChanger from '../../context/ThemeChanger'

import {
  SideNav,
  UlDiv,
  LiItem,
  Contact,
  ContactUsDiv,
  Heading,
} from './styledComponents'

class SideNavBar extends Component {
  render() {
    return (
      <ThemeChanger.Consumer>
        {value => {
          const {currentTab, onToddleTab} = value

          const onClickingHome = () => {
            onToddleTab('Home')
          }
          const onClickingTrending = () => {
            onToddleTab('Trending')
          }

          const onClickingGaming = () => {
            onToddleTab('Gaming')
          }

          const onClickingSaved = () => {
            onToddleTab('Saved')
          }

          return (
            <SideNav>
              <UlDiv>
                <Link to="/">
                  <LiItem onClick={onClickingHome}>
                    <AiOutlineHome
                      size={20}
                      color={currentTab === 'Home' ? 'red' : 'white'}
                    />
                    <Heading>Home</Heading>
                  </LiItem>
                </Link>
                <Link to="/trending">
                  <LiItem onClick={onClickingTrending}>
                    <BsFire
                      size={20}
                      color={currentTab === 'Trending' ? 'red' : 'white'}
                    />
                    <Heading>Trending</Heading>
                  </LiItem>
                </Link>
                <LiItem onClick={onClickingGaming}>
                  <SiYoutubegaming
                    size={20}
                    color={currentTab === 'Gaming' ? 'red' : 'white'}
                  />
                  <Heading>Gaming</Heading>
                </LiItem>
                <LiItem onClick={onClickingSaved}>
                  <MdPlaylistAdd
                    size={20}
                    color={currentTab === 'Saved' ? 'red' : 'white'}
                  />
                  <Heading>Saved Videos</Heading>
                </LiItem>
              </UlDiv>
              <ContactUsDiv>
                <Contact>Contact</Contact>
              </ContactUsDiv>
            </SideNav>
          )
        }}
      </ThemeChanger.Consumer>
    )
  }
}

export default SideNavBar

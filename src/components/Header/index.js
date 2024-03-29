import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsFillMoonFill, BsSun} from 'react-icons/bs'

import ThemeChanger from '../../context/ThemeChanger'

import {
  NavBar,
  LogoImg,
  ProfileDiv,
  Profile,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

class Header extends Component {
  onClickingLogout = () => {
    Cookies.remove('jwtToken')
  }

  render() {
    return (
      <ThemeChanger.Consumer>
        {value => {
          const {isTheme, onToddleTheme} = value

          const onClickingThemeIcon = () => {
            onToddleTheme()
          }

          return (
            <NavBar outline={isTheme}>
              <LogoImg
                src={
                  isTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
              <ProfileDiv>
                <ThemeButton type="button" onClick={onClickingThemeIcon}>
                  {isTheme ? (
                    <BsFillMoonFill size={15} />
                  ) : (
                    <BsSun color="white" size={15} />
                  )}
                </ThemeButton>

                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <LogoutButton type="button" onClick={this.onClickingLogout}>
                  Logout
                </LogoutButton>
              </ProfileDiv>
            </NavBar>
          )
        }}
      </ThemeChanger.Consumer>
    )
  }
}

export default Header

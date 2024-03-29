import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.outline ? 'white' : '#1e293b')};
  padding: 10px;
  height: 10vh;
`

export const LogoImg = styled.img`
  height: 30px;
  width: 130px;
`

export const ProfileDiv = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    width: 150px;
  }
`

export const Profile = styled.img`
  height: 20px;
`

export const LogoutButton = styled.button``

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`

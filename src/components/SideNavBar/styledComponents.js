import styled from 'styled-components'

export const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: green;
  width: 20vw;
  height: 90vh;
`

export const UlDiv = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const LiItem = styled.li`
  list-style-type: none;
  margin-left: 5px;
  width: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Contact = styled.h1`
  color: white;
`

export const ContactUsDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.p`
  margin-left: 10px;
  font-size: 15px;
`

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 25px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 28px;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #212121;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: #d7dfe9;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #cccccc;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: #cccccc;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled(CloseButton)`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
  cursor: pointer;
  outline: none;
`

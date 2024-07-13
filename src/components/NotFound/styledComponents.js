import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  text-align: center;
`
export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
`

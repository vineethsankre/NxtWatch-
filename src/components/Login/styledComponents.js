import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.div`
  padding: 35px 25px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  width: 90%;
  max-width: 340px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`
export const LoginLogoImage = styled.img`
  height: 35px;
  width: 150px;
  margin-bottom: 20px;
`
export const Form = styled.form`
  padding-top: 10px;
`
export const InputContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`
export const LabelInput = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  font-weight: 500;
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  background-color: transparent;
  outline: none;
  padding: 8px;
  height: 40px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  outline: none;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
  align-self: flex-start;
  font-weight: 400;
`

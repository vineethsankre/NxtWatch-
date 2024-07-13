import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  LoginBgContainer,
  LoginCardContainer,
  LoginLogoImage,
  Form,
  InputContainer,
  LabelInput,
  UserInput,
  CheckBoxContainer,
  CheckboxInput,
  ShowPasswordLabel,
  LoginButton,
  SubmitError,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMsg: '',
    isError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({isError: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onCheckBox = () => {
    this.setState(prevState => ({
      passwordType: prevState.passwordType === 'password' ? 'text' : 'password',
    }))
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username, theme} = this.state
    return (
      <>
        <LabelInput htmlFor="username" theme={theme}>
          USERNAME
        </LabelInput>
        <UserInput
          type="text"
          id="username"
          placeholder="Username"
          theme={theme}
          value={username}
          onChange={this.updateUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, passwordType, theme} = this.state
    return (
      <>
        <LabelInput htmlFor="password" theme={theme}>
          PASSWORD
        </LabelInput>
        <UserInput
          type={passwordType}
          id="password"
          placeholder="Password"
          theme={theme}
          value={password}
          onChange={this.updatePassword}
        />
        <CheckBoxContainer>
          <CheckboxInput
            type="checkbox"
            id="showPassword"
            onChange={this.onCheckBox}
          />
          <ShowPasswordLabel theme={theme} htmlFor="showPassword">
            Show Password
          </ShowPasswordLabel>
        </CheckBoxContainer>
      </>
    )
  }

  render() {
    const {isError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <LoginBgContainer theme={theme}>
              <LoginCardContainer theme={theme}>
                <LoginLogoImage src={websiteLogo} alt="website logo" />
                <Form onSubmit={this.onSubmit}>
                  <InputContainer>{this.renderUsernameField()}</InputContainer>
                  <InputContainer>{this.renderPasswordField()}</InputContainer>
                  <div>
                    <LoginButton type="sumbit">Login</LoginButton>
                  </div>
                  <SubmitError>{isError && `* ${errorMsg}`}</SubmitError>
                </Form>
              </LoginCardContainer>
            </LoginBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login

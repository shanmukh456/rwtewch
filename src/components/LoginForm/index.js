import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {LoginButton} from './styledComponents'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', checkbox: false}

  onChangingUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangingPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  onSuccess = jwtToken => {
    Cookies.set('jwtToken', jwtToken, {expires: 10})
    const {history} = this.props
    history.replace('/')
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    const {username, password, checkbox} = this.state

    const ck = Cookies.get('jwtToken')
    if (ck !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main">
        <form onSubmit={this.onSubmittingForm} className="form-main">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch"
            className="next-watch-logo"
          />
          <div className="label1">
            <label htmlFor="user" className="lb1">
              USERNAME
            </label>
            <div>
              <input
                type="text"
                className="user-input1"
                value={username}
                placeholder="Username"
                onChange={this.onChangingUserName}
              />
            </div>
          </div>
          <div className="label2">
            <label htmlFor="pass" className="lb2">
              PASSWORD
            </label>
            <div>
              <input
                type={checkbox ? 'text' : 'password'}
                className="pass-input1"
                value={password}
                onChange={this.onChangingPassword}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="check">
            <input
              type="checkbox"
              id="check"
              checked={checkbox}
              onChange={this.onChangeCheck}
            />
            <label htmlFor="check" className="ps-label">
              Show Password
            </label>
          </div>
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </div>
    )
  }
}

export default LoginForm

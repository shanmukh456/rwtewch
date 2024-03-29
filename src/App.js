import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import ParticularVideo from './components/ParticularVideo'
import ThemeChanger from './context/ThemeChanger'

import './App.css'

class App extends Component {
  state = {isTheme: true, currentTab: 'Home', savedVideos: []}

  onChangingTheme = () => {
    this.setState(prevState => ({isTheme: !prevState.isTheme}))
  }

  onChangingTab = tab => {
    this.setState({currentTab: tab})
  }

  onAddSavedVideos = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isTheme, currentTab, savedVideos} = this.state
    console.log(currentTab)
    console.log(isTheme)
    return (
      <ThemeChanger.Provider
        value={{
          isTheme,
          currentTab,
          savedVideos,
          onToddleTheme: this.onChangingTheme,
          onToddleTab: this.onChangingTab,
          onAddSavedVideos: this.onAddSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/videos/:id" component={ParticularVideo} />
        </Switch>
      </ThemeChanger.Provider>
    )
  }
}

export default App

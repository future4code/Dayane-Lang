import { useState } from 'react'
import { AppConteiner } from './Components/StyledPages/styledApp'
import HomeScreen from './Components/HomeScreen';
import MatchScreen from './Components/MatchScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(true)

  const changeScreen = () => {
    setCurrentScreen(!currentScreen)
  }

  return (
    <AppConteiner>
      {currentScreen ? <HomeScreen changeScreen={changeScreen} />
      : <MatchScreen changeScreen={changeScreen} />}       
    </AppConteiner>
  );
}
export default App;
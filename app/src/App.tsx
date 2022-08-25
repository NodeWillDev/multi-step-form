import FormContextProvider from './context/FormContextProvider';
import GlobalStyled from './globals/styles/globalStyled';
import Routers from './router/router';

function App() {
  return <>
    <FormContextProvider>
      <GlobalStyled />
      <Routers />      
    </FormContextProvider>
  </>
}

export default App;

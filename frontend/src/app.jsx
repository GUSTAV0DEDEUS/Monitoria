import Header from './components/common/header/header';
import { Outlet } from 'react-router-dom';
import { AppContainer } from './styles/global';
export default function App() {

  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>

  );
}
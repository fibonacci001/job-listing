import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Joblist from './component/Job-listing';
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Postjobs from './component/Postjobs';
import Hero from './component/Hero';


const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    secondary: {
      main: '#6b8e8e',
      light: 'hsl(180, 31%, 95%)'
    }
  }
})
function App() {
  return (

    <QueryClientProvider client={queryClient}>
<ThemeProvider theme={theme}>
      
      < Hero />
<Routes>
    <Route path='/' element={<Joblist />} />
    <Route path='/postjobs' element={<Postjobs />} />
     
    
</Routes>
<Nav />
</ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}
    position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

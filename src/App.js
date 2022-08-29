import {BrowseRouter, Routes,  Route, BrowserRouter} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar  from './components/Navbar';

const App = () =>   (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar  />
            <Routes>
                <Route path ='/' exact element={<Feed/>}      />
                <Route path ='/video/:id' elment= {<VideoDetails/>} />
                <Route path ='/channel/:id' elment= {<ChannelDetails/>} />
                <Route path ='/search/:searchTerm' elment= {<SearchFeed/>} />

            </Routes>

        </Box>
    </BrowserRouter>
  )


export default App
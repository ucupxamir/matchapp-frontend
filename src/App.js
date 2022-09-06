import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompetitionList from './components/CompetitionList';
import CompetitionView from './components/CompetitionView';
import Register from './components/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CompetitionList/>}></Route>
                <Route path='/competitions/:id' element={<CompetitionView/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
import logo from './logo.svg';
import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<ListEmployee />}></Route>
                <Route path="/employees" element={<ListEmployee />}></Route>
                <Route path="/add-employee" element={<AddEmployee />}></Route>
                <Route path="/update-employee" element={<UpdateEmployee />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

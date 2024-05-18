import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Navbar from './shared/Navbar';
import { GlobalStyle } from 'shared/Styled';
import PracticeExam from './routes/PracticeExam';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-exam" element={<PracticeExam />} />
      </Routes>
    </>
  );
}
export default App;
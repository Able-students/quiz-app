import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp'
import ContactApp from './components/ContactApp'
import Menu from './components/Menu';

export function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/quiz' element={<QuizApp/>}/>
      <Route path='/contact' element={<ContactApp/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;








// Задача
// Приложение для рецептов
// Создайте простое приложение рецептов, которое извлекает список всех
// рецептов из внешнего API (используйте axios) и обеспечивает функцию динамического поиска.
// https://api.edamam.com/search?q=${name}&app_id=2fff3f31&app_key=f848ed261b94d57b95e3d2218030cd89
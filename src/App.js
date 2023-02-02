import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizApp from './components/QuizApp'
import ContactApp from './components/ContactApp'
import CounterApp from './components/CounterApp'

import Menu from './components/Menu';
import Slider from './components/Slider';
import MovieDetails from './components/MovieDetails';
import Form from './components/LoginForm';
import Accordion from './components/Accordion';
import Shop from './components/Shop';



export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/contact' element={<ContactApp />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/movie/' element={<MovieDetails />} />
        <Route path='/counter' element={<CounterApp />} />
        <Route path='/form' element={<Form />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








// Задача 1
// Простая форма входа в React
// Код для простой формы входа, где пользователь входит в систему, вводя свое имя пользователя и пароль.
// Входные данные формы проверяются, чтобы проверить, введена ли правильная информация, и сообщения об ошибках
// не проходят проверку. Форма входа скрыта, и при успешном входе пользователя отображается сообщение «Добро пожаловать, ${name}».

// Ниже приведены шаги для создания простой формы входа с использованием React:
// 1. Создайте элементы формы ввода имени, электронной почты и пароля.
// 2. React States для хранения значений ввода пользователя.
// 3. Добавьте проверку формы для сравнения имени, электронной почты и пароля с правильными значениями.
// 4. Отобразить «Добро пожаловать, ${name}», если вход выполнен успешно, иначе отобразить сообщение об ошибке.


// Задача 2
// Создание аккордеона, который переключает текстовое содержимое по щелчку на заголовке аккордеона,
// используя React State и условный рендеринг.
// Ниже приведены шаги для создания аккордеона в React JS:
// 1. Показать каждое название аккордеона с телом.
// 2. Переключить видимость тела аккордеона при нажатии на заголовок.
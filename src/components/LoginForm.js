import Menu from './Menu';
import { useReducer } from 'react'
import { initialState, reducer } from '../store';
import '../styles/LoginForm.css'

function Form() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(state);
    function checkLogin() {
        if (state.userInfo.name === state.changeUser.name) {
            if (state.userInfo.email === state.changeUser.email) {
                if (state.userInfo.password === state.changeUser.password) {
                    alert(`«Добро пожаловать, ${state.userInfo.name}»`);
                } else {
                    alert('Не верный пароль');
                }
            } else {
                alert('Не верный email');
            }
        } else {
            alert('Нет такого пользователя');
        }
    }
    return (
        <div className='Form'>
            <Menu />
            <h2 className='Form-Title'>Login form</h2>
            <div className='Form-Box'>
                <input className='Form-Inp Login' type={'text'} placeholder='Enter name' onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })} />
                <input className='Form-Inp Email' type={'email'} placeholder='Enter email' onChange={(e) => dispatch({ type: 'changeEmail', payload: e.target.value })} />
                <input className='Form-Inp Password' type={'password'} placeholder='Enter password' onChange={(e) => dispatch({ type: 'changePass', payload: e.target.value })} />
                <input className='Form-Inp Btn' type={'submit'} value={'Click'} onClick={checkLogin} />
            </div>
        </div>
    )
}

export default Form;

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
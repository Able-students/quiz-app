import { quiz_list } from './constants'
export const initialState = {
    counter: 10,
    userInfo: {
        name: 'admin',
        email: 'admin@mail.ru',
        password: '123e432'
    },
    changeUser: {
        name: '',
        email: '',
        password: ''
    },
    answer: [],
    score: 0,
    isCheck: false,
    list: quiz_list
}


export function reducer(state, action) {
    // console.log(action);
    switch (action?.type || action) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'setCheck':
            return {
                ...state,
                isCheck: action.payload
            }
        case 'setScore':
            return {
                ...state,
                score: action.payload
            }
        case 'setList':
            return {
                ...state,
                list: action.payload
            }
        case 'setAnswer':
            return {
                ...state,
                answer: action.payload
            }
        case 'infoName':
            return {
                ...state,
                userInfo: {
                    name: action.payload,
                    email: state.userInfo.email,
                    password: state.userInfo.password
                }
            }
        case 'infoEmail':
            return {
                ...state,
                userInfo: {
                    name: state.userInfo.name,
                    email: action.payload,
                    password: state.userInfo.password
                }
            }
        case 'infoPass':
            return {
                ...state,
                userInfo: {
                    name: state.userInfo.name,
                    email: state.userInfo.email,
                    password: action.payload
                }
            }
        case 'changeName':
            return {
                ...state,
                changeUser: {
                    name: action.payload,
                    email: state.changeUser.email,
                    password: state.changeUser.password
                }
            }
        case 'changeEmail':
            return {
                ...state,
                changeUser: {
                    name: state.changeUser.name,
                    email: action.payload,
                    password: state.changeUser.password
                }
            }
        case 'changePass':
            return {
                ...state,
                changeUser: {
                    name: state.changeUser.name,
                    email: state.changeUser.email,
                    password: action.payload
                }
            }
        default:
            return state
    }
}


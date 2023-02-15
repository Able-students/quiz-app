import { quiz_list } from '../../constants';
import types from '../actions/types';

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
    list: quiz_list,
    productList: [],
    basketList: [],
    error: null
}

export default function reducer(state = initialState, action) {
    // console.log(action);
    switch (action?.type) {
        case types.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case types.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case types.SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        case 'setBasketList':
            return {
                ...state,
                basketList: action.payload
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


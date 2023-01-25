import { quiz_list } from './constants'
export const initialState = {
    counter: 10,
    userInfo: {
        name: 'admin',
        surname: 'admin',
        password: '123e432'
    },
    answer: [],
    score: 0,
    isCheck: false,
    list: quiz_list
}


export function reducer(state,action){
    console.log(action);
    switch(action?.type || action){
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
        case 'changeName':
            return {
                ...state,
                userInfo: {
                    name: action.payload,
                    surname: state.userInfo.surname
                }
            }
        case 'changeSurname':
            return {
                ...state,
                userInfo: {
                    name: state.userInfo.name,
                    surname: action.payload,
                }
            }
        default:
            return state
    }
}


// 중앙 데이터 관리소 (State)를 설정하는 부분

import {createStore} from "redux"
import { combineReducers } from "redux"
import counter from "../modules/counter"
import users from "../modules/user"


const rootReducer = combineReducers({
    //modules 내의 state의 묶음들을 객체 형태로 몰아 넣어줄 것이다.
    counter, users
})
const store = createStore(rootReducer)

export default store
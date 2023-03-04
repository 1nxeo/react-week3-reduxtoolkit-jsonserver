
// 초기 상태값 (state)
const initialState = {
    userId : "inseo",
}

// 리듀서 : 'state'에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state, action
const users = (state = initialState, action) => {
    switch (action.type){
        
        default:
            return state;
    }
}

export default users
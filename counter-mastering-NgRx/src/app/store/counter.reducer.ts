import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    //adding action, old state + 1
    on(increment, (state,action) => state + action.value),
    on(decrement, (state,actiion) => state - actiion.value),
    on(set,(state,action) => action.value)
);

// export function counterReducer(state = initialState){
//     return state;
// }
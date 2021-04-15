import {combineReducers} from 'redux'
import {DECREMENT, INCREMENT} from "./types";

function counterReducer(counter = 6, action) {
    switch (action.type) {
        case INCREMENT:
           return counter + 1

        case DECREMENT:
            return counter - 1

        default: return counter
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
})
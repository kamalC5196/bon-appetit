import { SET_CATEGORY } from "../action";
import { SET_WINE } from "../action";
import { SET_INGERIDENTS } from "../action";

function receipes(state=[], action){
    switch(action.type){
        case SET_CATEGORY:
            return action.items;
        case SET_WINE:
            return action.items;
        case SET_INGERIDENTS:
            return action.items;
            
        default: return state;
    }
}

export default receipes;
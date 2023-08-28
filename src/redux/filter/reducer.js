import { initialState } from "../todos/initialState";
import { COLORCHANGED, STATUSCHANGED } from "./actionType";

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED:
            const {color, chnageType} = action.payload

            switch(chnageType){
                case 'added':
                    return {
                        ...state,
                        colors:[
                            ...state.colors,
                            color
                        ]
                    }
                case 'removed':
                    return{
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }
                default:
                    return state;

            }
    
        default:
            return state;
    }
}

export default reducer;
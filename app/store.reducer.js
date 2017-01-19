import { REHYDRATE } from "redux-persist/constants";

export default function storage(state = {}, action) {
    switch (action.type) {
        case REHYDRATE:
            return {
                ...state,
                storageLoaded: true
            };
        case "HELOO____":
        	return {
                ...state,
                storageLoaded: false
            };
        default:
            return state;
    }
}

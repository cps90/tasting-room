import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

export const getWine = () => {
    return dispatch => {
        //set up http source in package.json under 'proxy'// 
        axios.get('/wine').then(response => {
            dispatch({
                type: "GET_WINE",
                wine: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

// export const getWineById = (id) => {
//     return dispatch => {
//         axios.get(`/wine/` + id).then(response => {
//             console.log("WinebyID", response.data)
//             dispatch({
//                 type: "GET_WINE_BY_ID",
//                 oneWine: response.data
//             })
//         }).catch(err => {
//             console.log(err)
//         }) 
//     }
// }

export const getFood = () => {
    return dispatch => {
        axios.get('/food').then(response => {
            dispatch({
                type: "GET_FOOD",
                food: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}


// export const getFoodById = (id) => {
//     return dispatch => {
//          axios.get(`/food/${id}`).then(response => {
//             console.log("FoodbyID", response.data)
//             dispatch({
//                 type: "GET_FOOD_BY_ID",
//                 oneFood: response.data
//             })
//         }).catch(err => {
//             console.log(err)
//         }) 
//     }
// }

export const postComment = (id, newComment) => {
    return dispatch => {
        axios.post(`/wine/${id}/comments`, newComment).then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }
}    

const initialState = {
    wine: [],
    food: [],
    oneFood: '',
    oneWine: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_WINE":
            return {
                ...state,
                wine: action.wine
            }
        case "GET_FOOD":
            return {
                ...state,
                food: action.food   
            }    
        case "GET_WINE_BY_ID":
            return {
                ...state,
                oneWine: action.oneWine
            }
        case "GET_FOOD_BY_ID":
            return {
                ...state,
                oneFood: action.oneFood
            }             
        default:
            return state    
    }
}

export default createStore(reducer, applyMiddleware(thunk));
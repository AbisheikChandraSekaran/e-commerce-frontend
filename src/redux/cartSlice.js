// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:"cart",
//     initialState: {
//         items: []
//     },
//     reducers: {
//         setCart: (state,action)=>{
//             state.items = action.payload;
//         },
//         addItem: (state,action)=>{
//             state.items.push(action.payload)
//         }
//     },
// });

// export const {setCart, addItem} = cartSlice.actions;
// export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action);
            state.items.push(action.payload);
        },
        setCart: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice, current } from "@reduxjs/toolkit";
const cartState = {
    items: [],
    Totalamount: 0,
    toggle: false,
    form: false,
    cartlist: true

};

const CartSlice = createSlice({
    name: 'Cartitem',
    initialState: cartState,
    reducers: {
        Additems: (state, action) => {

            const findUpdatedIndex = state.items.findIndex(item => item.id === action.payload.id)
            const existingCartitem = state.items[findUpdatedIndex]
            if (existingCartitem) {
                const existingcontent = {
                    ...existingCartitem,
                    Value: existingCartitem.Value + action.payload.Value
                }
                console.log(existingcontent)
                state.items = [...state.items]
                state.items[findUpdatedIndex] = existingcontent
            }
            else {
                state.items = state.items.concat(action.payload)

                state.Totalamount = state.Totalamount + (action.payload.Price * action.payload.Value)
            }
        },
        Removeitem: (state, action) => {

            state.items = state.items.filter(item => item.id !== action.payload)
            console.log(current(state))
            // state.items = updatedArray
        },
        Addtovalue: (state, action) => {
            state.Totalamount = state.Totalamount + action.payload.price
            const existingitemindex = state.items.findIndex(item => item.id === action.payload.id)
            console.log('existingitemindex', existingitemindex)
            const existingitem = state.items[existingitemindex]


            if (existingitem) {
                const updatedvalue = {
                    ...existingitem,
                    Value: action.payload.value + 1
                }
                console.log('existingitemindex1', updatedvalue)
                state.items = [...state.items]
                state.items[existingitemindex] = updatedvalue
            }


        },
        Removefromcaert: (state, action) => {
            state.Totalamount = state.Totalamount - action.payload.price
            const existingitemindex = state.items.findIndex(item => item.id === action.payload.id)
            console.log('existingitemindex', existingitemindex)
            const existingitem = state.items[existingitemindex]
            if (existingitem.Value === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }
            else {
                const updatedvalue = {
                    ...existingitem,
                    Value: action.payload.value - 1
                }
                console.log('existingitemindex1', updatedvalue)
                state.items = [...state.items]
                state.items[existingitemindex] = updatedvalue
            }


        },
        Clearcart: (state) => {
            state.items = []
        },
        showToggle: (state, action) => {
            console.log('good')
            state.toggle = true
            console.log(current(state))
        },
        HideToggle: (state, action) => {
            state.toggle = false

        },
        showform: (state) => {
            state.form = true
            state.cartlist = false

        },
        Hideform: (state) => {
            state.form = false
            state.cartlist = true
        }
    }
})

export const cartActions = CartSlice.actions
export default CartSlice.reducer;
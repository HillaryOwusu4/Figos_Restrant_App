import { createSlice, current } from "@reduxjs/toolkit";


interface list { id:string,
    Name:string,
    Price:number,
    Value:number}
    const initialtoken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
   
   

const cartState:{items:list[],
    Totalamount: number,
    toggle: boolean,
    form: boolean,
    cartlist: boolean
     ,token:any,
     isLoggedIn:boolean
    } = {
    items: [],
    Totalamount: 0,
    toggle: false,
    form: false,
    cartlist: true,
    token:initialtoken,
    isLoggedIn:false,
    

};

const CartSlice = createSlice({
    name: 'Cartitem',
    initialState: cartState,
    reducers: {
        Additems: (state, action) => {
         
            const findUpdatedIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const existingCartitem = state.items[findUpdatedIndex]
          
            if (existingCartitem) {
                const existingcontent = {
                    ...existingCartitem,
                    Value: existingCartitem.Value + action.payload.Value
                }
                
                state.items = [...state.items]
                state.items[findUpdatedIndex] = existingcontent
            }
            else {
                state.items = state.items.concat(action.payload)

                state.Totalamount = state.Totalamount + (action.payload.Price * action.payload.Value)
            }
        },
        Removeitem: (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload)
         
            // state.items = updatedArray
        },
        Addtovalue: (state, action) => {
            state.Totalamount = state.Totalamount + action.payload.price
            const existingitemindex = state.items.findIndex((item)=> item.id === action.payload.id)
           
            const existingitem:any = state.items[existingitemindex]


            if (existingitem) {
                const updatedvalue = {
                    ...existingitem,
                    Value: action.payload.value + 1
                }
               
                state.items = [...state.items]
                state.items[existingitemindex] = updatedvalue
            }


        },
        Removefromcaert: (state, action) => {
            state.Totalamount = state.Totalamount - action.payload.price
            const existingitemindex = state.items.findIndex((item) => item.id === action.payload.id)
          
            const existingitem = state.items[existingitemindex]
            if (existingitem.Value === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            }
            else {
                const updatedvalue = {
                    ...existingitem,
                    Value: action.payload.value - 1
                }
              
                state.items = [...state.items]
                state.items[existingitemindex] = updatedvalue
            }


        },
        Clearcart: (state) => {
            state.items = []
        },
        showToggle: (state) => {
      
            state.toggle = true
         
        },
        HideToggle: (state) => {
            state.toggle = false

        },
        showform: (state) => {
            state.form = true
            state.cartlist = false

        },
        Hideform: (state) => {
            state.form = false
            state.cartlist = true
        },
        loginhandler:(state,action)=>{
            state.token = action.payload
            localStorage.setItem('token',action.payload)

        },
        logouthandler:(state)=>{
            state.token = ''
            localStorage.removeItem('token')
        }
    }
})

export const cartActions = CartSlice.actions
export default CartSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productState = {
    items: []
};


const getProducts = createAsyncThunk("products/getProducts", async (api, thunkAPI) => {
    const respone = await fetch('https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json', {
        method: "get"
    })
    return respone.json();
})

const ProductSlice = createSlice({
    name: 'Cartitem',
    initialState: productState,
    reducers: {
    }, extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            let loadedData = [];
            for (const key in payload) {
                loadedData.push({
                    Name: payload[key].name,
                    Description: payload[key].Description,
                    Price: payload[key].Price,
                    cart: payload[key].cart,
                    Add: payload[key].Add,
                    image: payload[key].image,
                    id: payload[key].id,
                })
            }
            state.items = loadedData;

        })
    }
})

export { getProducts };
export default ProductSlice.reducer;
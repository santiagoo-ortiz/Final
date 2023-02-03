import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slices/isLoading.slice'
import productSlice from './slices/product.slice'
import cartSlide from './slices/cart.slide'
import  purchaseSlice  from './slices/favorites.slice'


export default configureStore({
  reducer: { 
    isLoading: isLoadingSlice,
    product: productSlice,
    cart: cartSlide,
    purchase: purchaseSlice
	}
})


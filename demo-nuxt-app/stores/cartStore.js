import { getStoredCart, addToDb } from '~/composable/addToCart';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: {},
  }),

  getters: {
    // Return the number of items in the cart
    cartItemCount: (state) => {
      return Object.keys(state.cart).length;
    },
  },

  actions: {
    // Action to get cart data from localStorage and update the store's state
    async getCartDataFromLocalStorage() {
      this.cart = getStoredCart();
    },

    // Action to add an item to the cart and update localStorage
    addToCart(itemId) {
      addToDb(itemId);  
      this.cart = getStoredCart(); 
    },
  },
});

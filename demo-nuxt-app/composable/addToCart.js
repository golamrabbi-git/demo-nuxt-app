// Function to add an item to the shopping cart
const addToDb = (id) => {
    if (process.client) {  // Check if we're in the client
        try {
            let shoppingCart = {};

            // Get the shopping cart from local storage
            const storedCart = localStorage.getItem('shopping-cart');
            if (storedCart) {
                shoppingCart = JSON.parse(storedCart);
            }

            // Add quantity
            const quantity = shoppingCart[id];
            if (quantity) {
                const newQuantity = quantity + 1;
                shoppingCart[id] = newQuantity;
            } else {
                shoppingCart[id] = 1;
            }

            // Store updated cart in local storage
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        } catch (error) {
            console.error('Error adding to the shopping cart:', error);
        }
    }
}

// Function to retrieve the shopping cart from local storage
const getStoredCart = () => {
    if (process.client) {
      try {
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          return parsedCart;
        }
      } catch (error) {
        console.error('Error retrieving the shopping cart:', error);
      }
    }
    return {};
  };
  

export { addToDb, getStoredCart };

// Utility function to get the cart from localStorage
export const getCart = () => {
    let cart;

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
         cart = localStorage.getItem('cart');
      } else {
        // Handle the case for SSR (e.g., set a default value)
        cart = null; // or set some default value
      }
    
    return cart ? JSON.parse(cart) : [];
  };
  
  // Utility function to save the cart to localStorage
  export const saveCart = (cart: any) => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
        
      } else {

        return false;
      }

    return true;
  };
  
  // Function to add an item to the cart
  export const addToCart = (item: any) => {
    const cart = getCart();
  
    // Check if item already exists in the cart
    const existingItemIndex = cart.findIndex((cartItem:any) => cartItem.id === item.id);
  
    if (existingItemIndex > -1) {
      // If item exists, increase the quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // If item doesn't exist, add it to the cart
      cart.push({ ...item, quantity: 1 });
    }
  
    const res = saveCart(cart);
    console.log('Item added to cart:', item);
    console.log('Cart updated:', cart);
    return res;
  };
  
  // Function to remove an item from the cart
  export const removeFromCart = (id: number) => {
    const cart = getCart();
    const updatedCart = cart.filter((cartItem:any) => cartItem.id !== id);
  
   const res =  saveCart(updatedCart);
    console.log('Item removed from cart:', id);

    return res;
  };

  // Function to calculate the total value of the cart
  export const calculateTotal = () => {
    const cart = getCart();
    const total = cart.reduce((sum:any, item:any) => sum + item.price * 1, 0);
    console.log('Total cart value:', total);
    return total;
  };

  // Function to get all product IDs in the cart
export const getPurchasingProducts = () => {
    const cart = getCart();
    const purchasingProducts = cart.map((item:any) => item.id); // Extract all product IDs
    // console.log('Purchasing Products:', purchasingProducts);
    return purchasingProducts;
  };

  //****clear cart */
  export const clearCart = () => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem('cart', JSON.stringify([]));
        
      } else {

        return false;
      }

    return true;
  };
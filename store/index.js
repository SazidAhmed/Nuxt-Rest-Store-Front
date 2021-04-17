export const state = () => ({
    cart:{
        items:[],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,

})
  
export const mutations = {
    initializeStore(state) {
      try {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } catch {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
        const exists = state.cart.items.filter(i => i.product.id === item.product.id)
        if (exists.length) {
          exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
        } else {
          state.cart.items.push(item)
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },

}

export const actions = {

}
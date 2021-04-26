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
  incQty(state, p){
    const item = state.cart.items.filter(i => i.product.id === p.product.id)
    item[0].quantity = parseInt(item[0].quantity) + 1;
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  decQty(state, p){
    const item = state.cart.items.filter(i => i.product.id === p.product.id)
    item[0].quantity = parseInt(item[0].quantity) - 1;
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeFromCart(state, p) {
    state.cart.items = state.cart.items.filter(i => i.product.id !== p.product.id)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }

}

export const actions = {
  incQty:context=>{
    setTimeout(()=>{
      context.commit('incQty')
    })
  }
}
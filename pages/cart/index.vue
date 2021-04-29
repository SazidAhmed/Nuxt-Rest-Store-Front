<template>
  <div>
    <header>
        <h2 class="text-gray-500 text-4xl font-semi-bold uppercase mb-5">Cart Items</h2>
    </header>
    <!-- table -->
    <div v-if="cartTotalLength">
      <table class="border-collapse w-full">
          <thead>
              <tr>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quantity</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Amount</th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in cart.items" :key="item.product.id" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                      {{ index+1 }}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b item-center block lg:table-cell relative lg:static">
                      <img :src="item.product.get_thumbnail" alt="image" class="object-cover" style="width:60px; height:60pxl">
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product</span>
                     {{ item.product.name }}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                      {{ item.product.price }}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1  text-xs font-bold uppercase">Quantity</span>
                     <span class="mr-5">{{ item.quantity }}</span>
                     <span @click="decQty(item)" class="rounded-md py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">-</span>
                     <span @click="incQty(item)" class="rounded-md py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">+</span>
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount</span>
                      $ {{ getItemTotal(item).toFixed(2) }}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                      <span @click="remCartItem(item)" class="rounded-md py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">Remove</span>
                  </td>
              </tr>
          </tbody>
      </table>
      <div>
        <div>
          <h1>Summary</h1>
          <span class="block">Total Item: {{ cartTotalLength }}</span>
          <span>Total Payment : $ {{ cartTotalPrice.toFixed(2) }}</span>
        </div>
        <div>
          <nuxt-link to="/cart/checkout" class="rounded-full py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">
              <svg class="w-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              Checkout
          </nuxt-link>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-red-600">You don't have any item in the cart.</p>
  </div>
</template>

<script>
// vuex
import { mapState, mapGetters } from 'vuex'
// components
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'Cart',
  components: { Spinner },
    data(){
    return{
      
    }
  },
  mounted(){
    document.title = 'NuxtEATS | Cart'
  },
  computed:{
    ...mapState(['cart']),
    ...mapGetters(['cartTotalLength','cartTotalPrice']),    
  },
  methods:{
    getItemTotal(item){
      return item.quantity * item.product.price;
    },
    incQty(item){
      this.$store.dispatch('incQty', item)
    },
    decQty(item){
      if(item.quantity == 1){
        console.log('remove from cart')
        this.$store.dispatch('remItem', item)
      }
      else{
        this.$store.dispatch('decQty', item)
      }
    },
    remCartItem(item) {
      this.$store.dispatch('remItem', item)
    }
  }
}
</script>

<style scoped>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
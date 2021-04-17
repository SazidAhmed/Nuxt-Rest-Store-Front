<template>
  <div class="text-gray-600 font-body">
    <!-- main wrapper -->
    <div class="grid md:grid-cols-6">
      <!-- navbar -->
      <div class="md:col-span-1 md:flex md:justify-end bg-gray-100">
          <nav class="text-right">
              <div class="flex justify-between items-center">
                  <h1 class="font-bold uppercase p-4">
                    <NuxtLink to="/" class="hover:text-green-500">
                      {{ title }}
                    </NuxtLink>
                  </h1>
                  <div class="px-4 cursor-pointer md:hidden" @click="handleClick">
                      <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </div>
              </div>
              <ul class="text-sm mt-6 hidden md:block" ref="menu">
                  <li class="text-gray-700 font-bold mt-2 py-1 hover:text-green-500">
                    <NuxtLink to="/" class="flex justify-end px-4 border-r-4 border-primary">
                    <span>Home</span>
                    <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </NuxtLink>
                  </li>
                  <li class="text-gray-700 py-1 hover:text-blue-500">
                    <nuxt-link  to="/product" class="flex justify-end px-4 border-r-4 border-blue-500">
                      <span>Shop</span>
                      <svg class="w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </nuxt-link > 
                  </li>
                  <li class="text-gray-700 py-1 hover:text-red-500">
                    <nuxt-link  to="/login" class="flex justify-end px-4 border-r-4 border-red-500">
                      <span>Login</span>
                      <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                    </nuxt-link >       
                  </li>
                  <span class="block text-gray-700 p-5 font-bold">Categorised Products</span>
                  <li class="text-gray-700 py-1 hover:text-blue-500">
                    <nuxt-link  to="/blue" class="flex justify-end px-4 border-r-4 border-blue-500">
                      <span>Blue</span>
                      <svg class="w-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    </nuxt-link >       
                  </li>
                  <li class="text-gray-700 py-1 hover:text-red-500">
                    <nuxt-link  to="/red" class="flex justify-end px-4 border-r-4 border-red-500">
                      <span>Red</span>
                      <svg class="w-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    </nuxt-link >       
                  </li>
              </ul>
          </nav>
      </div>
      <!--end navigation -->
      <!-- main content -->
      <main class="md:col-span-5">
        <div class="flex justify-center md:justify-end bg-gray-100 px-16 py-7">
            <NuxtLink to="/cart" class="flex justify-end px-4 hover:text-green-500 transform hover:scale-125 transition ease-in duration-300">
              <svg class="w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span>Cart ({{ cartTotalLenght }})</span>
            </NuxtLink> 
        </div>
        <!-- content -->
        <div class="px-16 py-10 ">
          <Nuxt />
        </div>
      </main>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      title:'QL Gadgets',
      cart:{
        items:[]
      },
    }
  },
  beforeCreate(){
    this.$store.commit('initializeStore')
  },

  computed:{
    cartTotalLenght(){
      let totalLenght = 0
      for(let i=0; i < this.cart.items.length; i++){
        totalLenght += this.cart.items[i].quantity
      }
      return totalLenght
    }
  },
  methods:{
    handleClick(){
        if(this.$refs.menu.classList.contains('hidden')){
            this.$refs.menu.classList.remove('hidden')
        }
        else{
            this.$refs.menu.classList.add('hidden')
        }
    }
  },
}
</script>
<style>
html {
   font-family: "Nunito";
}
</style>

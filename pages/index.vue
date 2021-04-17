<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">Home</h2>
        </header>
        <!-- items -->
        <div v-if="latestProducts.length">
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Products</h4>
            <div class="mt-8 grid lg:grid-cols-4 gap-10"> 
            <!-- cards -->
                <div class="card relative" v-for="product in latestProducts" :key="product.id">
                    <img :src="product.get_thumbnail" alt="image" class="w-full h-35 sm:h-48 object-cover">
                    <div class="text-center mt-1">
                        <span class="font-bold">{{ product.name }}</span>
                        <span class="block text-gray-500 text-sm">Price - ${{ product.price }}</span>
                    </div>
                    <!-- absolute position relatively with parent -->
                    <div class="badge text-xs uppercase font-bold absolute top-0 ml-2 mt-2">
                        <svg class="w-4 inline-block text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                        <span class="text-blue-500 mr-1">sale</span>
                    </div>
                    <div class="m-2 flex justify-evenly">
                        <button class="rounded-full py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">
                            <svg class="w-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Buy
                        </button>
                        <nuxt-link :to="product.get_absolute_url" class="rounded-full py-1 px-2 text-xs font-bold cursor-pointer tracking-wider border-gray-500 md:border-2 text-gray hover:bg-gray-500 hover:text-white transition ease-out duration-500">
                            <svg class="w-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            Details
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <h4 class="font-bold mt-12 pb-2 border-b">Popular Products</h4>
           
            <div class="flex justify-center mt-5">
                <div class="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-primary hover:text-white transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500">Load More...</div>
            </div>
        </div>
        <div v-else>
          <Spinner />
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      title:'',
      latestProducts:[],
      error:"",
    }
  },
  components:{

  },
  mounted(){
    this.getLatestProducts()
  },
  methods:{
    getLatestProducts(){
         const loadProducts = async () =>{
            try{
                //simulate delay 
                await new Promise (resolve => {
                setTimeout(resolve, 1000)
                })
                
                let data = await fetch('http://127.0.0.1:8000/api/v1/latest-products')
                if(!data.ok){
                throw Error('No Data Available')
                }
                this.latestProducts = await data.json()
            }
            catch(err){
                this.error= err.message
                console.log(err)
            }
        }
        loadProducts();
    }
  }
}
</script>

<style>

</style>

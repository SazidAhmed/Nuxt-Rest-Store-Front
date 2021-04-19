<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">{{ product.name }}</h2>
        </header>
        <!-- items -->
        <div v-if="product">
          <h4 class="font-bold pt-2 border-b border-gray-200"></h4>
          <div class="grid lg:grid-cols-6 mt-2">
            <div class="md:col-span-3">
              <img :src="product.get_image" alt="image">
            </div>
            <div class="md:col-span-2">
              <div class="pt-5">
                <span class="block text-2xl text-gray-500 uppercase">name : {{ product.name }}</span>
                <span class="block text-xl text-gray-500 uppercase mt-2">Price : ${{ product.price }}</span>
                <span class="block text-xl text-gray-500 mt-2">Category : {{ product.category_name }}</span>
                <span class="block text-xl text-gray-500 mt-2">Slug : {{ product.category_slug }}</span>
              </div>
              <div class="mt-10">
                <span>
                  <input type="number" min="1" v-model="quantity" class="border-2 border-gray-500 text-center rounded-md w-14">
                </span>
                <span @click="addToCart" class="ml-5 cursor-pointer font-semibold text-xl">
                  <svg class="w-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Buy</span>
              </div>
              <div class="mt-10">
                <span class="block">{{ product.description }}</span>
              </div>
            </div>
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
      product:'',
      quantity:1,
    }
  },
  mounted(){
    this.getProduct()
  },
  methods:{
    getProduct(){
      const category_slug = this.$route.params.category_slug
      const product_slug = this.$route.params.product_slug

      const loadProduct = async () =>{
        console.log(category_slug)
            try{
                //simulate delay 
                await new Promise (resolve => {
                setTimeout(resolve, 1000)
                })
                
                let data = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}`)
                if(!data.ok){
                throw Error('No Data Available')
                }
                this.product = await data.json()
                document.title = this.product.name +' | VueStore'
            }
            catch(err){
                this.error= err.message
                console.log(err)
            }
        }
        loadProduct();
    },

    addToCart() {
      console.log("added to cart")
      if(isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1
      }
      const item = {
        product: this.product,
        quantity: this.quantity
      }
      this.$store.commit('addToCart', item)
    }
  }
}
</script>

<style>

</style>
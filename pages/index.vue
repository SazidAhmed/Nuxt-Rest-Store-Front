<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">Home</h2>
        </header>
        <!-- items -->
        <div v-if="latestProducts.length">
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Hot - Spice</h4>
            <div class="mt-8 grid lg:grid-cols-4 gap-10"> 
              <ProductBox v-for="product in latestProducts" :key="product.id" :product="product"/>
            </div>
           <NuxtLink to="/product" class="flex justify-center mt-5">
              <div class="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-primary hover:text-white transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500">Load More...</div>
           </NuxtLink>
        </div>
        <div v-else>
          <Spinner />
        </div>
    </div>
</template>
<script>
import ProductBox from '@/components/ProductBox'
export default {
  data(){
    return{
      title:'',
      latestProducts:[],
      error:"",
    }
  },
  components:{
    ProductBox
  },
  mounted(){
    this.getLatestProducts()
    document.title = 'Home | VueStore'
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

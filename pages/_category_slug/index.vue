<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">{{ category.name }}</h2>
        </header>
        <!-- items -->
        <div v-if="category.products.length">
          <h4 class="font-bold pt-2 border-b border-gray-200"></h4>
            <div class="mt-8 grid lg:grid-cols-4 gap-10"> 
                <ProductBox v-for="product in category.products" :key="product.id" :product="product"/>
            </div>
        </div>
        <div v-else>
          <Spinner />
        </div>
    </div>
</template>
<script>
import Spinner from '@/components/Spinner'
import ProductBox from '@/components/ProductBox'
export default {
  data(){
    return{
        category:{
            products:[]
        },
        quantity:1,
    }
  },
  components:{
    ProductBox,
    Spinner
  },
  mounted(){
    this.getCategory()
  },
  methods:{
    getCategory(){
      const category_slug = this.$route.params.category_slug

      const loadProduct = async () =>{
        console.log(category_slug)
            try{
                //simulate delay 
                await new Promise (resolve => {
                setTimeout(resolve, 1000)
                })
                
                let data = await fetch(`http://127.0.0.1:8000/api/v1/products/${category_slug}`)
                if(!data.ok){
                throw Error('No Data Available')
                }
                this.category = await data.json()
                document.title = this.category.name +' | VueStore'
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
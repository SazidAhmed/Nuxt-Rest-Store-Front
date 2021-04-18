<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">{{ product.name }}</h2>
        </header>
        <!-- items -->
        <div v-if="product">
          <h4 class="font-bold pt-2 border-b border-gray-200"></h4>
          <ProductDetails :product="product" :quantity="quantity"/>
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
      const product = this.$route.params.product
      const category_slug = this.$route.params.category_slug
      const product_slug = this.$route.params.product_slug

      const loadProduct = async () =>{
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
            }
            catch(err){
                this.error= err.message
                console.log(err)
            }
        }
        loadProduct();
    }
  }
}
</script>

<style>

</style>
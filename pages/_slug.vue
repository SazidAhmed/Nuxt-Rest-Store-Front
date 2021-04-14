<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">Product id : {{ $route.params.slug }}</h2>
        </header>
        <!-- items -->
        <div>
          <h4 class="font-bold pt-2 border-b border-gray-200"></h4>
          <div class="grid md:grid-cols-6 mt-2">
            <div class="md:col-span-4">
              <img :src="product.get_image" alt="">
            </div>
            <div class="md:col-span-2">
              <div>
                <span>{{ product.name }}</span>
                <span>{{ product.price }}</span>
                <span>{{ product.description }}</span>
              </div>
              <div>
                <span>
                  <input type="number" min="1" v-model="quantity">
                </span>
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
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
            try{
                //simulate delay 
                await new Promise (resolve => {
                setTimeout(resolve, 1000)
                })
                
                let data = await fetch(`http://127.0.0.1:8000/api/v1/products/red/red2`)
                if(!data.ok){
                throw Error('No Data Available')
                }
                this.Product = await data.json()
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
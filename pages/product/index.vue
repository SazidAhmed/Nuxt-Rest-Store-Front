<template>
    <div>
        <header>
            <h2 class="text-gray-500 text-4xl font-semi-bold uppercase">Foods</h2>
        </header>
        <!-- items -->
        <div v-if="latestProducts.length">
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Food List</h4>
            <div class="mt-8 grid lg:grid-cols-4 gap-10"> 
                <ProductBox v-for="product in latestProducts" :key="product.id" :product="product"/>
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
      productId: '',
    }
  },
  components:{

  },
  mounted(){
    this.getAllProducts()
  },
  methods:{
    onClick(id){
        console.log("clicked", id)
        this.$router.push('/product/' + id)
    },
    getAllProducts(){
         const loadProducts = async () =>{
            try{
                //simulate delay 
                await new Promise (resolve => {
                setTimeout(resolve, 1000)
                })
                
                let data = await fetch('http://127.0.0.1:8000/api/v1/all-products')
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
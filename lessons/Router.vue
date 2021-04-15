<template>
  <div>
    <h2>Product id : {{ $route.params.id }}</h2>
    <button @click="onClick">click</button>
    <!-- pages
    |- product
        |- _category_slug
            |- _product_slug.vue -->
    <!-- <nuxt-link :to="{ name: 'product-category_slug-product_slug', params: {category_slug: 'someCategory', product_slug: 'someProduct'} }">Link to product</nuxt-link> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            productId: '1',
        }
    },
    validate(data){
        // return data.params.id == 1
        return /^\d+$/.test(data.params.id)
    },
    methods:{
        onClick(){
            console.log("clicked")
            this.$router.push('/product/' + this.productId)
        }
    }

}
</script>

<style>

</style>
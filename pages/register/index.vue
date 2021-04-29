<template>
  <div>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <!-- card -->
      <div class="flex flex-col bg-white shadow-xl py-5 rounded-md w-full max-w-md">
        <div class="self-center font-medium text-xl sm:text-2xl uppercase text-gray-800">Welcome</div>
        <div class="relative mt-8 h-px bg-gray-200">
          <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span class="bg-white px-2 text-xs text-gray-500 uppercase">Login With Email</span>
          </div>
        </div>
        <div class="mt-5">
          <form @submit.prevent="register" class="max-w-sm mx-auto overflow-hidden p-6 space-y-5">
            <div class="outline relative border-2 focus-within:border-blue-500">
              <input type="text" name="username" v-model="username" placeholder=" " class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
              <label for="username" class="absolute top-0 text-lg bg-white ml-2 p-2 z-1 duration-300 origin-0">Username</label>
            </div>
            <div class="outline relative border-2 focus-within:border-blue-500">
              <input type="email" name="email" v-model="email" placeholder=" " class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
              <label for="email" class="absolute top-0 text-lg bg-white ml-2 p-2 z-1 duration-300 origin-0">Email</label>
            </div>
            <div class="outline relative border-2 focus-within:border-blue-500">
              <input type="password" name="password" v-model="password" placeholder=" " class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
              <label for="password" class="absolute top-0 text-lg bg-white ml-2 p-2 z-1 duration-300 origin-0">Password</label>
            </div>
            <div class="outline relative border-2 focus-within:border-blue-500">
              <input type="password" name="password" v-model="password2" placeholder=" " class="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent" />
              <label for="password" class="absolute top-0 text-lg bg-white ml-2 p-2 z-1 duration-300 origin-0">Confirm Password</label>
            </div>
            <div class="flex w-full" v-if="errors.length">
              <p v-for="error in errors" :key="error">**{{ error }}</p>
            </div>
            <div class="flex w-full">
              <button class="flex justify-center items-center w-full focus:outline-none py-1 text-white text-sm sm:text-base bg-green-400 hover:bg-green-500 transition duration-100 ease-in">
                <span class="text-lg uppercase">Register</span>
                <svg class="w-5 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              </button>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-center mt-2">
          <router-link to="/login">
            <p class=" text-blue-500 hover:text-blue-700 ">
              <span class="text-xs uppercase">Login Here</span>
              <svg class="w-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </p>
          </router-link>
        </div>
      </div>
      <!-- card end-->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      email:'',
      password:'',
      password2:'',
      errors:[],
    }
  },
  methods:{
    // Ecom12Pass
    register(){
      this.errors = []
      if(this.password !== this.password2){
        this.errors.push('Please enter the same password twice.')
      }
      else{
        if(this.username && this.email){
          this.errors = []

          const submit = async () =>{
            const formData = {
              username: this.username,
              email: this.email,
              password: this.password
            }
            try{
              let data = await fetch('http://127.0.0.1:8000/api/v1/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
              })
              if(!data.ok){
                throw Error('Registration Failed!')
              }
              this.errors.push('Registration Successfull!')
              this.username='',
              this.email='',
              this.password='',
              this.password2=''
            }
            catch(err){
              console.log(err)
            }
        }
        submit();
        }else{
          this.errors.push('Please fill all the fields.')
        }
      }
    }
  }
}
</script>

<style>

</style>
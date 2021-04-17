<template>
  <div>
    <h2>Cart Page</h2>
    <!-- component -->
    <table class="border-collapse w-full">
        <thead>
            <tr>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quantity</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Amount</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                    01
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
                    Image
                </td>
                 <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product</span>
                    t-shirt
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                    $ 500
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                    2
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Amount</span>
                    $ 1000
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-3 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">Remove</span>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
// components
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'Cart',
  components: { Spinner },

}
</script>

<style scoped>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
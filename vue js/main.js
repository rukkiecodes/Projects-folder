var app = new Vue({
  el: '#app',
  data:{
    product: 'socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    second_image: 'socks-blue.png',
    details:["80% cotton", "20% plyester", "Gender-nuetral"],
    variants:[
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: 'socks-green.png',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 'socks-blue.png',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods:{
    addToCart: function(){
      this.cart += 1
    },
    updateProduct: function(index){
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed:{
    title(){
      return this.brand + " " + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
});
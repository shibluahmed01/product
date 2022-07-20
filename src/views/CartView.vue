<template>
  <div>
    <h1>Your Cart</h1>

    <cart-items-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></cart-items-card>
  </div>
</template>

<script>
import CartItemsCard from "../components/cart/CartItemsCard.vue";

export default {
  components: {
    CartItemsCard,
  },
  computed: {
    itema() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

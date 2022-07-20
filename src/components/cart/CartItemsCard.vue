<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total cost: {{ item_cost.toFixd(2) }}</h4>
    </div>

    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    Description() {
      return this.product.Description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

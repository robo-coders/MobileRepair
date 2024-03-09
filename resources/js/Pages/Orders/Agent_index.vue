<template>
  <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Orders List</h3>
            </div>
            <div class="col text-right">
                <Link class="btn btn-primary" :href="route('agent.orders.add')">Add New</Link>
            </div>
        </div>

      </div>
  </parent>
</template>

<script>
import Parent from "../Parent.vue";

export default {

  components: {
    Parent,
  }
};
</script>

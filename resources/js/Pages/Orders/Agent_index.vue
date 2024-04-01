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
      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead class="bg-primary text-white">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Brand</th>
                <th scope="col">Product</th>
                <th scope="col">Part</th>
                <th scope="col">Description</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Created At</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in orders" :key="order.id">
                <th scope="row">{{ index + 1 }}</th>
                <!-- <td>{{ order.brand.name }}</td> -->
                <td> --- </td>
                <td> --- </td>
                <td>{{ order.description }}</td>
                <td>{{ order.total_amount }}</td>
                <td>{{ order.created_at }}</td>
                <td>
                  <span v-if="order.status === 'assinged_towards_shop'" class="badge badge-primary"> Assigned. Collect | Deliver Shop </span>
                    <span v-if="order.status === 'assinged_towards_client'" class="badge badge-primary"> Assigned. Deliver to client </span>
                    <span v-if="order.status === 'delivered_to_shop'" class="badge badge-success"> Order delivered to shop </span>
                    <span v-if="order.status === 'ready_to_shipped'" class="badge badge-info">Awaiting Driver to Deliver</span>
                    <span v-if="order.status === 'delivered_to_client'" class="badge badge-success"> Order delivered to client </span>
                </td>
                <td>
                 ---
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </parent>
</template>

<script>
import Parent from "../Parent.vue";

export default {
  components: {
    Parent
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  methods: {
    
  }
}
</script>

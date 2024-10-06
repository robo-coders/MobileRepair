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
                <th scope="col">Order Number</th>
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
                <td>{{ order.order_number }}</td>
                <td>{{ order.brand?.name }}</td>
                <td>{{ order.product?.name }}</td>
                <td> --- </td>
                <td>{{ order.description }}</td>
                <td>{{ order.total_amount }}</td>
                <td>{{ order.created_at }}</td>
                <td>
                  <span v-if="order.status === 'Pending'" class="badge badge-warning">Pending</span>
                  <span v-if="order.status === 'Assigned'" class="badge badge-primary">Assigned</span>
                  <span v-if="order.status === 'Processing'" class="badge badge-info">Processing</span>
                  <span v-if="order.status === 'Shipped'" class="badge badge-primary">Shipped</span>
                  <span v-if="order.status === 'Delivered'" class="badge badge-success">Delivered</span>
                  <span v-if="order.status === 'Cancelled'" class="badge badge-danger">Cancelled</span>
                </td>
                <td>
                  <Link :href="'/orders/details/' + order?.id" class="m-1 btn btn-sm btn-primary">View</Link>
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

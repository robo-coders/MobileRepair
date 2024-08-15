<template>
  <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Orders List</h3>
            </div>
            <div class="col text-right">
                <Link class="btn btn-primary" href="">Back</Link>
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
                        <th scope="col" width="15%">Description</th>
                        <th scope="col">Status</th>
                        <!-- <th scope="col">Type</th> -->
                        <th scope="col">Created at</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in orders" :key="order.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ order.brand?.name }}</td>
                            <td>{{ order.product?.name }}</td>
                            <td>{{ (order?.order_parts[0]?.part?.name) ?? "---" }}</td>
                            <td>{{ order.description }}</td>
                            <td>
                                <span v-if="order.status === 'Pending'" class="badge badge-warning">Pending</span>
                                <span v-if="order.status === 'Assigned'" class="badge badge-primary">Assigned</span>
                                <span v-if="order.status === 'Processing'" class="badge badge-info">Processing</span>
                                <span v-if="order.status === 'Shipped'" class="badge badge-primary">Shipped</span>
                                <span v-if="order.status === 'Delivered'" class="badge badge-success">Delivered</span>
                                <span v-if="order.status === 'Cancelled'" class="badge badge-danger">Cancelled</span>
                            </td>
                            <!-- <td> --- </td> -->
                            <td> {{order.order_date}} </td>
                            <td>
                                <div class="btn-group">
                                    <Link v-if="order.status === 'delivered_to_shop'" class="btn btn-sm btn-primary" :href="route('orders.status.processing', order.id)">Start Processing</Link>
            
                                    <Link v-if="order.status === 'processing'" class="btn btn-sm btn-success" :href="route('orders.status.readyToShipped', order.id)">Ready to Shipped</Link>
            
                                    <Link v-if="order.status === 'delivered_to_client'" class="btn btn-sm btn-success" :href="route('orders.status.completed',order.id)">Mark as Completed</Link>
                                </div>
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
}
</script>

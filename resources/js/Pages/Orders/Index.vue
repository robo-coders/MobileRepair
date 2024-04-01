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
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in orders" :key="order.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ order.brand?.name }}</td>
                            <td>{{ order.product?.name }}</td>
                            <td>{{ order.description }}</td>
                            <td>{{ order.description }}</td>
                            <td>
                            <span v-if="order.status === 'pending'" class="badge badge-primary"> Pending </span>
                            <span v-if="order.status === 'assinged_towards_shop'" class="badge badge-primary"> Assigned. Collect | Deliver Shop </span>
                            <span v-if="order.status === 'ready_to_shipped'" class="badge badge-info">Awaiting Driver to Deliver</span>
                            <span v-if="order.status === 'assinged_towards_client'" class="badge badge-primary"> Assigned. Deliver to client </span>
                            <span v-if="order.status === 'delivered_to_shop'" class="badge badge-success"> Order delivered to shop </span>
                            <span v-if="order.status === 'delivered_to_client'" class="badge badge-success"> Order delivered to client </span>
                            </td>
                            <td> --- </td>
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

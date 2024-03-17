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
                        <span class="badge" :class="{
                            'badge-primary': order.status === 'Pending',
                            'badge-info': order.status === 'Assigned',
                            'badge-warning': order.status === 'Processing',
                            'badge-primary': order.status === 'unAssignedShipped',
                            'badge-info': order.status === 'Shipped',
                            'badge-success': order.status === 'Delivered',
                            'badge-danger': order.status === 'Cancelled'
                            }">
                                {{ order.status }}
                        </span>
                    </td>
                    <td> --- </td>
                    <td>
                    <div class="btn-group">
                        <Link v-if="order.status === 'Assigned'" class="btn btn-sm btn-warning" :href="route('orders.status.processing', order.id)">Start Processing</Link>
                        <Link v-if="order.status === 'Processing'" class="btn btn-sm btn-success" :href="route('orders.status.unAssignedShipped', order.id)">Ready to Shipped</Link>
                        <span v-if="order.status === 'unAssignedShipped'" class="badge badge-info">Awaiting Driver</span>

                        <Link v-if="order.status === 'Shipped'" class="btn btn-sm btn-success">Mark as Delivered</Link>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>

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

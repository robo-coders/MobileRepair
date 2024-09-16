<template>
  <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Orders List</h3>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <table class="table table-striped">
                  <thead class="bg-primary text-white">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Number</th>
                        <th scope="col" width="15%">Customer</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Product</th>
                        <th scope="col">Part</th>
                        <th scope="col">Status</th>
                        <!-- <th scope="col">Type</th> -->
                        <th scope="col">Created at</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in orders" :key="order.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ order.order_number }}</td>
                            <td>{{ order.user.name }}</td>
                            <td>{{ order.brand?.name }}</td>
                            <td>{{ order.product?.name }}</td>
                            <td>{{ (order?.order_parts[0]?.part?.name) ?? "---" }}</td>
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
                                <Link v-if="order.status === 'Processing'" class="m-1 btn btn-sm btn-success" @click="markAsReadyToShipped(order)">Ready to Shipped</Link>
                                
                                <Link v-if="order.status === 'Pending' || order.status === 'Assigned' || order.status === 'Processing'" class="m-1 btn btn-sm btn-danger" @click="markAsCancelled(order)">Cancel </Link>

                                <Link v-if="order.status === 'delivered_to_client'" class="m-1 btn btn-sm btn-success" @click="markAsCompleted(order)">Mark as Completed</Link>
                            
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
import Swal from "sweetalert2"

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
    methods : {
        markAsCancelled(order) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, do it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace(route('orders.status.cancelled', order.id));
                }
            });
        },
        markAsCompleted(order) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, do it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace(route('orders.status.completed',order.id));
                }
            });
        },
        markAsReadyToShipped(order) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, do it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace(route('orders.status.readyToShipped', order.id));
                }
            });
        },
    }
}
</script>

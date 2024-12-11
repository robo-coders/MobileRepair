<template>
  <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Order Details</h3>
            </div>
            <div class="col text-right">
                <a :href="'/orders/generate-invoice/' + order?.id" target="_blank" class="btn btn-primary btn-sm">Generate Invoice</a>
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Order #{{ order?.order_number }}</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Order Details</h5>
                        <p><strong>Date:</strong> {{ order?.order_date }}</p>
                        <p><strong>Status:</strong> {{ order?.status }}</p>
                        <p><strong>Total:</strong> € {{ order?.total_amount }}</p>
                    </div>
                    <div class="col-md-6">
                        <h5>Customer</h5>
                        <p><img :src="order?.user?.profile_photo" class="rounded-circle" alt=""></p>
                        <p class="mb-0">Name : {{ order?.user?.name }}</p>
                        <p>Mobile : {{ (order?.user?.mobile) ?? "Not Available" }}</p>
                        <p v-if="order?.user?.role == 'Super Admin'">Email : {{ order?.user?.email }}</p>
                    </div>
                </div>
                <div class="row" v-if="order?.description">
                    <div class="col-md-12">
                        <h5>Description</h5>
                        <p><strong>{{ order?.description }}</strong></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order Items -->
        <div class="card mb-4">
            <div class="card-header bg-secondary text-white">
                <h5 class="mb-0">Product</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <td>LOGO</td>
                            <td>BRAND</td>
                            <td>MODEL</td>
                            <td>PART</td>
                            <td>TOTAL</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="part in order?.order_parts">
                            <td>
                                <img height="auto" width="50" :src="order?.brand?.image" alt="">
                            </td>
                            <td>{{ order?.brand?.name }}</td>
                            <td>{{ order?.product?.name }}</td>
                            <td><b>{{ part?.part?.name }}</b></td>
                            <td><b>€ {{ (order?.user?.role == "Agent") ? part?.part?.agent_price : part?.part?.customer_price }}</b></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4" class="text-right">Sub Total</th>
                            <th>€ {{ order?.sub_total_amount }}</th>
                        </tr>
                        <tr v-if="order?.tax_percent">
                            <th colspan="4" class="text-right">{{order?.tax_percent}}% Tax</th>
                            <th>€ {{ order?.tax_amount }}</th>
                        </tr>
                        <tr>
                            <th colspan="4" class="text-right">Total</th>
                            <th>€ {{ order?.total_amount }}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- Payment Details -->
        <div class="card">
            <div class="card-header bg-info text-white">
                <h5 class="mb-0">Payment Information</h5>
            </div>
            <div class="card-body">
                <p><strong>Payment Method:</strong> {{ order?.payment_method }}</p>
                <p v-if="order?.payment_method == 'Credit Card'"><strong>Card Holder Name:</strong> {{ order?.card_holder_name }}</p>
                <p v-if="order?.payment_method == 'Credit Card'"><strong>Card Holder Phone Number:</strong> {{ order?.card_holder_phone_number }}</p>
                <p><strong>Pickup / Delivery Address Address:</strong> {{ (order?.address?.address) ?? "Not Available" }}</p>
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
    props: ["order"],
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

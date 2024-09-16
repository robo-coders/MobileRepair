<template>
    <parent>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="mb-4">My Orders</h3>
          </div>
        </div>
  
        <div class="card" v-if="orders.length === 0">
          <div class="card-body text-center">
            <h4 class="text-muted mb-2">No Orders Available</h4>
            <p class="mb-2">There are currently no pending orders available to assign.</p>
            <p class="mb-2">Please check back later for updates or contact your supervisor for further assistance.</p>
            <p>If you have any questions, feel free to reach out to support.</p>
          </div>
        </div>
  
        <div class="card" v-else>
          <div class="card-body">
            <table class="table table-striped">
              <thead class="bg-primary text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Assigned At</th>
                  <th scope="col">Delivered At</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="order.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ order.order.description }}</td>
                  <td>{{ order.order.total_amount }}</td>
                  <td>{{ order.assigned_at }}</td>
                  <td>
                    <span v-if="order.completed_at">{{ order.completed_at }}</span>
                    <span v-else>Null</span>
                  </td>
                  <!-- <td> {{ order.completed_at }}</td> -->
                  <td>
                    <span v-if="order.status === 'Assigned'" class="badge badge-primary">Assigned</span>
                    <span v-if="order.status === 'Processing'" class="badge badge-info">Processing</span>
                    <span v-if="order.status === 'Shipped'" class="badge badge-primary">Shipped</span>
                    <span v-if="order.status === 'Delivered'" class="badge badge-success">Delivered</span>
                    <span v-if="order.status === 'Cancelled'" class="badge badge-danger">Cancelled</span>
                  </td>
                  <td>
                    <Link v-if="order.status === 'Assigned'" class="btn btn-sm btn-success" @click="deliveredToShop(order)">Delivered To Shop</Link>
                    <Link v-if="order.status === 'Shipped'" class="btn btn-sm btn-success" @click="markAsDelivered(order)">Mark as Delivered</Link>
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
    methods: {
      deliveredToShop(order) {
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
                window.location.replace(route('driver.orders.shop.delivered', order.order.id));
            }
        });
      },
      markAsDelivered(order) {
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
                window.location.replace(route('driver.orders.delivered', order.order.id));
            }
        });
      },
    }
  }
  </script>
  
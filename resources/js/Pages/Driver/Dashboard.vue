<template>
    <parent>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 class="mb-4">Pending Orders</h3>
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
                    <th scope="col">Order Number</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Product</th>
                    <th scope="col">Part</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment Type</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Actions</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="order.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ order.order_number }}</td>
                  <td>{{ order.user?.name }}</td>
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
                  <td>{{ order?.payment_method }}</td>
                  <td> {{order.order_date}} </td>
                  <td>
                    <Link :href="'/orders/details/' + order?.id" class="m-1 btn btn-sm btn-primary">View</Link>
                    <Link  class="btn btn-sm btn-primary" @click="assignToMyself(order)">
                      Assign To Me
                    </Link>
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
      assignToMyself(order) {
          // Swal.fire({
          //     title: "Are you sure?",
          //     text: "Do you want to assign this order to yourself?",
          //     icon: "warning",
          //     showCancelButton: true,
          //     confirmButtonColor: "#3085d6",
          //     cancelButtonColor: "#d33",
          //     confirmButtonText: "Yes, do it!"
          // }).then((result) => {
          //     if (result.isConfirmed) {
          //         window.location.replace(route('driver.orders.assignToMyself', order.id));
          //     }
          // });

          Swal.fire({
            title: "Are you sure?",
            text: "Do you want to assign this order to yourself?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace(route('driver.orders.assignToMyself', order.id));
            }
        });

      },
    }
  }
  </script>
  
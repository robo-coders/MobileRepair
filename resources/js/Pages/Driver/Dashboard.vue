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
                  <td>{{ order.description }}</td>
                  <td>{{ order.total_amount }}</td>
                  <td>{{ order.created_at }}</td>
                  <td>
                    <span class="badge badge-warning">{{ order.status }}</span>
                  </td>
                  <td>
                    <Link class="btn btn-sm btn-primary" :href="route('driver.orders.assignToMyself', order.id)">
                      Assign to Myself
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
  
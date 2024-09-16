<template>
  <parent>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h3 class="mb-4">Brands List</h3>
        </div>
        <div class="col text-right">
          <Link class="btn btn-primary" href="/brands/add">Add New</Link>
        </div>
      </div>
      <!-- Display success message if it exists -->
      <div v-if="successMessage" class="alert alert-success" role="alert">
        {{ successMessage }}
      </div>
      <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Logo</th>
                      <th scope="col">Name</th>
                      <th scope="col" width="50%">Description</th>
                      <th scope="col">Status</th>
                      <!-- <th scope="col">Created Date</th> -->
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(brand, index) in brands" :key="brand.id">
                      <th scope="row">{{ index + 1 }}</th>
                      <td><img :src="brand.path" width="50" height="50" class="rounded" alt="Logo" style="height: 40px; width: auto;"></td>
                      <td>{{ brand.name }}</td>
                      <td>{{ brand.description }}</td>
                      <td>
                        <span class="badge" :class="(brand.status == 'active') ? 'badge-success' : 'badge-warning'">{{ brand.status }}</span>
                      </td>
                      <!-- <td>{{ brand.created_date }}</td> -->
                      <td>
                        <Link class="btn btn-sm btn-primary" :href="route('brands.edit', brand.id)">Edit</Link>
                        <Link class="btn btn-sm btn-danger ml-1" @click="deleteBrand(brand)">Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  </parent>
</template>

<script>
import Parent from "../Parent.vue";

import Swal from 'sweetalert2'

export default {

  components: {
    Parent,
  },
  props: {
    brands: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      successMessage: "Brand saved successfully",
    };
  },
  created() {
    this.successMessage = this.$props.successMessage || "";
  },
  methods: {
    editBrand(id) {
      console.log(`Edit brand with ID ${id}`);
    },
    deleteBrand(brand) {
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
          window.location.replace(route('brands.delete', brand.id));
        }
      });
    },
  },
};
</script>

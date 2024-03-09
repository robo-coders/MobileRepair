<template>
    <parent>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
            <h3 class="mb-4">Product List</h3>
            </div>
            <div class="col text-right">
            <Link class="btn btn-primary" href="/products/add">Add New</Link>
            </div>
        </div>
        <table class="table table-bordered table-striped">
          <thead class="bg-primary text-white">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Brand</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col" width="15%">Description</th>
                <th scope="col">Availablitiy</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ product.brand?.name }}</td>
                    <td><img :src="product.path" width="50" height="50" class="rounded" alt="Logo" style="height: 40px; width: auto;"></td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <span class="badge" :class="(product.status == 'available') ? 'badge-success' : 'badge-warning'">{{ product.status }}</span>
                    </td>
                    <td>
                        <Link class="btn btn-sm btn-primary" :href="route('products.edit', product.id)">Edit</Link>
                        <Link class="btn btn-sm btn-danger ml-1" :href="route('products.delete', product.id)">Delete</Link>
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
        products: {
        type: Array,
        required: true,
        },
    },
}
</script>

<template>
    <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Part List</h3>
            </div>
            <div class="col text-right">
                <Link class="btn btn-primary" href="/parts/add">Add New</Link>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead class="bg-primary text-white">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col" width="15%">Description</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Agent</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(part, index) in parts" :key="part.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ part.brand.name }}</td>
                        <td>{{ part.product.name }}</td>
                        <td>{{ part.name }}</td>
                        <td>{{ part.description }}</td>
                        <td>{{ part.customer_price }}</td>
                        <td>{{ part.agent_price }}</td>
                        <td>
                            <Link class="btn btn-sm btn-primary" :href="route('parts.edit', part.id)">Edit</Link>
                            <Link class="btn btn-sm btn-danger ml-1" :href="route('parts.delete', part.id)">Delete</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
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
        parts: {
        type: Array,
        required: true,
        },
    },
}
</script>

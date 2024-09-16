<template>
    <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Parts List</h3>
            </div>
            <div class="col text-right">
                <Link class="btn btn-primary" href="/parts/add">Add New</Link>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead class="bg-primary text-white">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Product</th>
                            <th scope="col" width="15%">Description</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Agent</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(part, index) in parts" :key="part.id">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ part.name }}</td>
                                <td><label class="badge badge-success">{{ part.brand.name }}</label></td>
                                <td><label class="badge badge-warning">{{ part.product.name }}</label></td>
                                <td>{{ part.description }}</td>
                                <td>€ {{ part.customer_price }}</td>
                                <td>€ {{ part.agent_price }}</td>
                                <td>
                                    <Link class="btn btn-sm btn-primary" :href="route('parts.edit', part.id)">Edit</Link>
                                    <Link class="btn btn-sm btn-danger ml-1" @click="deletePart(part)">Delete</Link>
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
import Swal from "sweetalert2"

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
    methods : {
        deletePart(part) {
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
                    window.location.replace(route('parts.delete', part.id));
                }
            });
        },
    }
}
</script>

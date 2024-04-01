<template>
    <parent>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                <h3 class="mb-4">Users List</h3>
                </div>
                <div class="col text-right">
                <Link class="btn btn-primary" href="/users/add">Add New</Link>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <thead class="bg-primary text-white">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user.id">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <span class="badge" :class="{
                                        'badge-success': user.status === 'Active',
                                        'badge-info': user.status === 'Inactive',
                                        'badge-warning': user.status === 'Suspended',
                                        'badge-primary': user.status === 'Pending',
                                        'badge-danger': user.status === 'Deleted'
                                        }">
                                            {{ user.status }}
                                    </span>
                                </td>
                                <td>
                                    <Link class="btn btn-sm btn-primary" :href="route('users.edit', user.id)">Edit</Link>
                                    <Link class="btn btn-sm btn-danger ml-1" :href="route('users.delete', user.id)">Delete</Link>
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
        users: {
        type: Array,
        required: true,
        },
    },
}
</script>

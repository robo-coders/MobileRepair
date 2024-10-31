<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">
            <!-- Page Heading -->
            <div class="row">
              <div class="col">
                <h3 class="mb-4">Applications</h3>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="/agent/applications/upload" v-if="applications.length > 0 && applications[0].status == 'Rejected'">Upload Documents</Link>
              </div>
            </div>

            <div class="card p-5" v-if="applications.length == 0">
                <div class="alert alert-warning" role="alert">
                    Please click the button below to upload your documents and submit them for approval.
                </div>
                <Link class="btn btn-primary" :href="route('agent.application.upload')">Upload Documents</Link>
            </div>
            <div class="card" v-else>
                <div class="card-body">
                    <table class="table table-striped">
                        <thead class="bg-primary text-white">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Shop Name</th>
                            <th scope="col">Shop Landline</th>
                            <th scope="col">Shop Address</th>
                            <th scope="col">Application Status</th>
                            <th scope="col">Nie</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Others</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Uploaded At</th>
                            <th scope="col">Last Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(application, index) in applications" :key="application.id">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ application.shop_name }}</td>
                                <td>{{ application.shop_landline }}</td>
                                <td>{{ application.shop_address }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="application.status == 'Approved'">Approved</span>
                                    <span class="badge badge-primary" v-if="application.status == 'Pending'">Pending</span>
                                    <span class="badge badge-danger" v-if="application.status == 'Rejected'">Rejected</span>
                                </td>

                                <td>
                                    <a v-if="application.nie" target="_blank" :href="'/' + application.nie">View Document</a>
                                    <span v-else>N/A</span>
                                </td>
                                <td>
                                    <a v-if="application.modelo" target="_blank" :href="'/' + application.modelo">View Document</a>
                                    <span v-else>N/A</span>
                                </td>
                                <td>
                                    <a v-if="application.others" target="_blank" :href="'/' + application.others">View Document</a>
                                    <span v-else>N/A</span>
                                </td>
                                
                                <td>{{ (application.reason) ?? 'N/A' }}</td>

                                <td>{{ application.created_date }}</td>
                                <td>{{ application.updated_date }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        <!-- /.container-fluid -->
    </parent>
</template>

<script>
import Parent from "../Parent.vue"

export default {
    props : ["applications"],
    components : {
        Parent
    }    
}
</script>
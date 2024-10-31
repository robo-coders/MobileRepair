<template>
    <parent>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
        <h3 class="mb-4">Application Status</h3>
    </div>
    <div class="col text-right">
        <!-- <Link class="btn btn-success" :href="route('agent.application.approve', applications[0].id)" >Approve</Link> -->
        <a class="btn btn-primary ml-1" @click="openModal('Approved')" v-if="applications.length && applications[0].status == 'Pending'">Approve</a>
        <a class="btn btn-danger ml-1" @click="openModal('Rejected')" v-if="applications.length && applications[0].status == 'Pending'">Reject</a>
    </div>
            </div>
            <table class="table table-bordered table-striped">
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

                        <td>{{ (application.reason) ?? '---' }}</td>

                        <td>{{ application.created_date }}</td>
                        <td>{{ application.updated_date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- modal -->
        <div class="modal fade" id="changeApplicationStatusModal" tabindex="-1" role="dialog" aria-labelledby="changeApplicationStatusModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="changeApplicationStatusModalLabel">Change Application Status</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label for="rejectionReason">Reason:</label>
                        <textarea id="rejectionReason" class="form-control" rows="3" v-model="applicationStatusForm.reason"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn" :class="(applicationStatusForm.status == 'Approved') ? 'btn-primary' : 'btn-danger'" @click="changeApplicationStatus" v-text="(applicationStatusForm.status == 'Approved') ? 'Approved' : 'Reject'"></button>
                    </div>
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
        applications: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            applicationStatusForm : {
                application_id : "",
                user_id: "",
                status : "",
                reason : ""
            }
        };
    },
    methods: {
        openModal(status) {
            if (this.applications.length > 0) {
                this.applicationStatusForm.application_id = this.applications[0].id;
                this.applicationStatusForm.user_id = this.applications[0].user_id;
                this.applicationStatusForm.status = status;
                this.applicationStatusForm.reason = "";

                $('#changeApplicationStatusModal').modal('show');
            } else {
                console.error('No applications found');
            }
        },

        // openModal(status) {
        //     this.applicationStatusForm.application_id = this.applications[0].id
        //     this.applicationStatusForm.user_id = this.applications[0].user_id;

        //     this.applicationStatusForm.status = status;
        //     this.applicationStatusForm.reason = "";

        //     $('#changeApplicationStatusModal').modal('show');
        // },

        changeApplicationStatus() {
            this.$inertia.post(route("agent.status.approve", {
                id: this.$page.props.applications[0].id 
            }, { 
                user_id: this.$page.props.applications[0].user_id
            }), this.applicationStatusForm);
            $('#changeApplicationStatusModal').modal('hide');
        },
    }
}
</script>
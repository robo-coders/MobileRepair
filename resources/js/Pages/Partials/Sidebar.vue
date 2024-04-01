<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3"> Mobile Repair Shop <sup>Dashboard</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <Link class="nav-link" href="/dashboard"><i class="fas fa-fw fa-tachometer-alt"></i><span>Dashboard</span></Link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Menu Heading
        </div>

        <!-- Nav Item - Pages Collapse Menu -->

        <li class="nav-item active" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Users</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" style="">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Types:</h6>
                        <Link class="collapse-item active" href="/users/admin"><i class="fas fa-fw fa-tachometer-alt"></i><span>Admin</span></Link>
                        <Link class="collapse-item" href="/users/agent"><i class="fas fa-fw fa-tachometer-alt"></i><span>Agents</span></Link>
                        <Link class="collapse-item" href="/users/driver"><i class="fas fa-fw fa-tachometer-alt"></i><span>Driver</span></Link>
                        <Link class="collapse-item" href="/users/customer"><i class="fas fa-fw fa-tachometer-alt"></i><span>Customer</span></Link>
                    </div>
                </div>
            </li>
        
        <li class="nav-item">
            <Link class="nav-link" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'" href="/users"><i class="fas fa-fw fa-tachometer-alt"></i><span>Users</span></Link>
        </li>
        <!-- <li class="nav-item">
            <Link class="nav-link" :href="route('agent.application.list')"><i class="fas fa-fw fa-tachometer-alt"></i><span>Applications</span></Link>
        </li> -->
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'">
            <Link class="nav-link" href="/brands"><i class="fas fa-fw fa-tachometer-alt"></i><span>Brands</span></Link>
        </li>
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'">
            <Link class="nav-link" href="/products"><i class="fas fa-fw fa-tachometer-alt"></i><span>Products</span></Link>
        </li>
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'">
            <Link class="nav-link" href="/parts"><i class="fas fa-fw fa-tachometer-alt"></i><span>Parts</span></Link>
        </li>
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Agent'">
            <Link class="nav-link" :href="route('agent.orders.index')"><i class="fas fa-fw fa-tachometer-alt"></i><span>Orders</span></Link>
        </li>
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Super Admin' || $page.props.auth.user.role == 'Admin'">
            <Link class="nav-link" :href="route('orders.index')"><i class="fas fa-fw fa-tachometer-alt"></i><span>OrderList ( S Admin)</span></Link>
        </li>
        <li class="nav-item" v-if="$page.props.auth.user.role == 'Driver'">
            <Link class="nav-link" :href="route('driver.orders.pending')"><i class="fas fa-fw fa-tachometer-alt"></i><span>Pending (driver)</span></Link>
        </li>

        <li class="nav-item" v-if="$page.props.auth.user.role == 'Driver'">
            <Link class="nav-link" :href="route('driver.orders.myOrders')"><i class="fas fa-fw fa-tachometer-alt"></i><span>My orders (driver)</span></Link>
        </li>

            
    </ul>
    <!-- End of Sidebar -->
</template>

<template>
    <section>
        <div class="columns">
            <div class="column is-2 " style="100vh">
                <side-bar></side-bar>
            </div>
            <div class="column has-background-white-ter" style="100vh">
                <router-view></router-view>
            </div>
        </div> 
    </section>

</template>
<script>
import SideBar from '../components/Sidebar';
export default {
    name:"Dashboard",
    components:{SideBar}
}
</script>
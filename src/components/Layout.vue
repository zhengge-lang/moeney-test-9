<template>
    <div class="layout-wrapper">
        <div class="content"> 
            <slot></slot>
        </div>
        <Nav class="nav"/>
    </div>
</template>

<script lang="ts">
    

    export default ({
        name: "Layout",
        // components: { Nav }
    })
</script>
<style lang="scss" scoped>

    .layout-wrapper{
        display: flex;
        border: 1px solid green;
        height: 100vh;
        flex-direction: column;;
    }
    .content{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
    }
    // .nav{
    //     flex-grow: 1
    // }
</style>

<script lang="ts">
    import Input from "./Input.svelte";

    import Output from "./Output.svelte";
    import Navigation from "./Navigation.svelte";


</script>

<div class="container">
    <Input />
    <Output  />
    <Navigation />
</div>

<style >

    /* Board */
    .container {
        position: relative;
        width: 100%;
        background: #123872;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-content: stretch;
        justify-content: space-around;
        z-index: 0;
        flex-direction: column;
        flex-wrap: nowrap;
        flex-grow: 1;
    }
    </style>
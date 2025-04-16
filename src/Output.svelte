<script lang="ts">
    import { phoneticMap } from "./store";
</script>

<div class="board">
    {#each $phoneticMap as item}
        <div class="item-container">
            <div class="text-box" style="background-color: #ffffff; color: #767676;">
                {item.text}
            </div>
            <div class="text-box" style="background-color: #3F2626; color: rgba(255, 255, 255, 1);">
                {item.phonetic}
            </div>
        </div>
    {/each}
</div>

<style>
    /* Global styles */
    html, body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        min-width: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
    }

    /* Board container */
    .board {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 40px 20px;
        background-color: #38425E;
        flex-grow: 1;
    }

    /* Individual item container */
    .item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 64px;
    }

    /* Text box */
    .text-box {
        width: 100%;
        min-height: 20px;
        padding: 0 11px;
        font-size: 16px;
        font-family: "Nunito Sans", sans-serif;
        text-transform: lowercase;
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis; /* Add ellipsis for overflowing text */
        box-sizing: border-box;
    }

    /* Font face definition */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap; /* Using swap for better loading */
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXs1Ul.woff2) format('woff2');
    }
</style>

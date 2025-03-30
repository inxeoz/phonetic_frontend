<script lang="ts">
    import { phoneticMap } from "./store";


</script>
<!-- frame: Board -->
<div class="frame board-f567b70773db">
    <!-- frame: Board -->

    {#each $phoneticMap as item}

        <div class="frame board-f567b70773e6">
            <!-- frame: Board -->
            <div class="frame board-f567b7077410">
                <!-- text: lorem -->
                <div class="shape text lorem-f567b7077412">
                    <div class="text-node-html" id="html-text-node-b0fe5ebb-cc95-8009-8005-f567b7077412"
                         data-x="4096.999999999998" data-y="-537">
                        <div class="root rich-text root-0"
                             style="display:flex;white-space:break-spaces;align-items:flex-start"
                            >
                            <div class="paragraph-set root-0-paragraph-set-0">
                                <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr"><span
                                        class="text-node root-0-paragraph-set-0-paragraph-0-text-0"
                                        style="color:rgba(118, 118, 118, 1);text-transform:lowercase;line-break:auto;overflow-wrap:initial;white-space:pre;font-size:16px;text-rendering:geometricPrecision;caret-color:rgba(118, 118, 118, 1);text-decoration:none;--font-id:gfont-nunito-sans;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#767676&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-family:&quot;Nunito Sans&quot;;font-style:normal;font-weight:400">
                                    {item.text}
                                </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- frame: Board -->
            <div class="frame board-f567b707740f">
                <!-- text: lorem -->
                <div class="shape text lorem-f567b7077411">
                    <div class="text-node-html" id="html-text-node-b0fe5ebb-cc95-8009-8005-f567b7077411"
                         data-x="4096.999999999998" data-y="-517">
                        <div class="root rich-text root-0"
                             style="display:flex;white-space:break-spaces;align-items:flex-start"
                             >
                            <div class="paragraph-set root-0-paragraph-set-0">
                                <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr"><span
                                        class="text-node root-0-paragraph-set-0-paragraph-0-text-0"
                                        style="color:rgba(255, 255, 255, 1);text-transform:lowercase;line-break:auto;overflow-wrap:initial;white-space:pre;font-size:16px;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:gfont-nunito-sans;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-family:&quot;Nunito Sans&quot;;font-style:normal;font-weight:400">{item.phonetic}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/each   }
</div>

<style>
    /* cyrillic-ext */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXvlUlM_Y.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    /* cyrillic */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXt1UlM_Y.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* vietnamese */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXvFUlM_Y.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }

    /* latin-ext */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXvVUlM_Y.woff2) format('woff2');
        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    /* latin */
    @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXs1Ul.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }


    html, body {
        margin: 0;
        min-height: 100%;
        min-width: 100%;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    .text-node {
        background-clip: text !important;
        -webkit-background-clip: text !important;
    }

    /* Board */
    .board-f567b70773db {
        position: relative;
        width: auto;
        background: #38425E;
        border-radius: 0px 0px 0px 0px;
        padding: 40px 20px 40px 20px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 10px;
        z-index: 0;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
    }

    /* Board */
    .board-f567b70773e6 {
        position: relative;
        width: auto;
        height: auto;
        background: #123872;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-content: stretch;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        min-height: 40px;
        min-width: 64px;
    }

    /* Board */
    .board-f567b707740f {
        position: relative;
        width: 100%;
        height: 20px;
        background: #3F2626;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: start;
        align-content: stretch;
        justify-content: start;
        padding: 0px 11px 0px 11px;
        flex-direction: row;
        flex-wrap: nowrap;
        flex-shrink: 0;
    }

    /* lorem */
    .lorem-f567b7077411 {
        width: auto;
        height: 20px;
        flex-shrink: 0;
    }

    .lorem-f567b7077411 .root-0 {


        display: flex;
        white-space: break-spaces;
        align-items: flex-start;
    }

    .lorem-f567b7077411 .root-0-paragraph-set-0 {
        display: inline-flex;
        flex-direction: column;
        justify-content: inherit;

        margin-right: 1px;
        vertical-align: top;
    }

    .lorem-f567b7077411 .root-0-paragraph-set-0-paragraph-0 {
        font-size: 0;
        line-height: 1.2;
        margin: 0;
        text-align: left;
    }

    .lorem-f567b7077411 .root-0-paragraph-set-0-paragraph-0-text-0 {
        color: rgba(255, 255, 255, 1);
        text-transform: lowercase;

        line-break: auto;
        overflow-wrap: initial;
        white-space: pre;
        font-size: 16px;
        text-rendering: geometricPrecision;
        caret-color: rgba(255, 255, 255, 1);
        text-decoration: none;
        letter-spacing: 0px;
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 400;
    }

    /* Board */
    .board-f567b7077410 {
        position: relative;
        width: auto;
        height: auto;
        background: #ffffff;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: start;
        align-content: stretch;
        justify-content: start;
        padding: 0px 11px 0px 11px;
        flex-direction: row;
        flex-wrap: nowrap;
        min-height: 20px;
        min-width: 64px;
    }

    /* lorem */
    .lorem-f567b7077412 {
        width: auto;
        height: 20px;
        flex-shrink: 0;
    }

    .lorem-f567b7077412 .root-0 {


        display: flex;
        white-space: break-spaces;
        align-items: flex-start;
    }

    .lorem-f567b7077412 .root-0-paragraph-set-0 {
        display: inline-flex;
        flex-direction: column;
        justify-content: inherit;

        margin-right: 1px;
        vertical-align: top;
    }

    .lorem-f567b7077412 .root-0-paragraph-set-0-paragraph-0 {
        font-size: 0;
        line-height: 1.2;
        margin: 0;
        text-align: left;
    }

    .lorem-f567b7077412 .root-0-paragraph-set-0-paragraph-0-text-0 {
        color: rgba(118, 118, 118, 1);
        text-transform: lowercase;

        line-break: auto;
        overflow-wrap: initial;
        white-space: pre;
        font-size: 16px;
        text-rendering: geometricPrecision;
        caret-color: rgba(118, 118, 118, 1);
        text-decoration: none;
        letter-spacing: 0px;
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 400;
    }
</style>



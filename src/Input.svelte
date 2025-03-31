<script lang="ts">

    import { phoneticMap } from "./store";


    function addWord(text: string, phonetic:string) {
        phoneticMap.update(words => [...words, { text: text, phonetic: phonetic }]);
    }


    let inputText = "default";

    let responseData =
        {
        "phonetic": [
            {
                "text": "i",
                "phonetic": "/ˈa‍ɪ/"
            },
            {
                "text": "am",
                "phonetic": "am"
            },
            {
                "text": "the",
                "phonetic": "/ðə, ði/"
            },
            {
                "text": "boy",
                "phonetic": "/bˈɔ‍ɪ/"
            }
        ]
    };

    let error = null;
    let loading = false;

    async function sendData() {


        try {
            const response = await fetch("	my-phonetic-worker.pk9009895.workers.dev/api/convert", { // Replace with your API endpoint
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: inputText }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            responseData = await response.json(); // Process the response data
            phoneticMap.set(responseData.phonetic);

            // responseData.phonetic.forEach((phoneticPair) => {
            //     addWord(phoneticPair.text, phoneticPair.phonetic);
            // })
            console.log(responseData.phonetic);

        } catch (err) {
            error = err;
            console.error(err);
        } finally {
            loading = false;
        }
    }

    let convert = async ()=> {
        await sendData()

        console.log("Input value:", inputText);
    }
</script>


<!-- frame: Board -->
<div class="frame board-f54cbec6751f">
    <!-- frame: input_button_whole -->
    <div class="frame inputbutt-f54cbec67521">
        <!-- frame: input_area -->
        <div class="frame inputarea-f54cbec67603">
            <!-- text: input_text -->

            <div class="shape text inputtext-f54cbec67606">
                <div class="text-node-html" id="html-text-node-b0fe5ebb-cc95-8009-8005-f54cbec67606" data-x="2014.5" data-y="172.99999999999994">
                    <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
                        <div class="paragraph-set root-0-paragraph-set-0">
                            <input type="text" bind:value={inputText}  />
                        </div>
                    </div>
                </div>
            </div>

            <!-- frame: underline -->
            <div class="underline-f54cbec67605-wrapper">
                <div class="shape frame underline-f54cbec67605">
                </div>
            </div>
        </div>

        <!-- frame: convert_button -->
        <button class="frame convertbu-f54cbec67604" on:click={() => convert()}>
            <!-- text: convert_text -->
            <div class="shape text convertte-f54cbec67607">
                <div class="text-node-html" id="html-text-node-b0fe5ebb-cc95-8009-8005-f54cbec67607" data-x="2431.5" data-y="160.9999999999999">
                    <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start" xmlns="http://www.w3.org/1999/xhtml">
                        <div class="paragraph-set root-0-paragraph-set-0">
                            <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr"><span class="text-node root-0-paragraph-set-0-paragraph-0-text-0" style="color:rgba(255, 255, 255, 1);text-transform:lowercase;line-break:auto;overflow-wrap:initial;white-space:break-spaces;font-size:48px;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:gfont-recursive;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-family:&quot;Recursive&quot;;font-style:normal;font-weight:400">convert</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>


<style>
        /* cyrillic-ext */
        @font-face {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/recursive/v38/8vJN7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUvz2xbXfn1uEQadCCk312tQ1TDA.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* vietnamese */
        @font-face {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/recursive/v38/8vJN7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUvz2xbXfn1uEQadCCk310tQ1TDA.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/recursive/v38/8vJN7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUvz2xbXfn1uEQadCCk311tQ1TDA.woff2) format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/recursive/v38/8vJN7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUvz2xbXfn1uEQadCCk317tQ0.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* cyrillic-ext */
        @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            font-stretch: 100%;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5XvlUlM_Y.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            font-stretch: 100%;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5Xt1UlM_Y.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            font-stretch: 100%;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5XvFUlM_Y.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            font-stretch: 100%;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5XvVUlM_Y.woff2) format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            font-stretch: 100%;
            font-display: block;
            src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4GCC5Xs1Ul.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }




        * {
            box-sizing: border-box;
        }

        .text-node { background-clip: text !important; -webkit-background-clip: text !important; }

        /* Board */
        .board-f54cbec6751f {
            position: relative;
            width: 100%;
            background: #2D2A47;
            border-radius: 0px 0px 0px 0px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: start;
            justify-content: center;
            padding: 40px 20px 40px 20px;
            z-index: 0;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
        }

        /* input_button_whole */
        .inputbutt-f54cbec67521 {
            position: relative;
            height: auto;
            background: #FFFFFF;
            border-radius: 17px 17px 17px 17px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            gap: 20px;
            padding: 15px 15px 15px 15px;
            flex-direction: row;
            flex-wrap: wrap;
            flex: 1;
            min-height: 97px;
            max-width: 676px;
        }

        /* convert_button */
        .convertbu-f54cbec67604 {
            position: relative;
            width: 274px;
            height: 60px;
            background: #55D751;
            border-radius: 17px 17px 17px 17px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            flex-direction: row;
            flex-wrap: nowrap;
            flex-shrink: 0;
            min-width: 270px;
        }

        /* convert_text */
        .convertte-f54cbec67607 {
            width: 184px;
            height: 57px;
            flex-shrink: 0;
        }
        .convertte-f54cbec67607 .root-0 {


            display: flex;
            white-space: break-spaces;
            align-items: flex-start;
        }
        .convertte-f54cbec67607 .root-0-paragraph-set-0 {
            display: inline-flex;
            flex-direction: column;
            justify-content: inherit;
            min-width: 100%;
            margin-right: 1px;
            vertical-align: top;
        }
        .convertte-f54cbec67607 .root-0-paragraph-set-0-paragraph-0 {
            font-size: 0;
            line-height: 1.2;
            margin: 0;
            text-align: left;
        }
        .convertte-f54cbec67607 .root-0-paragraph-set-0-paragraph-0-text-0 {
            color: rgba(255, 255, 255, 1);
            text-transform: lowercase;

            line-break: auto;
            overflow-wrap: initial;
            white-space: break-spaces;
            font-size: 48px;
            text-rendering: geometricPrecision;
            caret-color: rgba(255, 255, 255, 1);
            text-decoration: none;
            letter-spacing: 0px;
            font-family: "Recursive";
            font-style: normal;
            font-weight: 400;
        }

        /* input_area */
        .inputarea-f54cbec67603 {
            position: relative;
            width: auto;
            height: auto;
            border-radius: 0px 0px 0px 0px;
            display: flex;
            align-items: center;
            align-content: stretch;
            justify-content: center;
            padding: 15px 0px 15px 0px;
            flex-direction: column;
            flex-wrap: nowrap;
            min-height: 90px;
        }

        /* underline */
        .underline-f54cbec67605-wrapper {
            position: relative;
            width: 352px;
            height: 4px;
            position: relative;
        }
        .underline-f54cbec67605-wrapper > * {
            position: absolute;
            left: 50%;
            top: 50%;
        }
        .underline-f54cbec67605 {
            width: 100%;
            height: 4px;
            transform: translate(-50%, -50%) matrix(1.00, 0.00, 0.00, -1.00, 0.00, 0.00);
            background: #55D751;
            border-radius: 0px 0px 0px 0px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: stretch;
            justify-content: center;
            flex-direction: row;
            flex-wrap: nowrap;
        }

        /* input_text */
        .inputtext-f54cbec67606 {
            width: 352px;
            height: 29px;
            flex-shrink: 0;
        }
        .inputtext-f54cbec67606 .root-0 {


            display: flex;
            white-space: break-spaces;
            align-items: flex-start;
        }
        .inputtext-f54cbec67606 .root-0-paragraph-set-0 {
            display: inline-flex;
            flex-direction: column;
            justify-content: inherit;

            margin-right: 1px;
            vertical-align: top;
        }
        .inputtext-f54cbec67606 .root-0-paragraph-set-0-paragraph-0 {
            font-size: 0;
            line-height: 1.2;
            margin: 0;
            text-align: left;
        }
        .inputtext-f54cbec67606 .root-0-paragraph-set-0-paragraph-0-text-0 {
            color: rgba(118, 118, 118, 1);
            text-transform: lowercase;

            line-break: auto;
            overflow-wrap: initial;
            white-space: pre;
            font-size: 24px;
            text-rendering: geometricPrecision;
            caret-color: rgba(118, 118, 118, 1);
            text-decoration: none;
            letter-spacing: 0px;
            font-family: "Nunito Sans";
            font-style: normal;
            font-weight: 600;
        }
    </style>


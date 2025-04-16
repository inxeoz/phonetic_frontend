<script lang="ts">
    import { phoneticMap } from "./store";
    import { onMount } from 'svelte';

    let inputText = "";
    let error = null;
    let loading = false;

    async function sendData() {
        loading = true;
        error = null;

        try {
            const response = await fetch("https://my-phonetic-worker.pk9009895.workers.dev/api/convert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: inputText }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            phoneticMap.set(responseData.phonetic);
        } catch (err) {
            error = err;
            console.error(err);
        } finally {
            loading = false;
        }
    }

    const convert = async () => {
        await sendData();
        console.log("Input value:", inputText);
    };

    onMount(() => {
        // Optional: Initialize the phoneticMap with default data on component mount
        // if (responseData && responseData.phonetic) {
        //     phoneticMap.set(responseData.phonetic);
        // }
    });
</script>

<div class="board">
    <div class="input-container">
        <input
                type="text"
                bind:value={inputText}
                class="input-area"
                placeholder="Enter text to convert" />
        <button class="convert-button" on:click={convert} disabled={loading}>
            {loading ? 'Converting...' : 'Convert'}
        </button>
    </div>

</div>

<style>
    /* Global styles */
    @font-face {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://design.penpot.app/internal/gfonts/font/recursive/v38/8vJN7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUvz2xbXfn1uEQadCCk317tQ0.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Nunito Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://design.penpot.app/internal/gfonts/font/nunitosans/v15/pe1mMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp5F5bxqqtQ1yiU4G1ilXs1Ul.woff2) format('woff2');
    }

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
        font-family: 'Nunito Sans', sans-serif; /* Apply Nunito Sans to the entire body */
    }

    /* Board container */
    .board {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 20px;
        background-color: #2D2A47;
        flex-grow: 1;
        width: 100%;
        box-sizing: border-box;
    }

    /* Input container */
    .input-container {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 600px;
        margin-bottom: 20px;
        position: relative;
        align-content: space-between;
        justify-content: center;
        z-index: 0;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;


    }

    /* Input area */
    .input-area {
        flex: 1;
        height: 48px;
        padding: 10px 15px;
        font-size: 18px;
        border: 2px solid #55D751;
        border-radius: 17px;
        box-sizing: border-box;
    }

    /* Convert button */
    .convert-button {
        width: auto;
        height: 48px;
        padding: 10px 22px;
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
        background-color: #55D751;
        border: none;
        border-radius: 34px;
        cursor: pointer;
        box-sizing: border-box;
        text-transform: lowercase;
        font-family: 'Recursive', sans-serif; /* Apply Recursive font */
    }

    .convert-button:disabled {
        background-color: gray;
        cursor: not-allowed;
    }

</style>

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
            const response = await fetch("https://my-phonetic-worker.pk9009895.workers.dev/api/convert", { // Replace with your API endpoint
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
<div class="frame board-f6b683839818">
    <!-- frame: input_button_whole -->
    <div class="frame inputbutt-f6b683839819">
        <!-- frame: input_area -->
        <input type="text" bind:value={inputText}  class="shape frame inputarea-f6b68383981b"/>
        <!-- frame: convert_button -->
        <button class="shape frame convertbu-f6b68383981a" on:click={() => convert()}>
            <span class="shape frame convertbu-f6b68383981b">
                convert
            </span>
        </button>
    </div>
</div>


    <style>

        .convertbu-f6b68383981b{
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
            font-family: "Recursive",sans-serif;
            font-style: normal;
            font-weight: 400;
        }

        /* Board */
        .board-f6b683839818 {
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
        .inputbutt-f6b683839819 {
            position: relative;
            height: auto;
            border-radius: 17px 17px 17px 17px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: space-around;
            row-gap: 10px;
            padding: 15px 15px 15px 15px;
            flex-direction: row;
            flex-wrap: wrap;
            flex: 1;
            min-height: 104px;
            max-width: 600px;
        }

        /* convert_button */
        .convertbu-f6b68383981a {
            position: relative;
            width: auto;

            background: #55D751;
            border-radius: 34px;
            overflow: hidden;
            display: flex;
            align-items: center;
            align-content: space-around;
            justify-content: center;
            padding: 10px 22px 10px 22px;
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 290px;
        }

        /* input_area */
        .inputarea-f6b68383981b {
            position: relative;
            width: auto;
            height: auto;
            border: 2px solid #55D751;
            border-radius: 17px 17px 17px 17px;
            display: flex;
            align-items: center;
            align-content: stretch;
            justify-content: center;
            padding: 15px 20px 15px 20px;
            flex-direction: column;
            flex-wrap: nowrap;
        }
    </style>


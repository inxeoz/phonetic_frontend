<div class="board">
    <button class="nav-button prev">Prev</button>
    <button class="nav-button next">Next</button>
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
    }

    .board {
        position: relative;
        width: 100%;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        align-content: space-between;
        justify-content: space-around;
        z-index: 0;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
    }


    /* Navigation button */
    .nav-button {
        width: 208px;
        height: 74px;
        padding: 7px 52px;
        font-size: 48px;
        font-family: 'Recursive', sans-serif;
        text-transform: lowercase;
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* "Prev" button specific styles */
    .nav-button.prev {
        background-color: #7A7A7A;
        color: rgba(185, 178, 178, 1);
    }

    /* "Next" button specific styles */
    .nav-button.next {
        background-color: #000000;
        color: rgba(255, 255, 255, 1);
    }
</style>

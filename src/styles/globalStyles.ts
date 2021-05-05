import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        width: 100%;

        @media only screen and (min-width: 992px) {
            font-size: 87.5%;
        }
        
        @media only screen and (min-width: 1382px) {
            font-size: 93.75%;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        background: var(--background);
    }

    h1, h2, h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        flex-direction: column;
        border-radius: 0.25rem;
    }
`
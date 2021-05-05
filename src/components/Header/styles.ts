import styled  from 'styled-components'

export const HeaderWrapper = styled.header`
    background: var(--blue);
    width: 100%;
`

export const HeaderContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 10rem;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
            margin-left: 0.8rem;
            color: var(--shape)
        }
    }

    & > button {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {

            filter: opacity(0.8);
        }
    }
`
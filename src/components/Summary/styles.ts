import styled from "styled-components";

export const SummaryWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 30%;

        &:nth-child(3) {
            background: var(--green);
            color: var(--shape)
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

    }
    
`;
import styled from "styled-components";

export const TransactionsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
`;

export const TransactionsHeader = styled.section`
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 1rem;

        li {
            color: var(--text-body);
            width: 20%;
            &:first-child {
                width: 40%;
            }
        }

        
    }
`

export const TransactionsContent = styled.section`
    & > .transaction-line {
        display: flex;
        align-items: center;
        border-radius: 0.25rem;
        height: 4rem;
        background: var(--shape);
        margin: 0.5rem 0;
        padding: 1rem;


        h4.title {
            width: 40%;
            color: var(--text-title);
            font-weight: 400;
        }
        p {
            width: 20%;
            color: var(--text-body);

            &.value {
                &.outcome {
                    color: var(--red);
                }
                &.income {
                    color: var(--green);
                }
            }
        }
     
    }
`
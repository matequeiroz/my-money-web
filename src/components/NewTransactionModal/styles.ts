import styled from "styled-components";

export const NewTransactionModalWrapper = styled.form`
  display: flex;
  flex-direction: column;

  img.btn-close {
    position: absolute;
    right: 20px;
    top: 25px;
    cursor: pointer;
    width: 1rem;
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input,
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }
  }

  input {
    & + input {
      margin: 1rem 0;
    }
  }

  select {
      margin: 1rem 0;
  }

  button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
          filter: brightness(0.8);
      }
  }
`;

export const ButtonsTypesTransactionsContainer = styled.div`
    display: flex;

    button {
        font-weight: 400;
        color: var(--text-title);

        & + button {
            margin-left: 8px;
        }

        width: 100%;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d7d7d7;
        line-height: 1.5rem;
        border-radius: 0.25rem;

        background: transparent;

        &:hover {
            &.income {
                background: rgba(18, 165, 84, 0.1);
            }
            &.outcome {
                background: rgba(230, 45, 76, 0.1);
            }
        }

        &.income.active {
            background: rgba(18, 165, 84, 0.1);
        }
        &.outcome.active {
            background: rgba(230, 45, 76, 0.1);
        }

        img {
            width: 30px;
            margin-right: 10px;
        }

        span {
          font-size: 1rem;
          color: var(--text-title);
        }
    }
`

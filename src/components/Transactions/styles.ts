import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const TransactionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  @media (min-width: ${breakpoints.mobile
      .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
    margin-top: 1rem;
  }
`;

export const TransactionsHeader = styled.section`
  @media (min-width: ${breakpoints.mobile
      .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
    display: none;
  }

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
`;

export const TransactionsContent = styled.section`
  .content-header {
    display: none;
  }

  @media (min-width: ${breakpoints.mobile
      .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
    .content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    h2 {
      color: var(--text-title);
      font-weight: 400;
    }

    p {
      color: var(--text-body);
      font-weight: 500;
    }
  }
  }

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

      @media (min-width: ${breakpoints.mobile
        .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
          width: 100%;
        }
    }
    p {
      width: 20%;
      color: var(--text-body);

      &.value {
        &.outcome {
          color: var(--red);
          &::before {
            content: "- "
          }
        }
        &.income {
          color: var(--green);
        }
      }

      @media (min-width: ${breakpoints.mobile
        .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
          width: 100%;
        }
    }

    &.mobile {
      display: none;
    }

    @media (min-width: ${breakpoints.mobile
        .portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
      & {
        display: none;
      }
      &.mobile {
        display: flex;
        height: 8rem;
        margin-top: 1rem;

        & + div {
          margin-top: 1rem;
        }

        .box {
          width: 100%;

          .box-header {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
          }

          .box-footer {
            display: flex;

            p {
              width: 50%;

              &.date {
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
`;

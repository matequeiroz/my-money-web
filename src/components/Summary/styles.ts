import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const SummaryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: -8rem;

  @media (min-width: ${breakpoints.mobile.portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
    flex-flow: column;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    width: 30%;

    transition: transform 0.5s;

    &:hover {
      transform: translateY(-10px);
    }

    @media (min-width: ${breakpoints.mobile.portrait}) and (max-width: ${breakpoints.tablet.portrait}) {
      width: 100%;
      transition: transform 0.5s;

      &:hover {
        transform: translateX(5px);
      }
      & + div {
        margin-top: 0.8rem;
      }
    }

    &:nth-child(1) {
      background: var(--green);
      color: var(--shape);
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

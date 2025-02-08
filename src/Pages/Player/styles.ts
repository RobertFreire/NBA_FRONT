import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    height: 100%;
`
export const MarketingImage = styled.div`
    display: flex;
    height: 25rem;
    border-radius: 2rem;
    color: white;
    background: var(--primary-blue);
    overflow: hidden;
    width: 100%;
    & > img {
    overflow: hidden;
    object-fit: cover;
    }
`

export const MarketingText = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

export const PlayersContainer = styled.section`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
`

export const PlayerBasicInformation = styled.div`

    display: flex;
    flex-direction: row-reverse;
    width: 100%;

    & h2 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 1rem;
        font-size: 2rem;
    }

    & h1 {
        font-size: 4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

export const PlayerContainer = styled.div`
    width: 40rem;
    height: 40rem;
    border-right: 4px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;

    & > img {
        border-bottom: 4px solid black;
    }

    & > div:first-child {
        position: absolute;
        top: 5rem;
        & > h1 {
            font-size: 1.7rem;
            margin-left: 1rem;

            :hover {
                color: red;
            }
        }
    }

    

    &:hover .flip-card-inner {
        transform: rotateY(180deg);
  }

`

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
`;


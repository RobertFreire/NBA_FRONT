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
    object-position: 0px 9px;
    width: 25%;
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

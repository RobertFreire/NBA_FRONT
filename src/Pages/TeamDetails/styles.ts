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

export const BackButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

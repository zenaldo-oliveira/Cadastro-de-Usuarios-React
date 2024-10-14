import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: linear-gradient(to left, #fe7e5d, #7f3841);
        width: 92vw;
        height: 31vh;
    }

    img{
        max-width: 100%;
        max-height: 100%;
    }
`
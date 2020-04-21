import styled from "styled-components/macro";

export const PagesContainer = styled.div``;

export const PagesContent = styled.div`
    width: calc(100% - 20px);
    max-width: 970px;
    margin: 0 auto;
    padding-bottom: 60px;
`;

export const PagesHeader = styled.header`
    padding: 10px;
    position: sticky;
    top:0;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        max-width: 970px;
        margin: 0 auto;

        .img-profile {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        h1 {
            font-size: 20px;
            margin-left: 10px;
            color: #000;
        }
    }
`;
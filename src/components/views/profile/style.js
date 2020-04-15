import styled from "styled-components/macro";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        text-align: center;
        width: 90%;
        max-width: 700px;
        line-height: 30px;

        .img-profile {
            width: 186px;
            height: 186px;
            border-radius: 50%;
            background-size: cover;
            margin: 0 auto;
        }

        .links {
            a {
                color: #CCC;
                font-size: 31px;
                margin: 0 10px;
            }
        }
    }


    
`;
import styled from 'styled-components'
import db from "../../../db.json"

const LogoAlura = styled.div`
    background-color: ${db.theme.colors.mainBg};
    left: 10%;
    padding: 20px;
    position: fixed;
    top: 0;

    img {
        content: url(${db.img});
        width: 120px;
    }
`

export default LogoAlura
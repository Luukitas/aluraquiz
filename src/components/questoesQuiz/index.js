import styled from 'styled-components'
import db from "../../../db.json"

const Widget = styled.div`
    align-items: center;
    background-image: linear-gradient(to right, rgba(0,0,0, .0), ${db.theme.colors.mainBg});
    display: flex;
    font-family: 'Segoe UI';
    height: 100%;
    justify-content: center;
    position:absolute;
    right: 0;
    top: 0;
    width: 50%;
`

Widget.components = styled.div`
    box-sizing: border-box;
    border-radius: 4px;
    height: 85%;
    width: 75%;
`
Widget.parts = styled.div`
    background-color: ${db.theme.colors.secondaryBg};
    border-radius: 4px;
    height: 50%;
    margin: 10px;
    p{
        padding: 0 32px;
    }
`
Widget.header = styled.header`
    display: flex;
    color: ${db.theme.colors.secondaryBg};
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => db.theme.colors.mainBg};
    
    * {
        margin: 0;
    }
    h1{
        font-family: "Segoe UI";
        font-size: 18px;
    }
`

Widget.main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 75%;

    input[type=text]{
        background-color: rgba(0,0,0,.0);
        border: 1px solid black;
        border-radius: 5px;
        font-size: 20px;
        height: 28px;
        transition: 0.2s;
        width: 85%;
    }

    input[type=text]:focus{
        border: 1.15px solid black;
    }

    a{  
        border: 1px solid ${db.theme.colors.mainBg};
        color: black;
        font-size: 20px;
        text-decoration: none;
        padding: 5px;
    }

    * {
        margin:0;
    }
`

export default Widget
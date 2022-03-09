import styles from "styled-components";

export const CardPokeStyle = styles.div`
display: inline-flex;
flex-direction: row;
border-style: solid;
width: fit-content;
border-color:yellow;
background-color:black;
&:hover{
    transform: scale(1.2);
    cursor: pointer;
}


`

export const pokeNames = styles.p`
text-decoration: none;

text-align: center;
font-size: 15px;
font-style: none;

color:white;
font-weight: bold;
text-align: center;
`
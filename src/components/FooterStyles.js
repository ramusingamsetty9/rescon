import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 0px;
background:transperent;
position: relative;
bottom: 0px;
margin-bottom: 0px;
width: 100%;



@media (max-width: 1000px) {
	padding: 50px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 20px;
text-decoration: none;

&:hover {
	color: skyblue;
	transition: 70ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: transperent;
margin-bottom: 20px;
font-weight: bold;
`;
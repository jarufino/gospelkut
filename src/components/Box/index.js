import styled from 'styled-components';
const Box=styled.div`
	background:#FFF;
	border-radius:8px;
	padding:16px;
	margin-bottom:10px;	
	.boxLink {
		font-size:14px;
		color: 2EF884;
		text-decoration: none;
		font-weigth: 800;
	}
	.title {
		font-size: 32px;
		font-weigth: 400
		margin-bottom: 20px;
	}
	.subTitle {
		font-size:32px;
		font-weigth:400;
		margin-bottom: 20px;
	}
	.smallTitle {
		margin-bottom:28px;
		font-size: 16px;
		font-weigth:700;
		color: #33333;
		margin-bottom: 20px;
	}
	hr {
		margin-top: 12px;
		font-size: 8px;
		border-color: transparent;
		border-bottom-color: #ECF2FA;
	}
	input {
		width:100%;
		background-color:#F4F4F4;
		color:#333333;
		border:0;
		padding: 14px 15px;
		margin-bottom:14px;
		border-radius:10000px;
		::placeholder {
			color:#33333;
			opacity:1;
		}
	}
	button {
		border:0;
		padding: 8px 12px;
		color:#FFFFFF;
		border-radius:10000px;
		background-color:#6F9288;
	}
`;
export default Box;
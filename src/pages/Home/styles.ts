import styled from 'styled-components';

export const Content = styled.div`
	margin: 90px 0 90px;
	width: 100%;
	max-width: 330px;
	text-align: center;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

	img {
		width: 150px;
		height: 50px;
		margin-top: 44px;
		margin-left: 15px;
	}

	h3 {
		color: #197e4e;
		font-weight: bold;
		margin: 44px 35px 0;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 18px;
	}

	h4 {
		color: #808080;
		font-weight: bold;
		font-size: 16px;
		margin: 15px 35px 0px;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	p {
		color: #808080;
		margin: 15px 35px 0px;
		text-align: justify;
		font-size: 12px;
		line-height: 25px;
		font-family: Arial, Helvetica, sans-serif;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		text-align: left;
		margin: 40px 35px 20px;

		a {
			flex: 1;
			order: 1;
			margin-top: 7px;
			font-size: 12px;
			color: #808080;
			font-family: Arial, Helvetica, sans-serif;
		}

		button {
			order: 2;
			padding: 0 15px;
			height: 30px;
			background: #f5fffa;
			font-weight: bold;
			color: #ff574d;
			border: 0;
			border-radius: 4px;
			font-size: 14px;

			&:hover {
				background: #f5fffa;
				color: #ff574d;
				cursor: pointer;
			}
		}
	}
`;
export const ContentSecondary = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 50px;

	button {
		margin-top: 50px;
		background: #197e4e;
		border: 0;
		height: 50px;
		width: 60px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;

		&:hover {
			cursor: pointer;
		}
	}
`;

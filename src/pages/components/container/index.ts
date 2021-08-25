import styled from 'styled-components';

const Container = styled.div`
	margin: 90px 0 90px;
	width: 100%;
	max-width: 330px;
	text-align: center;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

	img {
		width: 150px;
		height: 50px;
		margin-top: 70px;
		margin-left: 15px;
	}

	h3 {
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;
		margin-bottom: 15px;
		margin-top: 15px;
		color: #197e4e;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		#email {
			border: 0;
			height: 50px;
			padding: 0 15px;
			color: #000;
			margin: 5px 15px 10px;
			background: #fff9;
			font-size: 14px;
			font-family: Arial, Helvetica, sans-serif;
			opacity:50%;
		}

		#passwordDiv {
			display: flex;
			flex-wrap: wrap;
			align-items: stretch;
		   opacity:50%;

			input {
				flex: 1 0 70%;
				width: 100%;
				order: 1;
				border: 0;
				height: 50px;
				padding: 0 15px;
				color: #000;
				margin: 5px 0px 10px;
				margin-left: 15px;
				background: #fff;
				font-size: 14px;
				font-family: Arial, Helvetica, sans-serif;
			}

			span {
				color: red;
				order: 3;
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1 0 70%;
			}

			button {
				order: 2;
				background:#fff;
				border: 0;
				margin-top: 5px;
				margin-right: 15px;
				height: 50px;
				width: 40px;

				&:hover {
					cursor: pointer;
				}
			}
		}

		input {
			border: 0;
			height: 50px;
			padding: 0 15px;
			color: #000;
			margin: 5px 15px 10px;
			background: #e9e9ffe9;
			font-size: 14px;
			font-family: Arial, Helvetica, sans-serif;
		}

		span {
			color: red;
			align-self: center;
			margin: 10px 10px 10px;
			font-weight: bold;
		}

		a {
			color: #bdbebd;
			margin: 10px 15px 0;
			font-size: 12px;
			text-align: left;

			a {
				color: green;
				margin-left: 5px;
				text-align: left;
			}
		}

		#submit {
			margin: 55px 65px 90px;
			height: 42px;
			background: #197e4e;
			font-weight: bold;
			color: #fff;
			border: 0;
			border-radius: 4px;
			font-size: 12px;

			&:hover {
				background: #197e4e;
				cursor: pointer;
			}
		}
	}
`;

export default Container;

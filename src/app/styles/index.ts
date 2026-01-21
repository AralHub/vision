import { createGlobalStyle } from "antd-style"

export const GlobalStyles = createGlobalStyle`

	.apexcharts-svg {
		background-color: ${({ theme }) => theme.colorBgContainer} !important;
	}


`
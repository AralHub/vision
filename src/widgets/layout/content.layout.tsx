import { Flex, Layout, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()

	return (
		<>
			<Layout.Content
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Flex
					flex={1}
					vertical={true}
					gap={token.paddingLG}
					style={{
						padding: token.paddingLG,
					
					}}
				>
					{children}
				</Flex>
			</Layout.Content>
		</>
	)
}

export { ContentLayout }

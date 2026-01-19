import { Flex, type FlexProps, Image, Typography } from "antd"
import { type FC } from "react"

interface LogoProps extends FlexProps {
	collapsed?: boolean
}

const Logo: FC<LogoProps> = ({ collapsed, ...props }) => {
	return (
		<>
			<Flex
				gap={8}
				align={"center"}
				style={{
					whiteSpace: "nowrap",
					minWidth: 40,
					flexShrink: 0,
				}}
				{...props}
			>
				<Image
					src={"/icon.png"}
					fallback={"/public/icon.png"}
					width={32}
					height={32}
					style={{
						flexShrink: 0,
						minWidth: 32,
					}}
					preview={false}
				/>
				<Typography.Title
					level={4}
					hidden={collapsed}
				>
					Vision
				</Typography.Title>
			</Flex>
		</>
	)
}

export { Logo }

import { ErrorComponent, useRouter } from "@tanstack/react-router"
import type { ErrorComponentProps } from "@tanstack/router-core"
import { Button, Image, Result, theme } from "antd"
import { type FC } from "react"

const ErrorBoundary: FC<ErrorComponentProps> = ({ error }) => {
	const { history } = useRouter()
	const { token } = theme.useToken()

	return (
		<>
			<Result
				icon={
					<Image
						src={"/assets/404.svg"}
						fallback={"/public/assets/404.svg"}
						width={454}
						preview={false}
						height={454}
					/>
				}
				title={"500"}
				styles={{
					title: {
						fontSize: 60,
						fontWeight: 600,
						color: "rgb(173, 180, 210)",
					},
					subTitle: {
						fontSize: 18,
						fontWeight: 500,
						color: token.colorText,
					},
				}}
				subTitle={"Server error"}
				extra={
					<Button
						type={"primary"}
						style={{
							height: 48,
						}}
						onClick={() => history.back()}
					>
						Back to Home
					</Button>
				}
				children={<ErrorComponent error={error} />}
			/>
		</>
	)
}

export { ErrorBoundary }

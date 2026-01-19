import { Button, Image, Result, theme } from "antd"
import { type FC } from "react"

const NotFoundBoundary: FC = () => {
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
				title={"404"}
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
				subTitle={"Sorry! the page you are looking for does n`t exist."}
				extra={
					<Button
						type={"primary"}
						style={{
							height: 48,
						}}
						onClick={() => history.back()}
					>
						Return Home
					</Button>
				}
			/>
		</>
	)
}

export { NotFoundBoundary }

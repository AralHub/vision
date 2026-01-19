import { ErrorComponent, useRouter } from "@tanstack/react-router"
import type { ErrorComponentProps } from "@tanstack/router-core"
import { Button, Image, Result } from "antd"
import { type FC } from "react"

const ErrorBoundary: FC<ErrorComponentProps> = ({ error }) => {
	const { history } = useRouter()

	return (
		<>
			<Result
				icon={
					<Image
						src={"/assets/404.svg"}
						fallback={"/public/assets/404.svg"}
						width={"100%"}
					/>
				}
				title={"500"}
				subTitle={"Server error"}
				extra={<Button onClick={() => history.back()}>Back to Home</Button>}
				children={<ErrorComponent error={error} />}
			/>
		</>
	)
}

export { ErrorBoundary }

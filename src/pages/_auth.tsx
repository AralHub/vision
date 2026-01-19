import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Col, Flex, Image, Layout, Row, theme, Typography } from "antd"

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
})

function RouteComponent() {
	const { token } = theme.useToken()

	return (
		<>
			<Layout
				style={{
					minHeight: "100vh",
					backgroundColor: token.colorBgContainer,
				}}
				className={"text"}
			>
				<Row>
					<Col
						xs={24}
						md={8}
						lg={12}
						xl={9}
						xxl={8}
					>
						<Flex
							justify={"center"}
							align={"center"}
							style={{
								minHeight: "100vh",
								position: "relative",
								backgroundImage: "url(/assets/auth-bg.png)",
								backgroundSize: "cover",
							}}
						>
							<img
								src={"/assets/auth-top.png"}
								alt={"top"}
								style={{
									position: "absolute",
									objectFit: "cover",
									top: 0,
									right: 0,
									zIndex: 10,
								}}
								draggable={false}
							/>
							<img
								src={"/assets/auth-bottom.png"}
								alt={"bottom"}
								style={{
									position: "absolute",
									objectFit: "cover",
									bottom: 0,
									left: 0,
									zIndex: 10,
								}}
								draggable={false}
							/>
							<div style={{ zIndex: 11 }}>
								<Flex
									gap={8}
									align={"center"}
								>
									<Image
										src={"/icon.png"}
										width={80}
										height={80}
										fallback={"/public/icon.png"}
										style={{
											boxShadow: token.boxShadow,
											borderRadius: 16,
										}}
										preview={false}
									/>
									<Typography.Title style={{ fontSize: 56 }}>Vision</Typography.Title>
								</Flex>
								<Image
									src={"/assets/auth-img.png"}
									fallback={"/public/assets/auth-img.png"}
									preview={false}
									draggable={false}
								/>
							</div>
						</Flex>
					</Col>
					<Col
						xs={24}
						md={16}
						lg={12}
						xl={15}
						xxl={16}
					>
						<Flex
							vertical={true}
							justify={"center"}
							style={{
								paddingBlock: token.paddingLG + token.paddingXS,
								paddingInline: token.paddingLG,
								height: "100%",
							}}
						>
							<div
								style={{
									maxWidth: 464,
									width: "100%",
									marginInline: "auto",
								}}
							>
								<Typography.Title style={{ marginBottom: token.marginLG, fontSize: 24 }}>
									Sign In to your <span style={{ color: token.pink }}>Account</span>
								</Typography.Title>
								<Typography.Paragraph
									type={"secondary"}
									style={{
										marginBottom: token.marginLG + token.marginXS,
									}}
								>
									Welcome back! Please enter your details.
								</Typography.Paragraph>
								<Outlet />
							</div>
						</Flex>
					</Col>
				</Row>
			</Layout>
		</>
	)
}

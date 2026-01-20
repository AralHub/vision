import {
	BellOutlined,
	GlobalOutlined,
	LogoutOutlined,
	MailOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons"
import { Link, useParams } from "@tanstack/react-router"
import {
	Avatar,
	Button,
	Empty,
	Flex,
	Input,
	Layout,
	Menu,
	Popover,
	Space,
	Tag,
	theme,
	Typography,
} from "antd"
import { type FC } from "react"
import { MenuButton, ThemeButton } from "src/widgets/actions"
import { Logo } from "src/widgets/shared"

interface HeaderLayoutProps {
	main?: boolean
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ main }) => {
	const { token } = theme.useToken()
	const { restaurantId, fitnessId } = useParams({
		strict: false,
	})

	const logo = (
		<Link to={"/"}>
			<Logo
				align={"center"}
				variant={restaurantId ? "restaurant" : fitnessId ? "fitness" : "default"}
			/>
		</Link>
	)

	return (
		<>
			<Layout.Header
				style={{
					height: 64,
					lineHeight: 1,
					backgroundColor: token.colorBgContainer,
					boxShadow: "rgba(146, 153, 184, 0.063) 0px 2px 30px",
					paddingInline: token.paddingLG,
					position: "sticky",
					top: 0,
					left: 0,
					bottom: 0,
					zIndex: 10,
					display: "flex",
				}}
			>
				{main ? null : (
					<Flex
						style={{
							width: 280 - token.paddingLG,
						}}
					>
						<Space>
							{main ? null : <MenuButton />}
							{logo}
						</Space>
					</Flex>
				)}
				<Flex
					flex={1}
					style={{
						height: "100%",
					}}
					gap={8}
					align={"center"}
					justify={"space-between"}
				>
					{main ? logo : null}
					<Popover
						trigger={["click"]}
						title={"Search List"}
						content={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
					>
						<Input
							prefix={<SearchOutlined />}
							placeholder={"Search..."}
							variant={"borderless"}
							style={{
								height: 40,
								maxWidth: 300,
							}}
						/>
					</Popover>
					<Space>
						<ThemeButton />
						<Button
							type={"text"}
							shape={"circle"}
							icon={<GlobalOutlined />}
							size={"large"}
						/>
						<Button
							type={"text"}
							shape={"circle"}
							icon={<MailOutlined />}
							size={"large"}
						/>
						<Button
							type={"text"}
							shape={"circle"}
							icon={<BellOutlined />}
							size={"large"}
						/>
						<Popover
							trigger={"click"}
							placement={"bottomRight"}
							styles={{
								root: { width: 300 },
							}}
							content={
								<>
									<Tag
										variant={"filled"}
										color={"default"}
										style={{
											width: "100%",
											paddingBlock: token.paddingSM,
											paddingInline: token.padding,
										}}
									>
										<Flex
											align={"center"}
											gap={8}
										>
											<Avatar
												size={"large"}
												style={{
													backgroundColor: token.colorPrimary,
													cursor: "pointer",
												}}
												icon={<UserOutlined style={{ color: token.colorText }} />}
												src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
											/>
											<div>
												<Typography.Title level={5}>Admin</Typography.Title>
												<Typography.Paragraph
													type={"secondary"}
													style={{
														fontSize: token.fontSizeSM,
													}}
												>
													+998 90 123 45 67
												</Typography.Paragraph>
											</div>
										</Flex>
									</Tag>
									<Menu
										style={{
											marginTop: token.padding,
										}}
										items={[
											{
												key: "/profile",
												icon: <UserOutlined />,
												label: "My Profile",
											},
											{
												key: "/logout",
												icon: <LogoutOutlined />,
												danger: true,
												label: "Logout",
											},
										]}
									/>
								</>
							}
						>
							<Avatar
								style={{
									backgroundColor: token.colorPrimaryBg,
									cursor: "pointer",
								}}
								icon={<UserOutlined style={{ color: token.colorText }} />}
								src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
							/>
						</Popover>
					</Space>
				</Flex>
			</Layout.Header>
		</>
	)
}

export { HeaderLayout }

import {
	CheckCircleOutlined,
	CloseCircleOutlined,
	ShopOutlined,
	TableOutlined,
} from "@ant-design/icons"
import { Link } from "@tanstack/react-router"
import { Avatar, Badge, Card, Col, Row, Space, Statistic, Tag, Typography } from "antd"
import { type FC } from "react"
import type { Restaurant } from "./restaurants.list.tsx"

interface RestaurantsListItemProps {
	item: Restaurant
}

const RestaurantsListItem: FC<RestaurantsListItemProps> = ({ item }) => {
	return (
		<>
			<Link
				to={"/restaurants/$restaurantId"}
				params={{ restaurantId: item?.id?.toString() }}
			>
				<Badge.Ribbon
					color={item.status === "active" ? "green" : "red"}
					text={
						item.status === "active" ? (
							<>
								<CheckCircleOutlined /> Активно
							</>
						) : (
							<>
								<CloseCircleOutlined /> Неактивно
							</>
						)
					}
				>
					<Card
						hoverable={true}
						style={{ height: "100%" }}
					>
						<Space
							orientation={"vertical"}
							size={"middle"}
							style={{ width: "100%" }}
						>
							<Space
								align={"center"}
								style={{ width: "100%", justifyContent: "space-between" }}
							>
								<Space>
									<Avatar
										size={48}
										icon={<ShopOutlined />}
										style={{ backgroundColor: "#1890ff" }}
									/>
									<div>
										<Typography.Title
											level={5}
											style={{ margin: 0 }}
										>
											{item.name}
										</Typography.Title>
										<Typography.Text
											type={"secondary"}
											style={{ fontSize: 12 }}
										>
											{item.location}
										</Typography.Text>
									</div>
								</Space>
								<Tag
									color={"purple"}
									icon={<TableOutlined />}
								>
									по 5 стулев
								</Tag>
							</Space>
							<Row gutter={16}>
								<Col span={8}>
									<Statistic
										title={"Всего столов"}
										value={item.totalTables}
										prefix={<TableOutlined />}
										styles={{
											content: { color: "#1890ff" },
										}}
									/>
								</Col>
								<Col span={8}>
									<Statistic
										title={"Накрыто"}
										value={item.coveredTables}
										prefix={<TableOutlined />}
										styles={{
											content: { color: "#52c41a" },
										}}
									/>
								</Col>
								<Col span={8}>
									<Statistic
										title={"Пусто"}
										value={item.emptyTables}
										prefix={<TableOutlined />}
										styles={{
											content: { color: "#faad14" },
										}}
									/>
								</Col>
							</Row>
						</Space>
					</Card>
				</Badge.Ribbon>
			</Link>
		</>
	)
}

export { RestaurantsListItem }

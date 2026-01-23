import { DollarOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "@tanstack/react-router"
import { Avatar, Card, Col, Row, Space, Statistic, Typography } from "antd"
import { type FC } from "react"

interface FitnessCentersListItemProps {
	item: any
}

const FitnessCentersListItem: FC<FitnessCentersListItemProps> = ({ item }) => {
	return (
		<>
			<Link
				to={"/fitness/$fitnessId"}
				params={{ fitnessId: item?.id?.toString() }}
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
									icon={<UserOutlined />}
									style={{ backgroundColor: "#52c41a" }}
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
						</Space>
						<Row gutter={16}>
							<Col span={10}>
								<Statistic
									title={"Посещений сегодня"}
									value={item.visitsToday}
									prefix={<UserOutlined />}
									styles={{
										content: { color: "#1890ff" },
									}}
								/>
							</Col>
							<Col span={14}>
								<Statistic
									title={"Сегодняшний доход"}
									value={item.revenuePerVisitor * item.visitsToday}
									prefix={<DollarOutlined />}
									styles={{
										content: { color: "#faad14" },
									}}
								/>
							</Col>
						</Row>
					</Space>
				</Card>
			</Link>
		</>
	)
}

export { FitnessCentersListItem }
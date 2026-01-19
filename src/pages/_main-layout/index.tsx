import { createFileRoute, Link } from "@tanstack/react-router"
import { Card, Tabs, Row, Col, Space, Typography, Tag, Avatar, Statistic } from "antd"
import { ShopOutlined, CheckCircleOutlined, CloseCircleOutlined, UserOutlined } from "@ant-design/icons"

export const Route = createFileRoute("/_main-layout/")({
	component: RouteComponent,
})

// Моковые данные для ресторанов
const restaurants = [
	{ id: 1, name: "Ресторан 'Восток'", location: "г. Алматы, ул. Абая 150", status: "active" },
	{ id: 2, name: "Кафе 'Нур'", location: "г. Алматы, пр. Абая 50", status: "inactive" },
	{ id: 3, name: "Ресторан 'Астана'", location: "г. Астана, ул. Кабанбай батыра 10", status: "active" },
	{ id: 4, name: "Кафе 'Сырла'", location: "г. Алматы, ул. Сатпаева 30", status: "active" },
	{ id: 5, name: "Ресторан 'Алатау'", location: "г. Алматы, ул. Достык 200", status: "inactive" },
]

// Моковые данные для фитнес-залов
const fitnessCenters = [
	{ id: 1, name: "Фитнес-клуб 'World Class'", location: "г. Алматы, ул. Абая 150", visitsToday: 45 },
	{ id: 2, name: "Спортзал 'Gold Gym'", location: "г. Алматы, пр. Абая 50", visitsToday: 32 },
	{ id: 3, name: "Фитнес-центр 'FitZone'", location: "г. Астана, ул. Кабанбай батыра 10", visitsToday: 28 },
	{ id: 4, name: "Спортклуб 'Iron'", location: "г. Алматы, ул. Сатпаева 30", visitsToday: 67 },
	{ id: 5, name: "Фитнес 'Power'", location: "г. Алматы, ул. Достык 200", visitsToday: 19 },
]

function RouteComponent() {
	return (
		<>
			<Tabs
				items={[
					{
						key: "1",
						label: "Рестораны",
						children: <RestaurantsList />,
					},
					{
						key: "2",
						label: "Фитнес-залы",
						children: <FitnessCentersList />,
					},
				]}
			/>
		</>
	)
}

function RestaurantsList() {
	return (
		<Row gutter={[16, 16]}>
			{restaurants.map((restaurant) => (
				<Col key={restaurant.id} xs={24} sm={12} lg={8} xl={6}>
					<Link to={"/restaurants/$restaurantId"} params={{ restaurantId: restaurant?.id?.toString() }}>
						<Card
							hoverable={true}
							style={{ height: "100%" }}
						>
							<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
								<Space align={"center"} style={{ width: "100%", justifyContent: "space-between" }}>
									<Space>
										<Avatar
											size={48}
											icon={<ShopOutlined />}
											style={{ backgroundColor: "#1890ff" }}
										/>
										<div>
											<Typography.Title level={5} style={{ margin: 0 }}>
												{restaurant.name}
											</Typography.Title>
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												{restaurant.location}
											</Typography.Text>
										</div>
									</Space>
									{restaurant.status === "active" ? (
										<Tag color={"green"} icon={<CheckCircleOutlined />}>
											Активно
										</Tag>
									) : (
										<Tag color={"red"} icon={<CloseCircleOutlined />}>
											Неактивно
										</Tag>
									)}
								</Space>
							</Space>
						</Card>
					</Link>
				</Col>
			))}
		</Row>
	)
}

function FitnessCentersList() {
	return (
		<Row gutter={[16, 16]}>
			{fitnessCenters.map((center) => (
				<Col key={center.id} xs={24} sm={12} lg={8} xl={6}>
					<Link to={"/fitness/$fitnessId"} params={{ fitnessId: center?.id?.toString() }}>
						<Card
							hoverable={true}
							style={{ height: "100%" }}
						>
							<Space orientation={"vertical"} size={"middle"} style={{ width: "100%" }}>
								<Space align={"center"} style={{ width: "100%", justifyContent: "space-between" }}>
									<Space>
										<Avatar
											size={48}
											icon={<UserOutlined />}
											style={{ backgroundColor: "#52c41a" }}
										/>
										<div>
											<Typography.Title level={5} style={{ margin: 0 }}>
												{center.name}
											</Typography.Title>
											<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
												{center.location}
											</Typography.Text>
										</div>
									</Space>
								</Space>
								<Statistic
									title={"Посещений сегодня"}
									value={center.visitsToday}
									prefix={<UserOutlined />}
									styles={{
										content: { color: "#1890ff" }
									}}
								/>
							</Space>
						</Card>
					</Link>
				</Col>
			))}
		</Row>
	)
}

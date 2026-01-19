import { createFileRoute } from "@tanstack/react-router"
import { Card, Row, Col, Statistic, Table, Avatar, Tag, Space, Typography, Select, theme } from "antd"
import {
	UserOutlined,
	DollarOutlined,
	TeamOutlined,
	ClockCircleOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined
} from "@ant-design/icons"
import Chart from "react-apexcharts"
import { useMemo } from "react"
import { formatPrice } from "src/shared/utils"

export const Route = createFileRoute("/_layout/fitness/$fitnessId/")({
	component: RouteComponent,
})

// Моковые данные
const statsData = {
	todayVisitors: 147,
	todayVisitorsChange: 12,
	monthlyRevenue: 8260,
	monthlyRevenueChange: 5,
	activeMembers: 423,
	activeMembersChange: 3,
	avgVisitDuration: 72,
	avgVisitDurationChange: -5,
}

const hourlyData = {
	labels: ["6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"],
	data: [12, 42, 65, 48, 32, 56, 38, 20],
}

const monthlyData = {
	labels: ["Неделя 1", "Неделя 2", "Неделя 3", "Неделя 4"],
	data: [320, 380, 410, 390],
}

const recentCheckins = [
	{
		key: "1",
		name: "Алекс Джонсон",
		memberType: "Premium",
		time: "10:24",
		date: "Сегодня",
		status: "active",
		avatar: "http://static.photos/people/200x200/1",
	},
	{
		key: "2",
		name: "Сара Миллер",
		memberType: "Standard",
		time: "09:45",
		date: "Сегодня",
		status: "active",
		avatar: "http://static.photos/people/200x200/2",
	},
	{
		key: "3",
		name: "Михаил Чен",
		memberType: "Premium",
		time: "09:12",
		date: "Сегодня",
		status: "active",
		avatar: "http://static.photos/people/200x200/3",
	},
	{
		key: "4",
		name: "Эмили Уилсон",
		memberType: "Standard",
		time: "08:30",
		date: "Сегодня",
		status: "left",
		avatar: "http://static.photos/people/200x200/4",
	},
]

const topMembers = [
	{ rank: 1, name: "Давид Родригес", visits: 24, type: "Premium", color: "#1890ff" },
	{ rank: 2, name: "Дженнифер Ли", visits: 21, type: "Standard", color: "#722ed1" },
	{ rank: 3, name: "Роберт Смит", visits: 18, type: "Premium", color: "#52c41a" },
	{ rank: 4, name: "Лиза Браун", visits: 16, type: "Standard", color: "#faad14" },
	{ rank: 5, name: "Джеймс Уилсон", visits: 15, type: "Premium", color: "#ff4d4f" },
]

function RouteComponent() {
	const { token } = theme.useToken()

	const { fitnessId: _fitnessId } = Route.useParams()

	const hourlyChartOptions = useMemo(() => ({
		chart: {
			type: "bar" as const,
			height: 250,
			toolbar: { show: false },
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				columnWidth: "60%",
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: hourlyData.labels,
		},
		yaxis: {
			min: 0,
		},
		fill: {
			colors: ["#3B82F6"],
		},
		colors: ["#3B82F6"],
	}), [])

	const hourlyChartSeries = useMemo(() => [
		{
			name: "Посетители",
			data: hourlyData.data,
		},
	], [])

	const monthlyChartOptions = useMemo(() => ({
		chart: {
			type: "line" as const,
			height: 250,
			toolbar: { show: false },
		},
		stroke: {
			curve: "smooth" as const,
			width: 3,
		},
		fill: {
			// type: "gradient" as const,
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.1,
				stops: [0, 90, 100],
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: monthlyData.labels,
		},
		yaxis: {
			min: 0,
		},
		colors: ["#10B981"],
	}), [])

	const monthlyChartSeries = useMemo(() => [
		{
			name: "Посетители",
			data: monthlyData.data,
		},
	], [])

	const checkinsColumns = [
		{
			title: "Участник",
			dataIndex: "name",
			key: "name",
			render: (text: string, record: typeof recentCheckins[0]) => (
				<Space>
					<Avatar src={record.avatar} icon={<UserOutlined />} />
					<div>
						<div>{text}</div>
						<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
							{record.memberType}
						</Typography.Text>
					</div>
				</Space>
			),
		},
		{
			title: "Время",
			key: "time",
			render: (_: unknown, record: typeof recentCheckins[0]) => (
				<div>
					<div>{record.time}</div>
					<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
						{record.date}
					</Typography.Text>
				</div>
			),
		},
		{
			title: "Статус",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<Tag color={status === "active" ? "green" : "orange"}>
					{status === "active" ? "Активен" : "Ушел"}
				</Tag>
			),
		},
	]

	return (
		<Space orientation={"vertical"} size={"large"} style={{ width: "100%" }}>
			{/* Статистические карточки */}
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Посетители сегодня"}
									value={statsData.todayVisitors}
								/>
								<Typography.Text
									type={"success"}
									style={{ fontSize: 12 }}
								>
									<ArrowUpOutlined /> {statsData.todayVisitorsChange}% {"с вчера"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<UserOutlined />}
								style={{ backgroundColor: token.blue }}
							/>
						</Space>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Сегодняшний доход"}
									value={statsData.monthlyRevenue}
									formatter={(value) => `${formatPrice(Number(value) * 1000)} UZS`}
								/>
								<Typography.Text
									type={"success"}
									style={{ fontSize: 12 }}
								>
									<ArrowUpOutlined /> {statsData.monthlyRevenueChange}% {"с прошлого месяца"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<DollarOutlined />}
								style={{ backgroundColor: token.green }}
							/>
						</Space>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Активные участники"}
									value={statsData.activeMembers}
								/>
								<Typography.Text
									type={"success"}
									style={{ fontSize: 12 }}
								>
									<ArrowUpOutlined /> +{statsData.activeMembersChange} {"сегодня"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<TeamOutlined />}
								style={{ backgroundColor: token.purple }}
							/>
						</Space>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Средняя длительность визита"}
									value={statsData.avgVisitDuration}
									suffix={"мин"}
								/>
								<Typography.Text
									type={"danger"}
									style={{ fontSize: 12 }}
								>
									<ArrowDownOutlined /> {Math.abs(statsData.avgVisitDurationChange)} {"мин от среднего"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<ClockCircleOutlined />}
								style={{ backgroundColor: token.orange }}
							/>
						</Space>
					</Card>
				</Col>
			</Row>

			{/* Графики */}
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={12}>
					<Card
						title={"Посетители по часам сегодня"}
						extra={
							<Select defaultValue={"today"} style={{ width: 120 }}>
								<Select.Option value={"today"}>{"Сегодня"}</Select.Option>
								<Select.Option value={"yesterday"}>{"Вчера"}</Select.Option>
								<Select.Option value={"week"}>{"Эта неделя"}</Select.Option>
							</Select>
						}
					>
						<Chart
							options={hourlyChartOptions}
							series={hourlyChartSeries}
							type={"bar"}
							height={250}
						/>
					</Card>
				</Col>
				<Col xs={24} lg={12}>
					<Card
						title={"Посетители за месяц"}
						extra={
							<Select defaultValue={"month"} style={{ width: 120 }}>
								<Select.Option value={"month"}>{"Этот месяц"}</Select.Option>
								<Select.Option value={"lastMonth"}>{"Прошлый месяц"}</Select.Option>
								<Select.Option value={"year"}>{"Этот год"}</Select.Option>
							</Select>
						}
					>
						<Chart
							options={monthlyChartOptions}
							series={monthlyChartSeries}
							type={"line"}
							height={250}
						/>
					</Card>
				</Col>
			</Row>

			{/* Таблица и топ участники */}
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={12}>
					<Card title={"Недавние посещения"} styles={{ body: { padding: 0 } }}>
						<Table
							style={{
								borderRadius: 0,
							}}
							columns={checkinsColumns}
							dataSource={recentCheckins}
							pagination={false}
							size={"small"}
						/>
					</Card>
				</Col>
				<Col xs={24} lg={12}>
					<Card title={"Топ участников этого месяца"}>
						<Space orientation={"vertical"} style={{ width: "100%" }} size={"middle"}>
							{topMembers.map((member) => (
								<Space
									key={member.rank}
									style={{ width: "100%", justifyContent: "space-between" }}
								>
									<Space>
										<Avatar
											size={48}
											style={{ backgroundColor: member.color }}
										>
											{member.rank}
										</Avatar>
										<div>
											<Typography.Text strong={true}>{member.name}</Typography.Text>
											<div>
												<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
													{member.type}
												</Typography.Text>
											</div>
										</div>
									</Space>
									<Tag color={member.color}>{member.visits} {"посещений"}</Tag>
								</Space>
							))}
						</Space>
					</Card>
				</Col>
			</Row>
		</Space>
	)
}

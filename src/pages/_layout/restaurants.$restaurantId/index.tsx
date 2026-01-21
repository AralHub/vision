import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	DollarOutlined,
	TableOutlined,
	TrophyOutlined,
} from "@ant-design/icons"
import { createFileRoute } from "@tanstack/react-router"
import {
	Avatar,
	Card,
	Col,
	Flex,
	Image,
	Row,
	Select,
	Space,
	Statistic,
	Table,
	Tag,
	theme,
	Typography,
} from "antd"
import type { ApexOptions } from "apexcharts"
import { useMemo, useState } from "react"
import Chart from "react-apexcharts"
import { useThemeStore } from "src/shared/store"
import { formatPrice } from "src/shared/utils"
import { Map } from "src/widgets/map"

export const Route = createFileRoute("/_layout/restaurants/$restaurantId/")({
	component: RouteComponent,
})

// Моковые данные
const statsData = {
	totalTables: 25,
	totalTablesChange: 0,
	coveredTables: 18,
	coveredTablesChange: 3,
	emptyTables: 7,
	emptyTablesChange: -3,
	revenuePerTable: 45000,
	revenuePerTableChange: 5,
}

const weeklyData = {
	labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
	tables: [15, 18, 20, 22, 19, 25, 23],
	revenue: [675000, 810000, 900000, 990000, 855000, 1125000, 1035000],
}

const monthlyData = {
	labels: ["Неделя 1", "Неделя 2", "Неделя 3", "Неделя 4"],
	tables: [120, 145, 158, 142],
	revenue: [5400000, 6525000, 7110000, 6390000],
}

// Моковые данные для таблицы снимков
const cameraSnapshots = [
	{
		key: "1",
		camera: "Камера 1 - Зал",
		table: "Стол 5",
		time: "14:32",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "2",
		camera: "Камера 2 - Терраса",
		table: "Стол 12",
		time: "14:15",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "3",
		camera: "Камера 3 - VIP",
		table: "Стол 8",
		time: "13:58",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "empty",
	},
	{
		key: "4",
		camera: "Камера 1 - Зал",
		table: "Стол 3",
		time: "13:42",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "5",
		camera: "Камера 2 - Терраса",
		table: "Стол 15",
		time: "13:25",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
]

// Рейтинг столов
const topTables = [
	{ rank: 1, table: "Стол 5", covers: 142, revenue: 6390000, color: "#1890ff" },
	{ rank: 2, table: "Стол 12", covers: 128, revenue: 5760000, color: "#722ed1" },
	{ rank: 3, table: "Стол 8", covers: 115, revenue: 5175000, color: "#52c41a" },
	{ rank: 4, table: "Стол 3", covers: 98, revenue: 4410000, color: "#faad14" },
	{ rank: 5, table: "Стол 15", covers: 87, revenue: 3915000, color: "#ff4d4f" },
]

function RouteComponent() {
	const { token } = theme.useToken()
	const { restaurantId: _restaurantId } = Route.useParams()
	const [selectedCamera, setSelectedCamera] = useState<string>("all")
	const isDark = useThemeStore((state) => state.isDark)

	const filteredSnapshots = useMemo(() => {
		if (selectedCamera === "all") return cameraSnapshots
		return cameraSnapshots.filter((snap) => snap.camera.includes(selectedCamera))
	}, [selectedCamera])

	const weeklyChartOptions: ApexOptions = useMemo(
		() =>
			({
				chart: {
					type: "bar" as const,
					height: 300,
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
				theme: {
					mode: isDark ? "dark" : "light",
				},
				xaxis: {
					categories: weeklyData.labels,
				},
				yaxis: [
					{
						title: {
							text: "Столы",
						},
					},
					{
						opposite: true,
						title: {
							text: "Доход (UZS)",
						},
					},
				],
				fill: {
					colors: ["#3B82F6", "#10B981"],
				},
				colors: ["#3B82F6", "#10B981"],
				legend: {
					position: "top" as const,
				},
			}) as ApexOptions,
		[isDark]
	)

	const weeklyChartSeries = useMemo(
		() =>
			[
				{
					name: "Столы",
					type: "column" as const,
					data: weeklyData.tables,
				},
				{
					name: "Доход",
					type: "line" as const,
					data: weeklyData.revenue.map((r) => r * 2), // Конвертируем в тысячи для читаемости
				},
			] as ApexOptions["series"],
		[]
	)

	const monthlyChartOptions = useMemo(
		() =>
			({
				chart: {
					type: "line" as const,
					height: 300,
					toolbar: { show: false },
				},
				stroke: {
					curve: "smooth" as const,
					width: 3,
				},
				theme: {
					mode: isDark ? "dark" : "light",
				},
				fill: {
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
				yaxis: [
					{
						title: {
							text: "Столы",
						},
					},
					{
						opposite: true,
						title: {
							text: "Доход (UZS)",
						},
					},
				],
				colors: ["#3B82F6", "#10B981"],
				legend: {
					position: "top" as const,
				},
			}) as ApexOptions,
		[isDark]
	)

	const monthlyChartSeries = useMemo(
		() =>
			[
				{
					name: "Столы",
					type: "line" as const,
					data: monthlyData.tables,
				},
				{
					name: "Доход",
					type: "line" as const,
					data: monthlyData.revenue.map((r) => r), // Конвертируем в десятки тысяч
				},
			] as ApexOptions["series"],
		[]
	)

	const snapshotsColumns = [
		{
			title: "Камера",
			dataIndex: "camera",
			key: "camera",
		},
		{
			title: "Стол",
			dataIndex: "table",
			key: "table",
		},
		{
			title: "Время",
			key: "time",
			render: (_: unknown, record: (typeof cameraSnapshots)[0]) => (
				<div>
					<div>{record.time}</div>
					<Typography.Text
						type={"secondary"}
						style={{ fontSize: 12 }}
					>
						{record.date}
					</Typography.Text>
				</div>
			),
		},
		{
			title: "Снимок",
			key: "image",
			render: (_: unknown, record: (typeof cameraSnapshots)[0]) => (
				<Image
					src={record.image}
					alt={record.table}
					width={80}
					height={60}
					style={{ objectFit: "cover", borderRadius: 4 }}
					preview={true}
				/>
			),
		},
		{
			title: "Статус",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<Tag color={status === "active" ? "green" : "default"}>
					{status === "active" ? "Накрыт" : "Пусто"}
				</Tag>
			),
		},
	]

	return (
		<>
			{/* Статистические карточки */}
			<Row gutter={[16, 16]}>
				<Col
					xs={24}
					sm={12}
					lg={6}
				>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Всего столов"}
									value={statsData.totalTables}
									prefix={<TableOutlined />}
								/>
								<Typography.Text
									type={"secondary"}
									style={{ fontSize: 12 }}
								>
									Без изменений
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<TableOutlined />}
								style={{ backgroundColor: token.blue }}
							/>
						</Space>
					</Card>
				</Col>
				<Col
					xs={24}
					sm={12}
					lg={6}
				>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Накрытых столов"}
									value={statsData.coveredTables}
									prefix={<TableOutlined />}
								/>
								<Typography.Text
									type={"success"}
									style={{ fontSize: 12 }}
								>
									<ArrowUpOutlined /> +{statsData.coveredTablesChange} {"с утра"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<TableOutlined />}
								style={{ backgroundColor: token.green }}
							/>
						</Space>
					</Card>
				</Col>
				<Col
					xs={24}
					sm={12}
					lg={6}
				>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Пустых столов"}
									value={statsData.emptyTables}
									prefix={<TableOutlined />}
								/>
								<Typography.Text
									type={"danger"}
									style={{ fontSize: 12 }}
								>
									<ArrowDownOutlined /> {statsData.emptyTablesChange} {"с утра"}
								</Typography.Text>
							</div>
							<Avatar
								size={48}
								icon={<TableOutlined />}
								style={{ backgroundColor: token.orange }}
							/>
						</Space>
					</Card>
				</Col>
				<Col
					xs={24}
					sm={12}
					lg={6}
				>
					<Card>
						<Space style={{ width: "100%", justifyContent: "space-between" }}>
							<div>
								<Statistic
									title={"Доход с накрытого стола"}
									value={statsData.revenuePerTable}
									formatter={(value) => `${formatPrice(Number(value) * 100)} UZS`}
									prefix={<DollarOutlined />}
								/>
								<Typography.Text
									type={"success"}
									style={{ fontSize: 12 }}
								>
									<ArrowUpOutlined /> {statsData.revenuePerTableChange}% {"с прошлой недели"}
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
			</Row>

			{/* Графики */}
			<Row gutter={[16, 16]}>
				<Col
					xs={24}
					lg={12}
				>
					<Card
						title={"Недельная статистика столов и дохода"}
						extra={
							<Select
								defaultValue={"week"}
								style={{ width: 120 }}
							>
								<Select.Option value={"week"}>{"Эта неделя"}</Select.Option>
								<Select.Option value={"lastWeek"}>{"Прошлая неделя"}</Select.Option>
							</Select>
						}
					>
						<Chart
							options={weeklyChartOptions}
							series={weeklyChartSeries}
							type={"line"}
							height={300}
						/>
					</Card>
				</Col>
				<Col
					xs={24}
					lg={12}
				>
					<Card
						title={"Месячная статистика столов и дохода"}
						extra={
							<Select
								defaultValue={"month"}
								style={{ width: 120 }}
							>
								<Select.Option value={"month"}>{"Этот месяц"}</Select.Option>
								<Select.Option value={"lastMonth"}>{"Прошлый месяц"}</Select.Option>
							</Select>
						}
					>
						<Chart
							options={monthlyChartOptions}
							series={monthlyChartSeries}
							type={"line"}
							height={300}
						/>
					</Card>
				</Col>
			</Row>

			{/* Карта ресторана и таблица снимков */}
			<Row gutter={[16, 16]}>
				<Col
					xs={24}
					lg={12}
				>
					<Card title={"Рейтинг столов (чаще накрываются)"}>
						<Space
							orientation={"vertical"}
							style={{ width: "100%" }}
							size={"middle"}
						>
							{topTables.map((table) => (
								<Space
									key={table.rank}
									style={{ width: "100%", justifyContent: "space-between" }}
								>
									<Space>
										<Avatar
											size={48}
											style={{ backgroundColor: table.color }}
											icon={<TrophyOutlined />}
										>
											{table.rank}
										</Avatar>
										<div>
											<Typography.Text strong={true}>{table.table}</Typography.Text>
											<div>
												<Typography.Text
													type={"secondary"}
													style={{ fontSize: 12 }}
												>
													{formatPrice(table.revenue)} UZS
												</Typography.Text>
											</div>
										</div>
									</Space>
									<Tag color={table.color}>
										{table.covers} {"накрытий"}
									</Tag>
								</Space>
							))}
						</Space>
					</Card>
				</Col>
				<Col
					xs={24}
					lg={12}
				>
					<Card
						title={"Последние снимки с камер"}
						extra={
							<Select
								value={selectedCamera}
								onChange={setSelectedCamera}
								style={{ width: 150 }}
							>
								<Select.Option value={"all"}>{"Все камеры"}</Select.Option>
								<Select.Option value={"1"}>{"Камера 1"}</Select.Option>
								<Select.Option value={"2"}>{"Камера 2"}</Select.Option>
								<Select.Option value={"3"}>{"Камера 3"}</Select.Option>
							</Select>
						}
						styles={{ body: { padding: 0 } }}
					>
						<Table
							style={{
								borderRadius: 0,
							}}
							columns={snapshotsColumns}
							dataSource={filteredSnapshots}
							pagination={false}
							size={"small"}
						/>
					</Card>
				</Col>
			</Row>

			<Card
				title={"Карта ресторана"}
				extra={
					<Select
						placeholder={"Выберите этаж"}
						style={{ width: 150 }}
					>
						<Select.Option value={"1"}>{"Этаж 1"}</Select.Option>
						<Select.Option value={"2"}>{"Этаж 2"}</Select.Option>
						<Select.Option value={"3"}>{"Этаж 3"}</Select.Option>
					</Select>
				}
			>
				<Flex
					justify={"center"}
					style={{ position: "relative", width: "100%", height: "auto", overflow: "auto" }}
				>
					<Map />
				</Flex>
			</Card>
		</>
	)
}

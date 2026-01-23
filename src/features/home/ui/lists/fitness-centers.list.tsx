import { SearchOutlined } from "@ant-design/icons"
import { Col, Flex, Input, Row } from "antd"
import { type FC } from "react"
import { AddButton } from "src/widgets/actions"
import { FitnessCentersForm } from "../forms"
import { FitnessCentersListItem } from "./fitness-centers.list-item.tsx"

// Моковые данные для фитнес-залов
const fitnessCenters = [
	{
		id: 1,
		name: "Фитнес-клуб 'World Class'",
		location: "г. Алматы, ул. Абая 150",
		visitsToday: 45,
		totalVisitors: 320,
		revenuePerVisitor: 250000,
	},
	{
		id: 2,
		name: "Спортзал 'Gold Gym'",
		location: "г. Алматы, пр. Абая 50",
		visitsToday: 32,
		totalVisitors: 245,
		revenuePerVisitor: 180000,
	},
	{
		id: 3,
		name: "Фитнес-центр 'FitZone'",
		location: "г. Астана, ул. Кабанбай батыра 10",
		visitsToday: 28,
		totalVisitors: 198,
		revenuePerVisitor: 220000,
	},
	{
		id: 4,
		name: "Спортклуб 'Iron'",
		location: "г. Алматы, ул. Сатпаева 30",
		visitsToday: 67,
		totalVisitors: 450,
		revenuePerVisitor: 300000,
	},
	{
		id: 5,
		name: "Фитнес 'Power'",
		location: "г. Алматы, ул. Достык 200",
		visitsToday: 19,
		totalVisitors: 156,
		revenuePerVisitor: 150000,
	},
]

const FitnessCentersList: FC = () => {
	return (
		<>
			<FitnessCentersForm />
			<Flex
				gap={8}
				justify={"space-between"}
				style={{ marginBottom: 16 }}
			>
				<div>
					<Input
						size={"large"}
						prefix={<SearchOutlined />}
						placeholder={"Поиск..."}
					/>
				</div>
				<AddButton
					size={"large"}
					formKey={"primary"}
				/>
			</Flex>
			<Row gutter={[16, 16]}>
				{fitnessCenters.map((center) => (
					<Col
						key={center.id}
						xs={24}
						sm={12}
						lg={8}
						xl={6}
					>
						<FitnessCentersListItem item={center} />
					</Col>
				))}
			</Row>
		</>
	)
}

export { FitnessCentersList }

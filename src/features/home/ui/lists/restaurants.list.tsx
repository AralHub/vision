import { SearchOutlined } from "@ant-design/icons"
import { Col, Flex, Input, Row } from "antd"
import { type FC } from "react"
import { RestaurantsForm } from "src/features/home/ui"
import { RestaurantsListItem } from "src/features/home/ui/lists/restaurants.list-item.tsx"
import { AddButton } from "src/widgets/actions"

export type Restaurant = {
	id: number
	name: string
	location: string
	status: string
	totalTables: number
	coveredTables: number
	emptyTables: number
}

// Моковые данные для ресторанов
const restaurants = [
	{
		id: 1,
		name: "Тойхана 'Восток'",
		location: "г. Алматы, ул. Абая 150",
		status: "active",
		totalTables: 25,
		coveredTables: 18,
		emptyTables: 7,
	},
	{
		id: 2,
		name: "Тойхана 'Нур'",
		location: "г. Алматы, пр. Абая 50",
		status: "inactive",
		totalTables: 15,
		coveredTables: 0,
		emptyTables: 15,
	},
	{
		id: 3,
		name: "Тойхана 'Астана'",
		location: "г. Астана, ул. Кабанбай батыра 10",
		status: "active",
		totalTables: 30,
		coveredTables: 22,
		emptyTables: 8,
	},
	{
		id: 4,
		name: "Тойхана 'Сырла'",
		location: "г. Алматы, ул. Сатпаева 30",
		status: "active",
		totalTables: 20,
		coveredTables: 15,
		emptyTables: 5,
	},
	{
		id: 5,
		name: "Тойхана 'Алатау'",
		location: "г. Алматы, ул. Достык 200",
		status: "inactive",
		totalTables: 18,
		coveredTables: 0,
		emptyTables: 18,
	},
]

const RestaurantsList: FC = () => {
	return (
		<>
			<RestaurantsForm />
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
				<AddButton size={"large"} />
			</Flex>
			<Row gutter={[16, 16]}>
				{restaurants.map((restaurant) => (
					<Col
						key={restaurant.id}
						xs={24}
						sm={12}
						lg={8}
						xl={6}
					>
						<RestaurantsListItem item={restaurant} />
					</Col>
				))}
			</Row>
		</>
	)
}

export { RestaurantsList }

import { createFileRoute } from "@tanstack/react-router"
import { Card, Table, Avatar, Tag, Space, Typography, Button } from "antd"
import { UserOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { formatPhone } from "src/shared/utils"

export const Route = createFileRoute(
	"/_layout/restaurants/$restaurantId/employees",
)({
	component: RouteComponent,
})

// Моковые данные работников ресторана
const employees = [
	{
		key: "1",
		name: "Айгуль Нурланова",
		position: "Официант",
		phone: "+77001234567",
		email: "aigul@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		shift: "Дневная",
		experience: "2 года",
	},
	{
		key: "2",
		name: "Данияр Касымов",
		position: "Повар",
		phone: "+77001234568",
		email: "daniyar@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		shift: "Вечерняя",
		experience: "5 лет",
	},
	{
		key: "3",
		name: "Алма Абдуллаева",
		position: "Официант",
		phone: "+77001234569",
		email: "alma@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		shift: "Дневная",
		experience: "1 год",
	},
	{
		key: "4",
		name: "Ерлан Токтаров",
		position: "Су-шеф",
		phone: "+77001234570",
		email: "erlan@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		shift: "Вечерняя",
		experience: "8 лет",
	},
	{
		key: "5",
		name: "Жанар Садыкова",
		position: "Администратор",
		phone: "+77001234571",
		email: "zhanar@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		shift: "Дневная",
		experience: "3 года",
	},
	{
		key: "6",
		name: "Марат Беков",
		position: "Официант",
		phone: "+77001234572",
		email: "marat@example.com",
		status: "inactive",
		avatar: "https://via.placeholder.com/40",
		shift: "Вечерняя",
		experience: "6 месяцев",
	},
]

function RouteComponent() {
	const columns = [
		{
			title: "Работник",
			key: "employee",
			render: (_: unknown, record: typeof employees[0]) => (
				<Space>
					<Avatar src={record.avatar} icon={<UserOutlined />} />
					<div>
						<div>
							<Typography.Text strong={true}>{record.name}</Typography.Text>
						</div>
						<Typography.Text type={"secondary"} style={{ fontSize: 12 }}>
							{record.position}
						</Typography.Text>
					</div>
				</Space>
			),
		},
		{
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (phone: string) => formatPhone(phone),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Смена",
			dataIndex: "shift",
			key: "shift",
		},
		{
			title: "Опыт",
			dataIndex: "experience",
			key: "experience",
		},
		{
			title: "Статус",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<Tag color={status === "active" ? "green" : "red"}>
					{status === "active" ? "Активен" : "Неактивен"}
				</Tag>
			),
		},
		{
			title: "Действия",
			key: "actions",
			render: () => (
				<Space>
					<Button type={"link"} icon={<EditOutlined />} size={"small"}>
						Редактировать
					</Button>
					<Button type={"link"} danger={true} icon={<DeleteOutlined />} size={"small"}>
						Удалить
					</Button>
				</Space>
			),
		},
	]

	return (
		<Card
			title={"Работники ресторана"}
			extra={
				<Button type={"primary"} icon={<PlusOutlined />}>
					Добавить работника
				</Button>
			}
		>
			<Table
				columns={columns}
				dataSource={employees}
				pagination={{
					pageSize: 10,
					showSizeChanger: true,
					showTotal: (total) => `Всего ${total} работников`,
				}}
			/>
		</Card>
	)
}

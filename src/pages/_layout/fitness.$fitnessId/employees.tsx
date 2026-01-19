import { createFileRoute } from "@tanstack/react-router"
import { Card, Table, Avatar, Tag, Space, Typography, Button } from "antd"
import { UserOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { formatPhone } from "src/shared/utils"

export const Route = createFileRoute("/_layout/fitness/$fitnessId/employees")({
	component: RouteComponent,
})

// Моковые данные работников фитнес-зала
const employees = [
	{
		key: "1",
		name: "Асхат Жумабеков",
		position: "Тренер по фитнесу",
		phone: "+77001234580",
		email: "askhat@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		specialization: "Силовые тренировки",
		experience: "7 лет",
	},
	{
		key: "2",
		name: "Айжан Калиева",
		position: "Тренер по йоге",
		phone: "+77001234581",
		email: "aizhan@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		specialization: "Йога, пилатес",
		experience: "4 года",
	},
	{
		key: "3",
		name: "Нурлан Абдуллин",
		position: "Тренер по кроссфиту",
		phone: "+77001234582",
		email: "nurlan@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		specialization: "Кроссфит, функциональный тренинг",
		experience: "6 лет",
	},
	{
		key: "4",
		name: "Алтынай Сабитова",
		position: "Администратор",
		phone: "+77001234583",
		email: "altynai@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		specialization: "Администрирование",
		experience: "2 года",
	},
	{
		key: "5",
		name: "Данияр Омаров",
		position: "Тренер по плаванию",
		phone: "+77001234584",
		email: "daniyar@example.com",
		status: "active",
		avatar: "https://via.placeholder.com/40",
		specialization: "Плавание, аквааэробика",
		experience: "5 лет",
	},
	{
		key: "6",
		name: "Жанар Темирбекова",
		position: "Тренер по кардио",
		phone: "+77001234585",
		email: "zhanar@example.com",
		status: "inactive",
		avatar: "https://via.placeholder.com/40",
		specialization: "Кардио, бег",
		experience: "3 года",
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
			title: "Специализация",
			dataIndex: "specialization",
			key: "specialization",
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
			title={"Работники фитнес-зала"}
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

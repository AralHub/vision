import { Image, Modal, type ModalProps, Table, Tag, Typography } from "antd"
import { type FC } from "react"

const cameraSnapshots = [
	{
		key: "1",
		table: "Стол 5",
		time: "14:32",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "2",
		table: "Стол 12",
		time: "14:15",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "3",
		table: "Стол 8",
		time: "13:58",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "empty",
	},
	{
		key: "4",
		table: "Стол 3",
		time: "13:42",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
	{
		key: "5",
		table: "Стол 15",
		time: "13:25",
		date: "Сегодня",
		image: "/assets/camera/camera-fill.png",
		status: "active",
	},
]

interface MapModalProps extends ModalProps {
	className?: string
}

const MapModal: FC<MapModalProps> = (props) => {
	return (
		<>
			<Modal
				centered={true}
				width={600}
				{...props}
			>
				<Table
					dataSource={cameraSnapshots}
					columns={[
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
					]}
				/>
			</Modal>
		</>
	)
}

export { MapModal }

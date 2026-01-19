import { CalendarOutlined, HomeOutlined, TeamOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"

export type MenuItem = Required<MenuProps>["items"][number]

export const menuData: MenuItem[] = [
	{
		key: "Dashboard",
		type: "group",
		label: "Dashboard",
	},
	{
		key: "/",
		icon: <HomeOutlined />,
		label: "Главная",
	},
	{
		key: "Pages",
		type: "group",
		label: "Pages",
	},
	{
		key: "/calendar",
		icon: <CalendarOutlined />,
		label: "Календарь",
	},
	{
		key: "/employees",
		icon: <TeamOutlined />,
		label: "Работники",
	},
]

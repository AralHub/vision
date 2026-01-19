import { Layout } from "antd"
import { type FC, type PropsWithChildren } from "react"
import { useMenuStore } from "src/shared/store"

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
	const collapsed = useMenuStore((state) => state.collapsed)

	return (
		<>
			<Layout.Sider
				width={280}
				collapsed={collapsed}
				theme={"light"}
				style={{
					height: "calc(100vh - 64px)",
					position: "sticky",
					top: 64,
					left: 0,
					bottom: 0,
				}}
			>
				{children}
			</Layout.Sider>
		</>
	)
}

export { SidebarContainer }

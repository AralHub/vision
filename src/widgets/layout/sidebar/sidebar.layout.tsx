import { ConfigProvider, Menu, theme } from "antd"
import { type FC, useMemo } from "react"
import { menuData } from "src/shared/data"
import { useMenuStore, useThemeStore } from "src/shared/store"
import { SidebarContainer } from "./sidebar.container.tsx"

const SidebarLayout: FC = () => {
	const { token } = theme.useToken()
	const { isDark } = useThemeStore()
	const collapsed = useMenuStore((state) => state.collapsed)

	const menuItems = useMemo(() => {
		if (collapsed) return menuData?.filter((el) => el?.type !== "group")
		return menuData
	}, [collapsed])

	return (
		<>
			<SidebarContainer>
				<ConfigProvider
					theme={{
						components: {
							Menu: {
								// itemSelectedBg: token.colorPrimary,
								// itemSelectedColor: token.colorWhite,
								itemColor: isDark ? token.colorText : "rgb(127, 128, 130)",
								// itemHoverBg: isDark ? "rgb(49, 65, 88)" : token.colorPrimaryBg,
								// itemActiveBg: isDark ? "rgb(49, 65, 88)" : token.colorPrimaryBg,
								// groupTitleFontSize: token.fontSizeSM,
								// groupTitleColor: isDark ? "rgba(250, 250, 250, 0.7)" : "rgba(10, 10, 10, 0.7)",
								itemHeight: collapsed ? 50 : 40,
								collapsedIconSize: 16,
							},
						},
					}}
				>
					<Menu
						mode={"inline"}
						inlineCollapsed={collapsed}
						style={{
							padding: `${token.paddingSM}px ${collapsed ? 0 : (token.padding - 4)}px`,
						}}
						styles={() => ({
							itemTitle: {
								fontSize: token.fontSizeSM,
								paddingInline: token.padding,
								fontWeight: 500,
								textTransform: "uppercase",
								color: "rgb(146, 153, 184)",
							},
						})}
						items={menuItems}
					/>
				</ConfigProvider>
			</SidebarContainer>
		</>
	)
}

export { SidebarLayout }

import { ConfigProvider, theme } from "antd"
import type { AliasToken } from "antd/es/theme/interface"
import { type FC, type PropsWithChildren, useMemo } from "react"
import { useThemeStore } from "src/shared/store"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { token } = theme.useToken()
	const { isDark } = useThemeStore()

	const customToken: AliasToken = useMemo(() => {
		if (isDark)
			return {
				colorPrimary: "#5F63F2",
			} as AliasToken

		return {
			colorPrimary: "#5F63F2",
			colorText: "#272B41",
		} as AliasToken
	}, [isDark])

	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
					token: {
						...customToken,
						fontFamily: `"Inter", "Inter Fallback", ${token.fontFamily}`,
					},
					components: {
						Menu: {
							itemColor: isDark ? token.colorText : "rgb(127, 128, 130)",
							collapsedIconSize: 16,
						}
					}
				}}
				typography={{
					style: {
						marginTop: 0,
						marginBottom: 0,
					},
				}}
				menu={{
					style: {
						borderInlineEnd: 0,
					},
				}}
				card={{
					variant: "borderless",
				}}
			>
				{children}
			</ConfigProvider>
		</>
	)
}

export { AntdProvider }

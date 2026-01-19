import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Layout } from "antd"
import {
	ContentLayout,
	FooterLayout,
	HeaderLayout,
	InnerLayout,
	MainLayout,
	SidebarLayout,
} from "src/widgets/layout"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<HeaderLayout />
				<InnerLayout>
					<SidebarLayout />
					<Layout>
						<ContentLayout>
							<Outlet />
						</ContentLayout>
						<FooterLayout />
					</Layout>
				</InnerLayout>
			</MainLayout>
		</>
	)
}

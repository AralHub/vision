import { createFileRoute, Outlet } from "@tanstack/react-router"
import { ContentLayout, FooterLayout, HeaderLayout, MainLayout } from "src/widgets/layout"

export const Route = createFileRoute("/_main-layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<MainLayout>
				<HeaderLayout main={true} />
				<ContentLayout>
					<Outlet />
				</ContentLayout>
				<FooterLayout />
			</MainLayout>
		</>
	)
}

import { createFileRoute } from "@tanstack/react-router"
import { Flex, Tabs } from "antd"
import { useState } from "react"
import { FitnessCentersList, RestaurantsList } from "src/features/home"

export const Route = createFileRoute("/_main-layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	const [tab, setTab] = useState("1")

	return (
		<>
			<Flex
				flex={1}
				style={{
					position: "relative",
				}}
			>
				<Tabs
					style={{
						flexGrow: 1,
						zIndex: 1,
					}}
					accessKey={tab}
					onChange={setTab}
					centered={true}
					items={[
						{
							key: "1",
							label: "Рестораны",
							children: <RestaurantsList />,
						},
						{
							key: "2",
							label: "Фитнес-залы",
							children: <FitnessCentersList />,
						},
					]}
				/>
				<img
					hidden={tab !== "1"}
					src={"/assets/toy-preview.png"}
					draggable={false}
					alt={""}
					style={{
						position: "absolute",
						bottom: -24,
						right: -24,
						width: "50%",
						minHeight: 500,
						objectFit: "contain",
					}}
				/>
				<img
					hidden={tab !== "2"}
					src={"/assets/fit-preview.png"}
					draggable={false}
					alt={""}
					style={{
						position: "absolute",
						bottom: -24,
						right: 0,
						width: "25%",
						height: "auto",
						objectFit: "contain",
					}}
				/>
			</Flex>
		</>
	)
}

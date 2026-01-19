import { createFileRoute } from "@tanstack/react-router"
import { Calendar, Card, Typography } from "antd"
import type { Dayjs } from "dayjs"

export const Route = createFileRoute(
	"/_layout/restaurants/$restaurantId/calendar",
)({
	component: RouteComponent,
})

// Моковые данные: дни с активностью и количеством накрытых столов
const restaurantActivityData: Record<string, { active: boolean; coveredTables: number }> = {
	"2026-01-15": { active: true, coveredTables: 18 },
	"2026-01-16": { active: true, coveredTables: 22 },
	"2026-01-17": { active: true, coveredTables: 20 },
	"2026-01-18": { active: true, coveredTables: 25 },
	"2026-01-19": { active: true, coveredTables: 19 },
	"2026-01-20": { active: false, coveredTables: 0 },
	"2026-01-21": { active: true, coveredTables: 15 },
	"2026-01-22": { active: true, coveredTables: 23 },
	"2026-01-23": { active: true, coveredTables: 21 },
	"2026-01-24": { active: true, coveredTables: 17 },
	"2026-01-25": { active: true, coveredTables: 24 },
	"2026-01-26": { active: false, coveredTables: 0 },
	"2026-01-27": { active: true, coveredTables: 20 },
	"2026-01-28": { active: true, coveredTables: 19 },
	"2026-01-29": { active: true, coveredTables: 22 },
	"2026-01-30": { active: true, coveredTables: 18 },
	"2026-01-31": { active: true, coveredTables: 16 },
}

function RouteComponent() {
	const dateCellRender = (value: Dayjs) => {
		const dateKey = value.format("YYYY-MM-DD")
		const dayData = restaurantActivityData[dateKey]

		if (dayData && dayData.active) {
			return (
				<div
					style={{
						backgroundColor: "#52c41a",
						color: "#fff",
						padding: "4px 8px",
						borderRadius: "4px",
						fontSize: "12px",
						textAlign: "center",
						marginTop: "4px",
					}}
				>
					<Typography.Text style={{ color: "#fff", fontSize: "12px" }}>
						{dayData.coveredTables} столов
					</Typography.Text>
				</div>
			)
		}

		return null
	}

	return (
		<Card title={"Календарь активности ресторана"}>
			<Calendar
				cellRender={dateCellRender}
			/>
		</Card>
	)
}

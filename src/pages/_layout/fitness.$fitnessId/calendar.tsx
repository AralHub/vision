import { createFileRoute } from "@tanstack/react-router"
import { Calendar, Card, Typography } from "antd"
import type { Dayjs } from "dayjs"

export const Route = createFileRoute("/_layout/fitness/$fitnessId/calendar")({
	component: RouteComponent,
})

// Моковые данные: дни с посещениями и количеством посетителей
const fitnessVisitsData: Record<string, { hasVisits: boolean; visits: number }> = {
	"2026-01-15": { hasVisits: true, visits: 45 },
	"2026-01-16": { hasVisits: true, visits: 52 },
	"2026-01-17": { hasVisits: true, visits: 38 },
	"2026-01-18": { hasVisits: true, visits: 67 },
	"2026-01-19": { hasVisits: true, visits: 43 },
	"2026-01-20": { hasVisits: false, visits: 0 },
	"2026-01-21": { hasVisits: true, visits: 58 },
	"2026-01-22": { hasVisits: true, visits: 49 },
	"2026-01-23": { hasVisits: true, visits: 61 },
	"2026-01-24": { hasVisits: true, visits: 55 },
	"2026-01-25": { hasVisits: true, visits: 72 },
	"2026-01-26": { hasVisits: false, visits: 0 },
	"2026-01-27": { hasVisits: true, visits: 48 },
	"2026-01-28": { hasVisits: true, visits: 64 },
	"2026-01-29": { hasVisits: true, visits: 56 },
	"2026-01-30": { hasVisits: true, visits: 41 },
	"2026-01-31": { hasVisits: true, visits: 53 },
}

function RouteComponent() {
	const dateCellRender = (value: Dayjs) => {
		const dateKey = value.format("YYYY-MM-DD")
		const dayData = fitnessVisitsData[dateKey]

		if (dayData && dayData.hasVisits) {
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
						{dayData.visits} посещений
					</Typography.Text>
				</div>
			)
		}

		return null
	}

	return (
		<Card title={"Календарь посещений фитнес-зала"}>
			<Calendar
				cellRender={dateCellRender}
				// onPanelChange={onPanelChange}
			/>
		</Card>
	)
}

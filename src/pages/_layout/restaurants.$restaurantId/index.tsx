import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/restaurants/$restaurantId/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/restaurants/$restaurantId/"!</div>
}

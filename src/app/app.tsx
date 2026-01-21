import { RouterProvider } from "@tanstack/react-router"
import { type FC } from "react"
import { GlobalStyles } from "src/app/styles"
import { router } from "./router.tsx"

const App: FC = () => {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />
		</>
	)
}

export { App }
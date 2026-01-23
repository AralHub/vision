import { PlusOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import { useResponsive } from "antd-style"
import { forwardRef } from "react"
import { type FormKey, useFormDevtoolsStore } from "src/shared/store"

export interface AddButtonProps extends ButtonProps {
	className?: string
	hiddenChildren?: boolean
	formKey?: FormKey
	disableForm?: boolean
}

const AddButton = forwardRef<HTMLButtonElement, AddButtonProps>(
	({ className, hiddenChildren, formKey, disableForm, children, ...props }, ref) => {
		const { xs } = useResponsive()
		const { toggleOpen } = useFormDevtoolsStore()

		const onAddClick = () => {
			if (disableForm) return
			toggleOpen(formKey)
		}

		return (
			<Button
				type={"primary"}
				icon={<PlusOutlined />}
				ref={ref}
				className={className}
				children={hiddenChildren || xs ? null : children || "Добавить"}
				onClick={(e) => {
					e.stopPropagation()
					onAddClick()
				}}
				{...props}
			/>
		)
	}
)
AddButton.displayName = "AddButton"

export { AddButton }

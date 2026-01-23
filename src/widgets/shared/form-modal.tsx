import { Badge, Form, type FormProps, Modal, type ModalProps } from "antd"
import { useCallback, useEffect } from "react"
import { type FormKey, useFormDevtoolsStore } from "src/shared/store"
import { useShallow } from "zustand/react/shallow"

interface FormModalProps<T>
	extends ModalProps, Required<Pick<FormProps<T>, "form" | "onFinish" | "name">> {
	loading: boolean
	error: boolean
	success: boolean
	formKey?: FormKey
	onReset?: () => void
	formProps?: Omit<FormProps<T>, "form" | "onFinish" | "name">
}

const FormModal = <T extends FormParams>({
	form,
	formKey = "main",
	loading,
	error,
	success,
	onReset,
	formProps,
	name,
	onFinish,
	...props
}: FormModalProps<T>) => {
	const { open, params, key, reset } = useFormDevtoolsStore(useShallow((state) => state))

	const onCloseModal = useCallback(() => {
		form.resetFields()
		reset()
		onReset?.()
	}, [form, onReset, reset])

	useEffect(() => {
		if (!loading && !error && success) {
			onCloseModal()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading, error, success])
	return (
		<>
			<Modal
				centered={true}
				open={open && key === formKey}
				title={params ? "Изменить" : "Добавить"}
				okText={"Сохранить"}
				onOk={form.submit}
				okButtonProps={{
					loading,
					disabled: loading,
					htmlType: "submit",
				}}
				modalRender={(node) => (
					<Form
						form={form}
						onFinish={onFinish}
						name={name}
						layout={"vertical"}
						autoCapitalize={"off"}
						requiredMark={(labelNode) => (
							<Badge
								status={"processing"}
								styles={{
									indicator: {
										marginLeft: 4,
									},
								}}
								color={"red"}
								text={labelNode}
							/>
						)}
						{...formProps}
					>
						{node}
					</Form>
				)}
				onCancel={onCloseModal}
				forceRender={true}
				{...props}
			/>
		</>
	)
}

export { FormModal }

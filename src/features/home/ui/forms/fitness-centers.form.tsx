import { Form, type FormProps, Input } from "antd"
import { type FC } from "react"
import { FormModal } from "src/widgets/shared"

const FitnessCentersForm: FC = () => {
	const [form] = Form.useForm()

	const onFinish: FormProps["onFinish"] = () => {}

	return (
		<>
			<FormModal
				form={form}
				loading={false}
				success={false}
				error={false}
				name={"fitness-center-form"}
				onFinish={onFinish}
				formKey={"primary"}
			>
				<Form.Item
					name={"name"}
					label={"Название фитнес зала"}
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name={"address"}
					label={"Адрес"}
					rules={[{ required: true }]}
				>
					<Input.TextArea />
				</Form.Item>
			</FormModal>
		</>
	)
}

export { FitnessCentersForm }

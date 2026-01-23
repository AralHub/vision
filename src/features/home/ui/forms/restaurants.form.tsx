import { Form, type FormProps, Input, InputNumber } from "antd"
import { type FC } from "react"
import { FormModal } from "src/widgets/shared"

const RestaurantsForm: FC = () => {
	const [form] = Form.useForm()

	const onFinish: FormProps["onFinish"] = () => {}

	return (
		<>
			<FormModal
				form={form}
				loading={false}
				success={false}
				error={false}
				name={"restaurant-form"}
				onFinish={onFinish}
			>
				<Form.Item
					name={"name"}
					label={"Название ресторана"}
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
				<Form.Item
					name={"chairs_count"}
					label={"Количество стулей в одном столе"}
					rules={[{ required: true }]}
				>
					<InputNumber style={{ width: "100%" }} />
				</Form.Item>
			</FormModal>
		</>
	)
}

export { RestaurantsForm }

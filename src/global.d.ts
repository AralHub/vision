type ResponseError = Error & {
	status: 401 | 404 | 500
	response: {
		data: {
			message: string
			status: number
			detail: string | Record<string, unknown>
		}
	}
}

type ResponseData<T> = {
	data: T[]
	pagination: Pagination
	total: number
}

type ResponseMultipleData<T> = {
	data: T[]
}

type ResponseSingleData<T> = {
	data: T
}

type Pagination = {
	total: number
}

type Tokens = {
	access_token: string
	refresh_token?: string
}

type Role = "admin" | "user" | "super_admin" | null

type GetParams = {
	page?: number | string
	per_page?: number
	page_size?: number | string
	status?: string | number
	date?: string | string[]
	start_date?: string
	end_date?: string
	client_tin?: string
}

type ParamId = number | string | undefined | null

type FormParams = Record<string, unknown>

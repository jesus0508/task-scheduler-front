export interface JobSettingDTO {
	httpMethod: string,
	url: string,
	httpHeaders: Record<string, string>,
	httpBody: Record<string, string>,
}
interface QueryFunction {
	(query: string, unescaped_values: [ any ]): Promise<any[]>
}

interface KoaMiddlewareFunction {
	(ctx: any, next: any): Promise<any>
}

interface SampleController {
	hello: KoaMiddlewareFunction,
	label: string
}
interface QueryFunction {
	(query: string, unescaped_values: [ any ]): [ any ]
}

interface SampleController {
    query: QueryFunction,
    label: string
}
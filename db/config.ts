import { defineDb, defineTable, column } from 'astro:db'

const FormSubmissions = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		fullName: column.text(),
		email: column.text(),
	},
})

// https://astro.build/db/config
export default defineDb({
	tables: { FormSubmissions },
})

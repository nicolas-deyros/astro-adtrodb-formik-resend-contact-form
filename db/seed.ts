import { db, FormSubmissions } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	// In your API endpoint where you handle form submissions
	await db.insert(FormSubmissions).values({
		fullName: 'John Doe',
		email: 'johndoe@example.com',
	})
}

import type { APIRoute } from 'astro'
import { db, FormSubmissions } from 'astro:db'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ params, request }) => {
	const body = await request.json()

	try {
		const { to, name, from, html, subject, text } = body
		if (!to || !from || !html || !subject || !text) {
			return new Response(null, {
				status: 404,
				statusText: 'Did not provide the right data',
			})
		}

		const send = await resend.emails.send({
			from,
			to,
			subject,
			html,
			text,
		})

		const res = await db.insert(FormSubmissions).values({
			fullName: name,
			email: to,
		})

		if (send.data) {
			return new Response(
				JSON.stringify({
					message: send.data,
				}),
				{
					status: 200,
					statusText: 'OK',
				},
			)
		} else {
			throw new Error('Failed to send email and save to database.')
		}
	} catch (e) {
		console.error(e)
		return new Response(
			JSON.stringify({
				message: e,
				success: false,
			}),
			{
				status: 404,
				statusText: 'Internal Server Error',
			},
		)
	}
}

import { env } from '$env/dynamic/private';

export async function load(event) {
	const analytics_url = env.ANALYTICS;
	const user_ip = event.getClientAddress();
	const source = event.url.origin;
	const is_dev = env.CODING_ENV

	return { analytics_url, user_ip, source, is_dev };
}

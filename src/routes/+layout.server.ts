import { env } from '$env/dynamic/private';

export async function load(event) {

    let analytics_url = env.ANALYTICS
    let user_ip = event.getClientAddress()
    let source = event.url.origin

    return { analytics_url, user_ip, source }
}
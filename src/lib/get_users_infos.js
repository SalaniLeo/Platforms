
export async function fetch_analytics(website, userAgent, user_ip, analytics_url) {
    const browser = getBrowserInfo(userAgent)
    const os = getOSInfo(userAgent)

    try {
        const response = await fetch(analytics_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_ip, website, browser, os
            })
        });
    } catch (error) {

    }
}

function getBrowserInfo(userAgent) {
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        return "Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        return "Safari";
    } else if (userAgent.includes("Edg")) {
        return "Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        return "Opera";
    } else {
        return "Unknown Browser";
    }
}

function getOSInfo(userAgent) {

    if (userAgent.includes("Win")) {
        return "Windows";
    } else if (userAgent.includes("Mac")) {
        return "macOS";
    } else if (userAgent.includes("X11") || userAgent.includes("Linux")) {
        return "Linux";
    } else if (userAgent.includes("Android")) {
        return "Android";
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
        return "iOS";
    } else {
        return "Unknown OS";
    }
}
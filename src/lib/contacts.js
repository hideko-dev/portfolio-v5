export const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(mail, msg) {
    const mailValid = pattern.test(mail);
    const msgValid = msg.trim().length > 0;
    if(mailValid && msgValid) {
        await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mail, msg})
        });
        return true
    } else {
        return false
    }
}

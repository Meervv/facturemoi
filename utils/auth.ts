export async function signin(email: string, password: string) {
    const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
        // Stocker le token dans le localStorage ou un cookie
        localStorage.setItem('token', data.token);
    } else {
        console.error(data.error);
    }
}

export async function fetchProtectedData() {
    const token = localStorage.getItem('token');

    const response = await fetch('/api/protected-route', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (response.ok) {
        console.log(data);
    } else {
        console.error(data.error);
    }
}

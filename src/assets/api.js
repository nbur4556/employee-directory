const api = cb => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            cb(data);
        });
}

export default api;
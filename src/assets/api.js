const api = (resultAmount, seed, cb) => {
    let url = `https://randomuser.me/api/?results=${resultAmount}`

    // If seed is not null, use seed
    if (seed !== null) { url += `&seed=${seed}`; }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cb(data);
        });
}

export default api;
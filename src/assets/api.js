const api = (resultAmount, cb) => {
    fetch(`https://randomuser.me/api/?results=${resultAmount}`)
        .then(response => response.json())
        .then(data => {
            cb(data);
        });
}

export default api;
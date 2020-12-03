const api = () => {
    fetch('https://randomuser.me/api/')
        .then(response => {
            console.log(response);
        });
}

export default api;
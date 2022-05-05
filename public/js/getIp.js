fetch('/ip')
    .then((response) => {
        let $ip = document.querySelector("#ip__inner")
        if (response.ok) {
            response.json()
                .then(({
                    ip
                }) => $ip.textContent = ip)
        } else $ip.textContent = "Ошибка получения IP"
    })
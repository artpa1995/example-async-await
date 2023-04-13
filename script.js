const param = {
    "url": 'https://api.openweathermap.org/data/2.5/',
    "appid": "b348f775b55e41396a34ee57fe386727",
    'cityid': 2643743
}
async function getWeather() {
    let a = await fetch(`${param.url}weather?id=${param['cityid']}&units=metric&APPID=${param.appid}`);
    console.log(a);
    const result = await a.json();
    console.log(result);
}

// getWeather();
async function get_all() {
    const reqHeaders = new Headers();
    reqHeaders.append('apikey', '03508a32621d549c')
    let url_all = 'https://api.itgid.info/api/26/employee/read';
    let url_by_id = 'https://api.itgid.info/api/26/employee/read?id=3'
    const res = await fetch(url_all, {
        method: "GET",
        headers: reqHeaders
    });

    // if (!res.ok) {
    //     const message = "error: " + res.status;
    //     throw new Error(message)
    // }

    const result = await res.json();
    console.log(result);
    // console.log(res);
}

// get_all();

async function post() {
    const reqHeaders = new Headers();
    reqHeaders.append('apikey', '03508a32621d549c');

    let url = 'https://api.itgid.info/api/26/random/generate-password';
    const formData = new FormData();
    formData.append('length', 16);

    const res = await fetch(url, {
        method: "POST",
        headers: reqHeaders,
        body: formData
    });

    // if (!res.ok) {
    //     const message = "error: " + res.status;
    //     throw new Error(message)
    // }

    const result = await res.json();
    console.log(result);
}

post()
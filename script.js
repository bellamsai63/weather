// accessing all the html values
let Apikey = "4d34dc5a3550b96a9a17f2ae1add2a74"
    // url: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const inputval = document.getElementById("inputval")
const BtnEle = document.getElementById("btn")
const TempEle = document.getElementById("temp")
const DescriptionEle = document.getElementById("description")
const LocationEle = document.getElementById("location")
const IconEle = document.getElementById("icon")

BtnEle.addEventListener("click", () => {
    if (inputval.value == "") {
        alert(`pls enter the correct location`)
    } else {
        let loc = inputval.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${Apikey}`
            // const data = fetch(url)
            // console.log(data)
            // data.then((res) => {
            //     console.log(res.json());
            // })

        fetch(url)
            .then((res) => res.json())
            .then((da) => {
                console.log(da)
                    // object distructuring
                const { name } = da
                const { description } = da.weather[0]
                const { icon } = da.weather[0]
                const { feels_like } = da.main

                // display data in html page based on the user given location

                LocationEle.innerText = name
                TempEle.innerText = Math.round(feels_like - 273) //converting kelvin to celsius
                DescriptionEle.innerText = description
                IconEle.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            }).catch(() => {
                alert(`Enter a correct location`)
            })
    }
    inputval.value = ""
})

inputval.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        console.log(e.keyCode);
        if (inputval.value == "") {
            alert(`pls enter the correct location`)
        } else {
            let loc = inputval.value
            url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${Apikey}`
                // const data = fetch(url)
                // console.log(data)
                // data.then((res) => {
                //     console.log(res.json());
                // })

            fetch(url)
                .then((res) => res.json())
                .then((da) => {
                    console.log(da)
                        // object distructuring
                    const { name } = da
                    const { description } = da.weather[0]
                    const { icon } = da.weather[0]
                    const { feels_like } = da.main

                    // display data in html page based on the user given location

                    LocationEle.innerText = name
                    TempEle.innerText = Math.round(feels_like - 273) //converting kelvin to celsius
                    DescriptionEle.innerText = description
                    IconEle.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
                }).catch(() => {
                    alert(`Enter a correct location`)
                })
        }
        inputval.value = ""
    }
})
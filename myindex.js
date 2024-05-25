const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="Loading...">`;

    let key = "YOUR-API-KEY";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        let result = await res.json();

        let str = "";
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }

        resultCont.innerHTML = str;
    } catch (error) {
        console.error("Error:", error.message);
        resultCont.innerHTML = "An error occurred while fetching data.";
    }
});

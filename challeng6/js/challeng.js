const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(response => response.json())
    .then(data => {
        var result = "";
        data.forEach(element => {
            result += `
            <ul>
                <li>${element.name}</li>
            </ul>
        `;
        });
        $('#getdataId').append(result);
    });

function searchData() {
    var ListData = document.querySelector('input');
    var filter = ListData.value.toUpperCase();
    //console.log(filter);
    var textValue;
    const DataEliment = document.getElementsByTagName("li");

    for (let i = 0; i < DataEliment.length; i++) {
        textValue = DataEliment[i].textContent || DataEliment[i].innerText;
        // console.warn(DataEliment[i].textContent.toUpperCase);
        //console.log(textValue.indexOf(filter));
        let isFind = textValue.toUpperCase().indexOf(filter) > -1;
        if (isFind) {
            DataEliment[i].style.display = "block";
        } else {
            DataEliment[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', searchData);

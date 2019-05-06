function request(datas) {
    fetch(datas.url || "")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(result => {
            datas.complete && datas.complete(result);
        })
}

request({
    url: "json/jason.json",
    complete: function (r) {
        r.gens.forEach(element => {
            $("#customer").append($(`<option value="${element.id}">${element.firstName + " " + element.lastName}</option>`));

        });
    }
});

request({
    url: "json/jason.json",
    complete: function (r) {
        let stocSelect = $('select');
        $('select').on("change", function () {
            $("#outPerso").text('');
            $("#outPerso").val();
            $("#outPerso").append($(`
            <h3 class="vidage">Age : </h3><p>${r.gens[stocSelect.val()].age}</p>
            <h3 class="vidage">Work : </h3><p>${r.gens[stocSelect.val()].work}</p>
            <h3 class="vidage">Mail : </h3><p>${r.gens[stocSelect.val()].mail}</p>
            <h3 class="vidage">Phone : </h3><p>${r.gens[stocSelect.val()].phone}</p>
        `));
        })
    }
})


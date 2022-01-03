$("input[type=range]")
    .on("input change", function (e) {
        let min = e.target.min,
            max = e.target.max,
            val = e.target.value;

        $(e.target).css({
            backgroundSize: ((val - min) * 100) / (max - min) + "% 100%",
        });
    })
    .trigger("input");

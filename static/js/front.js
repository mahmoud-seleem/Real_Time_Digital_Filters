// $(function(){

//     'use strict'

//     $('.login-page h1 span').click(function (){
//         $(this).addClass('selected').siblings().removeClass('selected');
//         $('.login-page form').hide();
//         $('.' + $(this).data('class')).fadeIn(100);
//     });

//     $("select").selectBoxIt({
//         autoWidth: false
//     });

//     $('[placeholder]').focus(function(){
//         $(this).attr('data-text', $(this).attr('placeholder'));
//         $(this).attr('placeholder', '');
//     }).blur(function(){

//         $(this).attr('placeholder', $(this).attr('data-text'));

//     });

//     $('input').each(function () {
//         if ($(this).attr('required') === "required") {
//             $(this).after("<span class='asterisk'>*</span>");
//         }
//     });

//     $('.confirm').click(function () {
//         return confirm('Are you sure?');
//     });

//     $('.live').keyup(function(){
//         $($(this).data('class')).text($(this).val());
//     });

//     $('.live-avatar').blur(function(){
//         $($(this).data('class')).attr('src',URL.createObjectURL(event.target.files[0]));
//     });

//     $('.caption').hover(function(){
//         $(this).toggleClass('caption-hovered',{duration:200});
//     });

//     var userError  = true;
//     var emailError = true;
//     var msgError   = true;

//     $('.username').blur(function(){
//         if($(this).val().length <= 3){
//             $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
//             userError = true;
//         }else{
//             $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
//             userError = false;
//         }

//     });

//     $('.email').blur(function(){
//         if($(this).val() === ''){
//             $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
//             emailError = true;
//         }else{
//             $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
//             emailError = false;
//         }

//     });

//     $('.message').blur(function(){
//         if($(this).val().length <= 10){
//             $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
//             msgError = true;
//         }else{
//             $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
//             msgError = false;
//         }

//     });

//     $('.contact-form').submit(function(e){
//         if(userError === true || emailError === true || msgError === true){
//             e.preventDefault();
//             $('.username, .email, .message').blur();
//         }
//     });
// });
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

let divs = {};
let a_pass_filters_list = {};
let num = [];
let den = [];
let delay_count = Math.max(num.length, den.length) - 1;
let n = delay_count;
let output = [];
let input = new Array();
let filterd_signal = [];
let cntZero = 0;
let cntPole = 0;
let cnt = 0;
let con = false;
let slider_value = 1000;
let myfunc;
let counter = 0;
var digital_filter = document.getElementById("digital_filter");
function add(x) {
    cnt++;
    let mousePosition;
    let offset = [0, 0];
    let div;
    let divCon;
    let isDown = false;
    
    div = document.createElement("div");
    divCon = document.createElement("div");

    digital_filter.appendChild(div);
    digital_filter.appendChild(divCon);

    if (x == 0) {
        cntZero++;
        div.classList.add("zero");
        div.setAttribute("id", "zero" + cntZero);
        divCon.classList.add("zero");
        if (!con) {
            divCon.classList.add("con");
        }
        divCon.setAttribute("id", "zeroCon" + cntZero);
    } else {
        div.innerHTML = "X";
        divCon.innerHTML = "X";
        cntPole++;
        div.classList.add("pole");
        div.setAttribute("id", "pole" + cntPole);
        divCon.classList.add("pole");
        if (!con) {
            divCon.classList.add("con");
        }
        divCon.setAttribute("id", "poleCon" + cntPole);
    }
    let divId = div.id;
    let conDivId = divCon.id;
    var rect = div.getBoundingClientRect();
    divs[divId] = {
        place: [rect.x, rect.y],
        type: x == 0 ? "zero" : "pole",
        id: divId,
    };
    divs[conDivId] = {
        place: [rect.x, rect.y],
        type: x == 0 ? "zero" : "pole",
        id: conDivId,
    };

    div.addEventListener(
        "mousedown",
        function(e) {
            isDown = true;

            offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
        },
        true
    );

    divCon.addEventListener(
        "mousedown",
        function(e) {
            isDown = true;
            offset = [divCon.offsetLeft - e.clientX, divCon.offsetTop - e.clientY];
        },
        true
    );

    div.addEventListener(
        "dblclick",
        (e) => {
            deleteFilter(divId, (check = 1));
            digital_filter.removeChild(div);
            digital_filter.removeChild(divCon);
        },
        true
    );

    divCon.addEventListener(
        "dblclick",
        (e) => {
            deleteFilter(conDivId, (check = 1));
            digital_filter.removeChild(div);
            digital_filter.removeChild(divCon);
        },
        true
    );

    div.addEventListener(
        "mouseup",
        function() {
            isDown = false;
        },
        true
    );
    divCon.addEventListener(
        "mouseup",
        function() {
            isDown = false;
        },
        true
    );

    div.addEventListener(
        "mousemove",
        function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY,
                };

                div.style.left = mousePosition.x + offset[0] + "px";
                divCon.style.left = mousePosition.x + offset[0] + "px";
                if (!con) {
                    div.style.top = (x == 0 ? "443" : "435") + "px";
                    divCon.style.top =
                        mousePosition.y +
                        offset[1] -
                        2 * (mousePosition.y + offset[1] - (x == 0 ? "443" : "435")) +
                        "px";
                } else {
                    div.style.top = mousePosition.y + offset[1] + "px";
                    divCon.style.top =
                        mousePosition.y +
                        offset[1] -
                        2 * (mousePosition.y + offset[1] - (x == 0 ? "443" : "435")) +
                        "px";
                }
                var divRect = div.getBoundingClientRect();
                divs[divId].place = [divRect.x, divRect.y];
                var conRect = divCon.getBoundingClientRect();
                divs[conDivId].place = [conRect.x, conRect.y];
                postData("http://127.0.0.1:5000/func", [
                    divs,
                    con,
                    cntPole,
                    cntZero,
                    a_pass_filters_list,
                ]).then((data) => {
                    var dataRec = [{
                        x: data["w"],
                        y: data["magnitude"],
                        mode: "lines",
                        type: "scatter",
                    }, ];

                    // Define Layout
                    var layout = {
                        xaxis: {
                            range: [Math.min(data["w"]), Math.max(data["w"])],
                            title: "W",
                        },
                        yaxis: {
                            range: [Math.min(data["magnitude"]), Math.max(data["magnitude"])],
                            title: "Mag",
                        },
                        title: "MAGNITUDE",
                        autosize: false,
                        width: 800,
                        height: 350,
                    };

                    // Display using Plotly
                    Plotly.newPlot("magnitude", dataRec, layout); // JSON data parsed by `data.json()` call

                    var dataRec2 = [{
                        x: data["w"],
                        y: data["phase"],
                        mode: "lines",
                        type: "scatter",
                    }, ];

                    // Define Layout
                    var layout2 = {
                        xaxis: {
                            range: [Math.min(data["w"]), Math.max(data["w"])],
                            title: "W",
                        },
                        yaxis: {
                            range: [Math.min(data["phase"]), Math.max(data["phase"])],
                            title: "Phase",
                        },
                        title: "PHASE",
                        autosize: false,
                        width: 800,
                        height: 350,
                    };

                    // Display using Plotly
                    Plotly.newPlot("phase", dataRec2, layout2);
                    Plotly.newPlot("pass_phase", dataRec2, layout2); // JSON data parsed by `data.json()` call
                });
            }
        },
        true
    );

    divCon.addEventListener(
        "mousemove",
        function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY,
                };

                divCon.style.left = mousePosition.x + offset[0] + "px";
                div.style.left = mousePosition.x + offset[0] + "px";
                if (!con) {
                    divCon.style.top = (x == 0 ? "443" : "435") + "px";
                    div.style.top =
                        mousePosition.y +
                        offset[1] -
                        2 * (mousePosition.y + offset[1] - (x == 0 ? "443" : "435")) +
                        "px";
                } else {
                    divCon.style.top = mousePosition.y + offset[1] + "px";
                    div.style.top =
                        mousePosition.y +
                        offset[1] -
                        2 * (mousePosition.y + offset[1] - (x == 0 ? "443" : "435")) +
                        "px";
                }
                var divRect = div.getBoundingClientRect();
                divs[divId].place = [divRect.x, divRect.y];
                var conRect = divCon.getBoundingClientRect();
                divs[conDivId].place = [conRect.x, conRect.y];

                postData("http://127.0.0.1:5000/func", [
                    divs,
                    con,
                    cntPole,
                    cntZero,
                    a_pass_filters_list,
                ]).then((data) => {
                    var dataRec = [{
                        x: data["w"],
                        y: data["magnitude"],
                        mode: "lines",
                        type: "scatter",
                    }, ];

                    // Define Layout
                    var layout = {
                        xaxis: {
                            range: [Math.min(data["w"]), Math.max(data["w"])],
                            title: "W",
                        },
                        yaxis: {
                            range: [Math.min(data["magnitude"]), Math.max(data["magnitude"])],
                            title: "Mag",
                        },
                        title: "MAGNITUDE",
                        autosize: false,
                        width: 800,
                        height: 350,
                    };

                    // Display using Plotly
                    Plotly.newPlot("magnitude", dataRec, layout); // JSON data parsed by `data.json()` call

                    var dataRec2 = [{
                        x: data["w"],
                        y: data["phase"],
                        mode: "lines",
                        type: "scatter",
                    }, ];

                    // Define Layout
                    var layout2 = {
                        xaxis: {
                            range: [Math.min(data["w"]), Math.max(data["w"])],
                            title: "W",
                        },
                        yaxis: {
                            range: [Math.min(data["phase"]), Math.max(data["phase"])],
                            title: "Phase",
                        },
                        title: "PHASE",
                        autosize: false,
                        width: 800,
                        height: 350,
                    };

                    // Display using Plotly
                    Plotly.newPlot("phase", dataRec2, layout2);
                    Plotly.newPlot("pass_phase", dataRec2, layout2); // JSON data parsed by `data.json()` call
                });
                //   }
            }
        },
        true
    );
}

function addCon() {
    if (con) {
        con = false;
        $("div[id*=zero]").each(function() {
            $(this).css("top", "443px");
        });
        $("div[id*=pole]").each(function() {
            $(this).css("top", "435px");
        });
        $("div[id*=Con]").each(function() {
            $(this).addClass("con");
        });
    } else {
        con = true;
        $("div[id*=Con]").each(function() {
            $(this).removeClass("con");
        });
    }
}

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// let all_pass_filters={"filter1":[0.5,0.5],"filter2":[0.5,-0.5],"filter3":[0.1,0.0],"filter4":[-0.5,0.0],"filter5":[-0.5,0.5]}
function Show(filter, check) {
    if (check == 1) {
        let real = parseFloat(document.getElementById("a_real").value);
        let imag = parseFloat(document.getElementById("a_imag").value);
        filter[0] = real;
        filter[1] = imag;
    }
    postData("http://127.0.0.1:5000/filter", filter).then((data) => {
        var dataRec2 = [{
            x: data["w"],
            y: data["phase"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout2 = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["phase"]), Math.max(data["phase"])],
                title: "Phase",
            },
            title: "PHASE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly
        Plotly.newPlot("a_phase", dataRec2, layout2);
    });
}

let count_used_filters = 1;
let ol = document.querySelector("#used_filters");

function Send(filter, check) {
    if (check == 1) {
        let real = parseFloat(document.getElementById("a_real").value);
        let imag = parseFloat(document.getElementById("a_imag").value);
        filter[0] = real;
        filter[1] = imag;
    }
    a_pass_filters_list[count_used_filters + ""] = filter;
    ol.innerHTML += `<li id="${count_used_filters}"><a href="#" ondblclick="deleteFilter(${count_used_filters},0)">Filter With a = ${filter[0]} + ${filter[1]}j</a></li>`;
    postData("http://127.0.0.1:5000/correctPhase", [
        divs,
        con,
        cntPole,
        cntZero,
        a_pass_filters_list,
    ]).then((data) => {
        var dataRec = [{
            x: data["w"],
            y: data["magnitude"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["magnitude"]), Math.max(data["magnitude"])],
                title: "Mag",
            },
            title: "MAGNITUDE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly
        Plotly.newPlot("magnitude", dataRec, layout);

        var dataRec2 = [{
            x: data["w"],
            y: data["phase"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout2 = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["phase"]), Math.max(data["phase"])],
                title: "Phase",
            },
            title: "PHASE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly
        Plotly.newPlot("pass_phase", dataRec2, layout2);
        Plotly.newPlot("phase", dataRec2, layout2);
    });
    count_used_filters++;
}
let count_zeros = cntZero;
let count_poles = cntPole;

function deleteFilter(filter, check) {
    console.log("before if");
    if (check == 1) {
        delete divs[`${filter}`];
        console.log(filter);
        if (filter.startsWith("z") && filter.includes("Con")) {
            delete divs[`zero${filter[filter.length - 1]}`];
        } else if (filter.startsWith("z") && !filter.includes("Con")) {
            delete divs[`zeroCon${filter[filter.length - 1]}`];
        } else if (filter.startsWith("p") && filter.includes("Con")) {
            delete divs[`pole${filter[filter.length - 1]}`];
        } else if (filter.startsWith("p") && !filter.includes("Con")) {
            delete divs[`poleCon${filter[filter.length - 1]}`];
        }
    } else {
        let li = document.getElementById(`${filter}`);
        ol.removeChild(li);
        delete a_pass_filters_list[`${filter}`];
    }
    console.log(divs);
    console.log(a_pass_filters_list);

    postData("http://127.0.0.1:5000/correctPhase", [
        divs,
        con,
        count_poles,
        count_zeros,
        a_pass_filters_list,
    ]).then((data) => {
        var dataRec = [{
            x: data["w"],
            y: data["magnitude"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["magnitude"]), Math.max(data["magnitude"])],
                title: "Mag",
            },
            title: "MAGNITUDE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly
        Plotly.newPlot("magnitude", dataRec, layout);

        var dataRec2 = [{
            x: data["w"],
            y: data["phase"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout2 = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["phase"]), Math.max(data["phase"])],
                title: "Phase",
            },
            title: "PHASE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly

        Plotly.newPlot("pass_phase", dataRec2, layout2);
        Plotly.newPlot("phase", dataRec2, layout2);
    });
}

function Apply() {
    Filter();
    // postData("http://127.0.0.1:5000/applyFilter", []).then((data) => {
    //     num = data["num"];
    //     den = data["den"];
    //     console.log(num);
    //     console.log(den);
}
// console.log(num);
// console.log(den);
let file = document.getElementById("choose_file");
file.addEventListener("change", () => {
    const fr = new FileReader();
    fr.readAsText(file.files[0]);
    fr.onloadend = (e) => {
        let r = fr.result.split("\n");
        r.forEach((e) => {
            input.push(parseFloat(e));
        });
        postData("http://127.0.0.1:5000/chooseFile", input).then((data) => {
            filterd_signal = data["data"]
        });
    };
    // console.log(input)
    // input.forEach((i) => {
    //     console.log(i)
    //     console.log(typeof i)
    //     data.push(i)
    // });
    // console.log(input)

    // console.log(input);
    // console.log()
    // let x = {
    //     "data": input.slice(0, 10)
    // }
    // postData("http://127.0.0.1:5000/chooseFile", x).then((data) => {
    //     console.log(data);
    // });
});

function Submit() {

    Plotly.newPlot('filtered', [{
        y: [filterd_signal[counter]],
        type: 'line'
    }]);
    Plotly.newPlot('not_filtered', [{
        y: [input[counter]],
        type: 'line'
    }]);
    myfunc = setInterval(draw,
        1000)
}

function draw() {
    Plotly.extendTraces('filtered', {
        y: [
            [filterd_signal[counter]]
        ]
    }, [0]);
    Plotly.extendTraces('not_filtered', {
        y: [
            [input[counter]]

        ]
    }, [0]);

    counter++
    // console.log(filterd_signal[counter]);
    // counter++

    Plotly.relayout('filtered', {

        xaxis: {
            range: [counter, counter - 100]
        }
    });
    Plotly.relayout('not_filtered', {

        xaxis: {
            range: [counter, counter - 100]
        }
    });
    if (counter == 2000) {
        clearInterval(myfunc)
    }
}



function rangeSlide(value) {
    clearInterval(myfunc)
    document.getElementById('rangeValue').innerHTML = value + " point/sec";
    slider_value = 1000 / parseInt(value)
    myfunc = setInterval(draw, slider_value)

}

function clrAll(key){
    if(key==0){
        var elms = document.querySelectorAll('*[id^="zero"]');

        for(var i = 0; i < elms.length; i++) 
            digital_filter.removeChild(elms[i]);
        
        for(let div in divs){
            if(div.startsWith("zero")){
                delete divs[div];
            }
        }
    }else if(key == 1){
        var elms = document.querySelectorAll('*[id^="pole"]');

        for(var i = 0; i < elms.length; i++) 
            digital_filter.removeChild(elms[i]);
        
        for(let div in divs){
            if(div.startsWith("pole")){
                delete divs[div];
            }
        }
    }else{
        var clrZeros = document.querySelectorAll('*[id^="zero"]');

        for(var i = 0; i < clrZeros.length; i++) 
            digital_filter.removeChild(clrZeros[i]);

        var clrPoles = document.querySelectorAll('*[id^="pole"]');

        for(var i = 0; i < clrPoles.length; i++) 
            digital_filter.removeChild(clrPoles[i]);

        for(let div in divs){
            delete divs[div];
        }
    }
    postData("http://127.0.0.1:5000/correctPhase", [
        divs,
        con,
        count_poles,
        count_zeros,
        a_pass_filters_list,
    ]).then((data) => {
        var dataRec = [{
            x: data["w"],
            y: data["magnitude"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["magnitude"]), Math.max(data["magnitude"])],
                title: "Mag",
            },
            title: "MAGNITUDE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly
        Plotly.newPlot("magnitude", dataRec, layout);

        var dataRec2 = [{
            x: data["w"],
            y: data["phase"],
            mode: "lines",
            type: "scatter",
        }, ];

        // Define Layout
        var layout2 = {
            xaxis: {
                range: [Math.min(data["w"]), Math.max(data["w"])],
                title: "W",
            },
            yaxis: {
                range: [Math.min(data["phase"]), Math.max(data["phase"])],
                title: "Phase",
            },
            title: "PHASE",
            autosize: false,
            width: 800,
            height: 350,
        };

        // Display using Plotly

        Plotly.newPlot("pass_phase", dataRec2, layout2);
        Plotly.newPlot("phase", dataRec2, layout2);
    });

}
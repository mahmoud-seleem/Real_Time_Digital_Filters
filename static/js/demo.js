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
// function add(x){
//     let mousePosition;
//     let offset = [0,0];
//     let div;
//     let divCon;
//     let isDown = false;
//     // var x =0;

//     div = document.createElement("div");
//     divCon = document.createElement("div");
//     // div = document.getElementById('button1');
//     // div.style.position = "absolute";

//     // div.style.width = "20px";
//     // div.style.height = "20px";
//     // div.style.background = "black";
//     // div.style.borderRadius = "50%";
//     // div.style.color = "blue";
//     document.body.appendChild(div);
//     document.body.appendChild(divCon);

//     if(x==0){
//         div.classList.add("zero");
//         divCon.classList.add("zero");

//     }else{
//         div.innerHTML = 'X';
//         divCon.innerHTML = 'X';

//         div.classList.add("pole");
//         divCon.classList.add("pole");

//     }
//     div.addEventListener('mousedown', function(e) {
//         isDown = true;
//         offset = [
//             div.offsetLeft - e.clientX,
//             // divCon.offsetLeft - e.clientX,
//             div.offsetTop - e.clientY,
//             // divCon.offsetTop - e.clientY

//         ];
//     }, true);

//     divCon.addEventListener('mousedown', function(e) {
//         isDown = true;
//         offset = [
//             divCon.offsetLeft - e.clientX,
//             // divCon.offsetLeft - e.clientX,
//             divCon.offsetTop - e.clientY,
//             // divCon.offsetTop - e.clientY

//         ];
//     }, true);

//     document.addEventListener('mouseup', function() {
//         isDown = false;
//     }, true);

//     document.addEventListener('mousemove', function(event) {
//         event.preventDefault();
//         if (isDown) {
//             mousePosition = {

//                 x : event.clientX,
//                 y : event.clientY

//             };
//             div.style.left = (mousePosition.x + offset[0]) + 'px';
//             divCon.style.left = (mousePosition.x + offset[0]) + 'px';

//             div.style.top  = (mousePosition.y + offset[1]) + 'px';
//             divCon.style.top  =(mousePosition.y + offset[1]) -  2*((mousePosition.y + offset[1]) - ((x==0)?'257':'250')) + 'px';
//             var rect = div.getBoundingClientRect();
//             document.getElementById('gfg').innerHTML = 
//                 'X: ' + rect.x + ', ' + 'Y: ' + rect.y
//         }
//     }, true);

// }
// var x =0;

// div = document.createElement("div");
// divCon = document.createElement("div");
// document.body.appendChild(div);
// document.body.appendChild(divCon);

// if (x == 0) {
//     // cntZero++;
//     // div.classList.add("zero");
//     // div.setAttribute('id', 'zero' + cntZero);
//     divCon.classList.add("zero");
//     divCon.classList.add("con");
//     divCon.setAttribute('id', 'zeroCon' + cntZero);


//  else {
// pole************************************
// div.innerHTML = 'X';
// divCon.innerHTML = 'X';
// cntPole++;
// div.classList.add("pole");
// div.setAttribute('id', 'pole' + cntPole);
// divCon.classList.add("pole");
// divCon.classList.add("con");
// divCon.setAttribute('id', 'poleCon' + cntPole);

// }
// let divId = div.id;
// let conDivId = divCon.id;
// var rect = div.getBoundingClientRect();
// divs[divId] = { 'place': [rect.x, rect.y], 'type': ((x == 0) ? 'zero' : 'pole'), 'id': divId };
// divs[conDivId] = { 'place': [rect.x, rect.y], 'type': ((x == 0) ? 'zero' : 'pole'), 'id': conDivId };

// div.addEventListener('mousedown', function(e) {
//     isDown = true;
//     // div = this;

//     offset = [
//         div.offsetLeft - e.clientX,
//         // divCon.offsetLeft - e.clientX,
//         div.offsetTop - e.clientY,
//         // divCon.offsetTop - e.clientY

//     ];
// }, true);

// divCon.addEventListener('mousedown', function(e) {
//     isDown = true;
//     offset = [
//         divCon.offsetLeft - e.clientX,
//         // divCon.offsetLeft - e.clientX,
//         divCon.offsetTop - e.clientY,
//         // divCon.offsetTop - e.clientY

//     ];
// }, true);

//     this.div.addEventListener('mousemove', function(event) {
//         event.preventDefault();
//         if (isDown) {
//             // console.log(div)
//             mousePosition = {

//                 x: event.clientX,
//                 y: event.clientY

//             };

//             div.style.left = (mousePosition.x + offset[0]) + 'px';
//             divCon.style.left = (mousePosition.x + offset[0]) + 'px';
//             if (!con) {
//                 div.style.top = ((x == 0) ? '443' : '435') + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             } else {
//                 div.style.top = (mousePosition.y + offset[1]) + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             }
//             var divRect = div.getBoundingClientRect();
//             divs[divId].place = [divRect.x, divRect.y];
//             var conRect = divCon.getBoundingClientRect();
//             divs[conDivId].place = [conRect.x, conRect.y];
//             // var poles = document.getElementsByClassName('pole');
//             // var zeros = document.getElementsByClassName('zero');
//             // for(let index in poles){
//             //     divs[cnt] = [rect.x,rect.y];
//             // }
//             console.log(divs);
//         }
//     }, true);
//     // divCon.addEventListener('mouseup', function() {
//     //     isDown = false;
//     // }, true);

//     div.addEventListener('mousemove', function(event) {
//         event.preventDefault();
//         if (isDown) {
//             // console.log(div)
//             mousePosition = {

//                 x: event.clientX,
//                 y: event.clientY

//             };

//             div.style.left = (mousePosition.x + offset[0]) + 'px';
//             divCon.style.left = (mousePosition.x + offset[0]) + 'px';
//             if (!con) {
//                 div.style.top = ((x == 0) ? '443' : '435') + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             } else {
//                 div.style.top = (mousePosition.y + offset[1]) + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             }
//             var divRect = div.getBoundingClientRect();
//             divs[divId].place = [divRect.x, divRect.y];
//             var conRect = divCon.getBoundingClientRect();
//             divs[conDivId].place = [conRect.x, conRect.y];
//             // var poles = document.getElementsByClassName('pole');
//             // var zeros = document.getElementsByClassName('zero');
//             // for(let index in poles){
//             //     divs[cnt] = [rect.x,rect.y];
//             // }
//             console.log(divs);
//         }
//     }, true);

//     divCon.addEventListener('mousemove', function(event) {
//         event.preventDefault();
//         if (isDown) {
//             // console.log(div)
//             mousePosition = {

//                 x: event.clientX,
//                 y: event.clientY

//             };

//             div.style.left = (mousePosition.x + offset[0]) + 'px';
//             divCon.style.left = (mousePosition.x + offset[0]) + 'px';
//             if (!con) {
//                 div.style.top = ((x == 0) ? '443' : '435') + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             } else {
//                 div.style.top = (mousePosition.y + offset[1]) + 'px';
//                 divCon.style.top = (mousePosition.y + offset[1]) - 2 * ((mousePosition.y + offset[1]) - ((x == 0) ? '443' : '435')) + 'px';
//             }
//             var divRect = div.getBoundingClientRect();
//             divs[divId].place = [divRect.x, divRect.y];
//             var conRect = divCon.getBoundingClientRect();
//             divs[conDivId].place = [conRect.x, conRect.y];
//             // var poles = document.getElementsByClassName('pole');
//             // var zeros = document.getElementsByClassName('zero');
//             // for(let index in poles){
//             //     divs[cnt] = [rect.x,rect.y];
//             // }
//             console.log(divs);

//         }
//     }, true);




// function send(){
//     var xml = new XMLHttpRequest();
//     xml.open("POST","func",true); 
//     xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");

//     // xml.onload = function(){
//     // var dataReply = JSON.parse(this.responseText);
//     // };//endfunction

//     dataSend= JSON.stringify(divs);
//     console.log (dataSend);
//     xml.send(dataSend);
//     // console.log(xml.DONE)
//     $.post('/func' , function(dataReply){
//         console.log(dataReply);
//     });
//     // console.log(data);
//     // $.get('/func' , function(dataReply){
//     //     console.log(dataReply);
//     // });
// }
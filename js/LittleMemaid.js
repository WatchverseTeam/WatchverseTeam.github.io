function show_pop(){
    document.getElementById('pop').classList.add('open');
}
function hide_pop(){
    document.getElementById('pop').classList.remove('open');
    var video = document.getElementsByTagName('video')[0];
    if (!video.paused) {
        video.pause();
    }
}
function show_pop2(){
    document.getElementById('pop2').classList.add('open2');
}
function hide_pop2(){
    document.getElementById('pop2').classList.remove('open2');
    var iframe = document.getElementsByTagName('iframe')[0]
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}




let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search');
search_input.addEventListener('keyup', () => {
    let filter = search_input.value.toUpperCase();
    let a = search.getElementsByTagName('a');

    for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('cont')[0];
        // console.log(a.textContent)
        let TextValue = b.textContent || b.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[index].style.display = "flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;
        } else {
            a[index].style.display = "none";
        }
        if (search_input.value == 0) {
            search.style.visibility = "hidden";
            search.style.opacity = 0;
        }
    }
}) 
var hardPath = "C:\\Users\\koneko\\Videos"
var port = "4000"
var itemsDiv = document.querySelector('.items')
var currentdir = `${hardPath}`


const get = (file) => {
    if (file.endsWith(".mp4") || file.endsWith(".wmv") || file.endsWith(".m4p") || file.endsWith(".flv") || file.endsWith(".avi") || file.endsWith(".mpv")) {
        // found a video, display video controls
        let player = document.getElementById('thevideoplayer')
        // if (theplayerbefore) {
        //     theplayerbefore.remove()
        // }
        let div = document.querySelector('.videodiv')
        if (!player) {
            player = document.createElement('video')
            div.appendChild(player)
            player.width = "1250"
            player.controls = true
            player.autoplay = true
            player.id = "thevideoplayer"
        }
        let currently = document.getElementById('currently')
        currently.textContent = file
        player.src = `http://localhost:${port}/api/file?q=${currentdir}\\${file}`
        // window.scrollTo(0, 0)
    } else {
        // file not a video and is most likely a folder, so we get its contents and leave a breadcrumb
        killItems()
        let breadcrumb = document.createElement('li')
        let btn = document.createElement('button')
        btn.setAttribute('onclick', 'location.reload()')
        breadcrumb.innerHTML = `<a href="#">${file}</a>`
        breadcrumb.addEventListener('click', (e) => e.preventDefault())
        btn.textContent = "Back"
        document.querySelector('.breadcrumb').appendChild(breadcrumb)
        fetchFunc(file).then(() => {
            document.querySelector('.items').appendChild(btn);
        })

    }
}


// function killItems() {
//     let list = document.querySelector('.items')
//     if (list.hasChildNodes() == true) {
//         list.removeChild(list.firstChild)
//     } else {
//         return;
//     }
//     killItems()
// }

function killItems() {
    let list = document.querySelector('.items')
    list.innerHTML = '';
}


const fetchFunc = (extra) => {
    if (!extra) {
        extra = ""
    }
    currentdir = currentdir + "\\" + extra
    return fetch(`http://localhost:${port}/api/path?q=${currentdir}`).then(response => response.json()).then(files => {
        console.log(files)
        files.forEach(file => {
            let a = document.createElement('a')
            a.setAttribute('onclick', `get("${file}")`)
            a.className = "fileItem"
            a.href = `${file}`
            a.textContent = file
            a.addEventListener('click', (e) => e.preventDefault())
            document.querySelector('.items').appendChild(a)
            document.querySelector('.items').appendChild(document.createElement('br'))
        });
    });
}

fetchFunc()
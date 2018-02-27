function createItem(obj, parent, n) {
    var item = document.createElement('div')
    item.className = 'item'
    item.style.height = 12 + 2.6*n + 'rem'
    var wrap = document.createElement('div')
    wrap.className = 'wrap'
    
    var h2 = document.createElement('h2')
    h2.innerHTML = obj.header
    wrap.appendChild(h2)

    var reco = document.createElement('div')
    reco.className = 'recommend'
    var img = document.createElement('img')
    img.src = 'icon/' + obj.recommend[0]
    img.alt = obj.recommend[1]
    var p = document.createElement('p')
    p.innerHTML = obj.recommend[1]
    reco.appendChild(img)
    reco.appendChild(p)
    wrap.appendChild(reco)

    var ul = document.createElement('ul')

    obj.content.map(function(val, index) {
        var li = document.createElement('li')
        var icon = document.createElement('img')
        icon.src = 'icon/' + val[0]
        icon.alt = val[1]
        var label = document.createElement('label')
        label.innerHTML = val[1]
        li.appendChild(icon)
        li.appendChild(label)
        if(index == n - 1) {
            li.className = 'test'
            li.addEventListener('mouseover', function() {
               item.className = 'item change'
            })
        }
        ul.appendChild(li)
    })
    wrap.appendChild(ul)
    wrap.addEventListener('mouseleave', function() {
        item.className = 'item'
    })
    item.appendChild(wrap)
    parent.appendChild(item)
}

function createHistory (arr, ul) {
    var keyword = document.querySelector('#searchBox')
    arr.map(function(val) {
        var li = document.createElement('li')
        var img = document.createElement('img')
        img.src = 'icon/' + val[0] + '.png'
        img.alt = val[0]
        li.appendChild(img)
        li.addEventListener('click', function() {
            window.open(val[1] + keyword.value)
        })
        ul.appendChild(li)
    })
}

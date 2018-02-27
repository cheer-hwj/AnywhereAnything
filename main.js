
(function() {
    var div = document.querySelector('#content > div')

    var historydata = [
                        ['bing', 'https://cn.bing.com/search?q='],
                        ['google', 'https://www.google.com/#newwindow=1&safe=strict&q='],
                        ['douban', 'https://www.douban.com/search?q='],
                        ['sinaweibo', 'http://s.weibo.com/weibo/'],
                        ['googleimage', 'https://google.com/search?q='],
                        ['pinterest', 'http://pinterest.com/search/pins/?q='],
                        ['twitter','https://twitter.com/search?q='],
                        ['googlemaps', 'http://www.google.cn/maps/search/'],
                        ['youdict', 'http://www.youdict.com/w/']
                    ]

    var historylist = document.querySelector('#searchItem')
    createHistory(historydata, historylist)

    var resource = [
        {
            header: '知识',
            recommend: ['wikipedia.png', '维基百科'],
            content: [
                        ['zhihu.png', '知乎'],
                        ['quora.png', 'Quora'],
                        ['baiduzhidao.png', '百度知道'],
                        ['googlescholar.png', 'Google学术'],
                        ['Khan.png', 'Khan Academy'],
                        ['wikihow.png', 'wikihow.png'],
                        ['wikipedia.png', 'Wikipedia'],
                        ['worldcat.png', 'WorldCat'],
                        ['ted.png', 'TED']
                     ]
        },
        {
            header: '设计艺术',
            recommend: ['behance.png', 'Behance'],
            content: [
                        ['cargo.png', 'Cargo'],
                        ['designboom.png', 'designboom'],
                        ['nounproject.png', 'TheNounProject'],
                        ['dribbble.png', 'Dribbble'],
                        ['pinterest.png', 'Pinterest'],
                        ['iconmonstr.png', 'iconmonstr'],
                        ['tumblr.png', 'Tumblr']
                     ]
        },
        {
            header: '社交网络',
            recommend: [ 'sinaweibo.png', '新浪微博'],
            content: [
                        ['douban.png', '豆瓣'],
                        ['twitter.png', 'Twitter'],
                        ['facebook.png', 'Facebook'],
                        ['wxgongzhonghao.png', '微信公众号'],
                        ['wxwenzhang.png', '微信公众号文章']
                ]            
        },
        {
            header: '编程',
            recommend: ['stackoverflow.png', 'Stack Overflow'],
            content: [
                ['github.png', 'Github'],
                ['appledev.png', 'Apple Developer'],
                ['cocoapods.png', 'CocoaPods'],
                ['unity.png', 'Unity'],
                ['apisio.png', 'APIs.io'],
                ['codepen.png', 'CodePen.IO'],
                ['cocoachina.png', 'CocoaChina']
            ]
        },
        {
            header: '音乐',
            recommend: ['xiami.png', '虾米'],
            content: [
                ['163music.png', '网易云音乐'],
                ['spotify.png', 'Spotify'],
                ['soundcloud.png', 'SoundCloud'],
                ['doubanmusic.png', '豆瓣音乐'],
                ['bandcamp.png', 'bandcamp'],
                ['pandora.png', 'Pandora']
            ]
        }, {
            header: '视频',
            recommend: ['youtube.png', 'YouTube'],
            content: [
                ['vimeo.png', 'Vimeo'],
                ['youku.png', '优酷'],
                ['bilibili.png', 'Bilibili'],
                ['qqv.png', '腾讯视频'],
                ['iqiyi.png', '爱奇艺'],
                ['letv.png', '乐视视频']
            ]
        }
    ]

    resource.map(function(val) {
        createItem(val, div, 4)
    })
    window.addEventListener('keydown', function() {
        var keyword = document.querySelector('#searchBox')
        if(event.code == 'Enter') {
            window.open('https://cn.bing.com/search?q=' + keyword.value)
        }
    })
})()

window.onload = function() {
      // main door
      document.getElementById('btn-menu-open').onclick = function() {

        const btn = document.getElementById('btn-menu-open')
        const ld = document.getElementById('door-sub-left')
        const rd = document.getElementById('door-sub-right')
        const door = document.getElementById('door-main')

        console.log("*deep rumbling*");
        rd.style.transform = 'translate(50vw, 0vh)'
        ld.style.transform = 'translate(-50vw, 0vh)'
        btn.style.opacity = '0'
        setTimeout(function() {
          door.style.zIndex = '-9999'
        }, 2000)
      }

      // music doors
      document.getElementById('btn-music-open').onclick = function() {

        const mbtn = document.getElementById('btn-music-open')
        const mld = document.getElementById('music-door-left')
        const mrd = document.getElementById('music-door-right')
        const mdoor = document.getElementById('music-door-main')

        console.log("button clickyyyyyy!! ^w^");
        mrd.style.transform = 'translate(100%, 0px)'
        mld.style.transform = 'translate(-100%, 0px)'
        mbtn.style.opacity = '0'
        mbtn.style.cursor = 'default'
        setTimeout(function() {
          mdoor.style.zIndex = '-9999'
        }, 2000)
      }

      // art door
      document.getElementById('art-door-btn').onclick = function() {

        const abtn = document.getElementById('art-door-btn')
        const ald = document.getElementById('art-door-left')
        const ard = document.getElementById('art-door-right')
        const adoor = document.getElementById('art-door')

        console.log("(★ ω ★)");
        ard.style.transform = 'translate(100%, 0px)'
        ald.style.transform = 'translate(-100%, 0px)'
        abtn.style.opacity = '0'
        abtn.style.cursor = 'default'
        setTimeout(function() {
          adoor.style.zIndex = '-9999'
        }, 2000)
      }
};

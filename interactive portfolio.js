window.onload = function() {
      // main door
      document.getElementById('btn-menu-open').onclick = function() {

        const btn = document.getElementById('btn-menu-open')
        const ld = document.getElementById('door-sub-left')
        const rd = document.getElementById('door-sub-right')
        const door = document.getElementById('door-main')

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

        mrd.style.transform = 'translate(325px, 0px)'
        mld.style.transform = 'translate(-325px, 0px)'
        mbtn.style.opacity = '0'
        mbtn.style.cursor = 'default'
        setTimeout(function() {
          mdoor.style.zIndex = '-9999'
        }, 2000)
      }
};
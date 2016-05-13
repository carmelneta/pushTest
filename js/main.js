'use strict';

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log(':^)', reg);
    reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function(sub) {
      console.log('endpoint:', sub.endpoint);
      document.write(sub.endpoint);
    });
  }).catch(function(error) {
    console.log(':^(', error);
  });
}

// AIzaSyDNNZ3JNK9vErMhvvf4L7-37OxgGu5JHVg
//  cYxChcW2wlw:APA91bF_cUAa6hpZTP2KFU8tmEEDc2UqTImRa_tVsL2aImXfjm3sqkEw59dDxmGCT1VIIb7lc0sfEpjZBaJU7ltZe3
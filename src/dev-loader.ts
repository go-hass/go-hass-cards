const script = document.createElement('script');
script.setAttribute('src', `${__DEV_URL__}/go-hass-cards.js?date=${Date.now()}`);
script.setAttribute('type', 'module');
document.head.appendChild(script);

window.addEventListener('hashchange', function() {
  console.log('hash changed!: '+window.location.hash);
  if (window.location.hash === '#/bookmark/1') {
    console.log("page 1 is cool");
  }
});

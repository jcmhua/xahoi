//Hot Module Replacement API
if (module.hot) {
   module.hot.accept('./App.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }

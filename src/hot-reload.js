import 'eventsource-polyfill'
import hotClient from 'webpack-hot-middleware/client?noInfo=true&reload=true&dynamicPublicPath=true&path=__webpack_hmr'

hotClient.subscribe((event) => {
  if (event.action === 'reload') {
    window.location.reload()
  }
})

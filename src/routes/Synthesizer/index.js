import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'synthesizer',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Synthesizer = require('./containers/SynthesizerContainer').default
      const reducer = require('./modules/synthesizer').default

      /*  Add the reducer to the store on key 'synthesizer'  */
      injectReducer(store, { key: 'synthesizer', reducer })

      /*  Return getComponent   */
      cb(null, Synthesizer)

    /* Webpack named bundle   */
    }, 'synthesizer')
  }
})

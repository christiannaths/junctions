const { Branch } = require('../../lib/junctions')
const Params = require('./Params')


module.exports = {
  get details() {
    return Branch({ default: true })
  },

  get attachment() {
    return Branch({
      path: '/attachment/:attachmentId',
      params: {
        attachmentId: Params.id,
      },
      data: { component: 'component' },
    })
  },
}

const fs = require('fs')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = bundler => {
  bundler.on('bundled', bundle => {
    if (!isProduction) return
    const { outDir } = bundle.entryAsset.options
    const assetsOutDir = path.resolve(outDir, './assets')
    if (!fs.existsSync(assetsOutDir)) {
      fs.mkdirSync(assetsOutDir)
    }

    const moveAssets = childBundles => {
      if (!childBundles) return
      for (let b of childBundles.values()) {
        fs.renameSync(b.name, b.name.replace(outDir, assetsOutDir))
        moveAssets(b.childBundles)
      }
    }

    moveAssets(bundle.childBundles)
  })
}

module.exports = {
  lintOnSave : false,
  css : {
    loaderOptions : {
      sass : {
        additionalData : '@import "@/assets/scss/_config.scss";'
      }
    }
  }
}
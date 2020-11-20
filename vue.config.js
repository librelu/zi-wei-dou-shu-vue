module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: process.env.VUE_APP_S3D_AWS_PROFILE,
      overrideEndpoint: false,
      region: process.env.VUE_APP_S3D_REGION,
      bucket: process.env.VUE_APP_S3D_BUCKET,
      createBucket: process.env.VUE_APP_S3D_CREATE_BUCKET,
      staticHosting: process.env.VUE_APP_S3D_STATIC_HOSTING,
      staticIndexPage: process.env.VUE_APP_S3D_STATIC_INDEX_PAGE,
      staticErrorPage: process.env.VUE_APP_S3D_STATIC_ERROR_PAGE,
      assetPath: process.env.VUE_APP_S3D_ASSET_PATH,
      assetMatch: process.env.VUE_APP_S3D_ASSET_MATCH,
      deployPath: process.env.VUE_APP_S3D_DEPLOY_PATH,
      acl: process.env.VUE_APP_S3D_ACL,
      pwa: process.env.VUE_APP_S3D_PWA,
      pwaFiles: process.env.VUE_APP_S3D_PWA_FILES,
      enableCloudfront: process.env.VUE_APP_S3D_ENABLE_CLOUDFRONT,
      cloudfrontId: process.env.VUE_APP_S3D_CLOUDFRONT_ID,
      cloudfrontMatchers: process.env.VUE_APP_S3D_CLOUDFRONT_MATCHERS,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: process.env.VUE_APP_S3D_UPLOAD_CONCURRENCY
    }
  }
}

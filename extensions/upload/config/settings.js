module.exports = {
  provider: 'google-cloud-storage',
  providerOptions: {
    serviceAccount: process.env.GCS_UPLOAD_SERVICE_ACCOUNT,
    bucketName: process.env.GCS_BUCKET_NAME,
    baseUrl: `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}`,
    basePath: '/',
    publicFiles: true,
  },
}

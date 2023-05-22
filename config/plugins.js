module.exports = ({ env }) => ({
  //...
  seo: {
    enabled: true,
  },
   upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER", "mihael.melnyk@gmail.com"),
          pass: env("SMTP_PASS", "lohpiyavtgntkqeg"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_USER", "mihael.melnyk@gmail.com"),
        defaultReplyTo: env("SMTP_USER", "mihael.melnyk@gmail.com"),
      },
    },
  },
});

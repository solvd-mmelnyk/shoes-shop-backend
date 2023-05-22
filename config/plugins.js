module.exports = ({ env }) => ({
  //...
  seo: {
    enabled: true,
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

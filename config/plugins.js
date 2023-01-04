module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
  },
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
          user: "mihael.melnyk@gmail.com",
          pass: "lohpiyavtgntkqeg",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "mihael.melnyk@gmail.com",
        defaultReplyTo: "mihael.melnyk@gmail.com",
      },
    },
  },
});

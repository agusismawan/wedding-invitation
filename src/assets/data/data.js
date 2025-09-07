export const data = {
  bride: {
    L: {
      id: 1,
      name: "Agus Dwi Ismawan",
      child: "Putra Kedua",
      father: "Sutiyono (Alm.)",
      mother: "Sri Jarwati",
      image: "./src/assets/images/cowo.png",
    },
    P: {
      id: 2,
      name: "Sovia",
      child: "Putri Keempat",
      father: "Sukamto",
      mother: "Suntari",
      image: "./src/assets/images/cewe.png",
    },

    couple: "./src/assets/images/couple.png",
    couple_alt1: "./src/assets/images/couple_alt1.png",
  },

  time: {
    marriage: {
      year: "2025",
      month: "Oktober",
      date: "03",
      day: "Jumat",
      hours: {
        start: "09.00",
        finish: "Selesai",
      },
    },
    reception: {
      year: "2025",
      month: "Oktober",
      date: "04",
      day: "Sabtu",
      hours: {
        start: "11.00",
        finish: "13:00",
      },
    },
    address:
      "Dk. Gendongan RT. 04/01, Desa Kedumulyo, Kec. Sukolilo, Kab. Pati, Jawa Tengah",
  },

  link: {
    calendar: "https://calendar.app.google/gs8FDhxcGzVcAcaV6",
    map: "https://maps.app.goo.gl/Fkf6Jhzg5qQR46y88",
  },

  galeri: [
    {
      id: 1,
      image: "./src/assets/images/1.png",
    },
    {
      id: 2,
      image: "./src/assets/images/2.png",
    },
    {
      id: 3,
      image: "./src/assets/images/3.png",
    },
    {
      id: 4,
      image: "./src/assets/images/4.png",
    },
    {
      id: 5,
      image: "./src/assets/images/5.png",
    },
  ],

  bank: [
    {
      id: 1,
      name: "Sovia",
      icon: "./src/assets/images/mandiri.png",
      rekening: "1840002436499",
    },
    {
      id: 2,
      name: "Agus Dwi Ismawan",
      icon: "./src/assets/images/bri.png",
      rekening: "033901019108531",
    },
  ],

  audio: "./src/assets/audio/wedding.mp3",

  //   api: "https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec",
  api: "https://script.google.com/macros/s/AKfycbx4hvP0CdkxhnSqwcFXF6eEWsoWAPXjwiya_CJ8gzP6wEM1FvGhfsQOgqlF-AxvLFrWNg/exec",

  navbar: [
    {
      id: 1,
      teks: "Home",
      icon: "bx bxs-home-heart",
      path: "#home",
    },
    {
      id: 2,
      teks: "Mempelai",
      icon: "bx bxs-group",
      path: "#bride",
    },
    {
      id: 3,
      teks: "Tanggal",
      icon: "bx bxs-calendar-check",
      path: "#time",
    },
    {
      id: 4,
      teks: "Galeri",
      icon: "bx bxs-photo-album",
      path: "#galeri",
    },
    {
      id: 5,
      teks: "Ucapan",
      icon: "bx bxs-message-rounded-dots",
      path: "#wishas",
    },
  ],
};

import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "แชร์ความรู้ที่ดีและประสบการณ์ล้ำค่าซึ่งกันและกัน เพื่อสังคมแห่งการเรียนรู้ สู่ความสำเร็จในชีวิตของผู้คนมากมาย",
  description:
    "แพลตฟอร์มทางเลือกใหม่เพื่อส่งเสริมการศึกษา การเรียนรู้ และการลงทุนสำหรับผู้มุ่งมั่นสร้างสรรค์ความสำเร็จ และก้าวสู่การมีคุณภาพชีวิตที่ดีในแต่ละช่วงวัย ผ่านคอร์สออนไลน์และ eBook จาก influencer ที่พร้อมแชร์สาระดีๆ แก่สังคม",
  keywords:
    "Passive income , รายได้แบบ Passive ,สร้างรายได้ออนไลน์ ,วิธีสร้าง Passive Income ,การลงทุนออนไลน์,รายได้จากเว็บไซต์,การสร้างรายได้ passively,สร้างรายได้ผ่านอินเทอร์เน็ต  ",
  openGraph: {
    title: "แชร์ความรู้ที่ดีและประสบการณ์ล้ำค่าซึ่งกันและกัน เพื่อสังคมแห่งการเรียนรู้ สู่ความสำเร็จในชีวิตของผู้คนมากมาย ",
    description: "แพลตฟอร์มทางเลือกใหม่เพื่อส่งเสริมการศึกษา การเรียนรู้ และการลงทุนสำหรับผู้มุ่งมั่นสร้างสรรค์ความสำเร็จ และก้าวสู่การมีคุณภาพชีวิตที่ดีในแต่ละช่วงวัย ผ่านคอร์สออนไลน์และ eBook จาก influencer ที่พร้อมแชร์สาระดีๆ แก่สังคม",
    url: "https://www.whatsskill.com",

    siteName: "whatsskill",
    images: [
      {
        url: "https://res.cloudinary.com/doqbge8fv/image/upload/v1702903411/dgedxqvrpc4lbmi96pzt.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "แชร์ความรู้ที่ดีและประสบการณ์ล้ำค่าซึ่งกันและกัน เพื่อสังคมแห่งการเรียนรู้ สู่ความสำเร็จในชีวิตของผู้คนมากมาย",
    description:
      "แพลตฟอร์มทางเลือกใหม่เพื่อส่งเสริมการศึกษา การเรียนรู้ และการลงทุนสำหรับผู้มุ่งมั่นสร้างสรรค์ความสำเร็จ และก้าวสู่การมีคุณภาพชีวิตที่ดีในแต่ละช่วงวัย ผ่านคอร์สออนไลน์และ eBook จาก influencer ที่พร้อมแชร์สาระดีๆ แก่สังคม",
    images: [
      "https://res.cloudinary.com/doqbge8fv/image/upload/v1702903411/dgedxqvrpc4lbmi96pzt.jpg",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory]);
  const banner = await resBanner.json();
  const category = await resCategory.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;

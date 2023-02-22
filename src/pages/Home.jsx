import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <header class="bg-light py-2">
        <div class="container px-10 px-lg-4 my-4">
          <div class="text-center text-secondary">
            <h5 class="display-6 fw-bolder">𝗥𝗜𝗕𝗕𝗜𝗡 𝗔𝗣𝗔𝗥𝗧𝗠𝗘𝗡𝗧 𝗦𝗔𝗟𝗔𝗬𝗔</h5>
            <p class="lead fw-normal text-secondary-50 mb-0">
              <i class="bi bi-flower3"></i>
              ɪɴʜᴀʙɪᴛᴇᴅ • ᴄʀᴇᴀᴛɪᴠᴇ • ᴄᴏᴍᴍᴜɴɪᴛɪᴇs 
              <i class="bi bi-flower3"></i>
            </p>
          </div>
        </div>
      </header>
      <div class="row">
      <img src="/RIBBIN salaya.jpg" width="500" height="600" alt="อัตราค่าเช่า"  />
      <br />
      <h4 className="mt-3">𝗥𝗲𝗻𝘁𝗮𝗹 𝗥𝗮𝘁𝗲</h4>
      <br />
      <img src="/อัตราค่าเช่า.png" width="500" height="600" alt="อัตราค่าเช่า"  />
      <br />
      <h4 className="mt-3">𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻</h4>
      <br />
      <img src="/แผนที่.jpg" width="500" height="900" alt="อัตราค่าเช่า"  />
      <hr />
      </div>
    </MainLayout>
  );
};

export default Home;
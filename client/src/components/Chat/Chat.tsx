import React from "react";
import "./chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__wrapper">
        <div className="chat__message">
          <div className="chat__message-username">Test username 12345</div>
          <div className="chat__message-text">Test</div>
        </div>

        <div className="chat__message">
          <div className="chat__message-username">Test username 12345</div>
          <div className="chat__message-text">Tegdfgdfghdfhdfgdfgdfgst</div>
        </div>

        <div className="chat__message">
          <div className="chat__message-username">Test username 12345</div>
          <div className="chat__message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptas, repudiandae veritatis esse quidem, similique, nulla sint
            obcaecati totam ipsum nemo quasi pariatur quas. Dolorum quo, earum
            ad praesentium esse perspiciatis consequatur rem. At laborum
            similique exercitationem magnam? Minus quo qui eum in cum nulla
            atque asperiores, impedit distinctio sit. Consequuntur, earum
            exercitationem. Iusto, quam in. Aliquam, fugit nobis ut corporis
            mollitia atque voluptatum ducimus numquam exercitationem soluta et
            fuga, delectus culpa? Odio veniam quae dicta illum, ex sunt
            repudiandae aliquam voluptatum amet consequatur quidem perferendis
            incidunt doloribus voluptates molestias alias tenetur, accusamus et
            assumenda earum dignissimos iste minus enim!
          </div>
        </div>

        <div className="chat__message chat__message--yours">
          <div className="chat__message-text">This is my message</div>
        </div>

        <div className="chat__message">
          <div className="chat__message-username">Test username 12345</div>
          <div className="chat__message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptas, repudiandae veritatis esse quidem, similique, nulla sint
            obcaecati totam ipsum nemo quasi pariatur quas. Dolorum quo, earum
            ad praesentium esse perspiciatis consequatur rem. At laborum
            similique exercitationem magnam? Minus quo qui eum in cum nulla
            atque asperiores, impedit distinctio sit. Consequuntur, earum
            exercitationem. Iusto, quam in. Aliquam, fugit nobis ut corporis
            mollitia atque voluptatum ducimus numquam exercitationem soluta et
            fuga, delectus culpa? Odio veniam quae dicta illum, ex sunt
            repudiandae aliquam voluptatum amet consequatur quidem perferendis
            incidunt doloribus voluptates molestias alias tenetur, accusamus et
            assumenda earum dignissimos iste minus enim!
          </div>
        </div>

        <div className="chat__message chat__message--yours">
          <div className="chat__message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptas, repudiandae veritatis esse quidem, similique, nulla sint
            obcaecati totam ipsum nemo quasi pariatur quas. Dolorum quo, earum
            ad praesentium esse perspiciatis consequatur rem. At laborum
            similique exercitationem magnam? Minus quo qui eum in cum nulla
            atque asperiores, impedit distinctio sit. Consequuntur, earum
            exercitationem. Iusto, quam in. Aliquam, fugit nobis ut corporis
            mollitia atque voluptatum ducimus numquam exercitationem soluta et
            fuga, delectus culpa? Odio veniam quae dicta illum, ex sunt
            repudiandae aliquam voluptatum amet consequatur quidem perferendis
            incidunt doloribus voluptates molestias alias tenetur, accusamus et
            assumenda earum dignissimos iste minus enim!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

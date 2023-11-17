import { useState, useEffect } from "react";

function ChatArea() {
  const [chats, setChats] = useState({});
  const [page, setPage] = useState(20);

  const fetchApi = async () => {
    let result = await fetch(
      `https://qa.corider.in/assignment/chat?${page}`
    );
    result = await result.json();

    setChats(result.chats);
    setChats((prev) => [...prev, ...result.chats]);
    console.log(chats);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    fetchApi();
  }, [ page]);

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  return (
    <>
      <div className="chat-area h-[75vh] overflow-auto px-4 py-10">
        {chats.length > 0
          ? chats.map((item, index) => {
              return (
                <div key={index}>
                  {item.sender.self === false ? (
                    <span className="my-4 flex flex-row">
                      <img
                        src={item.sender.image}
                        className="w-[30px] h-[30px] rounded-full mx-2"
                        alt=""
                      />
                      <li
                        id="no-self"
                        className="bg-gray-200 p-4 rounded-t-xl float-left w-[80%] rounded-br-xl"
                      >
                        {item.message}
                      </li>
                    </span>
                  ) : (
                    <span className="my-4 flex flex-row-reverse ">
                      <li
                        id="no-self"
                        className="bg-blue-500 p-4 rounded-t-xl my-4 rounded-bl-xl w-[80%] float-right"
                      >
                        {item.message}
                      </li>
                    </span>
                  )}
                </div>
              );
            })
          : 2}
      </div>
    </>
  );
}

export default ChatArea;

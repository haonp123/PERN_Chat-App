import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <span className="loading loading-spinner mx-auto" />
        </div>
      ) : (
        conversations.map((conversation) => (
          <Conversation
            key={conversation.id}
            conversation={conversation}
            emoji={getRandomEmoji()}
          />
        ))
      )}
    </div>
  );
};
export default Conversations;

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/userConversation";
import { ConversationType } from "../../types";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c: ConversationType) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search…"
        className="input-sm md:input input-bordered rounded-full sm:rounded-full w-full"
      />
      <button
        type="submit"
        className="btn md:btn-md btn-sm btn-circle bg-sky-500 text-white hover:bg-slate-600"
      >
        <Search className="w-4 h-4 md:w-6 md:h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;

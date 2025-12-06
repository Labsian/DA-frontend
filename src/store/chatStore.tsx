    import { create } from "zustand";
    import { persist } from "zustand/middleware";

    export type Message = {
    id: number;
    message: string;
    date: number;
    user: "user" | "contact";
    };

    export type Chat = {
    id: number;
    name: string;
    messages: Message[];
    preview: string;
    createdAt: number;
    story?: boolean;
    url?: string;
    };

    type ChatStore = {
    chats: Chat[];
    activeChatId: number | null;
    addMessage: (msg: Message) => void;
    setActiveChat: (id: number | null) => void;
    addChat: (name?: string) => void;
    deleteChat: (id: number) => void;
    // clearChats: () => void;
    };

    const UseChatStore = create<ChatStore>()(
    persist(
        (set, get) => ({
        chats: [
            {
            id: 1,
            name: "Emily",
            messages: [],
            preview: "bye",
            createdAt: Date.now(),
            story: false,
            url: "/assets/girl1.svg",
            },
            {
            id: 2,
            name: "Anna",
            messages: [],
            preview: "bye",
            createdAt: Date.now(),
            story: true,
            url: "/assets/girl2.svg",
            },
            {
            id: 3,
            name: "Sophie",
            messages: [],
            preview: "bye",
            createdAt: Date.now(),
            story: true,
            url: "/assets/girl3.svg",
            },
            // ...repeat pattern for your other entries
        ],

        activeChatId: null,
        addChat: (name = "New chat") => {
            const newChat: Chat = {
            id: Date.now(),
            name,
            messages: [],
            preview: "",
            createdAt: Date.now(),
            };
            set((s) => ({
            chats: [...s.chats, newChat],
            activeChatId: newChat.id,
            }));
        },
        setActiveChat: (id) => set({ activeChatId: id }),
        addMessage: (msg) => {
            const { activeChatId, chats } = get();
            if (!activeChatId) return;
            set({
            chats: chats.map((chat) =>
                chat.id === activeChatId
                ? {
                    ...chat,
                    messages: [...chat.messages, msg],
                    }
                : chat
            ),
            });
        },
        deleteChat: (id: number) => {
            set((s) => ({
            chats: s.chats.filter((chat) => chat.id !== id),
            activeChatId: s.activeChatId === id ? null : s.activeChatId,
            }));
        },
        }),
        { name: "chat-storage" }
    )
    );

 export default UseChatStore;
export { UseChatStore as UseChatStore }; 

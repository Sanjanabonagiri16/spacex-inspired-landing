import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! I'm SpaceX AI Assistant. How can I help you?", isUser: false },
  ]);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);

    // Simulate AI response
    const responses = [
      "I'd be happy to help you learn more about SpaceX's missions and technology!",
      "SpaceX is working towards making life multi-planetary. Would you like to know more?",
      "Our Falcon 9 rocket is the world's first orbital class reusable rocket. Pretty cool, right?",
      "The Dragon spacecraft is capable of carrying both cargo and humans to space!",
    ];

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-space-gray text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-80 bg-space-gray rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-white font-semibold">SpaceX AI Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-space-light"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="bg-gray-700 border-gray-600 text-white"
              />
              <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
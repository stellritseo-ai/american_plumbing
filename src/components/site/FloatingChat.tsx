import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Flame,
  Calendar,
  Phone,
  HelpCircle,
  User,
  Check,
} from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! 👋 Need plumbing help? I'm your American Commercial Plumbing assistant. How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [step, setStep] = useState<"options" | "details" | "submitted">(
    "options",
  );
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleQuickAction = (topic: string, userText: string) => {
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date(),
    };
    setSelectedTopic(topic);
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse = "";
      if (topic === "emergency") {
        botResponse =
          "🚨 EMERGENCY PLUMBING ACTIVATED. We have plumbers on standby in Tucson 24/7. Please provide your phone number so our dispatcher can call you IMMEDIATELY (usually within 10-15 mins):";
        setStep("details");
      } else if (topic === "schedule") {
        botResponse =
          "📅 Let's get you scheduled! What is the best phone number or email to reach you to confirm your service date & time?";
        setStep("details");
      } else if (topic === "callback") {
        botResponse =
          "📞 Sure thing! Please enter your phone number and preferred time to call. We'll get back to you shortly:";
        setStep("details");
      } else {
        botResponse =
          "💬 I'd love to help! Please type your question here, along with your contact details so our experts can follow up:";
        setStep("details");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date(),
        },
      ]);
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    setTimeout(() => {
      let botResponse = "";
      if (step === "details") {
        botResponse =
          "Thank you! We've received your information. A plumbing specialist will reach out to you shortly. You can also reach us directly at (520) 221-2010 for immediate service.";
        setStep("submitted");
        toast.success("Contact request received! We will call you shortly.");
      } else {
        botResponse =
          "Got it! Please provide your phone number or email address so we can answer your question and follow up details:";
        setStep("details");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass rounded-3xl w-[350px] sm:w-[380px] h-[500px] flex flex-col shadow-2xl overflow-hidden mb-4 text-foreground"
          >
            {/* Popover Header */}
            <div className="bg-gradient-to-r from-navy to-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <User className="h-5 w-5 text-electric" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-navy animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm leading-tight">
                    Plumbing Assistant
                  </h4>
                  <p className="text-[10px] text-white/70">
                    Online • Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Body / Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      m.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white text-navy border border-navy/5 rounded-bl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {step === "options" && (
                <div className="pt-2 grid grid-cols-1 gap-2">
                  <button
                    onClick={() =>
                      handleQuickAction(
                        "emergency",
                        "🚨 I have an Emergency Leak/Blockage",
                      )
                    }
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 text-red-700 font-semibold text-sm transition-all duration-200"
                  >
                    <Flame className="h-4 w-4 shrink-0 text-red-500 animate-pulse" />
                    <span>Emergency Plumbing Help (24/7)</span>
                  </button>

                  <button
                    onClick={() =>
                      handleQuickAction(
                        "schedule",
                        "📅 I'd like to schedule a service visit",
                      )
                    }
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl bg-primary/10 hover:bg-primary/15 border border-primary/20 text-navy font-semibold text-sm transition-all duration-200"
                  >
                    <Calendar className="h-4 w-4 shrink-0 text-primary" />
                    <span>Schedule Appointment</span>
                  </button>

                  <button
                    onClick={() =>
                      handleQuickAction("callback", "📞 Request a call back")
                    }
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl bg-cta/15 hover:bg-cta/20 border border-cta/20 text-cta font-semibold text-sm transition-all duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-cta" />
                    <span>Request Call Back</span>
                  </button>

                  <button
                    onClick={() =>
                      handleQuickAction(
                        "question",
                        "💬 I have another question",
                      )
                    }
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold text-sm transition-all duration-200"
                  >
                    <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>Ask a Question</span>
                  </button>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white/40 border-t border-white/20 flex gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={
                  step === "details"
                    ? "Enter contact number..."
                    : step === "submitted"
                      ? "Thank you!"
                      : "Type a message..."
                }
                disabled={step === "submitted"}
                className="flex-1 bg-white/95 rounded-xl border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={step === "submitted" || !inputVal.trim()}
                className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {step === "submitted" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Floating Tooltip Alert */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: 1 }}
              className="absolute right-16 bottom-2 bg-navy text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-lg border border-white/10 whitespace-nowrap hidden sm:block ring-soft"
            >
              Need emergency help? Chat 24/7
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-navy rotate-45 border-r border-t border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-navy via-primary to-electric text-white shadow-glow border border-white/20 hover:brightness-110 focus:outline-none"
          aria-label="Open support assistant"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-cta border-2 border-white flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-cta animate-ping opacity-75" />
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}

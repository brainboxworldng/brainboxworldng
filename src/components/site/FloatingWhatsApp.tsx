import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/2348139550676"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 grid size-11 place-items-center rounded-full bg-foreground text-background shadow-elegant transition hover:scale-110"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  );
}

import { Link } from "react-router-dom";
import { LuxButton } from "@/components/ui/lux-button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-ivory">
      <div className="text-center">
        <div className="serif-display text-4xl text-charcoal">Page not found</div>
        <p className="mt-4 text-charcoal/70">We couldn't find the page you were looking for.</p>
        <LuxButton href="/" variant="gold" className="mt-8">Return Home</LuxButton>
      </div>
    </div>
  );
}

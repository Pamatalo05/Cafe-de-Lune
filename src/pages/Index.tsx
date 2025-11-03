import { useState } from "react";
import Navigation from "@/js/components/Navigation";
import Hero from "@/js/components/Hero";
import About from "@/js/components/About";
import Menu from "@/js/components/Menu";
import Contact from "@/js/components/Contact";
import Reservations from "@/js/components/Reservations";
import Footer from "@/js/components/Footer";

interface Reservation {
  name: string;
  email: string;
  guests: string;
  time: string;
  date: string;
}

const Index = () => {
  const [newReservation, setNewReservation] = useState<Reservation | null>(null);

  const handleReservationSubmit = (reservation: Reservation) => {
    setNewReservation(reservation);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact onReservationSubmit={handleReservationSubmit} />
        <Reservations newReservation={newReservation} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

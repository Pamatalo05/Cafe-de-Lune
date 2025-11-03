import { useEffect, useState } from "react";
import { CalendarDays, Users, Clock } from "lucide-react";

interface Reservation {
  name: string;
  email: string;
  guests: string;
  time: string;
  date: string;
}

interface ReservationsProps {
  newReservation: Reservation | null;
}

const Reservations = ({ newReservation }: ReservationsProps) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [fetchedReservations, setFetchedReservations] = useState<any[]>([]);

  // Simulate HTTP GET request
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        const data = await response.json();
        setFetchedReservations(data);
      } catch (error) {
        console.error("Failed to fetch reservations");
      }
    };

    fetchReservations();
  }, []);

  // Add new reservation to the list
  useEffect(() => {
    if (newReservation) {
      setReservations((prev) => [newReservation, ...prev]);
    }
  }, [newReservation]);

  const timeLabels: Record<string, string> = {
    morning: "8AM - 12PM",
    afternoon: "12PM - 5PM",
    evening: "5PM - 9PM",
    night: "9PM - 12AM",
  };

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          Your <span className="gradient-text">Reservations</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          View and manage your upcoming visits
        </p>

        {reservations.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reservations.map((reservation, index) => (
              <div
                key={index}
                className="bg-card border border-accent rounded-lg p-6 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Reservation #{reservations.length - index}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      <strong>{reservation.name}</strong> - {reservation.guests} guest(s)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{reservation.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{timeLabels[reservation.time]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mb-12 p-8 bg-card rounded-lg border border-border">
            <p>No reservations yet. Make your first reservation above!</p>
          </div>
        )}

        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
            Recent Activity (API Data)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {fetchedReservations.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors"
              >
                <p className="text-sm font-semibold mb-2">{item.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;

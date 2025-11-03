import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Reservation {
  name: string;
  email: string;
  guests: string;
  time: string;
  date: string;
}

interface ContactProps {
  onReservationSubmit: (reservation: Reservation) => void;
}

const Contact = ({ onReservationSubmit }: ContactProps) => {
  const [formData, setFormData] = useState<Reservation>({
    name: "",
    email: "",
    guests: "",
    time: "",
    date: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.guests || !formData.time || !formData.date) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate HTTP POST request
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Reservation submitted successfully!");
        onReservationSubmit(formData);
        setFormData({
          name: "",
          email: "",
          guests: "",
          time: "",
          date: "",
        });
      }
    } catch (error) {
      toast.error("Failed to submit reservation. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-container bg-card">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          Make a <span className="gradient-text">Reservation</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Reserve your table and experience the magic of Cafe de Lune
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Select
                value={formData.guests}
                onValueChange={(value) => setFormData({ ...formData, guests: value })}
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5+">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
                  <SelectItem value="night">Night (9PM - 12AM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Reservation Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
          >
            Confirm Reservation
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

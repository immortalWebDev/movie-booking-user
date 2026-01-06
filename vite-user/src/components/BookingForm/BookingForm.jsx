import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import "./BookingForm.css";

const puneTheatres = [
  "City Pride Pune",
  "INOX Mumbai",
  "PVR Phoenix Thane",
  "PVR – Pavilion Mall Delhi",
  "PVR – Kumar Pacific",
  "E-Square – Xion Mall",
  "Cinepolis – Westend Mall",
  "Vishal Cinemaas – Pimpri",
  "Rahul 70mm",
];


const BookingForm = ({ movie }) => {

  // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    showtime: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "bookings"), {
        ...booking,
        movieName: movie.name,
        timestamp: new Date(),
      });

      const templateParams = {
        movie_name: movie.name,
        movie_venue: booking.venue,
        showtime: booking.showtime,
        user_name: booking.name,
        user_email: booking.email,
        to_email: booking.email,
        date: booking.date,
        from_email: "moviebook@platform.com",
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            // console.log(result.text);
            // setLoading(false);
            alert("Booking successful and confirmation email sent!");
          },
          (error) => {
            console.log(error.text);
            alert("Booking successful but failed to send confirmation email.");
          }
        );

      setBooking({
        name: "",
        email: "",
        phone: "",
        venue: "",
        showtime: "",
        date: "",
      });
    } catch (error) {
      console.error("Error booking movie: ", error);
      alert("Error booking movie");
    } finally {
      setLoading(false);
    }
  };

  const showtimesArray = movie.showtime ? movie.showtime.split(",") : [];
  // console.log(showtimesArray)

  return (
    <div className="booking-form">
      <h3>Book Your Ticket NOW!</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={booking.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={booking.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Theatre:
          <select
            name="venue"
            value={booking.venue}
            onChange={handleChange}
            required
          >
            <option value="">Select a theatre</option>

            {puneTheatres.map((theatre, index) => (
              <option key={index} value={theatre}>
                {theatre}
              </option>
            ))}
          </select>
        </label>

        <label>
          Showtime:
          <select
            name="showtime"
            value={booking.showtime}
            onChange={handleChange}
            required
          >
            <option value="">Select Showtime</option>
            {showtimesArray.map((time, index) => (
              <option key={index} value={time.trim()}>
                {time.trim()}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={booking.date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Booking in progress..." : "Book Ticket"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

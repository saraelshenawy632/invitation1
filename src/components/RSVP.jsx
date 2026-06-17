import { useState } from "react";
import "./RSVP.css";

function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "Yes, I will attend 🤍",
    guests: "1"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitRSVP = (e) => {
    e.preventDefault();

    // التأكد من إدخال الاسم أولاً
    if (!form.name) {
      setMessage("Please enter your name 🤍");
      return;
    }

    // إذا اختار "لن أحضر"
    if (form.attendance !== "Yes, I will attend 🤍") {
      setMessage("Thank you for letting us know 🤍");
    } else {
      // إذا اختار "سأحضر"
      setMessage("Your attendance has been confirmed ✨");
    }

    // إعادة تعيين الفورم إلى الحالة الافتراضية بعد الإرسال مباشرة
    setForm({
      name: "",
      attendance: "Yes, I will attend 🤍",
      guests: "1"
    });
  };

  return (
    <section className="rsvp">
      <div className="rsvp-card">
        <h1>RSVP</h1>
        <p>Please confirm your attendance</p>

        <form onSubmit={submitRSVP}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
          >
            <option value="Yes, I will attend 🤍">Yes, I will attend 🤍</option>
            <option value="Sorry, I can't come">Sorry, I can't come</option>
          </select>

          {/* إظهار اختيار عدد الضيوف فقط إذا كان الشخص سيحضر */}
          {form.attendance === "Yes, I will attend 🤍" && (
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="4">Other</option>
            </select>
          )}

          <button type="submit">Confirm Attendance </button>
        </form>

        <div className="thanks">
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  );
}

export default RSVP;
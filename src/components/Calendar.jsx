import React, { useState } from 'react';
import CalendarLib from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', type: 'evento', date: date });

  const handleDateChange = (d) => {
    setDate(d);
    setFormData({ ...formData, date: d });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, { ...formData }]);
    setShowForm(false);
    setFormData({ title: '', type: 'evento', date });
  };

  const eventsForDate = events.filter(ev => new Date(ev.date).toDateString() === date.toDateString());

  return (
    <div className="calendar-container">
      <h2>Calendario</h2>
      <CalendarLib onChange={handleDateChange} value={date} />
      <div className="calendar-events">
        <h3>Eventos para {date.toLocaleDateString()}</h3>
        {eventsForDate.length === 0 ? (
          <p>No hay eventos para este día.</p>
        ) : (
          <ul>
            {eventsForDate.map((ev, idx) => (
              <li key={idx}><strong>{ev.title}</strong> ({ev.type})</li>
            ))}
          </ul>
        )}
        <button onClick={() => setShowForm(true)}>Agregar evento</button>
        {showForm && (
          <form className="calendar-form" onSubmit={handleAddEvent}>
            <input name="title" type="text" placeholder="Título" value={formData.title} onChange={handleInputChange} required />
            <select name="type" value={formData.type} onChange={handleInputChange}>
              <option value="evento">Evento</option>
              <option value="vencimiento">Vencimiento</option>
              <option value="entrega">Entrega</option>
              <option value="reabastecimiento">Reabastecimiento</option>
            </select>
            <button type="submit">Guardar</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Calendar;

import React, { useState } from 'react'

// Mock data for initial testimonials
const initialTestimonials = [
  { id: 1, name: 'John Smith', message: 'Beautiful wedding! Congratulations to the happy couple!', image: 'https://thoughtcatalog.com/wp-content/uploads/2014/12/screen-shot-2014-12-04-at-4-25-41-pm.png' },
  { id: 2, name: 'Jane Smith', message: 'What a wonderful celebration of love. Thank you for letting us be a part of it.', image: 'https://3.bp.blogspot.com/-Ws0JHX5f0nw/UB5fhkNrlJI/AAAAAAAAHQA/ZjkvSp876MY/s1600/Keira_Knightley_Hot_English_Actress_Model_With_Chain_Sexy_Look_Black_And_White_Hd_Desktop_Wallpaper_worldofshows.blogspot.com.jpg ' },
]


export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [newTestimonial, setNewTestimonial] = useState({ name: '', message: '', image: '' })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasAttended, setHasAttended] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTestimonial.name && newTestimonial.message) {
      setTestimonials([...testimonials, { 
        id: Date.now(), 
        ...newTestimonial, 
        image: newTestimonial.image || '/placeholder.svg?height=100&width=100'
      }])
      setNewTestimonial({ name: '', message: '', image: '' })
    }
  }

  const canAddTestimonial = isAuthenticated || hasAttended

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>Wedding Testimonials</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
              <strong>{testimonial.name}</strong>
            </div>
            <p style={{ color: '#666' }}>{testimonial.message}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
import { title } from "process";

export default function TrustedCompanies() {
  const features = [
    {
      image: "/logos/Airbnb.png",
      title: 'Airbnb'
    },
    {
      image: "/logos/layer1.png",
      title:'Booking.com'
    },
    {
      image: "/logos/vrbo.png",
      title:'VRBO'
    },
    {
      image: "/logos/Tripadvisor.png",
      title:'Trip Advisor'
    },
    {
      image: "/logos/agoda.png",
      title:'Agoda'
    },
    {
      image: "/logos/Experia.png",
      title:'Expedia'
    },
    {
      image: "/logos/Hometogo.png",
      title:'Hometogo'
    },
  ];

  return (
    <section >
      {/* Trusted by leaders heading */}
      <div
        style={{
          position: 'relative',
          width: '346px',
          height: '26px',
          top: '23px',
          left: '520px',
          opacity: 1,
          fontFamily: 'DM Sans',
          fontWeight: '600',
          fontStyle: 'semiBold',
          fontSize: "20px",
          lineHeight: '100%',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 1)'
        }}
      >
        Trusted by leaders in 50+ the industry
      </div>

      {/* Logo Slider */}
      <div
        style={{
          position: 'relative',
          width: '1420px',
          height: '77px',
          top: '62px',
          left: '-26px',
          transform: 'rotate(0deg)',
          opacity: 1,
          backgroundColor: 'rgba(246, 246, 246, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 20px'
        }}
      >
        {features.map((feature, index) => (
          <img 
            key={index}
            src={feature.image} 
            alt={feature.title} 
            style={{
              height: '120px',
              width: 'auto',
              objectFit: 'contain',
              maxWidth: '120px'
            }}
          />
        ))}
      </div>

    </section>
  );
}

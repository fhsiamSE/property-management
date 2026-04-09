'use client';

export default function OurTools() {
  const Images = [
    {
      image: "/images/PriceLabs.png",
      title: "PriceLabs"
    },
    {
      image: "/images/Wheelhouse.png",
      title: "Wheelhouse"
    },
    {
      image: "/images/Byond.png",
      title: "Byond"
    },
    {
      image: "/images/Hostfully.png",
      title: "Hostfully"
    },
    {
      image: "/images/Guesty.png",
      title: "Guesty"
    },
      {
      image: "/images/Lodgify.png",
      title: "Lodgify"
    },
   {
      image: "/images/Hostfully.png",
      title: "Hostfully"
    },
    {
      image: "/images/Guesty.png",
      title: "Guesty"
    },
      {
      image: "/images/Lodgify.png",
      title: "Lodgify"
    },

  ];

  return (
     <section>
      <div
        style={{
          width: '147px',
          height: '42px',
          top: '1051px',
          left: '600px',
          position: 'relative',
          opacity: 1
        }}
      >
        <span
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)'
          }}
        >
          Our{' '}
        </span>
        <span
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'rgba(237, 60, 106, 1)'
          }}
        >
          Tools
        </span>
      </div>
      
      <div
        style={{
          width: '738px',
          height: '54px',
          top: '1020px',
          left: '320px',
          position: 'relative',
          padding: '50px',
          opacity: 1,
          fontFamily: 'DM Sans',
          fontWeight: '500',
          fontStyle: 'Medium',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 1)'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      
      {/* Rectangle 14 */}
      <div
        style={{
          width: '1440px',
          height: '620px',
          top: '1100px',
          left: '-1px',
          position: 'relative',
          opacity: 1,
          background: 'rgba(246, 246, 246, 1)'
        }}
      >
        {/* Image Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            padding: '50px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {Images.map((item, index) => (
            <div
              key={index}
              style={{
                width: '290px',
                height: '139px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '11px',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0px 0px 0px 1px rgba(237, 60, 106, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={item.image}
                style={{
                  width: '174px',
                  height: '47px',
                  marginBottom: '15px',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

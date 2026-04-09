
import Image from "next/image";

export default function ServiceCards() {
  const services = [
    {
      image: "/icons/fi_3176366.png",
      title: "Manage Property Listings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "/icons/fi_1048953.png",
      title: "Manage Customer Bookings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      image: "/icons/fi_2954884.png",
      title: "Schedule House Cleaning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      image: "/icons/Layer_13.png",
      title: "Monitor Guest Reviews",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      image: "/icons/Group.png",
      title: "Track & Report Expenses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
      image: "/icons/Group 39894.png",
      title: "Guest Inquiry & Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
  ];

  return (
    <section className="">
      {/* Our Service Heading */}
      <div
        style={{
          position: 'relative',
          width: '183px',
          height: '42px',
          top: '132px',
          left: '600px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: '32px',
            fontWeight: '600',
            marginRight: '2px'
          }}
        >
          Our
        </span>
        <span
          style={{
            color: 'rgba(237, 60, 106, 1)',
            fontSize: '32px',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '4px'
          }}
        >
          Services
        </span>
      </div>

      {/* Description Text */}
      <div
        style={{
          position: 'relative',
          width: '738px',
          height: '54px',
          top: '100px',
          left: '320px',
          padding: '50px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'DM Sans',
          fontWeight: '500',
          fontStyle: 'Medium',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.8)'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>

      {/* Service Cards */}
      <div
        style={{
          position: 'relative',
          top: '132px',
          left: '100px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          width: '1300px'
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: '397px',
              height: '400px',
              transform: 'rotate(0deg)',
              opacity: 1,
              // borderBlockColor: "rgba(237, 60, 106, 1)",
              borderRadius: '13px',
              backgroundColor: 'white',
              border: '1px solid rgba(237, 60, 106, 1)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {service.image && (
              <div
                style={{
                  position: 'relative',
                  width: '84px',
                  height: '84px',
                  right: '134px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={84}
                  height={84}
                />
              </div>
            )}
            <h3
              style={{
                position: 'relative',
                width: '202px',
                height: '60px',
                right: '70px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'DM Sans',
                fontWeight: '700',
                fontStyle: 'Bold',
                fontSize: '24px',
                marginBottom: '15px',
                textAlign: 'left',
                color: 'rgba(0, 0, 0, 1)'
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                position: 'relative',
                width: '306px',
                height: '54px',
                right: '15px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                fontStyle: 'Medium',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'left',
                marginTop: '10px',
                color: 'rgba(0, 0, 0, 0.7)'
              }}
            >
              {service.description}
            </p>
            
            {/* Read More Button */}
            <button
              style={{
                position: 'relative',
                width: '119px',
                height: '38px',
                right: '105px',
                borderRadius: '44px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(237, 60, 106, 1)',
                transform: 'rotate(0deg)',
                opacity: 1,
                padding: '10px',
                gap: '10px',
                backgroundColor: 'white',
                fontFamily: 'DM Sans',
                fontWeight: '500',
                fontStyle: 'Medium',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(237, 60, 106, 1)',
                cursor: 'pointer',
                marginTop: '20px'
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

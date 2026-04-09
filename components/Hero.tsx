export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        width: '1440px',
        height: '700px',
        top: '0px',
        borderStyle: 'solid',
        opacity: 1,
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#ffffff',
        backgroundImage: `
          linear-gradient(rgba(238, 234, 234, 0.94) 1px, transparent 1px),
          linear-gradient(90deg, rgba(238, 234, 234, 0.94) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        boxShadow: 'inset 0 80px 80px -10px rgba(237, 60, 106, 0.3)'
      }}
    >
      {/* Main content container */}
      <div
        style={{
          background: 'white',
          width: '923px',
          height: '523px',
          top: '149px',
          left: '249px',
          opacity: 1,
          position: 'absolute'
        }}
      >
        {/* First text */}
        <div
          style={{
            width: '458px',
            height: '62px',
            top: '104px', // 253px - 149px (relative to container)
            left: '239px', // 488px - 249px (relative to container)
            opacity: 1,
            position: 'absolute',
            fontSize: '48px',
            fontWeight: '700',
            fontStyle: 'bold',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'DM Sans',
            lineHeight: '130%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Airbnb Assistants For
        </div>

        {/* Second text */}
        <div
          style={{
            width: '381px',
            height: '50px',
            top: '166px', // 315px - 149px
            left: '278px', // 527px - 249px
            opacity: 1,
            position: 'absolute',
            fontSize: '38.13px',
            fontWeight: '500',
            fontStyle: 'medium',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'DM Sans',
            lineHeight: '130%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Property Management
        </div>

        {/* Third text */}
        <div
          style={{
            width: '665px',
            height: '54px',
            top: '247px', // 396px - 149px
            left: '139px', // 388px - 249px
            opacity: 1,
            position: 'absolute',
            fontSize: '14px',
            fontWeight: '500',
            fontStyle: 'medium',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'DM Sans',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>

        {/* Button */}
        <button
          style={{
            width: '201px',
            height: '50px',
            top: '340px', // 489px - 149px
            left: '371px', // 620px - 249px
            opacity: 1,
            borderRadius: '5px',
            gap: '10px',
            paddingTop: '18px',
            paddingRight: '24px',
            paddingBottom: '18px',
            paddingLeft: '24px',
            position: 'absolute',
            backgroundColor: 'rgba(237, 60, 106, 1)',
            color: '#ffffff',
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            verticalAlign: 'middle',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Schedule A Meeting {'→'}
        </button>

        {/* See Pricing link */}
        <div
          style={{
            width: '73px',
            height: '14px',
            top: '417px', // 566px - 149px
            left: '435px', // 684px - 249px
            opacity: 1,
            position: 'absolute',
            fontSize: '14px',
            color: '#6b7280',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          See Pricing
          {/* Underline */}
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              position: 'absolute',
              bottom: '-4px',
              left: '0'
            }}
          ></div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* Airbnb Logo */}
      <div
        style={{
          width: '106.24px',
          height: '106.24px',
          top: '200.19px',
          left: '274.13px',
          opacity: 1,
          position: 'absolute',
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        <img 
          src="/logos/NAirbnb.png"
          alt="Airbnb"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Booking.com Logo */}
      <div
        style={{
          width: '65.69px',
          height: '65.69px',
          top: '206.52px',
          left: '1072.52px',
          opacity: 1,
          position: 'absolute',
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        <img 
          src="/logos/NBooking.png"
          alt="Booking.com"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Vrbo Logo */}
      <div
        style={{
          width: '75.89px',
          height: '75.89px',
          top: '508px',
          left: '305px',
          opacity: 1,
          position: 'absolute',
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        <img 
          src="/logos/NVrbo.png"
          alt="Vrbo"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* TripAdvisor Logo */}
      <div
        style={{
          width: '89.11px',
          height: '89.11px',
          top: '521.11px',
          left: '1068.11px',
          opacity: 1,
          position: 'absolute',
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px'
        }}
      >
        <img 
          src="/logos/NTripAdvisor.png"
          alt="TripAdvisor"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Ellipse 4 */}
      <div
        style={{
          width: '15px',
          height: '15px',
          top: '192px',
          left: '710px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(52, 224, 161, 1)',
          borderRadius: '50%',
          boxShadow: '0px -2px 6.3px 0px rgba(0, 0, 0, 0.25) inset'
        }}
      ></div>

      {/* Ellipse 7 */}
      <div
        style={{
          width: '13px',
          height: '13px',
          top: '230px',
          left: '87px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(99, 91, 255, 1)',
          borderRadius: '50%',
          boxShadow: '0px -2px 6.3px 0px rgba(0, 0, 0, 0.25) inset'
        }}
      ></div>

      {/* Ellipse 5 */}
      <div
        style={{
          width: '13px',
          height: '13px',
          top: '626px',
          left: '725px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: '#5af9ff',
          borderRadius: '50%'
        }}
      ></div>

      {/* Ellipse 6 */}
      <div
        style={{
          width: '13px',
          height: '13px',
          top: '305px',
          left: '1237px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(255, 236, 90, 1)',
          borderRadius: '50%',
          boxShadow: '0px -2px 6.3px 0px rgba(0, 0, 0, 0.25) inset'
        }}
      ></div>

      {/* Ellipse 3 */}
      <div
        style={{
          width: '7px',
          height: '7px',
          top: '564px',
          left: '1322px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(12, 59, 124, 1)',
          borderRadius: '50%',
          boxShadow: '0px -2px 6.3px 0px rgba(0, 0, 0, 0.25) inset'
        }}
      ></div>

      {/* Ellipse 8 */}
      <div
        style={{
          width: '7px',
          height: '7px',
          top: '632px',
          left: '105px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(255, 236, 90, 1)',
          borderRadius: '50%',
          boxShadow: '0px -2px 6.3px 0px rgba(0, 0, 0, 0.25) inset'
        }}
      ></div>

      {/* Ellipse 2 */}
      <div
        style={{
          width: '13px',
          height: '13px',
          top: '445px',
          left: '204px',
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'rgba(255, 90, 95, 1)',
          borderRadius: '50%'
        }}
      ></div>
    </section>
  );
}

export default function Reviews() {
  const Reviews = [
    {
      name: "Jenny Wilson",
      image: "/images/jenny.png",
      Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 4
    },
    {
      name: "Esther Howard",
      image: "/images/Esther.png",
      Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 4
    },
    {
      name: "Robert Fox",
      image: "/images/Robert.png",
      Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 4
    }
  ];

  return (
    <section>
      <div
        style={{
          width: '426px',
          height: '42px',
          top: '2300px',
          left: '480px',
          position: 'relative',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
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
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 1)'
          }}
        >
          Check Our Clints{' '}
        </span>
        <span
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'rgba(237, 60, 106, 1)',
            padding: '0 8px',
            borderRadius: '4px'
          }}
        >
          Review
        </span>
      </div>
      
      <div
        style={{
          width: '738px',
          height: '54px',
          top: '2270px',
          left: '320px',
          position: 'relative',
          opacity: 1,
          fontFamily: 'DM Sans',
          padding: '50px',
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

      {/* Review Cards */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          position: 'absolute',
          top: '5300px',
          left: '0px',
          padding: '0 20px'
        }}
      >
        {Reviews.map((review, index) => (
          <div
            key={index}
            style={{
              width: '530px',
              height: '200px',
              borderRadius: '11px',
              opacity: 1,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              border: '2px solid rgba(253, 235, 240, 1)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            {/* Left side - Image */}
            <img
              src={review.image}
              alt={review.name}
              style={{
                width: '100px',
                height: '100px',
                top: '0px',
                left: '0px',
                position: 'relative',
                opacity: 1,
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />

            {/* Right side - Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                gap: '10px'
              }}
            >
              {/* Name with colon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span
                  style={{
                    width: '143px',
                    height: '26px',
                    top: '0px',
                    left: '0px',
                    position: 'relative',
                    opacity: 1,
                    fontFamily: 'DM Sans',
                    fontWeight: '700',
                    fontStyle: 'Bold',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: 'rgba(0, 0, 0, 1)'
                  }}
                >
                  {review.name}:
                </span>
              </div>

              {/* Comment */}
              <p
                style={{
                  width: '321px',
                  height: '54px',
                  top: '0px',
                  left: '0px',
                  position: 'relative',
                  opacity: 1,
                  fontFamily: 'DM Sans',
                  fontWeight: '500',
                  fontStyle: 'Medium',
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: 'rgba(0, 0, 0, 0.8)',
                  margin: '0'
                }}
              >
                {review.Comment}
              </p>

              {/* Stars */}
              <div
                style={{
                  display: 'flex'
                }}
              >
                {[...Array(4)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    style={{
                      width: '16px',
                      height: '13px',
                      top: '0px',
                      left: '0px',
                      position: 'relative',
                      borderRadius: '0.5px',
                      opacity: 1,
                      color: 'rgba(255, 157, 0, 1)',
                      fontSize: '16px'
                    }}
                  >
                    {'\u2605'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

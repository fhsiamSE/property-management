export default function GetStarted() {


  const Steps = [
    {
      step: 1,
      stepicon: "/icons/stepicon1.1.png",
      icon: "/icons/stepicon1.2.png",
      discription: "Add requirements & sign up today"
    },
    {
      step: 2,
      stepicon: "/icons/stepicon2.1.png",
      icon: "/icons/stepicon2.2.png",
      discription: "Connect with your CSM & onboarding team"
    },
    {
      step: 3,
      stepicon: "/icons/stepicon3.1.png",
      icon: "/icons/stepicon3.2.png",
      discription: "Meet your STR Assistant next week"
    },
  ]


  return (
    <div>
      <div
        style={{
          width: '426px',
          height: '42px',
          top: '1170px',
          left: '490px',
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
          Getting Started is{' '}
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
          Easy
        </span>
      </div>

      <div
        style={{
          width: '738px',
          height: '54px',
          top: '1140px',
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

      {/* Steps Container */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          position: 'absolute',
          top: '4000px',
          left: '200px',
          padding: '0 20px'
        }}
      >
        {Steps.map((step, index) => (
          <div
            key={index}
            style={{
              width: '285px',
              height: '192px',
              borderRadius: '9px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'rgba(253, 235, 240, 1)',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              opacity: 1,
              position: 'relative',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Step Icon Container */}
            <div
              style={{
                width: '76px',
                height: '76px',
                position: 'relative',
                opacity: 1,
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                borderRadius: '50%',
                marginBottom: '15px'
              }}
            >
              <img
                src={step.stepicon}
                alt={`Step ${step.step}`}
                style={{
                  top: '-40px',
                  left: '-130px',
                  width: '72.18px',
                  height: '58px',
                  position: 'relative',
                  opacity: 1,
                  objectFit: 'contain'
                }}
              />

            </div>
            <img
              src={step.icon}
              alt={`Step ${step.step}`}
              style={{
                top: '',
                position: 'absolute',
                opacity: 1,
                objectFit: 'contain'
              }}
            />
            {/* Step Title */}
            <h3
              style={{
                width: '207px',
                height: '52px',
                top: '100px',
                left: '0px',
                position: 'relative',
                opacity: 1,
                fontFamily: 'DM Sans',
                fontWeight: '600',
                fontStyle: 'SemiBold',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 1)',
                margin: '0 0 10px 0'
              }}
            >
              {step.discription}
            </h3>
          </div>
        ))}
      </div>
      
      {/* Choose Us Image */}
      <div
        style={{
          width: '1240px',
          height: '627px',
          top: '4350px',
          left: '90px',
          position: 'absolute',
          opacity: 1
        }}
      >
        <img
          src="/images/chooseus.png"
          alt="Why Choose Us"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
          <button 
          className="text-white transition-all duration-300 hover:bg-pink-700 hover:shadow-lg hover:scale-105"
          style={{
            width: '201px',
            height: '50px',
            top: '495px',
            left: "88px",
            opacity: 1,
            backgroundColor: 'rgba(237, 60, 106, 1)',
            borderRadius: '5px',
            gap: '10px',
            paddingTop: '18px',
            paddingRight: '24px',
            paddingBottom: '18px',
            paddingLeft: '24px',
            position: 'absolute',
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          Schedule A Meeting {'→'}
        </button>
      </div>
    </div>
  );
}
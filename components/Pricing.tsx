'use client';

import { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Freebie",
      discription: "Ideal for individuals who need quick access to basic features.",
      price: "$0",
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      discription: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      discription: "Ideal for businesses who need personalized services and security for large teams. ",
      price: "$100",
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs"
      ],
      highlighted: false
    }
  ];

  return (
    <section>
      {/* Pricing Header */}
      <div
        style={{
          position: 'relative',
          width: '566px',
          height: '156px',
          top: '200px',
          left: '436px',
          transform: 'rotate(0deg)',
          opacity: 1,
          gap: '38px',
          textAlign: 'center'
        }}
      >
        {/* Main Title */}
        <h1
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 1)',
            marginBottom: '20px'
          }}
        >
          Airbnb Assistant Pricing
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '400',
            fontStyle: 'Regular',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.7)',
            marginBottom: '30px'
          }}
        >
          Choose a plan that's right for you
        </p>

        {/* Billing Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          <span
            style={{
              fontFamily: 'DM Sans',
              fontWeight: '400',
              fontStyle: 'Regular',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: isYearly ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)'
            }}
          >
            Pay Monthly
          </span>

          {/* Toggle Switch */}
          <button
            onClick={() => setIsYearly(!isYearly)}
            style={{
              position: 'relative',
              width: '48px',
              height: '24px',
              backgroundColor: isYearly ? 'white' : 'rgba(200, 200, 200, 1)',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                top: '2px',
                left: isYearly ? '26px' : '2px',
                transition: 'left 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            />
          </button>

          <span
            style={{
              fontFamily: 'DM Sans',
              fontWeight: '400',
              fontStyle: 'Regular',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: isYearly ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)'
            }}
          >
            Pay Yearly
          </span>
        </div>

        {/* Pricing Cards Container */}
        <div
          style={{
            position: 'relative',
            width: '1200px',
            height: '721px',
            top: '40px',
            right: '350px',
            opacity: 1,
            gap: '40px',
            display: 'flex'
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                width: '378.67px',
                height: '721px',
                borderWidth: plan.highlighted ? '2px' : '1px',
                borderStyle: 'solid',
                borderColor: plan.highlighted ? 'rgba(237, 60, 106, 1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                paddingTop: '40px',
                paddingRight: '24px',
                paddingBottom: '40px',
                paddingLeft: '24px',
                backgroundColor: plan.highlighted ? 'rgba(237, 60, 106, 1)' : 'white',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Plan Header */}

              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  fontSize: '32px',
                  color: plan.highlighted ? 'white' : 'rgba(0, 0, 0, 1)',
                  marginBottom: '8px',
                  textAlign: "left"
                }}>
                  {plan.name}
                </h2>

                <p style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  fontSize: '16px',
                   color: plan.highlighted ? 'white' : 'rgba(0, 0, 0, 1)',
                  textAlign: 'left',
                }}>
                  {plan.discription}
                </p>
              </div>
              <div style={{
                fontFamily: 'Manrope',
                fontWeight: '700',
                fontSize: '48px',
                color: plan.highlighted ? 'white' : 'rgba(0, 0, 0, 1)',
                textAlign: 'left'
              }}>
                {plan.price}
                <span
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: '300',
                    fontStyle: 'Light',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                >
                  /month
                </span>
            </div>
              {/* Get Started Button */ }
            < button
                style = {{
            width: '100%',
            padding: '16px',
            backgroundColor: 'white',
            color: 'rgba(237, 60, 106, 1)',
            borderColor: 'rgba(237, 60, 106, 1)',
            border: plan.highlighted ? 'none' : '1px solid',
            borderRadius: '8px',
            fontFamily: 'Manrope',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '32px',
            marginBottom: '50px'
          }}
              >
          Get Started Now
        </button>

        {/* Features List */}
        <div style={{ flex: 1 }}>
          {plan.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
                fontFamily: 'Manrope',
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 1)'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: plan.highlighted ? 'rgba(237, 60, 106, 1)' : 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <path d="M4.5 6L5.5 7L8.5 10" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  fontSize: '16px',
                  color: plan.highlighted ? 'white' : 'rgba(0, 0, 0, 1)'
                }}
              >{feature}</span>
            </div>
          ))}
        </div>

      </div>
          ))}
    </div>
      </div >
    </section >
  );
}

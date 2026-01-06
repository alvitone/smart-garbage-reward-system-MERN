import "./RewardSection.css";
import rewardImg from "../../assets/ChatGPT Image Jan 2, 2026, 06_33_34 PM.png";

export default function RewardSection() {
  return (
    <>
      {/* TEXT CONTENT */}
      <div className="container3 row" style={{ marginTop: "80px" }}>
        <div className="col-lg-7" >
          <img src={rewardImg} alt="Rewards" />
        </div>
      <div className="col-lg-5">
  <p id="t1" className="fst-italic">
    Encouraging people to segregate waste into bio and non-biodegradable
    categories is an excellent initiative towards promoting waste management
    and environmental conservation.
    <br /><br />

    Proper waste segregation at the source reduces landfill burden, improves
    recycling efficiency, and enables sustainable reuse of organic waste for
    manure and compost production. Through citizen participation, cities can
    significantly reduce pollution and improve overall public health.
    <br /><br />

    <b>How the Smart Garbage Reward System Works</b>
    <br />
    Each registered user is assigned a unique QR code linked to their account.
    During garbage collection, the waste collector scans the QR code and
    verifies whether the waste has been correctly segregated.
    <br /><br />

    Based on the quality of segregation, points are awarded instantly to the
    user’s account. Consistent segregation earns higher points, encouraging
    long-term responsible behavior.
    <br /><br />

    <b>Financial incentives</b>: The government can provide financial rewards,
    such as tax credits, rebates, or direct payments, to households or
    businesses that effectively segregate their waste. These incentives reduce
    expenses while promoting eco-friendly habits.
    <br /><br />

    <b>Recognition and appreciation</b>: Users who consistently follow proper
    waste segregation practices can receive certificates, digital badges, or
    public recognition from municipal authorities, motivating others to
    participate.
    <br /><br />

    <b>Access to special services</b>: High-performing users may receive
    priority municipal services such as free garbage collection, faster
    complaint resolution, or subsidized composting and recycling services.
    <br /><br />

    <b>Education and training</b>: Awareness campaigns, workshops, and online
    courses are offered to educate citizens about correct segregation methods,
    recycling techniques, and environmental responsibility.
    <br /><br />

    <b>Recycling initiatives</b>: Deposit return systems, free recycling bins,
    and reward-based recycling programs encourage users to recycle plastic,
    glass, and metal waste effectively.
    <br /><br />

    <b>Redeeming reward points</b>
    <br />
    Points earned through segregation can be redeemed for tax reductions,
    organic manure, gardening supplies, cash vouchers, free online courses, or
    other government-supported benefits.
    <br /><br />

    By integrating technology, community participation, and government
    incentives, the Smart Garbage Reward System creates a cleaner, greener, and
    more sustainable future for everyone.
  </p>
</div>


      </div>

    
    </>
  );
}

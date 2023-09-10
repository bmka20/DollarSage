import { LandingPageRows } from './LandingPageRows';

const LandingPageColumn = () => (
  <div>
    <LandingPageRows
      title="Manage Your Finances"
      description="Take control of your financial journey with DollarSage. Our intuitive tools and features help you track your income, expenses, and investments. Make informed decisions to optimize your finances."
      image="/assets/images/feature.svg"
      imageAlt="Woman with Shopping Cart and Money Sign"
    />
    <LandingPageRows
      title="Reach Financial Goals"
      description="Set and achieve your financial goals faster. DollarSage empowers you to plan for the future, whether it's buying a home, saving for education, or retiring comfortably."
      image="/assets/images/feature2.svg"
      imageAlt="Woman Running Up Stairs of Money to a Gold Coin"
      reverse
    />
    <LandingPageRows
      title="Celebrate Financial Success"
      description="Join a community of achievers who celebrate financial milestones. DollarSage rewards your progress and helps you share your success with others."
      image="/assets/images/feature3.svg"
      imageAlt="People Celebrating - Woman Riding a Rocket, Guy Coming Out of a Trophy"
    />
  </div>
);

export { LandingPageColumn };

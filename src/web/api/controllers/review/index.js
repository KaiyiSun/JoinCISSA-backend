import * as userService from "../../../../services/user";
import { auth, revokeToken } from "../../../../services/auth";
import randomize from "randomatic";
import { sendEmail, sendVerifyEmail } from "../../../../utils/email/index";
import {review} from "../../../../utils/chatgpt";



export const postReview = async (req, res) => {
  // const data = {
  //   body: "When you start your career at Optiver, you’ll own the entire development pipeline, from idea generation to development, testing and monitoring. As we iterate and release new versions of our platform multiple times a week, you’ll never have to wait to see the impact of your work.  Optiver’s FPGA team build hardware-based trading systems ranging from low latency algorithms to high bandwidth computation. Our engineers leverage the latest technologies, techniques, and hardware to ensure the fastest and most reliable trading systems that are crucial to Optiver’s success.     WHO WE ARE:  Optiver is a tech-driven trading firm and leading global market maker. As one of the oldest market making institutions, we are a trusted partner of 50+ exchanges across the globe. Our mission is to constantly improve the market by injecting liquidity, providing accurate pricing, increasing transparency and acting as a stabilising force no matter the market conditions. With a focus on continuous improvement, we participate in the safeguarding of healthy and efficient markets for everyone who participates.  Our Amsterdam office is where it all began. Over 35 years ago, Optiver’s business started with a single trader on the floor of Amsterdam’s European Stock Exchange. Since our 1986 founding, Optiver’s Amsterdam office has grown into one of the most dynamic and exciting trading floors in Europe. Our culture reflects the Dutch capital city’s progressive, innovative and inclusive nature. With its unique spirit, Amsterdam is the ideal hub for our teams to trade a wide range of products from listed derivatives to cash equities, ETFs, bonds and foreign exchange.      WHAT YOU'LL DO:  As a Graduate FPGA Engineer, you’ll work in a team of FPGA Hardware and Software Engineers to design and maintain our proprietary trading systems. Your goal is to find the simplest solutions to the most complex problems.  From day one, you’ll have a direct impact on the success of our trading strategies by producing highly-reliable FPGA designs that secure the lowest latency possible. You’ll be part of a collaborative, fast-paced and respectful engineering environment that focuses on continuous improvement.  During your first months at Optiver, you’ll learn the ins-and-outs of our trading systems and the engineering principles that make them successful. No prior financial experience is required, as we’ll also offer you our “Trading for Non-Traders” program, to get you fully up to speed on this fascinating industry.      WHO YOU ARE:      You have a university degree in Electronic Engineering or Computer Engineering or similar     You have digital academic design experience with FPGAs or ASICs     You have Academic Experience in VHDL, Verilog, or SystemVerilog     Have an open, collaborative, self-critical attitude and willingness to learn from your mistakes     The desire to understand how the systems you build fit into our trading activities     WHAT YOU'LL GET:      The chance to start your career working alongside best-in-class professionals from over 40 different countries.     Our performance based bonus structure is unmatched anywhere in the industry. We combine our profits across desks, teams and offices into a global profit pool fostering a truly collaborative environment to work in.  Alongside this you will get great secondary benefits such as 25 paid vacation days, fully paid first-class commuting expenses, training opportunities, discounts on health insurance, breakfast and lunch facilities, sports and leisure activities, Friday afternoon drinks and even weekly in-house chair massages. Being highly international, we are accustomed to guiding expats through their relocation, offering competitive relocation packages and providing visa sponsorship where necessary.     HOW TO APPLY:  Are you interested in furthering your career on one of the most dynamic and exciting trading floors in Europe?  Apply directly via the form below for the position of Graduate FPGA Engineer. Please provide us with a CV and letter of motivation in English. Applications without a letter of motivation will not be reviewed. When we think there is a potential match, you will hear from us sooner than you expect. If you have any questions feel free to contact our recruiter Will Surmeli via willsurmeli@optiver.com. Please note, we cannot accept applications via email for data protection reasons.  Kindly note that we do not require any assistance from third-parties including agencies in the recruitment of this role.     DIVERSITY STATEMENT:  As an intentionally flat organization, we believe that great ideas and impact can come from everyone. We are passionate about empowering individuals and creating diverse teams that thrive. Every person at Optiver should feel included, valued and respected, because we believe our best work is done together.  Our commitment to diversity and inclusion is hardwired through every stage of our hiring process. We encourage applications from candidates from any and all backgrounds, and we welcome requests for reasonable adjustments during the process to ensure that you can best demonstrate your abilities.  More information on how Optiver Europe processes your personal data can be found in our Privacy Policy.",
  // }
  console.log(req.body);
  const result = await review(req.body);

  return res.status(200).json({
    success: true,
    data: result.data.choices[0].text,
  })
};

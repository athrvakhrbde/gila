import type { IconName } from "./icons";

export const programs = {
  weightLoss: {
    id: "weight-loss",
    icon: "weight-loss" as IconName,
    image: "/weight-loss-program.png",
    title: "Weight Loss",
    description:
      "Lose fat sustainably through personalised nutrition, coaching, and medical guidance.",
    benefits: ["Personalised plan", "Weekly coaching", "Sustainable results"],
    exploreHref: "#weight-loss",
  },
  pcos: {
    id: "pcos",
    icon: "pcos" as IconName,
    image: "/pcos-program.png",
    title: "PCOS Reversal",
    description: "Regain hormonal balance naturally with doctor-led, whole-person care.",
    benefits: ["Period regularity", "Hormone balance", "Fertility support"],
    exploreHref: "#pcos",
  },
} as const;

export const trustMetrics = [
  { label: "Doctor-led", value: "Clinical oversight" },
  { label: "Science-backed", value: "Evidence-based protocols" },
  { label: "Personalised", value: "Plans for your life" },
  { label: "Built for India", value: "Indian nutrition & routines" },
] as const;

export const approachPillars = [
  {
    icon: "stethoscope" as IconName,
    title: "Doctor-led care",
    text: "Medical oversight from consultation through your entire programme.",
  },
  {
    icon: "nutrition" as IconName,
    title: "Personal nutrition",
    text: "Meal plans built around Indian food and how you already eat.",
  },
  {
    icon: "tracking" as IconName,
    title: "Continuous tracking",
    text: "Progress reviewed regularly so your plan adapts as you improve.",
  },
  {
    icon: "habits" as IconName,
    title: "Habit coaching",
    text: "Weekly check-ins to build routines that last beyond the programme.",
  },
] as const;

export const processSteps = [
  { num: "01", icon: "clipboard" as IconName, title: "Assessment", text: "Share your health history, goals, and lifestyle." },
  { num: "02", icon: "consultation" as IconName, title: "Doctor consultation", text: "A gila doctor reviews your case and recommends a path." },
  { num: "03", icon: "plan" as IconName, title: "Personalised plan", text: "Nutrition, coaching, and medical care tailored to you." },
  { num: "04", icon: "results" as IconName, title: "Weekly support & results", text: "Ongoing check-ins, adjustments, and accountability." },
] as const;

export const outcomePillars = [
  {
    icon: "weight-loss" as IconName,
    category: "Weight",
    title: "Sustainable fat loss",
    text: "Medically guided weight reduction with nutrition and coaching, not crash diets.",
  },
  {
    icon: "cycles" as IconName,
    category: "Cycles",
    title: "Period regularity",
    text: "PCOS care focused on restoring hormonal rhythm and metabolic balance.",
  },
  {
    icon: "energy" as IconName,
    category: "Energy",
    title: "Daily wellbeing",
    text: "Better energy, sleep, and mood as your metabolic health improves.",
  },
  {
    icon: "habits" as IconName,
    category: "Habits",
    title: "Habits that stick",
    text: "Skills and routines designed to last after the programme ends.",
  },
] as const;

export const careTeam = [
  {
    icon: "stethoscope" as IconName,
    role: "Physician",
    title: "Medical Director",
    qualification: "MBBS, metabolic medicine",
    experience: "Clinical oversight",
    specialty: "Weight & hormonal health",
  },
  {
    icon: "nutrition" as IconName,
    role: "Nutrition",
    title: "Clinical Nutritionist",
    qualification: "Registered dietitian",
    experience: "Personalised meal planning",
    specialty: "Indian nutrition protocols",
  },
  {
    icon: "coaching" as IconName,
    role: "Coaching",
    title: "Health Coach",
    qualification: "Behaviour change specialist",
    experience: "Weekly accountability",
    specialty: "Habit & lifestyle coaching",
  },
  {
    icon: "support" as IconName,
    role: "Support",
    title: "Care Coordinator",
    qualification: "Patient care team",
    experience: "WhatsApp support",
    specialty: "Scheduling & follow-ups",
  },
] as const;

export const comparisonRows = [
  { feature: "Who it's for", weightLoss: "Men & women seeking sustainable fat loss", pcos: "Women with PCOS or hormonal imbalance" },
  { feature: "Duration", weightLoss: "Discussed at consultation", pcos: "Discussed at consultation" },
  { feature: "Doctor consultations", weightLoss: "Included", pcos: "Included" },
  { feature: "Nutrition plan", weightLoss: "Personalised Indian meals", pcos: "Hormone-focused nutrition" },
  { feature: "Exercise guidance", weightLoss: "Included", pcos: "Included" },
  { feature: "Hormonal testing", weightLoss: "As clinically indicated", pcos: "As clinically indicated" },
  { feature: "Medication support", weightLoss: "When prescribed by doctor", pcos: "When prescribed by doctor" },
  { feature: "Community & coaching", weightLoss: "Health coach + WhatsApp", pcos: "Health coach + WhatsApp" },
] as const;

export const sciencePoints = [
  {
    icon: "evidence" as IconName,
    title: "Evidence-based protocols",
    text: "Care pathways grounded in clinical guidelines for metabolic and hormonal health.",
  },
  {
    icon: "stethoscope" as IconName,
    title: "Clinical guidance",
    text: "Every programme starts with a doctor, not a generic diet template.",
  },
  {
    icon: "personalised" as IconName,
    title: "Personalised care",
    text: "Plans adapt to your labs, lifestyle, and progress over time.",
  },
  {
    icon: "sustainability" as IconName,
    title: "Long-term sustainability",
    text: "Built for lasting change, not short-term restriction.",
  },
] as const;

export const faqCategories = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    items: [
      {
        q: "Who is the Weight Loss programme for?",
        a: "Men and women who want medically guided, sustainable fat loss with nutrition and coaching support.",
      },
      {
        q: "Do I need to follow a strict diet?",
        a: "No. Your plan is built around Indian food and your existing routine, adjusted gradually, not replaced overnight.",
      },
      {
        q: "How quickly will I see results?",
        a: "Pace varies by person. Your doctor sets realistic targets based on your health profile at consultation.",
      },
    ],
  },
  {
    id: "pcos",
    title: "PCOS Reversal",
    items: [
      {
        q: "Can PCOS care help with irregular periods?",
        a: "Yes. The programme addresses weight, insulin resistance, and hormonal balance together, not in isolation.",
      },
      {
        q: "Is this only for women trying to conceive?",
        a: "No. PCOS care supports cycle regularity, energy, weight, and overall metabolic health at any life stage.",
      },
      {
        q: "Will I need medication?",
        a: "Only if clinically appropriate. Your doctor decides based on your history and investigations.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "What happens on the consultation?",
        a: "A gila doctor reviews your history and goals, explains the programme, and answers your questions. You decide if you want to continue.",
      },
      {
        q: "How is this different from a diet plan?",
        a: "You get a doctor, nutrition support, and a coach, not a one-off meal plan.",
      },
    ],
  },
] as const;

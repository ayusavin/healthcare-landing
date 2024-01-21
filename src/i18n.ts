const strings: Record<string, Record<string, string>> = {
  EN: {
    logoText: "HealthCare",
    home: "Home",
    findDoctor: "Find a doctor",
    apps: "Apps",
    testimonials: "Testimonials",
    about: "About us",
    virtualHealthcareTitle: "Virtual healthcare for you",
    virtualHealthcareDescription:
      "Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
    ourServicesTitle: "Our services",
    ourServicesDescription:
      "We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health",
    leadingProvidersTitle: "Leading healthcare providers",
    leadingProvidersDescription:
      "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    downloadAppTitle: "Download our mobile apps",
    downloadAppDescription:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    lastArticleTitle: "Check out our latest article",
    viewAll: "View all",
    download: "Download",
    learnMore: "Learn more",
    readMore: "Read more",
  },
};

function get(key: string) {
  return strings.EN[key];
}

export default { get };

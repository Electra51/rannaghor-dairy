//mobile menu on off
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

const countries = [
  {
    name: "Singapore",
    seeMore: "singapur-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Thailand",
    seeMore: "thailand-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 85,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Malaysia",
    seeMore: "malaysia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/50 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 85,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "China",
    seeMore: "china-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Recent 33cm x 48cm size photo with white background (2 Copy)",
      "Visiting Card & National ID Card",
      "N.O.C/G.O/Trade License Notarized Copy with Translate in English",
      "Company Letterhead Pad",
      "Original Bank statement for last six months. Minimum Balance Taka 300,000/-",
      "Bank solvency Certificate",
      "TIN Certificate",
      "Vaccine Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "India",
    seeMore: "india-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman/NOC +Job ID for (job holder)",
      "Visiting Card",
      "2/2 photo size",
      "National ID card /Birth certificate",
      "Utility Bill copy",
      "India last visit visa copy",
      "Medical purpose",
      "Indian Medical Appointment",
      "Bangladeshi Dr. Documents",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Sri Lanka",
    seeMore: "sri-lanka-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman/NOC + Job ID for job holder",
      "Visiting Card",
      "Photo Size 35/45",
      "National ID card /Birth certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Saudi Arabia (Umrah)",
    seeMore: "soudi-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo",
      "NID",
      "Visiting Card",
      "Self Biometric",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Dubai",
    seeMore: "dubai-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo",
      "Visiting Card",
      "Previous Travel Visa Copy",
      "Bank statement last 6 months",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Hong Kong",
    seeMore: "hong-kong-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 inch size 2 copy",
      "Visiting Card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate +pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 3,00,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Tour Plan",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "New Zealand",
    seeMore: "new-zeland-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 Matt (White Background)",
      "Trade License (English Notary)",
      "Tin Certificate",
      "Tax Return (2 Years)",
      "Business Membership Certificates",
      "Previous All Travel Visa And Entry Exit Scan Copy",
      "Family Information (Parents+child's+siblings)",
      "Financial Support Documents (Bank Statement + FDR + Assets)",
      "Marriage Certificate",
      "Purpose of Travel (Cover Letter)",
      "Company Pad And Seal (Minimum 2 Copy)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Qatar",
    seeMore: "qatar-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Kenya",
    seeMore: "kenya-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "Company memorandum",
      "Bank solvency",
      "Bank statement",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Egypt",
    seeMore: "egypt-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 size 2 Copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate+pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 85,000 pererson",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Ethiopia",
    seeMore: "ethiopia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "Company memorandum",
      "Bank solvency",
      "Bank statement",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Indonesia",
    seeMore: "indonesia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo size 4/6",
      "Visiting Card",
      "Trade License With English notary / NoC for job holder, ID card & Salary Certificate",
      "Company Pad",
      "Health Insurance",
      "Bank statement (Minimum 2,50,000 balance last 4 month)",
      "Bank Solvency",
      "Vaccine Certificate",
      "NID",
      "Tin",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Brunei",
    seeMore: "brunei-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC ,Salary certificate+pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 85,000 per person",
      "Bank solvency Certificate",
      "For students school, College, University ID card",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Russia",
    seeMore: "russia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",

      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "South Korea",
    seeMore: "south-korea-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Morocco",
    seeMore: "morocco-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Turkey",
    seeMore: "turkey-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Schengen (27 Country)",
    seeMore: "schengen-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Japan",
    seeMore: "japan-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 48/33",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Canada",
    seeMore: "canada-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Australia",
    seeMore: "australia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "USA",
    seeMore: "usa-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "UK",
    seeMore: "uk-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Philippines",
    seeMore: "philippines-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 inch size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement last 6 Months (Minimum balance 3,00,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Tour Plan",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Vietnam",
    seeMore: "vietnam-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5*4.5 mm) size",
      "Bank statement",
      "Bank solvency",
      "Office ID card",
      "Trade Licence",
      "Office Pad",
      "Visiting Card",
      "TIN Certificate",
      "Noc + Job ID + Salary Certificate",
      "Student ID Card, NOC",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Uzbekistan",
    seeMore: "uzbekistan-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (35*45 mm) size",
      "Visiting Card",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Cambodia",
    seeMore: "cambodia-visa",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "2 Copy 3.5mm*4.5mm size photo",
      "Office ID Card for Job Holder",
      "Travel Date",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
];

const accordion = document.getElementById("accordionExample");

countries.forEach((country, index) => {
  const collapseId = `collapse${index}`;
  const headingId = `heading${index}`;
  const checklistItems = country.checklist
    .map((item, i, arr) => {
      if (i === arr.length - 1 && item.includes("See More")) {
        const [before, after] = item.split("See More");
        return `<li>${before}<a href="visa-requirements.html#${country.seeMore}" class="accordian-seeMore">See More</a></li>`;
      }
      return `<li>${item}</li>`;
    })
    .join("");

  const item = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="${headingId}">
         <p class="country-list-li" ${
           index !== 0 ? "collapsed" : ""
         }" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${
    index === 0
  }" aria-controls="${collapseId}">
            ${country.name}<span id="arrow" class="arrow-icon"
                  ><svg
                    width="22"
                    height="22"
                    viewBox="0
              0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.293 0.960703C10.6591 0.594587 11.2381 0.571993 11.6309 0.892344L11.707 0.960703L21.04 10.2937C21.0449 10.2986 21.0489 10.3044 21.0537 10.3093C21.0675 10.3236 21.0809 10.3382 21.0938 10.3533C21.1014 10.3623 21.1089 10.3714 21.1162 10.3806C21.1496 10.4227 21.1797 10.4673 21.2061 10.5144C21.2117 10.5245 21.2174 10.5345 21.2227 10.5447C21.293 10.6815 21.3339 10.8363 21.334 11.0007C21.334 11.2743 21.2221 11.5213 21.0439 11.7019C21.0423 11.7035 21.0417 11.7062 21.04 11.7078L11.707 21.0418C11.3166 21.432 10.6834 21.432 10.293 21.0418C9.90251 20.6513 9.90265 20.0182 10.293 19.6277L17.9189 12.0007H1.66699C1.11471 12.0007 0.666992 11.553 0.666992 11.0007C0.667206 10.4486 1.11484 10.0007 1.66699 10.0007H17.9189L10.293 2.37477L10.2246 2.29859C9.90427 1.90584 9.9269 1.32682 10.293 0.960703Z"
                      fill="#002D72" />
                  </svg>
                </span>
          </p>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="collaspe-headline">${country.name} Visa Checklist</p>
            <ul
            class="collapse-ul">
              ${checklistItems}
            </ul>
          </div>
        </div>
      </div>
    `;

  accordion.innerHTML += item;
});

document.querySelectorAll(".accordion-item").forEach((item) => {
  const button = item.querySelector(".country-list-li");
  const collapseElement = item.querySelector(".accordion-collapse");
  const arrowIcon = item.querySelector(".arrow-icon");

  collapseElement.addEventListener("show.bs.collapse", () => {
    arrowIcon.classList.add("rotate-icon");
  });

  collapseElement.addEventListener("hide.bs.collapse", () => {
    arrowIcon.classList.remove("rotate-icon");
  });
});

const tours = [
  {
    country: "Italy",
    image: "../images/home-page-images/italy.png",
    description:
      "Embark on a journey through Italy's timeless beauty– from the romance of Venice to the elegance of....",
    link: "tour-packages.html#italy-tour",
  },
  {
    country: "Egypt",
    image: "../images/home-page-images/egypt.png",
    description:
      "Unveiling the mysteries of ancient Egypt—where history, culture, and adventure meet at the Pyramids, temples....",
    link: "tour-packages.html#egypt-tour",
  },
  {
    country: "Philippines",
    image: "../images/home-page-images/philippines.png",
    description:
      "Escape to the Philippines, where turquoise waters meet golden sands, lush jungles whisper adventure....",
    link: "tour-packages.html#philipines-tour",
  },
  {
    country: "Maldives & ShriLanka",
    image: "../images/home-page-images/italy.png",
    description:
      "Double the Paradise! Dive into the turquoise bliss of the Maldives & explore the tropical wonders....",
    link: "tour-packages.html#MalDives-tour",
  },
  {
    country: "Kathmandu Pokhara",
    image: "../images/home-page-images/italy.png",
    description: "Do Hurry and grab the chance to join the trip....",
    link: "tour-packages.html#Kathmandu-tour",
  },
  {
    country: "Maldives & Shilanka",
    image: "../images/home-page-images/italy.png",
    description: "Do Hurry and grab the chance to join the trip....",
    link: "tour-packages.html#Shilanka-tour",
  },
  {
    country: "Indonesia",
    image: "../images/home-page-images/italy.png",
    description:
      "Eid Offer Discover the magic of Indonesia – where vibrant cultures, breathtaking....",
    link: "tour-packages.html#Indonesia-tour",
  },
  {
    country: "Jordan",
    image: "../images/home-page-images/italy.png",
    description:
      "Discover the charm of Jordaan: where narrow, picturesque canals, quaint boutiques....",
    link: "tour-packages.html#Jordan-tour",
  },
];

const container = document.getElementById("tourDetailsContainer");

tours.forEach((tour) => {
  const card = document.createElement("div");
  card.className = "tour_visa_card";

  card.innerHTML = `
    <div class="tour_visa_card_img">
      <img src="${tour.image}" alt="${tour.country}" />
    </div>
    <p class="tour_visa_card_title">${tour.country}</p>
    <p class="tour_visa_card_description">
      ${tour.description}
      <a href="${tour.link}">SeeMore</a>
    </p>
  `;

  container.appendChild(card);
});

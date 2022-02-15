import testUtils from "react-dom/test-utils";

export const ohipCodes = [
  {
    code: "H101",
    description: { __html: "Minor Assessment" },
    fee: "$16.55",
    notes: "",
    category: "weekday",
  },
  {
    code: "H102",
    description: { __html: "Full assessment" },
    fee: "$41.65",
    notes: "",
    category: "weekday",
  },
  {
    code: "H103",
    description: { __html: "Multi-system" },
    fee: "$39.35",
    notes: "",
    category: "weekday",
  },
  {
    code: "H104",
    description: { __html: "Reassessment" },
    fee: "$16.55",
    notes:
      "Max 3/pt/day. Max 2/MD/day. <br></br>Must be 2h apart. Must involve a new order other than admission or discharge (e.g. Gravol, repeat vitals, walk test, imaging, labs, etc.)",
    category: "weekday",
  },
  {
    code: "H131",
    description: { __html: "Minor Assessment" },
    fee: "$20.65",
    notes: "",
    category: "eve",
  },
  {
    code: "H132",
    description: { __html: "Full assessment" },
    fee: "$51.85",
    notes: "",
    category: "eve",
  },
  {
    code: "H133",
    description: { __html: "Multi-system" },
    fee: "$46.80",
    notes: "",
    category: "eve",
  },
  {
    code: "H134",
    description: { __html: "Reassessment" },
    fee: "$20.65",
    notes:
      "Max 3/pt/day. Max 2/MD/day. Must be 2h apart. Must involve a new order other than admission or discharge (e.g. Gravol, repeat vitals, walk test, imaging, labs, etc.)",
    category: "eve",
    blurb: "See H104",
  },
  {
    code: "H151",
    description: { __html: "Minor Assessment" },
    fee: "$25.50",
    notes: "",
    category: "weekend",
  },
  {
    code: "H152",
    description: { __html: "Full assessment" },
    fee: "$51.85",
    notes: "",
    category: "weekend",
  },
  {
    code: "H153",
    description: { __html: "Multi-system" },
    fee: "$46.80",
    notes: "",
    category: "weekend",
  },
  {
    code: "H154",
    description: { __html: "Reassessment" },
    fee: "$25.50",
    notes:
      "Max 3/pt/day. Max 2/MD/day. Must be 2h apart. Must involve a new order other than admission or discharge (e.g. Gravol, repeat vitals, walk test, imaging, labs, etc.)",
    category: "weekend",
    blurb: "see H104",
  },

  {
    code: "H112",
    description: { __html: "Nights" },
    fee: "$34.20",
    notes: "",
    category: "gk",
    blurb: "24-08h",
  },
  {
    code: "H113",
    description: { __html: "Weekends, Holidays" },
    fee: "$19.80",
    notes: "",
    category: "gk",
    blurb: "",
  },
  {
    code: "E413",
    description: { __html: "Nights" },
    fee: "+40%",
    notes: "",
    category: "premium",
    blurb: "24-08h",
  },
  {
    code: "E412",
    description: { __html: "Eve, Weekends, Holidays" },
    fee: "+20%",
    notes: "",
    category: "premium",
    blurb: "",
  },
  {
    code: "E420",
    description: { __html: "Trauma premium!" },
    fee: "+50%",
    notes:
      "ISS > 15 if patient &ge; 16 yrs<br></nl> ISS > 12 if patient < 16 yrs.<br></nl> ISS must be recorded on chart.",
    category: "trauma",
    link: "https://www.mdcalc.com/injury-severity-score-iss",
    linkname: "ISS Calculator",
  },

  /* ------------------- Critical Care ---------------- */

  {
    code: "G521",
    description: { __html: "First 15 mins" },
    fee: "$110.55",
    notes:
      "Patient must have a critical illness or injury that acutely impairs one or more vital organs or systems such that imminent life-threatening deterioration is highly probable.<br></nl> Excludes intubation, lines, defibrillation, cardioversion, ABGs, Foleys, NGTs.  Does not exclude other procedure codes (fractures, lacerations, etc).<br></br> Ex. STEMI, CHF with intubation or BiPAP, severe sepsis/shock, true anaphylaxis (epi given), status epilepticus, trauma with unstable vitals, croup requiring epi, etc.",
    category: "lifethreatening",
  },
  {
    code: "G523",
    description: { __html: "Second 15 mins" },
    fee: "$55.20",
    notes: "",
    category: "lifethreatening",
  },
  {
    code: "G522",
    description: { __html: "Every 15 mins after" },
    fee: "$36.35",
    notes: "",
    category: "lifethreatening",
    blurb: "max x 4",
  },
  {
    code: "G395",
    description: { __html: "First 15 mins" },
    fee: "$56.80",
    notes:
      "Where there is a potential threat to life or limb, physician provides resuscitation in order to address the high probability of loss of limb or requirement for “life threatening” critical care. <br></br>Excludes intubation, lines, ABGs, catheters. Does not exclude cardioversion, defibrillation, or other procedure codes (fractures, dislocations, lacerations, etc). <br></br>Ex. Backboard/collar with imaging, chest pain requiring intervention, abdo pain requiring intervention, head injury requiring CT, OD/intoxication with decreased LOC, extremity requiring immediate reduction, etc.",
    category: "otherresusc",
  },
  {
    code: "G391",
    description: { __html: "Every 15 mins after" },
    fee: "$28.35",
    notes: "",
    category: "otherresusc",
    blurb: "max x 2",
  },

  /*----------------- Admissions ---------------- */

  {
    code: "H105",
    description: { __html: "EP admits to other MRP" },
    fee: "$18.10",
    notes: "",
    blurb: "'holding orders'",
    category: "admit",
  },
  {
    code: "C004",
    description: { __html: "EP admits to other MRP" },
    fee: "$56.80",
    notes:
      "Can not bill with consultation, general assessment, or general re-assessment",
    category: "admit",
    blurb: "At their request",
  },
  {
    code: "C933",
    description: { __html: "EP admits AND is MRP" },
    fee: "$79.20",
    notes: "",
    category: "admit",
  },

  /* ------------------- Connsults --------------- */

  {
    code: "H055",
    description: { __html: "Consult FRCP" },
    fee: "$106.80",
    notes: "",
    category: "consult",
  },
  {
    code: "H065",
    description: { __html: "Consult CCFP" },
    fee: "$81.25",
    notes: "",
    category: "consult",
  },
  {
    code: "K734",
    description: { __html: "ER MD &rarr; other consultant" },
    fee: "$31.35",
    notes:
      "Providing advice re mgmt & treatment > 10 mins.  Record start and stop time of discussion.<br></br>If a phone consultation leads to a face to face assessment by the consultant physician either same day or day following the phone consultation, the phone consultation is not a payable service.",
    category: "phoneconsult",
  },

  {
    code: "K735",
    description: { __html: "MD &rarr; ER MD" },
    fee: "$40.45",
    notes: "",
    category: "phoneconsult",
  },

  {
    code: "K736",
    description: { __html: "Referring MD" },
    fee: "$31.35",
    notes: "",
    category: "criticall",
    blurb: "Max 2/pt/day.",
  },

  {
    code: "K737",
    description: { __html: "Consultant MD" },
    fee: "$40.45",
    notes: "",
    category: "criticall",
  },
  {
    code: "A813",
    description: { __html: "Midwife requested assessment" },
    fee: "$86.60",
    notes: "",
    category: "consult",
  },

  /*================ Counselling Mental Health ====*/

  {
    code: "K623",
    description: { __html: "Form 1" },
    fee: "$104.80",
    notes: "",
    category: "mental",
    link: "https://www.oha.com/Documents/Form%201%20Assessments%20Under%20the%20Mental%20Health%20Act.pdf",
    linkname: "Form 1 FAQ",
  },
  {
    code: "K005",
    description: { __html: "Primary mental health care" },
    fee: "$62.75",
    notes:
      "This code is payable for visits where physicians provide advice and information with respect to diagnosis, treatment, health maintenance, and prevention. It is a time-based code that requires a minimum of 20 minutes of direct patient contact. The code is not payable in conjunction with other consultations and visits rendered by a physician during the same patient visit unless there are clearly different diagnoses for the two services.",
    category: "mental",
    blurb: "per 30 mins",
  },
  {
    code: "K007",
    description: { __html: "Individual psychotherapy" },
    fee: "$62.75",
    notes: "",
    category: "mental",
    blurb: "per 30 mins",
  },
  {
    code: "K013",
    description: { __html: "Counselling- individual care" },
    fee: "$62.75",
    notes:
      "A visit dedicated solely to an educational dialogue for the purpose of developing an awareness of the patient’s problems or situation and of modalities for prevention and/or treatment, and to provide advice and information in respect of diagnosis, treatment, health maintenance and prevention.<br></br>K013 is NOT eligible for payment under the following circumstances: A patient arrives in a walk-in clinic without an appointment OR when advice provided would be considered part of the constituent or common elements of a consultation, assessment or other treatment.<br></br>The medical record must demonstrate that an educational dialogue took place. Start times and stop times must be recorded.",
    category: "mental",
    blubr: "per 30 mins",
  },

  {
    code: "K002",
    description: { __html: "Interview relative or POA" },
    fee: "$62.75",
    notes:
      "Interview with relatives or a person who is authorized to make a treatment decision on behalf of the patient in accordance with the Health Care Consent Act.",
    category: "mental",
    blurb: "per 30 mins",
  },

  {
    code: "K003",
    description: { __html: "Interview CAS, Guardian" },
    fee: "$62.75",
    notes:
      "Interviews with Children’s Aid Society (CAS) or legal guardian on be half of the patient in accordance with the Health Care Consent Act conducted for a purpose other than to obtainconsent.",
    category: "mental",
  },
  {
    code: "K004",
    description: { __html: "Family therapy" },
    fee: "$68.10",
    notes: "",
    category: "mental",
    id: 3,
  },
  {
    code: "K014",
    description: { __html: "For Transplant" },
    fee: "$62.75",
    notes: "",
    category: "mental",
  },
  {
    code: "K015",
    description: { __html: "Counselling of relatives" },
    fee: "$62.75",
    notes: "",
    category: "mental",
    blurb: "Catastrophically ill, terminally ill, DNR, bereavement",
  },
  {
    code: "K018",
    description: { __html: "Sexual assualt and kit - female" },
    fee: "$309.70",
    notes: "",
    category: "mental",
  },
  {
    code: "K021",
    description: { __html: "Sexual assault and kit - male" },
    fee: "$243.50",
    notes: "",
    category: "mental",
  },
  {
    code: "K028",
    description: { __html: "STI & Needlestick management" },
    fee: "$62.75",
    notes:
      "All-inclusive service for the purpose of providing assessment and counselling to a patient suspected of having: a sexually transmitted infection or a patient with a potential blood-borne pathogen (e.g. following a 'needle-stick' injury).<br></br> This service is claimed in units - unit means ½ hour or major part thereof.",
    category: "mental",
  },

  /*---------------------- Forms --------------------------*/
  {
    code: "K623",
    description: { __html: "Form 1" },
    fee: "$104.80",
    notes: "",
    category: "forms",
    link: "https://www.oha.com/Documents/Form%201%20Assessments%20Under%20the%20Mental%20Health%20Act.pdf",
    linkname: "Form 1 FAQ",
  },

  {
    code: "K070",
    description: { __html: "Homecare form" },
    fee: "$29.30",
    notes: {
      __html: "",
    },
    category: "forms",
  },
  {
    code: "K034",
    description: {
      __html: "Reportable disease -phone call to Publich Health",
    },
    fee: "$36.00",
    notes:
      "K034 is only eligible for payment when the telephone report is personally rendered by the physician.",
    category: "forms",
    link: "https://www.publichealthontario.ca/-/media/documents/R/2017/reportable-disease-contact.pdf",
    linkname: "Reportable List",
  },
  {
    code: "K031",
    description: {
      __html: "Completion of Form 1 for Manadatory Blood Test",
    },
    fee: "$36.00",
    notes:
      "Bill 105 provides a right to applicants (including victims of crime, EMS workers, good Samaritans) to ask a Medical Officer of Health (MOH) for an Order to take a sample of another person’s blood, in order to test for potential exposure to communicable diseases, including Hepatitis B, Hepatitis C and HIV.<br></br>K031 allows physicians to claim for completing the Physician Report.<br></br> K061 Taking blood at request of Police",
    category: "forms",
    link: "",
  },
  {
    code: "K035",
    description: { __html: "MTO Medical Condition Report" },
    fee: "$36.30",
    notes: "",
    category: "forms",
    link: "https://www.ontario.ca/page/reporting-driver-medical-review",
    linkname: "Reporting",
  },
  {
    code: "A771",
    description: { __html: "Death Certificate" },
    fee: "$20.60",
    notes: "",
    category: "forms",
  },
  {
    code: "A777",
    description: { __html: "Death Certificate & Pronouncement" },
    fee: "$33.70",
    notes: "",
    category: "forms",
  },

  {
    code: "K101",
    description: { __html: "Land EMS" },
    fee: "$42.10",
    blurb: "per 15 mins",
    category: "ems",
  },
  {
    code: "K111",
    description: { __html: "Air EMS" },
    fee: "$126.40",
    blurb: "per 15 mins",
    category: "ems",
  },
  {
    code: "K112",
    description: { __html: "Return without patient" },
    fee: "$25.05",
    blurb: "per 30 mins",
    category: "ems",
  },

  /* Airway */

  {
    code: "G211",
    description: { __html: "Intubation" },
    fee: "$38.35",
    notes: "",
    category: "airway",
  },
  {
    code: "Z325",
    description: { __html: "Emergency Tracheotomy" },
    fee: "$474.65",
    notes: "",
    category: "airway",
    blurb: "with ant cricoid split add E639 $78.50",
  },
  {
    code: "E013C",
    description: { __html: "Anesthetic managment of acute upper airway obstruction" },
    fee: "10 units",
    notes: "when anaesthetic management is required for the  emergency relief  of  acute upper airway (above  the  carina) obstruction.  Replace number of basic units with 10 units.",
    category: "airway",
    blurb: "",
  },

  /*------- injections, IVs, lines ---------------- */

  {
    code: "Z459",
    description: { __html: "ABG, arterial puncture" },
    fee: "$23.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G268",
    description: { __html: "Arterial line" },
    fee: "$31.25",
    notes: "",
    category: "lines",
  },

  {
    code: "Z268",
    description: { __html: "Central line" },
    fee: "$31.25",
    notes: "",
    category: "lines",
  },

  {
    code: "G270",
    description: { __html: "Intraosseous" },
    fee: "$23.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G372",
    description: { __html: "IM or SC injection each" },
    fee: "$3.98",
    notes: "",
    category: "lines",
  },

  {
    code: "G376",
    description: { __html: "IV - infant" },
    fee: "$23.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G379",
    description: { __html: "IV - adult" },
    fee: "$23.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G480",
    description: { __html: "Venipuncture - infant" },
    fee: "$9.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G482",
    description: { __html: "Venipuncture - child" },
    fee: "$7.35",
    notes: "",
    category: "lines",
  },
  {
    code: "G489",
    description: { __html: "Venipuncture - adult/adolescent" },
    fee: "$3.54",
    notes: "",
    category: "lines",
  },
  {
    code: "G327",
    description: { __html: "Femoral line for dialysis" },
    fee: "$9.90",
    notes: "",
    category: "lines",
  },
  {
    code: "G380",
    description: { __html: "IV cutdown" },
    fee: "$27.05",
    notes: "",
    category: "lines",
  },
  {
    code: "G282",
    description: { __html: "Umbilical vein cath" },
    fee: "$27.05",
    notes: "",
    category: "lines",
  },
  {
    code: "K061",
    description: {
      __html: "Taking blood at the request of Police",
    },
    fee: "$36.00",
    notes:
      "Bill 105 provides a right to applicants (including victims of crime, EMS workers, good Samaritans) to ask a Medical Officer of Health (MOH) for an Order to take a sample of another person’s blood, in order to test for potential exposure to communicable diseases, including Hepatitis B, Hepatitis C and HIV.<br></br>K031 allows physicians to claim for completing the Physician Report.<br></br> K061 Taking blood samples in hospital at request of Police",
    category: "lines",
  },

  /* ----------------------- skin --------------------*/

  {
    code: "Z101",
    description: { __html: "SC abscess or hematoma I+D" },
    fee: "$30.35",
    notes: "",
    category: "skin",
  },

  {
    code: "Z173",
    description: { __html: "&#10551; x 2" },
    fee: "$30.35",
    notes: "",
    category: "skin",
  },
  {
    code: "Z174",
    description: { __html: "&#10551; x 3" },
    fee: "$40.80",
    notes: "",
    category: "skin",
  },
  {
    code: "Z102",
    description: { __html: "&#10551; with sedation" },
    fee: "$44.35",
    notes: "",
    category: "skin",
    sedation: "yes",
  },
  {
    code: "Z104",
    description: {
      __html: "Perianal abscess I+D",
    },
    fee: "$20.10",
    notes: "",
    category: "skin",
  },
  {
    code: "Z105",
    description: { __html: "&#10551; with sedation" },
    fee: "$66.00",
    notes: "",
    category: "skin",
    sedation: "yes",
  },
  {
    code: "Z104",
    description: {
      __html: "Pilonidal or Ischiorectal I+D",
    },
    fee: "$44.35",
    notes: "",
    category: "skin",
  },
  {
    code: "Z105",
    description: { __html: "&#10551; with sedation" },
    fee: "$66.00",
    notes: "",
    category: "skin",
    sedation: "yes",
  },
  {
    code: "Z103",
    description: {
      __html: "Hand plantar or palmar I+D",
    },
    fee: "$44.35",
    notes: "",
    category: "skin",
  },
  {
    code: "Z108",
    description: { __html: "&#10551; with sedation" },
    fee: "$66.00",
    notes: "",
    category: "skin",
    sedation: "yes",
  },

  {
    code: "Z114",
    description: {
      __html: "FB removal - skin",
    },
    fee: "$25.25",
    notes: "",
    category: "skin",
  },
  {
    code: "Z108",
    description: { __html: "&#10551; with sedation" },
    fee: "$88.60",
    notes: "",
    category: "skin",
    sedation: "yes",
  },
  {
    code: "R517",
    description: { __html: "Excision of FB (muslce)" },
    fee: "$107.70",
    notes: "",
    category: "skin",
    sedation: "",
  },
  {
    code: "Z122",
    description: {
      __html: "Excision cyst/lipoma face/neck",
    },
    fee: "$38.60",
    notes: "",
    blurb: "Local anesthetic",
    category: "skin",
  },
  {
    code: "Z123",
    description: { __html: "&#10551; x 2" },
    fee: "$67.80",
    notes: "",
    category: "skin",
  },
  {
    code: "Z123",
    description: { __html: "&#10551; x 3+" },
    fee: "$78.0",
    notes: "",
    category: "skin",
  },
  {
    code: "Z140",
    description: {
      __html: "Breast abscess I+D",
    },
    fee: "$33.00",
    notes: "",
    category: "skin",
  },
  {
    code: "Z123",
    description: { __html: "&#10551; with sedation" },
    fee: "$67.80",
    notes: "",
    category: "skin",
    sedation: "yes",
  },
  {
    code: "Z139",
    description: {
      __html: "Aspiration of cyst",
    },
    fee: "$37.20",
    notes: "",
    category: "skin",
  },
  {
    code: "Z226",
    description: { __html: "I+D Bursa" },
    fee: "$97.35",
    notes: "",
    category: "skin",
  },

  /* simple laceration */

  {
    code: "Z176",
    description: {
      __html: "Suture < 5cm",
    },
    fee: "$20.00",
    notes: "",
    category: "simplelac",
  },
  {
    code: "Z175",
    description: {
      __html: "Suture 5-10 cm",
    },
    fee: "$35.90",
    notes: "",
    category: "simplelac",
  },
  {
    code: "Z179",
    description: {
      __html: "Suture 10-15 cm",
    },
    fee: "$50.40",
    notes: "",
    category: "simplelac",
  },
  {
    code: "Z191",
    description: {
      __html: "Suture > 15 cm",
    },
    fee: "$50.40",
    notes: "",
    category: "simplelac",
  },

  {
    code: "Z154",
    description: {
      __html: "Suture < 5cm",
    },
    fee: "$35.90",
    notes: "",
    category: "facelac",
  },
  {
    code: "Z177",
    description: {
      __html: "Suture 5-10 cm",
    },
    fee: "$71.30",
    notes: "",
    category: "facelac",
  },
  {
    code: "Z190",
    description: {
      __html: "Suture 10-15 cm",
    },
    fee: "$101.45",
    notes: "",
    category: "facelac",
  },
  {
    code: "Z192",
    description: {
      __html: "Suture > 15 cm",
    },
    fee: "$154.95",
    notes: "",
    category: "facelac",
  },
  {
    code: "Z189",
    description: {
      __html: "Zone 1 repair of digit",
    },
    fee: "$92.30",
    notes:
      "Complex repair of a Zone 1 injury without soft tissue loss that requires a minimum of 20 minutes of time to perform.",
    category: "complexlac",
    link: "https://www.researchgate.net/publication/336574874/figure/fig1/AS:819739274276866@1572452481815/The-anatomical-zones-of-tendon-injuries-Verdan-T1-thumb-zone-1-T2-thumb-zone-2.jpg",
    linkname: "Zone 1",
  },
  {
    code: "Z187",
    description: {
      __html: "Complicated lac of face",
    },
    fee: "$92.30",
    notes:
      "A complex laceration repair of the face that requires a minimum of 20 minutes of time to perform and at least one of the following:<br>&#8226; Anatomical alignment of the vermilion border, eyebrow, eyelid or pinna; or <br></nl>&#8226; Closure of three or more layers (muscle sheath, subcutaneous tissue, skin etc.); or<br></nl>&#8226; Ligation of multiple bleeding vessels.",
    category: "complexlac",
  },
  {
    code: "Z188",
    description: {
      __html: "Complicated lac other than face",
    },
    fee: "$92.30",
    notes:
      "A complex laceration repair of an anatomical area other than face that requires a minimum of 20 minutes of time to perform and at least one of the following:<br>&#8226;  Closure of three or more layers (muscle sheath, subcutaneous tissue, skin etc.); or<br></nl>&#8226;  Ligation of multiple bleeding vessels.",
    category: "complexlac",
  },
  {
    code: "R578",
    description: {
      __html: "Suture extensor tendon",
    },
    fee: "$164.10",
    notes: "",
    category: "tendon",
  },
  {
    code: "R580",
    description: { __html: "&#10551; each additional" },
    fee: "$70.95",
    notes: "",
    category: "tendon",
    sedation: "",
  },
  {
    code: "R585",
    description: {
      __html: "Suture flexor tendon",
    },
    fee: "$307.60",
    notes: "",
    category: "tendon",
  },
  {
    code: "R581",
    description: { __html: "&#10551; each additional" },
    fee: "$128.95",
    notes: "",
    category: "tendon",
    sedation: "",
  },
  {
    code: "R024",
    description: {
      __html: "Earlobe laceration",
    },
    fee: "$100.65",
    notes: "",
    category: "misclac",
  },
  {
    code: "Z783",
    description: {
      __html: "Secondary closure",
    },
    fee: "$97.35",
    notes: "",
    category: "misclac",
  },
  {
    code: "Z783",
    description: {
      __html: "Muscle and skin repair",
    },
    fee: "$88.60",
    notes: "Simple muscle repair(s) to include repair of involved skin .",
    category: "misclac",
  },
  {
    code: "Z783",
    description: {
      __html: "Joint capsule repair",
    },
    fee: "$316.75",
    notes: "",
    category: "misclac",
  },
  {
    code: "Z790",
    description: {
      __html: "Suture lacerated major artery",
    },
    fee: "$316.86",
    notes: "",
    category: "misclac",
    blurb: "Traumatic",
  },
  {
    code: "Z781",
    description: {
      __html: "Ligation of artery",
    },
    fee: "$170.10",
    notes: "",
    category: "misclac",
    blurb: "as sole procedure",
  },

  //* Plastic Surgery, Wounds, Abscess, Tendons

  {
    code: "R629",
    description: {
      __html: "Revision of fingertip amputation",
    },
    fee: "$241.55",
    notes: "",
    category: "plastic",
    blurb: "",
  },

  {
    code: "R517",
    description: {
      __html: "Excision FB (muslce)",
    },
    fee: "$107.70",
    notes: "",
    category: "plastic",
    blurb: "",
  },
  {
    code: "Z227",
    description: {
      __html: "Intramuscular abscess or haematoma I+D",
    },
    fee: "$101.65",
    notes: "",
    category: "plastic",
    blurb: "",
  },
  {
    code: "Z128",
    description: {
      __html: "Nail plate excision (partial/complete) req anesthesia",
    },
    fee: "$33.10",
    notes: "",
    category: "plastic",
    blurb: "",
  },
  {
    code: "Z129",
    description: { __html: "&#10551; x 2" },
    fee: "$35.70",
    notes: "",
    category: "plastic",
  },
  {
    code: "R601",
    description: { __html: "Joint capsule repair" },
    fee: "$316.75",
    notes: "",
    category: "plastic",
  },
  {
    code: "Z226",
    description: { __html: "I+D Bursa" },
    fee: "$97.35",
    notes: "",
    category: "plastic",
  },

  {
    code: "Z118",
    description: { __html: "Chemical and/or cryotherapy one or more lesions" },
    fee: "$11.05",
    notes: "",
    category: "plastic",
  },
  {
    code: "Z080",
    description: {
      __html: "Debridment of wounds/ulcer extending into sc tissue",
    },
    fee: "$20.00",
    notes: "",
    category: "wounddebride",
  },
  {
    code: "Z081",
    description: { __html: "&#10551; x 2" },
    fee: "$30.00",
    notes: "",
    category: "wounddebride",
  },
  {
    code: "Z082",
    description: { __html: "&#10551; x 3" },
    fee: "$45.00",
    notes: "",
    category: "wounddebride",
  },
  {
    code: "R637",
    description: { __html: "Debride burn (except hand, head)" },
    fee: "$29.65",
    notes: "",
    category: "burndebride",
    blurb: "per % BSA other than hand,head,neck",
  },
  {
    code: "R660",
    description: { __html: "Hand - each digit" },
    fee: "$29.65",
    notes: "",
    category: "burndebride",
    blurb: "",
  },
  {
    code: "R661",
    description: { __html: "Hand - dorsum, palm each" },
    fee: "$47.95",
    notes: "",
    category: "burndebride",
    blurb: "",
  },
  {
    code: "R662",
    description: {
      __html: "Nose, cheek, lip, ear, forehead, scalp, neck, eyelid - each",
    },
    fee: "$28.90",
    notes: "",
    category: "burndebride",
    blurb: "",
  },

  /*--- GI ----- */
  {
    code: "Z543",
    description: { __html: "Anoscopy, proctoscopy" },
    fee: "$8.70",
    notes: "",
    category: "gi",
    blurb: "",
    link: "https://www.researchgate.net/publication/336574874/figure/fig1/AS:819739274276866@1572452481815/The-anatomical-zones-of-tendon-injuries-Verdan-T1-thumb-zone-1-T2-thumb-zone-2.jpg",
    linkname: "Zone 1",
  },
  {
    code: "G349",
    description: {
      __html: "Blakemore bag inserion",
    },
    fee: "$45.30",
    notes: "",
    category: "gi",
  },
  {
    code: "Z564",
    description: {
      __html: "DPL",
    },
    fee: "$73.60",
    notes: "",
    category: "gi",
  },
  {
    code: "Z756",
    description: { __html: "Fecal disimpaction" },
    fee: "$36.80",
    notes: "",
    category: "gi",
    blurb: "",
  },
  {
    code: "Z591",
    description: { __html: "&#10551; with sedation" },
    fee: "$58.15",
    notes: "",
    category: "gi",
    sedation: "yes",
  },
  {
    code: "Z541",
    description: { __html: "FB removal with sedation" },
    fee: "$58.15",
    notes: "",

    category: "gi",
    sedation: "yes",
  },
  {
    code: "Z520",
    description: {
      __html: "G-tube change",
    },
    fee: "$8.60",
    notes: "",
    category: "gi",
  },
  {
    code: "G004",
    description: { __html: "Hemoccult" },
    fee: "$1.58",
    notes: "",
    category: "gi",
    blurb: "",
  },
  {
    code: "Z538",
    description: { __html: "Hernia reduction" },
    fee: "$25.25",
    notes: "",
    category: "gi",
  },
  {
    code: "G355",
    description: { __html: "NG Tube - diagnositic" },
    fee: "$9.60",
    notes: "",
    category: "gi",
    blurb: "+/- lavage",
  },
  {
    code: "G356",
    description: { __html: "&#10551; therapeutic" },
    fee: "$33.80",
    notes: "",
    category: "gi",
    blurb: "+/- lavage",
  },
  {
    code: "Z590",
    description: { __html: "Paracentesis - diagnostic" },
    fee: "$31.30",
    notes: "",
    category: "gi",
    blurb: "",
  },
  {
    code: "Z591",
    description: { __html: "&#10551; therapeutic" },
    fee: "$57.65",
    notes: "",
    category: "gi",
  },
  {
    code: "Z104",
    description: {
      __html: "Perianal abscess I+D",
    },
    fee: "$20.10",
    notes: "",
    category: "gi",
  },
  {
    code: "Z105",
    description: { __html: "&#10551; with sedation" },
    fee: "$66.00",
    notes: "",
    category: "gi",
    sedation: "yes",
  },
  {
    code: "Z104",
    description: {
      __html: "Pilonidal or Ischiorectal I+D",
    },
    fee: "$44.35",
    notes: "",
    category: "gi",
  },
  {
    code: "Z105",
    description: { __html: "&#10551; with sedation" },
    fee: "$66.00",
    notes: "",
    category: "skin",
    sedation: "gi",
  },
  {
    code: "Z538",
    description: { __html: "Prolapse reduction" },
    fee: "$25.25",
    notes: "",
    category: "gi",
  },
  {
    code: "Z535",
    description: { __html: "Sigmoidoscopy" },
    fee: "$36.80",
    notes: "",
    category: "gi",
    blurb: "",
  },
  {
    code: "Z545",
    description: { __html: "Thrombosed hemorrhoid excision" },
    fee: "$25.25",
    notes: "",
    category: "gi",
    blurb: "",
  },

  /* Chest and Resp */

  {
    code: "Z437",
    description: { __html: "Cardioversion" },
    fee: "$92.45",
    notes: "",
    category: "chest",
    blurb: "Electrical and chemical.  Can bill with G395, not G352.",
  },
  {
    code: "Z341",
    description: { __html: "Chest tube" },
    fee: "$69.89",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "G517",
    description: { __html: "Doppler for BP/pulse" },
    fee: "$10.05",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "Z341",
    description: { __html: "ECG interpretation" },
    fee: "$4.45",
    notes:
      "ECG - twelve lead - professional component - must include written interpretation.  OMA SEM Memo 2009: recommend ER MD’s submit G313 on all ECG interpretations for patients discharged home from ED.  First come, first served :)",
    category: "chest",
    blurb: "",
  },
  {
    code: "G115",
    description: { __html: "Pacemaker - External pacing" },
    fee: "$46.60",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "Z443",
    description: { __html: "Pacemaker - Temporary transvenous" },
    fee: "$154.10",
    notes: "",
    category: "chest",
    blurb: "",
  },

  {
    code: "Z401",
    description: { __html: "Pericardiocentesis" },
    fee: "$131.70",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "M401",
    description: { __html: "Thoracotomy" },
    fee: "$390.65",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "Z331",
    description: { __html: "Thoracentesis - diagnostic" },
    fee: "$34.45",
    notes: "",
    category: "chest",
    blurb: "",
  },
  {
    code: "Z332",
    description: { __html: "&#10551; therapeutic" },
    fee: "$59.15",
    notes: "",
    category: "chest",
    blurb: "+/- lavage",
  },
  {
    code: "Z325",
    description: { __html: "Emergency Tracheotomy" },
    fee: "$474.65",
    notes: "",
    category: "chest",
    blurb: "with ant cricoid split add E639 $78.50",
  },
  {
    code: "Z326",
    description: { __html: "Trach tube change" },
    fee: "$12.50",
    notes: "",
    category: "chest",
    blurb: "",
  },

  /* Cardiovascular */

  {
    code: "Z437",
    description: { __html: "Cardioversion" },
    fee: "$92.45",
    notes: "",
    category: "cvs",
    blurb: "Electrical and chemical.  Can bill with G395, not G352.",
  },

  {
    code: "G517",
    description: { __html: "Doppler for BP/pulse" },
    fee: "$10.05",
    notes: "",
    category: "cvs",
    blurb: "",
  },
  {
    code: "Z341",
    description: { __html: "ECG interpretation" },
    fee: "$4.45",
    notes:
      "ECG - twelve lead - professional component - must include written interpretation.  OMA SEM Memo 2009: recommend ER MD’s submit G313 on all ECG interpretations for patients discharged home from ED.  First come, first served :)",
    category: "cvs",
    blurb: "",
  },
  {
    code: "G115",
    description: { __html: "Pacemaker - External pacing" },
    fee: "$46.60",
    notes: "",
    category: "cvs",
    blurb: "",
  },
  {
    code: "Z443",
    description: { __html: "Pacemaker - Temporary transvenous" },
    fee: "$154.10",
    notes: "",
    category: "cvs",
    blurb: "",
  },

  {
    code: "Z401",
    description: { __html: "Pericardio-centesis" },
    fee: "$131.70",
    notes: "",
    category: "cvs",
    blurb: "",
  },
  {
    code: "M401",
    description: { __html: "Thoracotomy" },
    fee: "$390.65",
    notes: "",
    category: "cvs",
    blurb: "",
  },

  /* Neurology */

  {
    code: "Z804",
    description: { __html: "Lumbar Puncture" },
    fee: "$67.60",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G125",
    description: { __html: "Epidural for pain relief" },
    fee: "$45.75",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G219",
    description: { __html: "Infraorbital NB" },
    fee: "$34.20",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G220",
    description: { __html: "Intercostal NB" },
    fee: "$34.20",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G221",
    description: { __html: "&#10551; each additional" },
    fee: "$16.95",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G218",
    description: { __html: "Ilioinguinal, iliohypogastric NB" },
    fee: "$54.65",
    notes: "",
    category: "neuro",
    blurb: "",
  },

  {
    code: "G225",
    description: { __html: "Mental branch of mandibular n NB" },
    fee: "$34.20",
    notes: "",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G250",
    description: { __html: "Maxillary or Mandidublar (V) NB" },
    fee: "$75.20",
    notes: "",
    category: "neuro",
  },
  {
    code: "G220",
    description: { __html: "Cranial NB" },
    fee: "$54.65",
    notes: "",
    category: "neuro",
  },
  {
    code: "G231",
    description: { __html: "Peripheral NB" },
    fee: "$54.65",
    notes: "",
    blurb: "NB not specifically listed",
    category: "neuro",
  },
  {
    code: "G258",
    description: { __html: "Intrapleural NB" },
    fee: "$44.25",
    notes: "",
    blurb: "single injection",
    category: "neuro",
  },

  {
    code: "G260",
    description: { __html: "Major pleuxs block" },
    fee: "$80.00",
    notes:
      "A block of one of the following: brachial plexus, lumbar plexus, sacral plexus, deep cervical plexus, or a combined 3-in-1 block which must include the femoral, obturator and lateral femoral cutaneous nerves",
    category: "neuro",
    blurb: "Includes 3-in-1 hip block",
  },
  {
    code: "G060",
    description: { __html: "Peripheral NB - major" },
    fee: "$55.00",
    notes:
      "Radial, median, ulnar, musculocutaneous, femoral, sciatic, common peroneal and/or tibial, obturator, suprascapular, pudendal (uni or bilateral), trigeminal or facial nerve; a paravertebral block – first injection only; an ankle block (must include 2 or more of the following: deep peroneal, superficial peroneal, posterior tibial, saphenous or sural nerve); fascia iliaca block.",
    category: "neuro",
    blurb: "Includes fasica iliac and femoral n. block",
  },
  {
    code: "G061",
    description: { __html: "Peripheral NB - minor" },
    fee: "$30.00",
    notes:
      "A block of one of the following: ilioinguinal and/or iliohypogastric, genitofemoral, lateral femoral cutaneous, saphenous, occipital, supraorbital, infraorbital or glossopharyngeal nerve; an intercostal block; superficial cervical plexus block; a transversus abdominis plane (TAP) block; or paravertebral block – additional injection. <br></br>G061 is limited to a maximum of 4 services per patient per physician per day. When a minor peripheral nerve block is rendered, additional blocks of one or more nerves within the same nerve distribution are not eligible for payment.",
    category: "neuro",
    blurb: "",
  },
  {
    code: "G224",
    description: { __html: "NB by same MD performing procedure" },
    fee: "$15.55",
    notes: "",
    category: "neuro",
    blurb:
      "Pudenal, femoral, intercostal, sciatic, ilioinguinal, ulnar, median, radial, brachial...",
  },

  /* ENT */

  {
    code: "R024",
    description: { __html: "Earlobe laceration" },
    fee: "$100.65",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "G420",
    description: { __html: "Ear wax Syringe/Curette" },
    fee: "$100.65",
    notes:
      "G420 is only insured and eligible for payment when ear wax is impacted resulting in hearing loss and the application of topical cerumenolytics has been unsuccessful, or when immediately removing the wax is necessary for diagnosis and/or therapy.",
    category: "ent",
    blurb: "uni- or bilateral",
  },
  {
    code: "G403",
    description: { __html: "Epley for BPV" },
    fee: "$21.15",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "Z915",
    description: { __html: "FB ear removal - simple" },
    fee: "$10.55",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z866",
    description: { __html: "&#10551; with sedation" },
    fee: "$50.90",
    notes: "",
    category: "ent",
    blurb: "",
    sedation: true,
  },

  {
    code: "Z311",
    description: { __html: "FB - nose" },
    fee: "$10.55",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "E318",
    description: { __html: "Haematoma of pinna I+D" },
    fee: "$92.40",
    notes:
      "Incision and drainage of extensive haematoma of pinna with packing of ear and external compression dressing - local anaesthetic",
    category: "ent",
    blurb: "",
    sedation: false,
  },
  {
    code: "Z321",
    description: { __html: "Laryngoscopy - direct" },
    fee: "$61.30",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z322",
    description: { __html: "&#10551; with FB removal" },
    fee: "$106.45",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z324",
    description: { __html: "&#10551; indirect FB removal" },
    fee: "$44.70",
    notes: "",
    category: "ent",
    blurb: "FB larynx",
  },

  {
    code: "Z301",
    description: { __html: "Nasal abscess I+D" },
    fee: "$55.60",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z314",
    description: { __html: "Nasal Cautery" },
    fee: "$11.50",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "F136",
    description: { __html: "Nasal Fracture - closed reduction" },
    fee: "$102.35",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "F137",
    description: { __html: "&#10551; open reduction " },
    fee: "$316.35",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "Z315",
    description: { __html: "Nasal packing - anterior" },
    fee: "$15.35",
    notes: "",
    category: "ent",
    blurb: "unilateral",
  },
  {
    code: "Z316",
    description: { __html: "&#10551; posterior" },
    fee: "$35.50",
    notes: "",
    category: "ent",
    blurb: "uni- or bilateral",
  },
  {
    code: "Z506",
    description: { __html: "Oral abscess, hematoma I+D" },
    fee: "$50.60",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z510",
    description: {
      __html: "Peritonsilar, phyaryngeal abscess or hematoma I+D",
    },
    fee: "$91.10",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "S066",
    description: {
      __html: "Post Tonsillectomy haemorrhage cauterization, suture",
    },
    fee: "$121.05",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "D062",
    description: { __html: "TMJ dislocation" },
    fee: "$51.65",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "S023",
    description: { __html: "Tooth - extraction" },
    fee: "$24.90",
    notes: "",
    category: "ent",
    blurb: "",
  },

  {
    code: "E700",
    description: { __html: "&#10551; each additional" },
    fee: "$13.40",
    notes: "",
    category: "ent",
    blurb: "",
  },

  /* Optho */

  {
    code: "Z847",
    description: { __html: "Cornea FB" },
    fee: "$33.00",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "Z848",
    description: { __html: "&#10551; x2" },
    fee: "$45.00",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "Z847",
    description: { __html: "Chalazion excision - LA" },
    fee: "$70.00",
    notes: "",
    category: "optho",
    blurb: "single or multiple",
  },

  {
    code: "G435",
    description: { __html: "Tonometry" },
    fee: "$5.10",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "E199",
    description: { __html: "Eyelid laceration" },
    fee: "$225.00",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "E198",
    description: { __html: "&#10551; + margin" },
    fee: "$300.00",
    notes: "",
    category: "optho",
    blurb: "Why are you doing this?",
  },
  {
    code: "Z854",
    description: { __html: "Eyelid abscess I+D" },
    fee: "$60.00",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "E198",
    description: { __html: "&#10551; with sedation" },
    fee: "$225.00",
    notes: "",
    category: "optho",
    blurb: "",
    sedation: true,
  },
  {
    code: "E235",
    description: { __html: "Cantholysis" },
    fee: "$107.50",
    notes: "",
    category: "optho",
    blurb: "",
  },
  {
    code: "E108",
    description: { __html: "Enucleate donor eye" },
    fee: "$131.25",
    notes: "",
    category: "optho",
    blurb: "",
  },

  /* Urology */

  {
    code: "Z611",
    description: { __html: "Foley catheter" },
    fee: "$12.70",
    notes:
      "Catheterization is only eligible for payment for acute retention, change of Foley catheter or suprapubic tube or instillation of medication. Only eligible for payment when rendered personally by the physician.",
    category: "urology",
  },

  {
    code: "K028",
    description: { __html: "STI & Needlestick management" },
    fee: "$62.75",
    notes:
      "All-inclusive service for the purpose of providing assessment and counselling to a patient suspected of having: a sexually transmitted infection or a patient with a potential blood-borne pathogen (e.g. following a 'needle-stick' injury).<br></br> This service is claimed in units - unit means ½ hour or major part thereof.",
    category: "urology",
  },
  {
    code: "Z608",
    description: {
      __html: "Manual catheter declotting and bladder irrigation",
    },
    fee: "$58.65",
    notes: "",
    category: "urology",
  },
  {
    code: "G900",
    description: { __html: "Post void residual / Bladder US" },
    fee: "$12.70",
    notes: "",
    category: "urology",
  },

  /* OB */

  {
    code: "A813",
    description: { __html: "Midwife requested assessment" },
    fee: "$86.60",
    notes: "",
    category: "ob",
  },
  {
    code: "P006",
    description: { __html: "Delivery (vaginal)" },
    fee: "$462.85",
    notes:
      "Vaginal delivery including repair of a tear or episiotomy extension, first or second degree, when rendered. Add E411 if sole delivery/day, max 25/fiscal year... add 100%",
    category: "ob",
  },
  {
    code: "E411",
    description: { __html: "&#10551; add 100% if sole delivery that day" },
    fee: "+100%",
    notes: "",
    category: "ob",
    blurb: "",
  },
  {
    code: "P009",
    description: { __html: "Attendance at labour and delivery as non-Ob" },
    fee: "$462.85",
    notes:
      "Payable to a physician other than an obstetric consultant for attending labour and delivery when the physician either assists at vaginal delivery or surgery, gives anaesthetic at a caesarean section or operative delivery, or resuscitates the newborn. Add E411 if sole delivery/day, max 25/fiscal year... add 100%",
    category: "ob",
  },
  {
    code: "E411",
    description: { __html: "&#10551; add 100% if sole delivery that day" },
    fee: "+100%",
    notes: "",
    category: "ob",
    blurb: "",
  },
  {
    code: "P018",
    description: { __html: "Peri-mortem c-section" },
    fee: "$555.70",
    notes:
      "The indications for perimortem c-section are maternal cardiac arrest with gravid uterus above the umbilicus or known to be >20 weeks gestational age up to 30 minutes after cardiac arrest started.",
    category: "ob",
    link: "https://emergencymedicinecases.com/perimortem-c-section-resuscitative-hysterotomy/#:~:text=The%20indications%20for%20perimortem%20c,minutes%20after%20cardiac%20arrest%20started.",
    linkname: "EMCases",
  },
  {
    code: "S768",
    description: { __html: "Abortion - Spontaneous, complete - including D&C" },
    fee: "$93.00",
    notes: "Consider billing if products on conception removed from os in ED.",
    category: "ob",
  },
  {
    code: "A920",
    description: { __html: "Medical mgmt of early pregnancy" },
    fee: "$137.20",
    notes:
      "Medical management of early pregnancy - initial service when a physician renders an initial assessment and administration of cytotoxic medication(s) for the termination of early pregnancy or missed abortion.",
    category: "ob",
    blurb: "admin cytoxic meds",
  },
  {
    code: "A922",
    description: { __html: "Medical mgmt of ectopic prgenancy" },
    fee: "$176.90",
    notes:
      "Medical Management of ectopic pregnancy initial service when a physician renders an initial assessment and administration of cytotoxic medication(s) for the termination of an ectopic pregnancy.",
    category: "ob",
    blurb: "",
  },

  {
    code: "K028",
    description: { __html: "STI management" },
    fee: "$62.75",
    notes:
      "All-inclusive service for the purpose of providing assessment and counselling to a patient suspected of having: a sexually transmitted infection or a patient with a potential blood-borne pathogen (e.g. following a 'needle-stick' injury).<br></br> This service is claimed in units - unit means ½ hour or major part thereof.",
    category: "gyne",
  },

  {
    code: "Z714",
    description: { __html: "Bartholin abscess I+D" },
    fee: "$17.30",
    notes: "",
    category: "gyne",
  },
  {
    code: "Z715",
    description: { __html: "&#10551; with sedation" },
    fee: "$50.90",
    notes: "",
    category: "gyne",
    sedation: "yes",
  },
  {
    code: "Z716",
    description: { __html: "&#10551; with marsupialization" },
    fee: "$71.90",
    notes: "",
    category: "gyne",
  },
  {
    code: "Z714",
    description: { __html: "Breast abscess I+D" },
    fee: "$33.00",
    notes: "",
    category: "gyne",
  },
  {
    code: "Z715",
    description: { __html: "&#10551; with sedation" },
    fee: "$75.00",
    notes: "",
    category: "gyne",
    sedation: "yes",
  },
  {
    code: "Z728",
    description: { __html: "Vaginal cycst, abscess, hematoma I+D" },
    fee: "$92.30",
    notes: "",
    category: "gyne",
  },
  {
    code: "G365",
    description: { __html: "PAP" },
    fee: "$8.65",
    notes:
      "One/pt/33 months.  Not covered for patients < 21 years. G365 is not eligible for payment when performed in conjunction with a consultation, repeat consultation, general or specific assessment or reassessment or routine post-natal visit.",
    category: "gyne",
  },
  {
    code: "Z735",
    description: { __html: "Examination and/or dilatation" },
    fee: "$50.90",
    notes: "Removal of IUD without GA is covered by visit fee.",
    blurb: "may include insertion and/or removal of IUD",
    category: "gyne",
    sedation: true,
  },
  {
    code: "Z432",
    description: { __html: "EUA (may include removal of vaginal FB)" },
    fee: "$54.10",
    notes: "",
    blurb: "with or without intubation",
    category: "gyne",
    sedation: true,
  },

  /* hand and carpal F codes */

  {
    code: "F004",
    description: { __html: "Phalanx #" },
    fee: "$49.20",
    notes: "",
    blurb: "no reduction",
    category: "hand",
  },
  {
    code: "F005",
    description: { __html: "&#10551; w closed redution" },
    fee: "$99.25",
    notes: "",
    category: "hand",
  },
  {
    code: "E558",
    description: { __html: "&#10551; each additional" },
    fee: "$22.25",
    notes: "",
    category: "hand",
  },
  {
    code: "F007",
    description: { __html: "&#10551; open #" },
    fee: "$248.70",
    notes: "",
    category: "hand",
  },
  {
    code: "D001",
    description: { __html: "Finger dislocation" },
    fee: "$57.50",
    notes: "",
    blurb: "",
    category: "hand",
  },
  {
    code: "E576",
    description: { __html: "&#10551; each additional" },
    fee: "$10.25",
    notes: "",
    category: "hand",
  },
  {
    code: "D003",
    description: { __html: "&#10551; open finger dislocation" },
    fee: "$196.50",
    notes: "",
    category: "hand",
  },
  {
    code: "F008",
    description: { __html: "Metacarpal #" },
    fee: "$49.20",
    notes: "",
    blurb: "",
    category: "hand",
  },
  {
    code: "F009",
    description: { __html: "&#10551; w closed redution" },
    fee: "$99.25",
    notes: "",
    category: "hand",
  },
  {
    code: "E504",
    description: { __html: "&#10551; each additional" },
    fee: "$22.25",
    notes: "",
    category: "hand",
  },

  {
    code: "F006",
    description: { __html: "Metacarpal # intra- articular " },
    fee: "$119.75",
    notes: "",
    category: "hand",
    blurb: "with closed reduction",
  },
  {
    code: "E503",
    description: { __html: "&#10551; each additional" },
    fee: "$26.85",
    notes: "",
    category: "hand",
  },
  {
    code: "D004",
    description: { __html: "Metacarpal-phalangeal dislocation" },
    fee: "$57.50",
    notes: "",
    blurb: "",
    category: "hand",
  },
  {
    code: "E577",
    description: { __html: "&#10551; each additional" },
    fee: "$22.25",
    notes: "",
    category: "hand",
  },
  {
    code: "D006",
    description: { __html: "&#10551; open reduction" },
    fee: "$181.85",
    notes: "",
    category: "hand",
  },
  {
    code: "F012",
    description: { __html: "Bennet #" },
    fee: "$49.20",
    notes: "",
    blurb: "",
    category: "hand",
    link: "https://healthjade.net/wp-content/uploads/2019/09/Bennett-fracture.jpg",
    linkname: "Bennet #",
  },
  {
    code: "E577",
    description: { __html: "&#10551; with closed reduction" },
    fee: "$119.80",
    notes: "",
    category: "hand",
  },
  {
    code: "F102",
    description: { __html: "Carpus #" },
    fee: "$49.20",
    notes: "",
    blurb: "no reduction, rigid immmobilization",
    category: "hand",
  },
  {
    code: "F016",
    description: { __html: "&#10551; with closed reduction" },
    fee: "$115.10",
    notes: "",
    category: "hand",
  },
  {
    code: "D007",
    description: { __html: "Carpal dislocation" },
    fee: "$128.05",
    notes: "",
    blurb: "with closed reduction",
    category: "hand",
  },
  {
    code: "F016",
    description: { __html: "&#10551; open MCP" },
    fee: "$115.10",
    notes: "",
    category: "hand",
  },
  {
    code: "F018",
    description: { __html: "Scaphoid #" },
    fee: "49.20",
    notes: "",
    blurb: "rigid immobilization",
    category: "hand",
  },
  {
    code: "R629",
    description: {
      __html: "Revision of fingertip amputation",
    },
    fee: "$241.55",
    notes: "",
    category: "hand",
    blurb: "",
  },

  /* Wrist, forearm, elbow */

  {
    code: "F029",
    description: {
      __html: "Epicondyle #",
    },
    fee: "$67.75",
    category: "arm",
  },
  {
    code: "F037",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$126.25",
    category: "arm",
  },
  {
    code: "F039",
    description: {
      __html: "Transcondylar #",
    },
    fee: "$67.75",
    category: "arm",
  },
  {
    code: "F040",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$298.35",
    category: "arm",
  },
  {
    code: "F034",
    description: {
      __html: "Olcecranon #",
    },
    fee: "$126.25",
    category: "arm",
  },
  {
    code: "F034",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$129.00",
    category: "arm",
  },
  {
    code: "F024",
    description: {
      __html: "Radius & Ulna shaft #",
    },
    fee: "$67.75",
    category: "arm",
  },
  {
    code: "F025",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$148.50",
    category: "arm",
  },
  {
    code: "F024",
    description: {
      __html: "Radius & Ulna shaft #",
    },
    fee: "$67.75",
    category: "arm",
  },
  {
    code: "F025",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$148.50",
    category: "arm",
  },
  {
    code: "F031",
    description: {
      __html: "Radius or ulna #",
    },
    fee: "$81.30",
    category: "arm",
  },
  {
    code: "F025",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$117.85",
    category: "arm",
  },
  {
    code: "F027",
    description: {
      __html: "Distal radius #",
    },
    fee: "$67.75",
    category: "arm",
  },
  {
    code: "F028",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$109.45",
    category: "arm",
  },
  {
    code: "F028",
    description: {
      __html: "&#10551; with sedation",
    },
    fee: "$109.45",
    category: "arm",
    sedation: true,
  },
  {
    code: "D009",
    description: {
      __html: "Dislocated elbow",
    },
    fee: "$84.45",
    category: "arm",
  },
  {
    code: "D012",
    description: {
      __html: "Radial hed dislocation, pulled elbow",
    },
    fee: "$84.45",
    category: "arm",
  },
  {
    code: "Z226",
    description: {
      __html: "I+D Bursa",
    },
    fee: "$97.35",
    category: "arm",
    link: "https://thesgem.com/2022/01/sgem358-i-would-do-anything-for-septic-olecranon-bursitis-but-i-wont-tap-that/",
    linkname: "SGEM"
  },

  /* Shoulder and Humerus */

  {
    code: "F047",
    description: {
      __html: "Tuberosity #",
    },
    fee: "$67.80",
    category: "shoulder",
    blurb: "no reduction"
  },
  {
    code: "F048",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$117.85",
    category: "shoulder",
  },
  {
    code: "F047",
    description: {
      __html: "Humerus neck #",
    },
    fee: "$67.80",
    category: "shoulder",
    blurb: ""
  },
  {
    code: "F048",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$133.60",
    category: "shoulder",
  },
  {
    code: "F050",
    description: {
      __html: "Humerus neck #",
    },
    fee: "$67.80",
    category: "shoulder",
    blurb: "with head dislocation"
  },
  {
    code: "F051",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$183.80",
    category: "shoulder",
    blurb:"with head dislocation"
  },
  {
    code: "F042",
    description: {
      __html: "Humerus shaft #",
    },
    fee: "$67.80",
    category: "shoulder",
  },
  {
    code: "F043",
    description: {
      __html: "&#10551; closed reduction with sedation",
    },
    fee: "$147.60",
    category: "shoulder",
    sedation: true,
  },
  {
    code: "F110",
    description: {
      __html: "Clavicle #",
    },
    fee: "$62.20",
    blurb: "closed reduction with anesthetic",
    category: "shoulder",
  },
  {
    code: "F119",
    description: {
      __html: "Scapula #",
    },
    fee: "$67.80",
    category: "shoulder",
  },
  {
    code: "F120",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$112.55",
    category: "shoulder",
  },
  {
    code: "F119",
    description: {
      __html: "Sternum #",
    },
    fee: "$115.95",
    category: "shoulder",
    blurb: "with closed reduction"

  },
  {
    code: "D014",
    description: {
      __html: "A-C dislocation",
    },
    fee: "$67.80",
    category: "shoulder",
    blurb: "no reduction"

  },
  {
    code: "D025",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$134.55",
    category: "shoulder",
  },
  {
    code: "D014",
    description: {
      __html: "Sterno-clavicular dislocation",
    },
    fee: "$67.80",
    category: "shoulder",
    blurb: "no reduction"

  },
  {
    code: "D015",
    description: {
      __html: "Shoulder dislocation",
    },
    fee: "$49.20",
    category: "shoulder",
    blurb: "without anesthesia"

  },
  {
    code: "D016",
    description: {
      __html: "&#10551; with sedation",
    },
    fee: "$111.40",
    category: "shoulder",
  },



 

  /* Pelivs and hip */

  {
    code: "F134",
    description: {
      __html: "Pelvic ring # (unstable)",
    },
    fee: "$442.45",
    category: "hip",
    blurb: "closed reduction with binder",
  },
  {
    code: "F098",
    description: {
      __html: "Hip #",
    },
    fee: "$426.90",
    blurb: "with reduction/traction",
    category:"hip",
  },
  {
    code: "D042",
    description: {
      __html: "Hip dislocation",
    },
    fee: "$268.25",
    blurb: "closed reduction",
    category:"hip",
  },
  {
    code: "F094",
    description: {
      __html: "Femur # - child",
    },
    fee: "$258.00",
    blurb: "with traction",
    category:"hip",
  },
  {
    code: "F094",
    description: {
      __html: "Femur # - adult",
    },
    fee: "$407.35",
    blurb: "with traction",
    category:"hip",
  },

  /* Knee, tib, fib */

  {
    code: "F085",
    description: {
      __html: "Patella #",
    },
    fee: "$67.75",
    category:"knee",
  },

  {
    code: "D040",
    description: {
      __html: "Patella dislocation",
    },
    fee: "$62.20",
    category: "knee",
    blurb: "without sedation"
  },
  {
    code: "D031",
    description: {
      __html: "&#10551; with sedation",
    },
    fee: "$112.55",
    category: "knee",
    sedation: true,
  },
  {
    code: "D038",
    description: {
      __html: "Knee dislocation",
    },
    fee: "$207.90",
    category: "knee",
    blurb: "with closed reduction"
  },

  {
    code: "F078",
    description: {
      __html: "Tibia +/- fib #",
    },
    fee: "$115.95",
    category: "knee",
    blurb: "without sedation"
  },
  {
    code: "F079",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$180.05",
    category: "knee",
  },
  {
    code: "F082",
    description: {
      __html: "Fib #",
    },
    fee: "$67.75",
    category: "knee",
    blurb: "no reduction"
  },
  {
    code: "F083",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$101.25",
    category: "knee",
  },

  /* ankle, foot */

  {
    code: "F074",
    description: {
      __html: "Ankle #",
    },
    fee: "$67.75",
    category: "foot",
    blurb: "no reduction"
  },
  {
    code: "F075",
    description: {
      __html: "&#10551; closed reduction",
    },
    fee: "$101.25",
    category: "foot",
  },
  {
    code: "F104",
    description: {
      __html: "&#10551; with tibial Plafond burst",
    },
    fee: "$101.25",
    blurb: "closed reduction - not in July 2021 SoB",
    category: "foot",
  },
  {
    code: "D035",
    description: {
      __html: "Ankle dislocation",
    },
    fee: "$111.35",
    category: "foot",
    blurb: "with closed reduction"
  },
  {
    code: "F061",
    description: {
      __html: "Metatarsal #",
    },
    fee: "$49.20",
    category: "foot",
  },
  {
    code: "F062",
    description: {
      __html: "&#10551; with immobiliziation",
    },
    fee: "$67.20",
    category: "foot",
  },
  {
    code: "F063",
    description: {
      __html: "&#10551; with closed reduction",
    },
    fee: "$98.35",
    category: "foot",
  },

  {
    code: "D030",
    description: {
      __html: "Metatarsal dislocation",
    },
    fee: "$57.50",
    category: "foot",
  },
  {
    code: "E579",
    description: {
      __html: "&#10551; each additional",
    },
    fee: "$10.25",
    category: "foot",
  },
  {
    code: "F070",
    description: {
      __html: "OS Calcis",
    },
    fee: "$97.35",
    category: "foot",
  },
  {
    code: "F071",
    description: {
      __html: "&#10551; with closed reduction",
    },
    fee: "$161.45",
    category: "foot",
  },
  {
    code: "F066",
    description: {
      __html: "Tarsus #",
    },
    fee: "$98.10",
    blurb: "excluding Os",
    category: "foot",
  },
  {
    code: "F067",
    description: {
      __html: "&#10551; with closed reduction",
    },
    fee: "$165.20",
    category: "foot",
  },
  {
    code: "D033",
    description: {
      __html: "Tarsal dislocatin",
    },
    fee: "$147.60",
    blurb: "with closed reduction",
    category: "foot",
  },
  {
    code: "F057",
    description: {
      __html: "Phalanx #",
    },
    fee: "$147.60",
    blurb: "no reduction, rigid immobilization",
    category: "foot",
  },
  {
    code: "E560",
    description: { __html: "&#10551; each additional" },
    fee: "$12.05",
    notes: "",
    category: "foot",
    sedation: "",
  },
  {
    code: "F058",
    description: { __html: "&#10551; closed reduction" },
    fee: "$172.30",
    notes: "",
    category: "foot",
    sedation: "",
  },
  {
    code: "E61",
    description: { __html: "&#10551; each addditional" },
    fee: "$14.90",
    notes: "",
    blurb: "closed reduction", 
    category: "foot",
    sedation: "",
  },
  {
    code: "F060",
    description: { __html: "&#10551; each open reduction" },
    fee: "$172.30",
    notes: "",
    category: "foot",
    sedation: "",
  },
  {
    code: "F057",
    description: {
      __html: "IP joint intra-articular #",
    },
    fee: "$77.95",
    blurb: "closed reduction",
    category: "foot",
  },
  {
    code: "E560",
    description: { __html: "&#10551; open reduction" },
    fee: "$144.80",
    notes: "",
    category: "foot",
    sedation: "",
  },
  {
    code: "E578",
    description: { __html: "&#10551; each additional" },
    fee: "$10.25",
    notes: "",
    category: "foot",
    sedation: "",
  },

  /* Casts */

  {
    code: "Z204",
    description: {
      __html: "Cast removal",
    },
    fee: "$10.25",
    category: "cast",
  },
  {
    code: "Z201",
    description: { __html: "Finger" },
    fee: "$10.25",
    notes: "",
    category: "cast",
    sedation: "",
  },
  {
    code: "Z202",
    description: { __html: "Hand" },
    fee: "$14.90",
    notes: "",
    category: "cast",
    sedation: "",
  },
  {
    code: "Z203",
    description: {
      __html: "Forearm/wrist",
    },
    fee: "$24.10",
    category: "cast",
  },
  {
    code: "Z198",
    description: { __html: "Toes" },
    fee: "$10.25",
    notes: "",
    category: "cast",
    sedation: "",
  },
  {
    code: "Z213",
    description: { __html: "Below knee, knee splints" },
    fee: "$24.10",
    notes: "",
    category: "cast",
    sedation: "",
  },
  {
    code: "Z213",
    description: {
      __html: "Whole leg",
    },
    fee: "$28.80",
    category: "cast",
  },
  {
    code: "Z211",
    description: { __html: "Shoulder spica" },
    fee: "$97.35",
    notes: "",
    category: "cast",
    sedation: "",
  },

  /* other MSK */

  {
    code: "G370",
    description: { __html: "Injection/aspiration of joint/bursa" },
    fee: "$19.90",
    notes: "",
    category: "othermsk",
    sedation: "",
  },
  {
    code: "G370",
    description: { __html: "Aspiration/injection of complex joint" },
    fee: "$19.90",
    notes: "",
    category: "othermsk",
    sedation: "",
    blurb: "not knee",
  },
  {
    code: "E556",
    description: { __html: "Extensive debridement of open #" },
    fee: "+40% to F",
    notes: "",
    category: "othermsk",
    sedation: "",
    blurb: "",
  },
  {
    code: "G465",
    description: { __html: "Joint maniputation" },
    fee: "$13.80",
    notes: "",
    category: "othermsk",
    sedation: true,
    blurb: "with sedation",
  },




  


  /*Foreign body */

  {
    code: "Z114",
    description: {
      __html: "Skin and sc tissue",
    },
    fee: "$25.25",
    notes: "",
    category: "fb",
    blurb: "local anesthetic"
  },
  {
    code: "Z115",
    description: {
      __html: "Skin and sc tissue",
    },
    fee: "$25.25",
    notes: "",
    category: "fb",
    blurb: "with sedation",
    sedation: true,
  },
  {
    code: "R517",
    description: { __html: "Muscle - excision of FB" },
    fee: "$107.70",
    notes: "",
    category: "fb",
    sedation: "",
  },
  {
    code: "Z915",
    description: { __html: "FB ear removal - simple" },
    fee: "$10.55",
    notes: "",
    category: "fb",
    blurb: "",
  },
  {
    code: "Z866",
    description: { __html: "&#10551; with sedation" },
    fee: "$50.90",
    notes: "",
    category: "fb",
    blurb: "",
    sedation: true,
  },
 
  {
    code: "Z847",
    description: { __html: "Cornea FB" },
    fee: "$33.00",
    notes: "",
    category: "fb",
    blurb: "",
  },
  {
    code: "Z848",
    description: { __html: "&#10551; x2" },
    fee: "$45.00",
    notes: "",
    category: "fb",
    blurb: "",
  },
  {
    code: "Z311",
    description: { __html: "Nasal FB" },
    fee: "$10.55",
    notes: "",
    category: "ent",
    blurb: "",
  },
  {
    code: "Z541",
    description: { __html: "GI - FB removal with sedation" },
    fee: "$58.15",
    notes: "",

    category: "fb",
    sedation: "yes",
  },

  {
    code: "Z322",
    description: { __html: "Laryngoscopy with FB removal" },
    fee: "$106.45",
    notes: "",
    category: "fb",
    blurb: "",
  },
 
  {
    code: "Z432",
    description: { __html: "EUA (may include removal of vaginal FB)" },
    fee: "$54.10",
    notes: "",
    blurb: "with or without intubation",
    category: "fb",
    sedation: true,
  },










  





















];

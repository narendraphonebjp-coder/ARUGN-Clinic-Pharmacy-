export const PORTRAIT_IMAGE = "/src/assets/images/dr_soni_portrait_1780986626823.png";
export const CLINIC_ENTRANCE_IMAGE = "/src/assets/images/arugn_clinic_entrance_1780986647863.png";
export const CLINIC_WARD_IMAGE = "/src/assets/images/arugn_clinic_ward_1780986665779.png";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "body-pain",
    title: "Body Pain",
    category: "General Medicine",
    description: "Body pain is defined as discomfort or soreness felt in numerous places of the body. It might be minor to severe, localised to a certain place, or affect numerous regions."
  },
  {
    id: "diabetes",
    title: "Diabetes",
    category: "Chronic Care",
    description: "Diabetes is a chronic medical disorder characterised by elevated blood glucose (sugar). It occurs when the body either does not create enough insulin (a hormone that regulates blood sugar) or does not use the insulin that it does produce adequately."
  },
  {
    id: "hypertension",
    title: "Hyper Tension",
    category: "Chronic Care",
    description: "Hypertension, also known as high blood pressure, is a chronic medical disorder characterised by excessive artery blood pressure. Blood pressure is the force produced by blood against the artery walls as the heart circulates it throughout the body."
  },
  {
    id: "jaundice",
    title: "Jaundice",
    category: "Liver & Gastrointestinal",
    description: "Jaundice is a medical disorder that causes a yellowing of the skin, eyes, and mucous membranes as a result of bilirubin buildup in the body. Bilirubin is a yellow pigment formed during red blood cell disintegration."
  },
  {
    id: "diarrhoea",
    title: "Diarrhoea",
    category: "Acute Diseases",
    description: "Diarrhoea is a condition in which the bowel movements are frequent, loose, or watery. It is frequently accompanied by a strong desire to use the loo and can be accompanied by abdominal pain, cramps, bloating, and dehydration. Diarrhoea can be acute (short-term) or chronic (long-term)."
  },
  {
    id: "abdominal-pain",
    title: "Abdominal Pain",
    category: "Liver & Gastrointestinal",
    description: "Abdominal pain is defined as discomfort or pain felt in the area between the chest and pelvis, which is generally referred to as the abdomen. It can range from mild to severe, and be caused by a variety of factors."
  },
  {
    id: "anemia",
    title: "Anemia",
    category: "Blood Disorders",
    description: "Anemia is characterised by a low level of red blood cells or a decrease in the amount of hemoglobin (a protein that transports oxygen) in the blood. Red blood cells and hemoglobin are required for oxygen delivery to the body's tissues."
  },
  {
    id: "fungal-infection",
    title: "Fungal Infection",
    category: "Infections & Skin",
    description: "A fungal infection, commonly known as a mycosis, is a fungus-caused infection. Fungi are microorganisms found in a variety of habitats such as the air, soil, plants, and human or animal bodies. While some fungi are harmless, some can cause human illnesses."
  },
  {
    id: "dengue",
    title: "Dengue",
    category: "Infections & Skin",
    description: "Dengue fever is a viral infection spread to humans by the bite of an infected Aedes mosquito, primarily Aedes aegypti. It is a major public health hazard, particularly in the world's tropical and subtropical climates."
  },
  {
    id: "hyperthyroidism",
    title: "Hyperthyroidism",
    category: "Endocrinology",
    description: "Hyperthyroidism is a medical disorder characterised by the thyroid gland's overproduction of thyroid hormones. The thyroid gland, which is positioned in front of the neck, regulates metabolism and other body activities."
  },
  {
    id: "chronic-liver-disease",
    title: "Chronic Liver Disease",
    category: "Liver & Gastrointestinal",
    description: "Chronic liver disease is a persistent and long-term disorder that affects the liver's structure and function. It can be caused by a variety of factors, such as viral infections (such as hepatitis B and C), alcohol addiction, autoimmune diseases, metabolic problems, hereditary conditions."
  },
  {
    id: "coronary-artery-diseases",
    title: "Coronary Artery Diseases",
    category: "Cardiovascular",
    description: "Coronary artery disease (CAD) is a condition in which the arteries that carry oxygen-rich blood to the heart muscle narrow or get clogged. It is the most frequent type of heart disease and the most common cause of heart attacks."
  },
  {
    id: "myocardial-infraction",
    title: "Myocardial Infraction",
    category: "Cardiovascular",
    description: "Myocardial infarction, often known as a heart attack, happens when blood flow to a segment of the heart muscle is suddenly cut off, causing damage or death to the affected tissue. It is a critical medical situation that necessitates quick attention and treatment."
  },
  {
    id: "viral-fever",
    title: "Viral Fever",
    category: "Acute Diseases",
    description: "Viral fever is a group of infectious disorders produced by many types of viruses. It is also known as viral infection or viral illness. Viral fevers are prevalent and can affect persons of all ages. They are frequently transmitted through respiratory droplets, direct contact with infected individual."
  },
  {
    id: "stroke",
    title: "Stroke",
    category: "Neurology",
    description: "Stroke, also known as a cerebrovascular accident (CVA), happens when the blood flow to a portion of the brain is interrupted or diminished, causing brain cells to be damaged or killed. Strokes are a medical emergency that must be treated right away."
  },
  {
    id: "paralysis",
    title: "Paralysis",
    category: "Neurology",
    description: "The lack of muscle function in part or all of the body, usually as a result of nervous system damage, is referred to as paralysis. Paresis, which affects only specific muscles or body parts, or plegia, which affects an entire region or side of the body."
  },
  {
    id: "obesity",
    title: "Obesity",
    category: "Chronic Care",
    description: "Obesity is a medical disorder characterised by an abnormal buildup of body fat, which has a negative impact on health. It is generally described by body mass index (BMI), which is computed by dividing a person's weight in kilogrammes by their height in metres squared."
  },
  {
    id: "kidney-failure",
    title: "Kidney Failure",
    category: "Renal & Pulmonary",
    description: "Kidney failure, also known as end-stage renal disease (ESRD), happens when the kidneys are no longer able to operate properly to keep the body running normally. It is a severe ailment that necessitates medical attention and treatment."
  },
  {
    id: "copd",
    title: "Chronic Obstructive Pulmonary Disease - COPD",
    category: "Renal & Pulmonary",
    description: "COPD, or chronic obstructive pulmonary disease, is a progressive lung illness that limits airflow and makes breathing difficult. Long-term exposure to irritants that harm the lungs, most often cigarette smoke, is a major cause."
  },
  {
    id: "asthma",
    title: "Asthma",
    category: "Renal & Pulmonary",
    description: "Asthma is a chronic respiratory disorder characterised by airway inflammation and constriction, resulting in frequent bouts of wheezing, coughing, chest tightness, and shortness of breath. It is a prevalent disorder that affects people of all ages, with varying degrees of severity."
  },
  {
    id: "hypothyroidism",
    title: "Hypothyroidism",
    category: "Endocrinology",
    description: "Hypothyroidism is a disorder in which the thyroid gland is underactive and does not produce enough thyroid hormones to meet the body's needs. Thyroid hormones play an important part in the body's metabolism, growth, and development. Both men and women are affected by hypothyroidism."
  }
];

export interface ClinicFacility {
  title: string;
  description: string;
}

export const FACILITIES: ClinicFacility[] = [
  { title: "Day Care", description: "Fully-equipped daycare observation beds with monitoring for convenient, short-stay therapeutic procedures." },
  { title: "ECG", description: "Instant electrocardiogram diagnostic sweeps for swift estimation of cardiac rhythms." },
  { title: "Nebulization", description: "Fast delivery of liquid medication aerosolized into mist directly to airways for severe respiratory ailments." },
  { title: "Blood Pressure Monitoring", description: "Continuous, professional automated pressure observation." },
  { title: "Blood Sugar Testing", description: "On-the-spot rapid glucometer screens for diabetic diagnostics." },
  { title: "Wound Dressing", description: "Pragmatic sterile dressings, minor incisions, stitches and sanitary burn treatments." },
  { title: "Vaccination", description: "Comprehensive adult and pediatric immunization support against localized vector infections." },
  { title: "Injections (IV & IM)", description: "Skilled intravenous or intramuscular pharmacological applications administered on order." },
  { title: "Physiotherapy", description: "Musculoskeletal support, range-of-motion routines, and localized pain alleviation guidance." },
  { title: "Discounted Medicines & Pharmacy", description: "In-house ARUGN Pharmacy providing genuine discount drug dispatch." }
];

export const TIMELINE_ITEMS = [
  {
    year: "MBBS",
    title: "Bachelor of Medicine & Surgery",
    institution: "Recognized Medical University, India",
    location: "Clinical Honors"
  },
  {
    year: "MD",
    title: "Doctor of Medicine (General Medicine)",
    institution: "Post-Graduate Medical College",
    location: "Specialist Certification"
  },
  {
    year: "REG",
    title: "Licensed Medical Practitioner",
    institution: "State Medical Council",
    location: "Registration No. 18991"
  },
  {
    year: "NOW",
    title: "Chief Consultant Physician",
    institution: "Founder, Arugn Clinic & Day Care, Bhopal",
    location: "Established Practice"
  }
];

export const CLINIC_METADATA = {
  name: "Arugn Clinic",
  doctorName: "Dr. Abhinay Krishna Soni",
  qualification: "MBBS, MD (Medicine)",
  registration: "Reg. No. 18991",
  address: "Shop No 10/11, Raj Avenue, Minal Residency, Mall, 1, JK Rd, near Minal Shopping Street, Madhya Pradesh 462041",
  phone: "089629 18193",
  opdHours: "6:30 PM To 10:00 PM",
  daycareHours: "8:00 AM To 10:00 PM",
  labPartner: "Dr. Lal Pathlabs Collection Centre"
};

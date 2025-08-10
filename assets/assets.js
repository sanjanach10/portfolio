import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import cartoon_img from "./kuromi-sitting.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  cartoon_img,
};

export const workData = [
  {
    title: "Design of UAV Enabled Response System",
    description:
      "Developed a Path Planning Algorithm for the drone and object detection using YOLO.",
    bgImage: "/work-1.png",
    link: "https://github.com/sanjanach10",
  },
  {
    title: "Fraud Detection in Credit Card Transactions",
    description:
      "Built a binary classifier using different Classifiers - RandomForest, XGMBoost, CatBoost, AdaBoost, LightGBM to detect fraudulent transactions achieving accuracy of 98%",
    link: "https://github.com/sanjanach10/Fraud_Detection",
  },
  {
    title: "MNIST Handwritten Digit Recognition",
    description:
      "Used a multi-layer neural netwrok and achieved over 97% accuracy using ReLu activation function.",
    bgImage: "/work-2.png",
    link: "https://github.com/sanjanach10/MNIST-Classification",
  },
  {
    title: "Diabetes Prediction",
    description:
      "Built a binary classifier using SVM model to predict diabetes achieving accuracy of 80%",
    bgImage: "/work-3.png",
    link: "https://github.com/sanjanach10/db_prediction",
  },
  {
    title: "Sales Dashboard",
    description:
      "Built a PowerBI dashboard to visualize sales data across various categories.",
    link: "https://github.com/sanjanach10/bi_dashboard",
    bgImage: "/work-4.png",
  },
];

// export const serviceData = [
//   {
//     icon: assets.web_icon,
//     title: "Web design",
//     description: "Web development is the process of building, programming...",
//     link: "",
//   },
//   {
//     icon: assets.mobile_icon,
//     title: "Mobile app",
//     description:
//       "Mobile app development involves creating software for mobile devices...",
//     link: "",
//   },
//   {
//     icon: assets.ui_icon,
//     title: "UI/UX design",
//     description:
//       "UI/UX design focuses on creating a seamless user experience...",
//     link: "",
//   },
//   {
//     icon: assets.graphics_icon,
//     title: "Graphics design",
//     description: "Creative design solutions to enhance visual communication...",
//     link: "",
//   },
// ];

export const serviceData = [
  {
    company: "ArcelorMittal Nippon Steel India",
    role: "Graduate Engineer Trainee",
    link: "https://www.amns.in/",
    points: [
      "Collaborated with AI teams of Darsa AI to deploy only models with 90%+ F1-score, reducing false negatives.",
      "Labelled datasets, monitored model performance, and deployed models to production.",
      "Led a team of 4 to develop a Quality Assurance Matrix - a Six Sigma project, reducing rework/rejection by 40% and cutting monthly production delays by 23%.",
      "Built PowerBI dashboards consolidating KPIs from 8 locations for improved energy monitoring.",
      "Developed Excel-based shift wise KPI tracking, speeding up root-cause analysis by 25%.",
      "Skilled in SAP S/4 HANA in production, quality, and service operations, managing reservations, PR/SPR, clearance, FG movements, and NC handling",
      "Developed a NLP semantic similarity with the sentence - BERT(Sentence-Transformers) model for Standard Operating Procedures (SOPs) and Job Cycle Checks(JCCs) to reduce manual effort in finding similar SOPs.",
    ],
  },
  //   {
  //     company: "",
  //     role: "",
  //     points: [
  //       "Completed intermediate studies with a strong foundation in mathematics, physics, and computer science.",
  //     ],
  //   },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Python, Java, SQL, HTML, CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech 2024 Graduate from NIT Allahabad",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description:
      "Built multiple projects. Please find them on my Github. Or you can contact me for more details.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.mongodb,
  assets.figma,
  assets.firebase,
  assets.git,
];

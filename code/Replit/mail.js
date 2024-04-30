const firebaseConfig = {
  apiKey: "<put your account cred>",
  authDomain: "<put your account cred>",
  databaseURL: "<put your account cred>",
  projectId: "<put your account cred>",
  storageBucket: "<put your account cred>",
  messagingSenderId: "<put your account cred>",
  appId: "<put your account cred>",
  measurementId: "<put your account cred>"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage
const storage = firebase.storage();

// Reference to your database
const ghsProfileDB = firebase.database().ref("GHSProfile");

document.getElementById("profileForm").addEventListener("submit", submitForm);

// Function to get values from checkboxes, handle exception
function getCheckboxValues(checkboxName) {
  var checkboxes = document.getElementsByName(checkboxName);
  var values = [];
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      values.push(checkbox.value);
    }
  });
  return values.join(','); // Combine values into a comma-separated string
}





// Function to handle form submission
function submitForm(e) {
  e.preventDefault();

  // Section 1 Get form data
  const sec0_formTimestamp = getElementVal("formTimestamp")
  const sec11_schoolName = getElementVal("schoolName");
  const sec12_teacherName = getElementVal("teacherName")
  const sec13_teacherEmail = getElementVal("teacherEmail")
  const sec14_numberStudent = getElementVal("numberStudent")
  const sec15_numberTeacherAndFaculty = getElementVal("numberTeacherAndFaculty")

  // // School Level and Subject Section
  const sec21_schoolLevel = getElementVal("schoolLevel");
  const sec22_enterclasses = getElementVal("enterclass");

  //<!-- Section 6: Student Environmental Projects -->
  const sec61_projectParticipants = getElementVal("projectParticipants");
  const sec62_projectDescription = getElementVal("projectDescription");
  const sec63_outcomeImpact = getElementVal("outcomeImpact");
  const sec64_Number_students_included_in_Project = getElementVal("numStudentsInvolved");
  const sec65_NumberTeachersInvolved = getElementVal("numTeachersInvolved");

  // Section 7: Community Partners
  const sec71_schoolPartner = getElementVal("schoolPartner");
  const sec72_communityPartner = getElementVal("communityPartner");
  const sec73_Number_students_included_in_Community_Partnership = getElementVal("numStudentPartnership");
  const sec74_Number_Teacher_Involved = getElementVal("sec7_numTeacherInvolved");
  const sec75_fieldTrip = getElementVal("fieldTrip");
  const sec76_fieldTripSite = getElementVal("fieldTripSite")
  const sec77_Number_students_included_in_fieldTrip = getElementVal("numStudentsAttended");

  // Section 8: Food Waste
  const sec81_foodWasteParticipation = getElementVal("foodWasteParticipation");
  const sec82_foodWasteStrategy = getElementVal("foodWasteStrategy");
  const sec83_foodWastePound = getElementVal("foodWastePound");
  const sec84_shareTablePound = getElementVal("shareTablePound");
  const sec85_Number_students_included_in_Project = getElementVal("numStudentSection8");
  const sec86_Number_Teacher_Involved = getElementVal("numTeacherSection8");

  // Section 9: Composting
  var sec91_compostStatus = getElementVal("compostStatus");
  var sec92_compostingItems = getElementVal("compostingItems");
  var sec93_collectionProcess = getElementVal("collectionProcess");
  var sec94_compostUsage = getElementVal("compostUsage");
  var sec95_foodWaste = getElementVal("foodWaste");
  var sec96_Number_students_included_in_Project = getElementVal("numStudentSection9");
  var sec97_Number_Teacher_Involved = getElementVal("numTeacherSection9");


  // Section 10: School Gardens & Outdoor Learning Spaces
  const tsec101_schoolGardenStatus = getElementVal("schoolGardenStatus");
  const tsec102_learningAreas = getElementVal("learningAreas");
  const tsec103_foodDonation = getElementVal("foodDonation");
  const tsec104_distributionMethod = getElementVal("distributionMethod");
  const tsec105_Number_students_included_in_Project = getElementVal("numStudentSection10");
  const tsec106_Number_Teacher_Involved = getElementVal("numTeacherSection10")

  // Section 11: Indoor Growing Systems
  const tsec111_indoorGrowingSystemCategories = getElementVal("indoorGrowingSystemCategories");
  const tsec112_foodDonationSection11 = getElementVal("foodDonationSection11");
  const tsec113_distributionMethodSection11 = getElementVal("distributionMethodSection11");
  const tsec114_Number_students_included_in_Project = getElementVal("numStudentSection11");
  const tsec115_Number_Teacher_Involved = getElementVal("numTeacherSection11");

  // Section 12: Grants and Funding for Environmental Projects
  const tsec121_grantsFunding = getElementVal("grantsFunding")
  const tsec122_grantsSponsor = getElementVal("grantsSponsor")
  const tsec123_grantAmount = getElementVal("grantAmount")
  const tsec124_grantsUtilization = getElementVal("grantsUtilization")


  // Section 13: Recycling
  const tsec131_recyclingCategories = getElementVal("recyclingCategories")
  const tsec132_recyclingCompany = getElementVal("recyclingCompany")
  const tsec133_recyclingCost = getElementVal("recyclingCost")
  const tsec134_Number_students_included_in_Project = getElementVal("numStudentParticipationSection13");
  const tsec135_Number_Teacher_Involved = getElementVal("numTeacherInvolvedSection13");

  // Section 14: Water Education
  const tsec141_waterEducationInput = getElementVal("waterEducationInput")
  const tsec142_waterEducationProjects = getElementVal("waterEducationProjects")
  const tsec143_waterEducationDates = getElementVal("waterEducationDates")
  const tsec144_Number_students_included_in_Project = getElementVal("waterEducationParticipants")
  const tsec145_waterEducationTime = getElementVal("waterEducationTime")
  const tsec146_Number_Teacher_Involved = getElementVal("numTeacherInvolvedSection14")

  // Section 15: Images and ImageURL
  const images = document.getElementById('projectImages').files;
  const tsec151_imageURL = getElementVal("imageURL");




  // Save profile data to Realtime Database
  saveProfileData(sec0_formTimestamp, sec11_schoolName, sec12_teacherName, sec13_teacherEmail, sec14_numberStudent, sec15_numberTeacherAndFaculty, sec21_schoolLevel, sec22_enterclasses, sec61_projectParticipants, sec62_projectDescription, sec63_outcomeImpact, sec64_Number_students_included_in_Project, sec65_NumberTeachersInvolved, sec71_schoolPartner, sec72_communityPartner, sec73_Number_students_included_in_Community_Partnership, sec74_Number_Teacher_Involved, sec75_fieldTrip, sec76_fieldTripSite, sec77_Number_students_included_in_fieldTrip, sec81_foodWasteParticipation, sec82_foodWasteStrategy, sec83_foodWastePound, sec84_shareTablePound, sec85_Number_students_included_in_Project, sec86_Number_Teacher_Involved, sec91_compostStatus, sec92_compostingItems, sec93_collectionProcess, sec94_compostUsage, sec95_foodWaste, sec96_Number_students_included_in_Project, sec97_Number_Teacher_Involved, tsec101_schoolGardenStatus, tsec102_learningAreas, tsec103_foodDonation, tsec104_distributionMethod, tsec105_Number_students_included_in_Project, tsec106_Number_Teacher_Involved, tsec111_indoorGrowingSystemCategories, tsec112_foodDonationSection11, tsec113_distributionMethodSection11, tsec114_Number_students_included_in_Project, tsec115_Number_Teacher_Involved, tsec121_grantsFunding, tsec122_grantsSponsor, tsec123_grantAmount, tsec124_grantsUtilization, tsec131_recyclingCategories, tsec132_recyclingCompany, tsec133_recyclingCost, tsec134_Number_students_included_in_Project, tsec135_Number_Teacher_Involved, tsec141_waterEducationInput, tsec142_waterEducationProjects, tsec143_waterEducationDates, tsec144_Number_students_included_in_Project, tsec145_waterEducationTime, tsec146_Number_Teacher_Involved, tsec151_imageURL);


  // Save images to Firebase Storage
  if (images.length > 0) {
    saveImagesToStorage(images);
  }

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("profileForm").reset();
}

// Function to save profile data to Realtime Database
function saveProfileData(sec0_formTimestamp, sec11_schoolName, sec12_teacherName, sec13_teacherEmail, sec14_numberStudent, sec15_numberTeacherAndFaculty, sec21_schoolLevel, sec22_enterclasses, sec61_projectParticipants, sec62_projectDescription, sec63_outcomeImpact, sec64_Number_students_included_in_Project, sec65_NumberTeachersInvolved, sec71_schoolPartner, sec72_communityPartner, sec73_Number_students_included_in_Community_Partnership, sec74_Number_Teacher_Involved, sec75_fieldTrip, sec76_fieldTripSite, sec77_Number_students_included_in_fieldTrip, sec81_foodWasteParticipation, sec82_foodWasteStrategy, sec83_foodWastePound, sec84_shareTablePound, sec85_Number_students_included_in_Project, sec86_Number_Teacher_Involved, sec91_compostStatus, sec92_compostingItems, sec93_collectionProcess, sec94_compostUsage, sec95_foodWaste, sec96_Number_students_included_in_Project, sec97_Number_Teacher_Involved, tsec101_schoolGardenStatus, tsec102_learningAreas, tsec103_foodDonation, tsec104_distributionMethod, tsec105_Number_students_included_in_Project, tsec106_Number_Teacher_Involved, tsec111_indoorGrowingSystemCategories, tsec112_foodDonationSection11, tsec113_distributionMethodSection11, tsec114_Number_students_included_in_Project, tsec115_Number_Teacher_Involved, tsec121_grantsFunding, tsec122_grantsSponsor, tsec123_grantAmount, tsec124_grantsUtilization, tsec131_recyclingCategories, tsec132_recyclingCompany, tsec133_recyclingCost, tsec134_Number_students_included_in_Project, tsec135_Number_Teacher_Involved, tsec141_waterEducationInput, tsec142_waterEducationProjects, tsec143_waterEducationDates, tsec144_Number_students_included_in_Project, tsec145_waterEducationTime, tsec146_Number_Teacher_Involved, tsec151_imageURL) {


  const newProfileEntry = ghsProfileDB.push();
  newProfileEntry.set({

    sec0_formTimestamp: sec0_formTimestamp,
    sec11_schoolName: sec11_schoolName,
    sec12_teacherName: sec12_teacherName,
    sec13_teacherEmail: sec13_teacherEmail,
    sec14_numberStudent: sec14_numberStudent,
    sec15_numberTeacherAndFaculty: sec15_numberTeacherAndFaculty,


    sec21_schoolLevel: sec21_schoolLevel,
    sec22_enterclasses: sec22_enterclasses,

    sec61_projectParticipants: sec61_projectParticipants,
    sec62_projectDescription: sec62_projectDescription,
    sec63_outcomeImpact: sec63_outcomeImpact,
    sec64_Number_students_included_in_Project: sec64_Number_students_included_in_Project,
    sec65_NumberTeachersInvolved: sec65_NumberTeachersInvolved,

    sec71_schoolPartner: sec71_schoolPartner,
    sec72_communityPartner: sec72_communityPartner,
    sec73_Number_students_included_in_Community_Partnership: sec73_Number_students_included_in_Community_Partnership,
    sec74_Number_Teacher_Involved: sec74_Number_Teacher_Involved,
    sec75_fieldTrip: sec75_fieldTrip,
    sec76_fieldTripSite: sec76_fieldTripSite,
    sec77_Number_students_included_in_fieldTrip: sec77_Number_students_included_in_fieldTrip,

    sec81_foodWasteParticipation: sec81_foodWasteParticipation,
    sec82_foodWasteStrategy: sec82_foodWasteStrategy,
    sec83_foodWastePound: sec83_foodWastePound,
    sec84_shareTablePound: sec84_shareTablePound,
    sec85_Number_students_included_in_Project: sec85_Number_students_included_in_Project,
    sec86_Number_Teacher_Involved: sec86_Number_Teacher_Involved,

    sec91_compostStatus: sec91_compostStatus,
    sec92_compostingItems: sec92_compostingItems,
    sec93_collectionProcess: sec93_collectionProcess,
    sec94_compostUsage: sec94_compostUsage,
    sec95_foodWaste: sec95_foodWaste,
    sec96_Number_students_included_in_Project: sec96_Number_students_included_in_Project,
    sec97_Number_Teacher_Involved: sec97_Number_Teacher_Involved,

    tsec101_schoolGardenStatus: tsec101_schoolGardenStatus,
    tsec102_learningAreas: tsec102_learningAreas,
    tsec103_foodDonation: tsec103_foodDonation,
    tsec104_distributionMethod: tsec104_distributionMethod,
    tsec105_Number_students_included_in_Project: tsec105_Number_students_included_in_Project,
    tsec106_Number_Teacher_Involved: tsec106_Number_Teacher_Involved,

    tsec111_indoorGrowingSystemCategories: tsec111_indoorGrowingSystemCategories,
    tsec112_foodDonationSection11: tsec112_foodDonationSection11,
    tsec113_distributionMethodSection11: tsec113_distributionMethodSection11,
    tsec114_Number_students_included_in_Project: tsec114_Number_students_included_in_Project,
    tsec115_Number_Teacher_Involved: tsec115_Number_Teacher_Involved,

    tsec121_grantsFunding: tsec121_grantsFunding,
    tsec122_grantsSponsor: tsec122_grantsSponsor,
    tsec123_grantAmount: tsec123_grantAmount,
    tsec124_grantsUtilization: tsec124_grantsUtilization,

    tsec131_recyclingCategories: tsec131_recyclingCategories,
    tsec132_recyclingCompany: tsec132_recyclingCompany,
    tsec133_recyclingCost: tsec133_recyclingCost,
    tsec134_Number_students_included_in_Project: tsec134_Number_students_included_in_Project,
    tsec135_Number_Teacher_Involved: tsec135_Number_Teacher_Involved,

    tsec141_waterEducationInput: tsec141_waterEducationInput,
    tsec142_waterEducationProjects: tsec142_waterEducationProjects,
    tsec143_waterEducationDates: tsec143_waterEducationDates,
    tsec144_Number_students_included_in_Project: tsec144_Number_students_included_in_Project,
    tsec145_waterEducationTime: tsec145_waterEducationTime,
    tsec146_Number_Teacher_Involved: tsec146_Number_Teacher_Involved,

    tsec151_imageURL: tsec151_imageURL,





  });
}



// Function to get values from form elements
function getElementVal(id) {
  return document.getElementById(id).value;
}


// Function to save images to Firebase Storage
function saveImagesToStorage(images) {
  Array.from(images).forEach(image => {
    const imageName = image.name;
    const imageRef = storage.ref('project_images/' + imageName);
    const uploadTask = imageRef.put(image);

    // Update progress bar if needed
    uploadTask.on('state_changed',
      function(snapshot) {
        // Observe state change events such as progress, pause, and resume
      },
      function(error) {
        // Handle unsuccessful uploads
        console.error('Error uploading image:', error);
      },
      function() {
        // Handle successful uploads on complete
        console.log('Image uploaded successfully:', imageName);
      }
    );
  });
}

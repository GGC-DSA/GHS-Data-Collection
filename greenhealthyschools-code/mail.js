const firebaseConfig = {
  apiKey: "AIzaSyADAfZyKvPOP3D5m0Jk63AqTt4VZV79xVc",
  authDomain: "ghs-data-f3556.firebaseapp.com",
  databaseURL: "https://ghs-data-f3556-default-rtdb.firebaseio.com",
  projectId: "ghs-data-f3556",
  storageBucket: "ghs-data-f3556.appspot.com",
  messagingSenderId: "836187381877",
  appId: "1:836187381877:web:83caa961316d10bb35583c",
  measurementId: "G-SV9DJ25P5E"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference to your database
var ghsProfileDB = firebase.database().ref("GHSProfile");

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








function submitForm(e) {
  e.preventDefault();

  var schoolName = getElementVal("schoolName");
  var teacherName = getElementVal("teacherNames");
  var teacherEmail = getElementVal("teacherEmails");
  var numberStudent1 = getElementVal("numberStudent1");

  // Section: School Level
  var schoolLevel = getElementVal("schoolLevel");
  var elementaryClassEnter = getElementVal("elementaryClassEnter");
  var middleClassEnter = getElementVal("middleClassEnter");
  var highClassEnter = getElementVal("highClassEnter");

  //<!-- Section 6: Student Environmental Projects -->
  var projectParticipants = getElementVal("projectParticipants");
  var projectDescription = getElementVal("projectDescription");
  var outcomeImpact = getElementVal("outcomeImpact");
  var numStudentsInvolved = getElementVal("numStudentsInvolved");

  // Section 7: Community Partners
  var schoolPartner = getElementVal("schoolPartner");
  var communityPartner = getElementVal("communityPartner");
  var numStudentPartnership = getElementVal("numStudentPartnership");
  var fieldTrip = getElementVal("fieldTrip");
  var fieldTripSite = getElementVal("fieldTripSite")
  var numStudentsAttended = getElementVal("numStudentsAttended");

  // Section 8: Food Waste
  var foodWasteParticipation = getElementVal("foodWasteParticipation")
  var foodWasteStrategy = getElementVal("foodWasteStrategy")
  var foodWastePound = getElementVal("foodWastePound")
  var shareTablePound = getElementVal("shareTablePound")
  var numStudentSection8 = getElementVal("numStudentSection8")

  // Section 9: Composting
  var compostStatus = getElementVal("compostStatus")
  var compostingItems = getElementVal("compostingItems")
  var collectionProcess = getElementVal("collectionProcess")
  var compostUsage = getElementVal("compostUsage")
  var foodWaste = getElementVal("foodWaste")
  var numStudentSection9 = getElementVal("numStudentSection9")

  // Section 10: School Gardens & Outdoor Learning Spaces
  var schoolGardenStatus = getElementVal("schoolGardenStatus")
  var learningAreas = getElementVal("learningAreas")
  var foodDonation = getElementVal("foodDonation")
  var distributionMethod = getElementVal("distributionMethod")
  var numStudentSection10 = getElementVal("numStudentSection10")

  // // Section 11: Indoor Growing Systems
  var indoorGrowingSystemCategories = getCheckboxValues("indoorGrowingSystemCategories");
  var foodDonationSection11 = getElementVal("foodDonationSection11");
  var distributionMethodSection11 = getElementVal("distributionMethodSection11");
  var numStudentSection11 = getElementVal("numStudentSection11");

  // Section 12: Grants and Funding for Environmental Projects
  var grantsFunding = getElementVal("grantsFunding")
  var grantsSponsor = getElementVal("grantsSponsor")
  var grantAmount = getElementVal("grantAmount")
  var grantsUtilization = getElementVal("grantsUtilization")

  // Section 13: Recycling
  var recyclingCategories = getElementVal("recyclingCategories")
  var recyclingCompany = getElementVal("recyclingCompany")
  var recyclingCost = getElementVal("recyclingCost")
  var numStudentParticipationSection13 = getElementVal("numStudentParticipationSection13");

  // Section 14: Water Education
  var waterEducationInput = getElementVal("waterEducationInput")
  var waterEducationProjects = getElementVal("waterEducationProjects")
  var waterEducationDates = getElementVal("waterEducationDates")
  var waterEducationParticipants = getElementVal("waterEducationParticipants")
  var waterEducationTime = getElementVal("waterEducationTime")


  // Image handling
  const projectImages = document.getElementById("projectImages").files;
  const imageURL = getElementVal("imageURL");


  saveProfileData(schoolName, teacherName, teacherEmail, numberStudent1, schoolLevel, elementaryClassEnter, middleClassEnter, highClassEnter, projectParticipants, projectDescription, outcomeImpact, numStudentsInvolved, schoolPartner, communityPartner, numStudentPartnership, fieldTrip, fieldTripSite, numStudentsAttended, foodWasteParticipation, foodWasteStrategy, foodWastePound, shareTablePound, numStudentSection8, compostStatus, compostingItems, collectionProcess, compostUsage, foodWaste, numStudentSection9, schoolGardenStatus, learningAreas, foodDonation, distributionMethod, numStudentSection10, indoorGrowingSystemCategories, foodDonationSection11, distributionMethodSection11, numStudentSection11, grantsFunding, grantsSponsor, grantAmount, grantsUtilization, recyclingCategories, recyclingCompany, recyclingCost, numStudentParticipationSection13, waterEducationInput, waterEducationProjects, waterEducationDates, waterEducationParticipants, waterEducationTime, projectImages, imageURL);



  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("profileForm").reset();
}





const saveProfileData = (schoolName, teacherName, teacherEmail, numberStudent1, schoolLevel, elementaryClassEnter, middleClassEnter, highClassEnter, projectParticipants, projectDescription, outcomeImpact, numStudentsInvolved, schoolPartner, communityPartner, numStudentPartnership, fieldTrip, fieldTripSite, numStudentsAttended, foodWasteParticipation, foodWasteStrategy, foodWastePound, shareTablePound, numStudentSection8, compostStatus, compostingItems, collectionProcess, compostUsage, foodWaste, numStudentSection9, schoolGardenStatus, learningAreas, foodDonation, distributionMethod, numStudentSection10, indoorGrowingSystemCategories, foodDonationSection11, distributionMethodSection11, numStudentSection11, grantsFunding, grantsSponsor, grantAmount, grantsUtilization, recyclingCategories, recyclingCompany, recyclingCost, numStudentParticipationSection13, waterEducationInput, waterEducationProjects, waterEducationDates, waterEducationParticipants, waterEducationTime, projectImages, imageURL) => {



  var newProfileEntry = ghsProfileDB.push();

  newProfileEntry.set({
    schoolName: schoolName,
    teacherName: teacherName,
    teacherEmail: teacherEmail,
    numberStudent1: numberStudent1,

    schoolLevel: schoolLevel,
    elementaryClassEnter,
    middleClassEnter,
    highClassEnter,

    projectParticipants,
    projectDescription,
    outcomeImpact,
    numStudentsInvolved,

    schoolPartner,
    communityPartner,
    numStudentPartnership,
    fieldTrip,
    fieldTripSite,
    numStudentsAttended,

    foodWasteParticipation,
    foodWasteStrategy,
    foodWastePound,
    shareTablePound,
    numStudentSection8,

    compostStatus,
    compostingItems,
    collectionProcess,
    compostUsage,
    foodWaste,
    numStudentSection9,

    schoolGardenStatus,
    learningAreas,
    foodDonation,
    distributionMethod,
    numStudentSection10,

    indoorGrowingSystemCategories,
    foodDonationSection11,
    distributionMethodSection11,
    numStudentSection11,

    grantsFunding,
    grantsSponsor,
    grantAmount,
    grantsUtilization,

    recyclingCategories,
    recyclingCompany,
    recyclingCost,
    numStudentParticipationSection13,

    waterEducationInput,
    waterEducationProjects,
    waterEducationDates,
    waterEducationParticipants,
    waterEducationTime,

    // imageFile,
    projectImages,
    imageURL


  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};






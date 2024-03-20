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








function submitForm(e) {
  e.preventDefault();

  const schoolName = getElementVal("schoolName");
  const teacherName = getElementVal("teacherNames");
  const teacherEmail = getElementVal("teacherEmails");
  const numberStudent1 = getElementVal("numberStudent1");

  // Section: School Level
  const schoolLevel = getElementVal("schoolLevel");
  const elementaryClassEnter = getElementVal("elementaryClassEnter");
  const middleClassEnter = getElementVal("middleClassEnter");
  const highClassEnter = getElementVal("highClassEnter");

  //<!-- Section 6: Student Environmental Projects -->
  const projectParticipants = getElementVal("projectParticipants");
  const projectDescription = getElementVal("projectDescription");
  const outcomeImpact = getElementVal("outcomeImpact");
  const numStudentsInvolved = getElementVal("numStudentsInvolved");

  // Section 7: Community Partners
  const schoolPartner = getElementVal("schoolPartner");
  const communityPartner = getElementVal("communityPartner");
  const numStudentPartnership = getElementVal("numStudentPartnership");
  const fieldTrip = getElementVal("fieldTrip");
  const fieldTripSite = getElementVal("fieldTripSite")
  const numStudentsAttended = getElementVal("numStudentsAttended");

  // Section 8: Food Waste
  const foodWasteParticipation = getElementVal("foodWasteParticipation")
  const foodWasteStrategy = getElementVal("foodWasteStrategy")
  const foodWastePound = getElementVal("foodWastePound")
  const shareTablePound = getElementVal("shareTablePound")
  const numStudentSection8 = getElementVal("numStudentSection8")

  // Section 9: Composting
  var compostStatus = getElementVal("compostStatus")
  var compostingItems = getElementVal("compostingItems")
  var collectionProcess = getElementVal("collectionProcess")
  var compostUsage = getElementVal("compostUsage")
  var foodWaste = getElementVal("foodWaste")
  var numStudentSection9 = getElementVal("numStudentSection9")

  // Section 10: School Gardens & Outdoor Learning Spaces
  const schoolGardenStatus = getElementVal("schoolGardenStatus")
  const learningAreas = getElementVal("learningAreas")
  const foodDonation = getElementVal("foodDonation")
  const distributionMethod = getElementVal("distributionMethod")
  const numStudentSection10 = getElementVal("numStudentSection10")

  // // Section 11: Indoor Growing Systems
  const indoorGrowingSystemCategories = getCheckboxValues("indoorGrowingSystemCategories");
  const foodDonationSection11 = getElementVal("foodDonationSection11");
  const distributionMethodSection11 = getElementVal("distributionMethodSection11");
  const numStudentSection11 = getElementVal("numStudentSection11");

  // Section 12: Grants and Funding for Environmental Projects
  const grantsFunding = getElementVal("grantsFunding")
  const grantsSponsor = getElementVal("grantsSponsor")
  const grantAmount = getElementVal("grantAmount")
  const grantsUtilization = getElementVal("grantsUtilization")

  // Section 13: Recycling
  const recyclingCategories = getElementVal("recyclingCategories")
  const recyclingCompany = getElementVal("recyclingCompany")
  const recyclingCost = getElementVal("recyclingCost")
  const numStudentParticipationSection13 = getElementVal("numStudentParticipationSection13");

  // Section 14: Water Education
  const waterEducationInput = getElementVal("waterEducationInput")
  const waterEducationProjects = getElementVal("waterEducationProjects")
  const waterEducationDates = getElementVal("waterEducationDates")
  const waterEducationParticipants = getElementVal("waterEducationParticipants")
  const waterEducationTime = getElementVal("waterEducationTime")


  // Section 15: Images and ImageURL
  const images = document.getElementById('projectImages').files;
  const imageURL = getElementVal("imageURL");


  saveProfileData(schoolName, teacherName, teacherEmail, numberStudent1, schoolLevel, elementaryClassEnter, middleClassEnter, highClassEnter, projectParticipants, projectDescription, outcomeImpact, numStudentsInvolved, schoolPartner, communityPartner, numStudentPartnership, fieldTrip, fieldTripSite, numStudentsAttended, foodWasteParticipation, foodWasteStrategy, foodWastePound, shareTablePound, numStudentSection8, compostStatus, compostingItems, collectionProcess, compostUsage, foodWaste, numStudentSection9, schoolGardenStatus, learningAreas, foodDonation, distributionMethod, numStudentSection10, indoorGrowingSystemCategories, foodDonationSection11, distributionMethodSection11, numStudentSection11, grantsFunding, grantsSponsor, grantAmount, grantsUtilization, recyclingCategories, recyclingCompany, recyclingCost, numStudentParticipationSection13, waterEducationInput, waterEducationProjects, waterEducationDates, waterEducationParticipants, waterEducationTime, imageURL);


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
function saveProfileData(schoolName, teacherName, teacherEmail, numberStudent1, schoolLevel, elementaryClassEnter, middleClassEnter, highClassEnter, projectParticipants, projectDescription, outcomeImpact, numStudentsInvolved, schoolPartner, communityPartner, numStudentPartnership, fieldTrip, fieldTripSite, numStudentsAttended, foodWasteParticipation, foodWasteStrategy, foodWastePound, shareTablePound, numStudentSection8, compostStatus, compostingItems, collectionProcess, compostUsage, foodWaste, numStudentSection9, schoolGardenStatus, learningAreas, foodDonation, distributionMethod, numStudentSection10, indoorGrowingSystemCategories, foodDonationSection11, distributionMethodSection11, numStudentSection11, grantsFunding, grantsSponsor, grantAmount, grantsUtilization, recyclingCategories, recyclingCompany, recyclingCost, numStudentParticipationSection13, waterEducationInput, waterEducationProjects, waterEducationDates, waterEducationParticipants, waterEducationTime, imageURL) {

  const newProfileEntry = ghsProfileDB.push();
  newProfileEntry.set({

    schoolName: schoolName,
    teacherName: teacherName,
    teacherEmail: teacherEmail,
    numberStudent1: numberStudent1,

    schoolLevel: schoolLevel,
    elementaryClassEnter: elementaryClassEnter,
    middleClassEnter: middleClassEnter,
    highClassEnter: highClassEnter,

    projectParticipants: projectParticipants,
    projectDescription: projectDescription,
    outcomeImpact: outcomeImpact,
    numStudentsInvolved: numStudentsInvolved,

    schoolPartner: schoolPartner,
    communityPartner: communityPartner,
    numStudentPartnership: numStudentPartnership,
    fieldTrip: fieldTrip,
    fieldTripSite: fieldTripSite,
    numStudentsAttended: numStudentsAttended,

    foodWasteParticipation: foodWasteParticipation,
    foodWasteStrategy: foodWasteStrategy,
    foodWastePound: foodWastePound,
    shareTablePound: shareTablePound,
    numStudentSection8: numStudentSection8,

    compostStatus: compostStatus,
    compostingItems: compostingItems,
    collectionProcess: collectionProcess,
    compostUsage: compostUsage,
    foodWaste: foodWaste,
    numStudentSection9: numStudentSection9,

    schoolGardenStatus: schoolGardenStatus,
    learningAreas: learningAreas,
    foodDonation: foodDonation,
    distributionMethod: distributionMethod,
    numStudentSection10: numStudentSection10,

    indoorGrowingSystemCategories: indoorGrowingSystemCategories,
    foodDonationSection11: foodDonationSection11,
    distributionMethodSection11,
    numStudentSection11: distributionMethodSection11,

    grantsFunding: grantsFunding,
    grantsSponsor: grantsSponsor,
    grantAmount: grantAmount,
    grantsUtilization: grantsUtilization,

    recyclingCategories: recyclingCategories,
    recyclingCompany: recyclingCompany,
    recyclingCost: recyclingCost,
    numStudentParticipationSection13: numStudentParticipationSection13,

    waterEducationInput: waterEducationInput,
    waterEducationProjects: waterEducationProjects,
    waterEducationDates: waterEducationDates,
    waterEducationParticipants: waterEducationParticipants,
    waterEducationTime: waterEducationTime,

    imageURL: imageURL,
  });
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

// Function to get values from form elements
function getElementVal(id) {
  return document.getElementById(id).value;
}




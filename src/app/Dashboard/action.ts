"use server"
import { teamInformation } from "./teams/AddTeam"
import { Resend } from "resend"

// Dashboard TS:
export type ProgressData = {
  weekly: {
    percentage: number
    target: number
    currentProfit: number
  },
  monthly: {
    percentage: number
    target: number
    currentProfit: number
  }
}


// Site TS:
export type site = {
  id: number
  SiteName: string
  Location: string
  Details: string
  Rate: number
  MainPhoto: string
  SecondaryPhotos: {
    id: number
    SecondaryPhoto: string
  }[]
} 
export type sites = site[] 

// User TS:
export type TouristsData = {
  user_id: string,
  FirstName: string,
  LastName: string,
  Email: string,
  Number: string,
  Age: number,
}[]

// Trip TS:
export type TripData = {
    id: number,
    team_id: string,
    TeamName: string,
    Title: string,
    StartDate: string,
    EndDate: string,
    StartBooking: string,
    EndBooking: string,
    Type: string,
    Location: string,
    Level: string,
    SubLimit: number,
    Cost: number,
    Description: string,
    Retrieve: string,
    Requirements: string,
    Rate: number,
    TripPhoto: string,   
    RetrieveEndDate: number,
    Percent: number,
    contestants: number,
    Status: string
}
export type TripsData = TripData[]

// Team TS:
export type TeamData = {
  team_id: number,
  TeamName: string,
  Email: string,
  Description: string,
  ContactInfo: string,
  Rate: number,
  Wallet: number,
  ProfilePhoto: string,    
  Followers: number,
  trips: TripsData
}
export type TeamsData = {
  team_id: number,
  TeamName: string,
  Email: string,
  Description: string,
  ContactInfo: string,
  Rate: number,
  Wallet: number,
  ProfilePhoto: string,    
  Followers: number,
}[]




// Information: 
const TripsData = [
  {
  id: 0,
  team_id: "0",
  TeamName: "Dorob",
  Title: "Old Damascus Trip",
  StartDate: "25-10-2024",
  EndDate: "30-10-2024",
  StartBooking: "20-10-2024",
  EndBooking: "24-10-2024",
  Type: "Cultural",
  Location: "Syria, Damascus",
  Level: "Medium",
  SubLimit: 20,
  Cost: 200000,
  Description: "we will take you with us in incredible trip",
  Retrieve: "No Retrieving",
  Requirements: "No Requirements",
  Rate: 4,
  TripPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx19WXPsSqcSApQOAJx4sNBLLylWXZSJa1J4SLeTIFbJSNmnIC3kPqsvq9-2ijAIkh_tI&usqp=CAU",   
  RetrieveEndDate: 0,
  Percent: 0,
  contestants: 8,
  Status: "Opened"
}
]

const TouristsData = [
  {
  user_id: "0",
  FirstName: "John",
  LastName: "Rafeal",
  Email: "john@gmail.com",
  Number: "0998899887",
  Age: 18,
},
  {
  user_id: "1",
  FirstName: "Alex",
  LastName: "Semo",
  Email: "Alex@gmail.com",
  Number: "0998899887",
  Age: 23,
},
  {
  user_id: "2",
  FirstName: "Samer",
  LastName: "Adel",
  Email: "Samer@gmail.com",
  Number: "0998899887",
  Age: 45,
},
]

const sites = [
  {
  id: 0,
  SiteName: "Damascus",
  Location: "Syria",
  Details: "Damascus is the capital and largest city of Syria, the oldest current capital in the world and, according to some, the fourth holiest city in Islam.",
  Rate: 4,
  MainPhoto: "/sites/old1.avif",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "/sites/old2.jpg",
  },
    {
    id: 1,
    SecondaryPhoto: "/sites/old3.jpg",
  },
    {
    id: 2,
    SecondaryPhoto: "/sites/old4.jpg",
  },
  ]
  },
  {
  id: 1,
  SiteName: "Bab Toma",
  Location: "Damascus",
  Details: "The most famous place in old Damascus.",
  Rate: 5,
  MainPhoto: "/sites/bab1.jpg",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "/sites/bab2.webp",
  },
    {
    id: 1,
    SecondaryPhoto: "/sites/bab3.webp",
  },
    {
    id: 2,
    SecondaryPhoto: "/sites/bab4.jpg",
  },
  ]
  },
  {
  id: 2,
  SiteName: "Tadmor",
  Location: "Syria",
  Details: "Palmyra (Syrian Tadmor) is an ancient city in an oasis in the Syrian desert, between Damascus and Euphrates.",
  Rate: 5,
  MainPhoto: "/sites/tad1.jpg",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "/sites/tad2.jpg",
  },
    {
    id: 1,
    SecondaryPhoto: "/sites/tad3.jpg",
  },
    {
    id: 2,
    SecondaryPhoto: "/sites/tad4.jpeg",
  },
  ]
  },
  {
  id: 3,
  SiteName: "Mashta helou",
  Location: "Syria",
  Details: "Mashta al-Helu is a town and resort in northwestern Syria, administratively part of the Tartus Governorate, located 35 kilometers east of Tartus.",
  Rate: 5,
  MainPhoto: "/sites/m1.jpg",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "/sites/m2.jpg",
  },
    {
    id: 1,
    SecondaryPhoto: "/sites/m3.jpeg",
  },
    {
    id: 2,
    SecondaryPhoto: "/sites/m4.jpg",
  },
  ]
  },
] 


//------------APIs---------------:
// done
export async function getTeamsData() {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/team/all`)
    
  //   if(!response.ok) {
  //     throw new Error("Something Wrong!");
  //   }
    
  //   const information = await response.json();
  //     return {data: information.data}
  const TeamsData = [
    {
    team_id: 0,
    TeamName: "Dorob",
    Email: "dorob@gmail.com",
    Description: "Team members often plan and coordinate multiple trips to various locations across Syria, coordinating logistics, guides, and accommodations for large groups of travelers. They work closely with local tour operators and guides to ensure smooth operations and provide valuable insights to tourists exploring historical sites and cultural landmarks throughout the country.",
    ContactInfo: "0994422777",
    Rate: 4,
    Wallet: 250,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZSgkyzP5hE3CBDOyp6svZqL9ZR51rydhDw&s",    
    Followers: 150,
  },
    {
    team_id: 1,
    TeamName: "Ana Alsori",
    Email: "AnaAlsori@gmail.com",
    Description: "Teams responsible for organizing numerous trips across Syria face unique logistical challenges, balancing security concerns with providing memorable experiences for travelers. Coordinating transportation, accommodations, and guides for multiple destinations within the country requires meticulous planning and adaptability. These travel managers must stay informed about rapidly changing conditions in various regions of Syria.",
    ContactInfo: "0994422777",
    Rate: 3,
    Wallet: 650,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbL4N5XW2c8goCia9Z_ce702NSq5Hpj2ZjQ&s",    
    Followers: 550,
  },
    {
    team_id: 2,
    TeamName: "Amoaj",
    Email: "Amoaj@gmail.com",
    Description: "Travel teams in Syria face significant logistical challenges when organizing trips to various locations across the country. They must navigate complex security situations, coordinate with local guides and tour operators, and manage the intricacies of traveling in a region with ongoing conflicts. Despite these difficulties, experienced travel coordinators in Syria work tirelessly to plan memorable journeys for visitors, balancing safety concerns with the desire to showcase the country's rich cultural heritage sites and natural wonders.",
    ContactInfo: "0994422777",
    Rate: 2,
    Wallet: 850,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6--kiTz8G36s6uqeNNVgzT2giS8cfOsyPdoxOai5xKjCyVd-6yRJ9K-qEvcYzCpQQ0s&usqp=CAU",    
    Followers: 50,
  },
    {
    team_id: 3,
    TeamName: "bladna",
    Email: "bladna@gmail.com",
    Description: "Welcome, our team is offering a lot of trips to the most beautiful places in Syria.",
    ContactInfo: "0994422777",
    Rate: 5,
    Wallet: 950,
    ProfilePhoto: "https://static.vecteezy.com/system/resources/previews/009/653/852/non_2x/modern-and-professional-travel-logo-vector.jpg",    
    Followers: 950,
  },
  ]
  return {data: TeamsData}
}

// done:
export async function addTeam(values : teamInformation) {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/team/add`,{
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ 
  //     TeamName: values.teamName,
  //     Email: values.email,
  //     ContactInfo: values.phoneNumber,
  //     Password: values.password
  //   })
  // })
      
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
  return true
}

// done
export async function getTeam(teamId : number) {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/team/${teamId}`)
    
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
  // const information = await response.json();
  //   return {data: information.data}
  const TeamsData = [
    {
    team_id: 0,
    TeamName: "Dorob",
    Email: "dorob@gmail.com",
    Description: "Team members often plan and coordinate multiple trips to various locations across Syria, coordinating logistics, guides, and accommodations for large groups of travelers. They work closely with local tour operators and guides to ensure smooth operations and provide valuable insights to tourists exploring historical sites and cultural landmarks throughout the country.",
    ContactInfo: "0994422777",
    Rate: 4,
    Wallet: 250,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZSgkyzP5hE3CBDOyp6svZqL9ZR51rydhDw&s",    
    Followers: 150,
    trips: TripsData
  },
    {
    team_id: 1,
    TeamName: "Ana Alsori",
    Email: "AnaAlsori@gmail.com",
    Description: "Teams responsible for organizing numerous trips across Syria face unique logistical challenges, balancing security concerns with providing memorable experiences for travelers. Coordinating transportation, accommodations, and guides for multiple destinations within the country requires meticulous planning and adaptability. These travel managers must stay informed about rapidly changing conditions in various regions of Syria.",
    ContactInfo: "0994422777",
    Rate: 3,
    Wallet: 650,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbL4N5XW2c8goCia9Z_ce702NSq5Hpj2ZjQ&s",    
    Followers: 550,
    trips: []
  },
    {
    team_id: 2,
    TeamName: "Amoaj",
    Email: "Amoaj@gmail.com",
    Description: "Travel teams in Syria face significant logistical challenges when organizing trips to various locations across the country. They must navigate complex security situations, coordinate with local guides and tour operators, and manage the intricacies of traveling in a region with ongoing conflicts. Despite these difficulties, experienced travel coordinators in Syria work tirelessly to plan memorable journeys for visitors, balancing safety concerns with the desire to showcase the country's rich cultural heritage sites and natural wonders.",
    ContactInfo: "0994422777",
    Rate: 2,
    Wallet: 850,
    ProfilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6--kiTz8G36s6uqeNNVgzT2giS8cfOsyPdoxOai5xKjCyVd-6yRJ9K-qEvcYzCpQQ0s&usqp=CAU",    
    Followers: 50,
    trips: []
  },
    {
    team_id: 3,
    TeamName: "bladna",
    Email: "bladna@gmail.com",
    Description: "Welcome, our team is offering a lot of trips to the most beautiful places in Syria.",
    ContactInfo: "0994422777",
    Rate: 5,
    Wallet: 950,
    ProfilePhoto: "https://static.vecteezy.com/system/resources/previews/009/653/852/non_2x/modern-and-professional-travel-logo-vector.jpg",    
    Followers: 950,
    trips: []
  },
  ]
  return {data: TeamsData[teamId]}
}

// done
export async function deleteTeam(teamId : number) {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/team/blacklist/${teamId}`)
      
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
  return true
}

// done
export async function getTripsData() {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/trip/all`)
      
  //     if(!response.ok) {
  //       throw new Error("Something Wrong!");
  //     }
  //     const information = await response.json();
  //       return {data: information.data}
  return {data: TripsData}
}

// done
export async function getTrip(tripId : number) {
  //   const TripData = {
  //     id: 1,
  //     team_id: 1,
  //     TeamName: "Dorob",
  //     Title: "Beach Trip",
  //     StartDate: "2024-5-1",
  //     EndDate: "2024-5-5",
  //     StartBooking: "2024-4-25",
  //     EndBooking: "2024-4-30",
  //     Type: "done",
  //     Location: "Latakia, Blue beach",
  //     Level: "Easy",
  //     SubLimit: "50",
  //     Cost: "500",
  //     Description: "You will make a perfect moments with us by join our nice trips",
  //     Retrieve: "false",
  //     Requirements: "No Requirements",
  //     Rate: "4",
  //     TripPhoto: "/bg1.jpeg",   
  //     RetrieveEndDate: 0,
  //     Percent: 0,
  //     contestants: 40,
  //     Status: "done"
  // }
  //     return {data: TripData}

    // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/trip/details/${tripId}`)
        
    // if(!response.ok) {
    //   throw new Error("Something Wrong!");
    // }
    // const information = await response.json();
    //   return {data: information.data}
  
  return {data: TripsData[tripId]}
  }

// done
export async function getTouristsData() {
    // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/user/all`)
      
    // if(!response.ok) {
    //   throw new Error("Something Wrong!");
    // }
    // const information = await response.json();
    //   return {data: information.data}
      return {data: TouristsData}
}

// done
export async function getSitesData() {
    // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/all`)
      
    // if(!response.ok) {
    //   throw new Error("Something Wrong!");
    // }
    // const information = await response.json();
      // return {data: information.data}
      return {data: sites}
}

// done
export async function getSite(siteId : number) {
  // const data : site = {
  //     id: 5,
  //     SiteName: "Bab sharqe",
  //     Location: "dfhs",
  //     Details: "The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. The most beautiful place in old Damascus that reflect our civilizations and History. ",
  //     Rate: 0,
  //     MainPhoto: "/bg1.jpeg",
  //     SecondaryPhotos: [
  //       {
  //         id: 1,
  //         SecondaryPhoto: "/bg3.jpeg"
  //       },
  //       {
  //         id: 2,
  //         SecondaryPhoto: "/bg2.jpeg"
  //       },
  //       {
  //         id: 3,
  //         SecondaryPhoto: "/bg1.jpeg"
  //       },
  //     ],
  //   }
  //   return {data: data}

  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/${siteId}`)
    
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
  // const information = await response.json();
  //   return {data: information.data}
    
  return {data: sites[siteId]}
}

// done
export async function addSite({siteName ,location ,description, files}: {
  siteName: string; 
  location: string; 
  description?: string;
  files: string[]
}) {
  
  // let siteNameData = siteName 
  // let locationData = location 
  // let descriptionData = description 
  // let MainPhoto = files[0]
  // let SecondaryPhotos = files.splice(1)


  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/add/new`,{
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ 
  //     SiteName: siteNameData,
  //     Location: locationData,
  //     Details: descriptionData,
  //     MainPhoto: MainPhoto,
  //     SecondaryPhotos: SecondaryPhotos
  //   })
  // })

  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }

  return true
}

// done
export async function updateSite({ id, description, newFiles, oldFiles, isContainMain}: {
  id: number,
  description?: string;
  newFiles?: string[];
  oldFiles?: string[];
  isContainMain: boolean
}) 
{
// let response 

// if(isContainMain) {
//   let MainPhoto = newFiles?.at(0)
//   let SecondaryPhotos = newFiles?.splice(1).concat(oldFiles!)
//   console.log(MainPhoto)
//   console.log(SecondaryPhotos)
//   response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/update`, {
//     method: "PATCH",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       id: id, 
//       Details: description,
//       MainPhoto: MainPhoto,
//       SecondaryPhotos: SecondaryPhotos
//     })
//   })
// } else {
//   let MainPhoto = oldFiles?.at(0)
//   let SecondaryPhotos = oldFiles?.splice(1).concat(newFiles!)
//   console.log(MainPhoto)
//   console.log(SecondaryPhotos)
//   response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/update`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       id: id,
//       Details: description,
//       MainPhoto: MainPhoto,
//       SecondaryPhotos: SecondaryPhotos
//     })
//   })
// }
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
return true
}

// done
export async function deleteSite(siteId : number) {
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/site/delete/${siteId}`)
      
  // if(!response.ok) {
  //   throw new Error("Something Wrong!");
  // }
  return true
}

// Dashboard:

// done
export async function getProgressData() {
//   const weekly = {
//     percentage: 20,
//     target: 1_000_000,
//     currentProfit: 200_000
// }

// const monthly = {
//     percentage: 50,
//     target: 10_000_000,
//     currentProfit: 5_000_000
// }

// return { data: {
//   weekly: weekly,
//   monthly: monthly
// } }
  
  
  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/dashboard/financialAchievement`)
  //     if(!response.ok) {
  //       throw new Error("Something Wrong!");
  //     }
  //     const information = await response.json();
        
  //     return { 
  //         weekly: {
  //           name: "Weekly aim",
  //           percentage: (information.data.financialDifferenceByWeek/ 1_000_000) * 100,
  //           target: 1_000_000,
  //           currentProfit: information.data.financialDifferenceByWeek
  //         },
  //         monthly: {
  //           name: "Monthly aim",
  //           percentage: (information.data.financialDifferenceByMonth/ 10_000_000) * 100,
  //           target: 10_000_000,
  //           currentProfit: information.data.financialDifferenceByMonth
  //         }
  //     }
      return { 
          weekly: {
            name: "Weekly aim",
            percentage: (200_000/ 1_000_000) * 100,
            target: 1_000_000,
            currentProfit: 200_000
          },
          monthly: {
            name: "Monthly aim",
            percentage: (5_000_000/ 10_000_000) * 100,
            target: 10_000_000,
            currentProfit: 5_000_000
          }
      }
}

// done
export async function getDonutData() {
//   const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/dashboard/trip/statistics`)
      
//       if(!response.ok) {
//         throw new Error("Something Wrong!");
//       }
//       const information = await response.json();
//       const data = information.data

// return { 
//   data: {
//   levels: {
//     name: "Level of trips",
//     data: [{
//       name: 'Easy',
//       sales: data.byLevel.easyTripsCount,
//     },
//     {
//       name: 'Medium',
//       sales: data.byLevel.mediumTripsCount,
//     },
//     {
//       name: 'Hard',
//       sales: data.byLevel.hardTripsCount,
//     }],
//     colors: ['teal-500', 'teal-600', 'teal-700']
//   },
//   types: {
//     name: "Type of trips",
//     data: [{
//       name: 'Tour',
//       sales: data.byType.tourTripsCount,
//     },
//     {
//       name: 'Adventure',
//       sales: data.byType.adventureTripsCount,
//     },
//     {
//       name: 'Cultural',
//       sales: data.byType.culturalTripsCount,
//     },
//     {
//       name: 'Excursions',
//       sales: data.byType.excursionsTripsCount,
//     },
//     {
//       name: 'Leisure',
//       sales: data.byType.leisureTripsCount,
//     },
//   ],
//   colors: ['teal-500', 'teal-600', 'teal-700', 'teal-800', 'teal-900']
//   },
//   rates: {
//     name: "Rate of trips",
//     data: data.byRate.map((ele : { range: string; count: number }) => (
//       {
//         name: ele.range,
//         sales: ele.count,
//       }
//     ))
//     ,
//   colors: [ 'teal-400', 'teal-500', 'teal-600', 'teal-700', 'teal-800']
//   },
// }}
return { 
  data: {
  levels: {
    name: "Level of trips",
    data: [{
      name: 'Easy',
      sales: 2,
    },
    {
      name: 'Medium',
      sales: 3,
    },
    {
      name: 'Hard',
      sales: 1,
    }],
    colors: ['teal-500', 'teal-600', 'teal-700']
  },
  types: {
    name: "Type of trips",
    data: [{
      name: 'Tour',
      sales: 2,
    },
    {
      name: 'Adventure',
      sales: 1,
    },
    {
      name: 'Cultural',
      sales: 1,
    },
    {
      name: 'Excursions',
      sales: 1,
    },
    {
      name: 'Leisure',
      sales: 1,
    },
  ],
  colors: ['teal-500', 'teal-600', 'teal-700', 'teal-800', 'teal-900']
  },
  rates: {
    name: "Rate of trips",
    data: [
      {range: '0 - 1', count: 1},
      {range: '1 - 2', count: 1},
      {range: '2 - 3', count: 1},
      {range: '3 - 4', count: 1},
      {range: '4 - 5', count: 1},
    ].map((ele : { range: string; count: number }) => (
      {
        name: ele.range,
        sales: ele.count,
      }
    ))
    ,
  colors: [ 'teal-400', 'teal-500', 'teal-600', 'teal-700', 'teal-800']
  },
}}

}

// done
export async function getAreaData() {
  const chartdata = [
    {
      date: "Jan 23",
      Dorob: 2890,
      AnaAlsori: 2338,
    },
    {
      date: "Feb 23",
      Dorob: 2756,
      AnaAlsori: 2103,
    },
    {
      date: "Mar 23",
      Dorob: 3322,
      AnaAlsori: 2194,
    },
    {
      date: "Apr 23",
      Dorob: 3470,
      AnaAlsori: 2108,
    },
    {
      date: "May 23",
      Dorob: 3475,
      AnaAlsori: 1812,
    },
    {
      date: "Jun 23",
      Dorob: 3129,
      AnaAlsori: 1726,
    },
    {
      date: "Jul 23",
      Dorob: 3490,
      AnaAlsori: 1982,
    },
    {
      date: "Aug 23",
      Dorob: 2903,
      AnaAlsori: 2012,
    },
    {
      date: "Sep 23",
      Dorob: 2643,
      AnaAlsori: 2342,
    },
    {
      date: "Oct 23",
      Dorob: 2837,
      AnaAlsori: 2473,
    },
    {
      date: "Nov 23",
      Dorob: 2954,
      AnaAlsori: 3848,
    },
    {
      date: "Dec 23",
      Dorob: 3239,
      AnaAlsori: 3736,
    },
  ]

  // const response = await fetch(`http://${process.env.URL_HOSTNAME}/api/admin/dashboard/team/top`)
      
  //     if(!response.ok) {
  //       throw new Error("Something Wrong!");
  //     }
  //     const information = await response.json();
  //     return { data: information.data }
  return {data : chartdata}
}
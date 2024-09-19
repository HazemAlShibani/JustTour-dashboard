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
  MainPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx19WXPsSqcSApQOAJx4sNBLLylWXZSJa1J4SLeTIFbJSNmnIC3kPqsvq9-2ijAIkh_tI&usqp=CAU",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacweXZzQxbOenOWYZuPZ7zDJQN_xE65WlKjgIvQRoFqZN-49SyrpNZHxz5mMpLWgAuG8&usqp=CAU",
  },
    {
    id: 1,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsaJYwGZLmQVteaqskCoMn30WpOy0Ilyxjw&s",
  },
    {
    id: 2,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mN-8rgj9EMDG2CqeFcvF8l2KUJCxbscjiundfs-6mQf0OOHsjeBjJYikp8-bUimCuLw&usqp=CAU",
  },
  ]
  },
  {
  id: 1,
  SiteName: "Bab Toma",
  Location: "Damascus",
  Details: "The most famous place in old Damascus.",
  Rate: 5,
  MainPhoto: "data:image/jpeg;base64,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",
  SecondaryPhotos: [
    {
    id: 0,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8Yh2_QbtLou_b51UWKFnRYvS7SwG35BFgA&s",
  },
    {
    id: 1,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevHZcP6khh08uc_OkDv36TB-kkPwM71sv4PCnEAbw4VVGQDheYa0dRBrf6_bj4e1_ivg&usqp=CAU",
  },
    {
    id: 2,
    SecondaryPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKsAgZcQ07KSfHnnis9bDren6f-H2NNpSFa8-fjjUH2eYd94a7NWdHoBbbEckIcqvBKA&usqp=CAU",
  },
  ]
  }
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
    team_id: 3,
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
    team_id: 4,
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
    team_id: 3,
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
    team_id: 4,
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
export const months = [
  "January",

  "February",

  "March",

  "April",

  "May",

  "June",

  "July",

  "August",

  "September",

  "October",

  "November",

  "December",
];

export const monthOptions = months.map(month =>({
    value:month,
    label:month
}))


export type TFilterParams = { name: string; value: string }[]


export const genderOptions = [
  {value:"Male", label:"Male"},
  {value:"Female", label:"Female"},
]

export const bloodGroupOptions = [
  {value:"A+", label:"A+"},
  {value:"A-", label:"A-"},
  {value:"B-", label:"B-"},
  {value:"B+", label:"B+"},
  {value:"AB+", label:"AB+"},
  {value:"AB-", label:"AB-"},
  {value:"O-", label:"O-"},
  {value:"O+", label:"O+"},
]


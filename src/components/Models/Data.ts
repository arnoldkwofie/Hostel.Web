


export interface Building {
  id: number
  name: string
  buildingType?: BuildingType
  ownershipType?: OwnershipType
  genderOption?: Gender
  geolocation?: Geolocation
  address: string
  description?: string 
  picture:string,
  reviews:string,
  priceRange:string,
  amenities?: string[]

}

export interface Floor{
  id:number,
  buildingId: number,
  floorNumber: number,
  description: string,
  rooms:Room[]
}

export interface Room{
  id: number,
  roomNumber: string,
  roomType:string,
  hostel: string,
  price: number,
  capacity: number,
  slotLeft:number,
  beds:Bed[]
}

export interface RoomType{
  id:number,
  roomId:number,
  bedNumber: number,
  bedType: number,
  bedPosition: number
}



export interface Bed{
  id: number,
  bedNumber: number,
  BedStatus:BedStatus
}

export interface Ammenity{
  id:number,
  roomId: number,
  name:string
}

enum BuildingType {
  hostel =1,
  apartment,
  facility 
}

export enum BedStatus{
  available=1,
  booked,
  reserved
}

enum OwnershipType{
  public =1 ,
  private
}

enum Gender{
  male = 1,
  female,
  mixed
}

export interface Picture{
  path: string
}

export interface Geolocation {
  longitude: string,
  latitude: string
}



export interface Student {
  studentNumber: string
  indexNumber: string
  yearGroup: YearGroup
  studentStatus: number
  studentType: string
  studentSection: number
  programme: Programme
  party: Party
}

export interface YearGroup {
  admittedYear: number
  classYear: number
  value: number
}

export interface Programme {
  id: number
  name: string
  department: Department
}

export interface Department {
  id: number
  name: string
}

export interface Party {
  name: Name
}

export interface Name {
  firstName: string
  lastName: string
  otherName: string
}

export interface AcademicPeriod {
  academicYear: string
  lowerYear: number
  upperYear: number
  semester: number
}

export interface Document {
  id: number
  submissionId: number
  name: string
  documentType: number
  versions: Version[]
}

export interface Version {
  id: number
  documentId: number
  name: string
  path: string
}

export interface SubmissionHistory {
  id: number
  submissionId: number
  partyId: number
  activity: string
  activityDate: string
}



export interface ReconstructedDataRow {
  id: number;
  studentNumber: string;
  title: string;
}

export interface BookingData {
  isBooked: boolean
  isOwned: boolean
  hostel: string
  room: string
  bed: string
  expiryDate: Date
  confirmtionDate: Date
}

export interface OrderItem {
  id: number;
  name: string;
  description: string;
  amount: number;
  quantity: number;
}

export interface Order {
  studentNumber: string;
  phoneVerificationId: number;
  phoneNumber: string;
  orderType: number;
  lastName: string;
  otherNames: string;
  email: string;
  orderItems: OrderItem[];
  deliveryAddressCostId: number;
  deliveryMode: number;
  description: string;
  channelType: number;
}

export interface Payload {
  payload: Order;
}
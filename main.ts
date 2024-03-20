type PersonType = {
    firstName: string;
    lastName: string;
    idNumber: string;
    isStudent: boolean;
    interests: string[];
    location: AddressType;
  };
  
  interface AddressType {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
  
  
  var person: PersonType = {
    firstName: "Kashmala",
    lastName: "Khan",
    idNumber: "12345",
    isStudent: true,
    interests: ["artNcraft", "sports", "reading"],
    location: {
      street: "123 Main Street",
      city: "Karachi",
      country: "Pakistan",
      postalCode: "12345",
    },
  };
  
  var address: AddressType = {
    street: "123 Main Street",
    city: "Karachi",
    country: "Pakistan",
    postalCode: "12345",
  };
  
  
  console.log(person);
  console.log(address);
  
  // Type Alias Examples
  type BrandName = string;
  var brand: BrandName = "Khaddi";
  
  type FriendCount = number;
  var friendCount: FriendCount = 42;
  
  console.log(brand);
  console.log(friendCount);
  
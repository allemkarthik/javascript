
 // call back function
    //   function fun1(b) {
    //     console.log("guptha: o peru cheptha rasuko");
    //     b(fun4);
    //   }
    //   function fun2(a) {
    //     console.log("guptha: pavanuuu");
    //     a(fun3);
    //   }
    //   function fun3(c) {
    //     console.log("pavan: cheppu annaya");
    //     c(fun5);
    //   }
    //   function fun4(d) {
    //     console.log("guptha: guptha 50 veyillu");

    //     d(fun6);
    //   }
    //   function fun5(e) {
    //     console.log("pavan: kutha 50 veyelu");
    //     e(fun7);
    //   }
    //   function fun6(f) {
    //     console.log("guptha: kutha kadhu ra guptha");
    //     f(fun8);
    //   }
    //   function fun7(g) {
    //     console.log("pavan: kukka");
    //     g(fun9);
    //   }
    //   function fun8(h) {
    //     console.log(
    //       "guptha: pavannu nen vioce record pamputhanu dhanin bati rayi"
    //     );
    //     h(fun10);
    //   }
    //   function fun9(i) {
    //     console.log("pavan:  pareldh cheppu anaya ");
    //     i(fun11);
    //   }
    //   function fun10(j) {
    //     console.log("guptha: guptha");
    //     j(fun12);
    //   }
    //   function fun11(k) {
    //     console.log("pavan: kukka");
    //     k(fun13);
    //   }
    //   function fun12(l) {
    //     console.log(
    //       "guptha: pavanu dabblu vishyam lo serious ga thisuko tharuvatha p******************"
    //     );
    //     l(fun14);
    //   }
    //   function fun13(m) {
    //     console.log("pavan: mari cheeppu anaya");
    //     m(fun15);
    //   }
    //   function fun14(n) {
    //     console.log("guptha: pavanuu  nak mental thepinchaku");
    //     n(fun16);
    //   }
    //   function fun15(o) {
    //     console.log("pavan:  sariga cheppu anaya nak osthadhi mentalu");
    //     o(fun17);
    //   }
    //   function fun16(p) {
    //     console.log("gutpha: ory guptha ra ");
    //     p(fun18);
    //   }
    //   function fun17(q) {
    //     console.log("pavan: cokkerrrrrrrrrr");
    //     q();
    //   }
    //   function fun18() {
    //     console.log("guptha:  me mama p***************************");
    //   }
    //   fun2(fun1);

    // array iteration method
    // for each=> return function does not work here,it will change the original array
    // let arr=["karthik","jinnu","jethu","kalyan","chandu"]
    // arr.forEach((val,ind,arr)=>{
    //     console.log(val);
    //     return val
        
    // })
    // let arr=["karthik","jinnu","jethu","kalyan","chandu"]
    // arr.forEach((val)=>{
    //     console.log(val);
    //     return val
        
    // })

    // // map method => here return function will work it does not change the original array it should create a new array
    // let arr=["karthik","jinnu","jethu","kalyan","chandu"]

    // arr2=arr.map((val,ind,arr)=>{
    //     return ind
    // })
    // console.log(arr2);
    
    //filter method
    let arr=[
        {
            "name": "Chhatrapati Shivaji Maharaj",
            "age": 50,
            "dob": "1630-02-19",
            "dod": "1680-04-03",
            "place": "Shivneri Fort, Maharashtra",
            "country": "India"
        },
        {
            "name": "Rani Lakshmibai",
            "age": 29,
            "dob": "1828-11-19",
            "dod": "1858-06-17",
            "place": "Varanasi, Uttar Pradesh",
            "country": "India"
        },
        {
            "name": "Mangal Pandey",
            "age": 29,
            "dob": "1827-07-19",
            "dod": "1857-04-08",
            "place": "Bihar",
            "country": "India"
        },
        {
            "name": "Bhagat Singh",
            "age": 23,
            "dob": "1907-09-28",
            "dod": "1931-03-23",
            "place": "Banga, Punjab",
            "country": "India"
        },
        {
            "name": "Subhas Chandra Bose",
            "age": 48,
            "dob": "1897-01-23",
            "dod": "1945-08-18",
            "place": "Cuttack, Odisha",
            "country": "India"
        },
        {
            "name": "Chandra Shekhar Azad",
            "age": 24,
            "dob": "1906-07-23",
            "dod": "1931-02-27",
            "place": "Bhabhra, Madhya Pradesh",
            "country": "India"
        },
        {
            "name": "Sardar Vallabhbhai Patel",
            "age": 75,
            "dob": "1875-10-31",
            "dod": "1950-12-15",
            "place": "Nadiad, Gujarat",
            "country": "India"
        },
        {
            "name": "Lala Lajpat Rai",
            "age": 48,
            "dob": "1865-01-28",
            "dod": "1928-11-17",
            "place": "Moga, Punjab",
            "country": "India"
        },
        {
            "name": "Bal Gangadhar Tilak",
            "age": 59,
            "dob": "1856-07-23",
            "dod": "1920-08-01",
            "place": "Ratnagiri, Maharashtra",
            "country": "India"
        },
        {
            "name": "Veer Savarkar",
            "age": 83,
            "dob": "1883-05-28",
            "dod": "1966-02-26",
            "place": "Bhagur, Maharashtra",
            "country": "India"
        },
        {
            "name": "Bipin Chandra Pal",
            "age": 70,
            "dob": "1858-11-07",
            "dod": "1932-05-20",
            "place": "Tripura",
            "country": "India"
        },
        {
            "name": "Gopal Krishna Gokhale",
            "age": 48,
            "dob": "1866-05-09",
            "dod": "1915-02-19",
            "place": "Ratnagiri, Maharashtra",
            "country": "India"
        },
        {
            "name": "Aurobindo Ghosh",
            "age": 78,
            "dob": "1872-08-15",
            "dod": "1950-12-05",
            "place": "Kolkata, West Bengal",
            "country": "India"
        },
        {
            "name": "Mother Teresa",
            "age": 87,
            "dob": "1910-08-26",
            "dod": "1997-09-05",
            "place": "Skopje, North Macedonia",
            "country": "India"
        },
        {
            "name": "Dr. B.R. Ambedkar",
            "age": 65,
            "dob": "1891-04-14",
            "dod": "1956-12-06",
            "place": "Madhya Pradesh",
            "country": "India"
        },
        {
            "name": "Sarojini Naidu",
            "age": 70,
            "dob": "1879-02-13",
            "dod": "1949-03-02",
            "place": "Hyderabad, Telangana",
            "country": "India"
        },
        {
            "name": "Netaji Subhas Chandra Bose",
            "age": 48,
            "dob": "1897-01-23",
            "dod": "1945-08-18",
            "place": "Cuttack, Odisha",
            "country": "India"
        },
        {
            "name": "Rani Padmini",
            "age": 29,
            "dob": "N/A",
            "dod": "1303-12-24",
            "place": "Chittorgarh, Rajasthan",
            "country": "India"
        },
        {
            "name": "Sukhdev Thapar",
            "age": 23,
            "dob": "1907-05-15",
            "dod": "1931-03-23",
            "place": "Lahore, Pakistan",
            "country": "India"
        },
        {
            "name": "Rajguru",
            "age": 22,
            "dob": "1908-08-24",
            "dod": "1931-03-23",
            "place": "Pune, Maharashtra",
            "country": "India"
        }
    ]
    
    arr2=arr.filter((val)=>{
        return val.place=="Pune, Maharashtra";
        
    })
    console.log(arr2);
    
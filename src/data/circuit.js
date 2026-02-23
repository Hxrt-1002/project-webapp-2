const circuit = [
  {
    id: 1,
    name: "Albert Park Circuit",
    country: "Australia",
    continent: "Oceania",
    lat: -37.8497,
    lng: 144.9680,
    length: "5.278 km",
    corners: 14,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/campaign/support-promoter/australia/FAQ%2025%20SD_2024_Australia_Helicopter_200%20169.webp",
    layoutImage: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Albert_Park_Circuit_2021.svg"
  },
  {
    id: 2,
    name: "Shanghai International Circuit",
    country: "China",
    continent: "Asia",
    lat: 31.3389,
    lng: 121.22,
    length: "5.451 km",
    corners: 16,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/campaign/support-promoter/china/JPG%20RGB%2072%20DPI-SD_2024_China_F1%20Images_005.webp"
  },
  {
    id: 3,
    name: "Suzuka Circuit",
    country: "Japan",
    continent: "Asia",
    lat: 34.8431,
    lng: 136.5410,
    length: "5.807 km",
    corners: 18,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/Upgrade/Misc/GettyImages-1180723227.webp"
  },
  {
    id: 4,
    name: "Bahrain International Circuit",
    country: "Bahrain",
    continent: "Asia",
    lat: 26.0325,
    lng: 50.5106,
    length: "5.412 km",
    corners: 15,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/sutton/2018/Bahrain/Saturday/dcd1807ap755.webp"
  },
  {
    id: 5,
    name: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    continent: "Asia",
    lat: 21.6323,
    lng: 39.1046,
    length: "6.174 km",
    corners: 27,
    image: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Saudi_Arabia/2071383061.webp"
  },
  {
    id: 6,
    name: "Miami International Autodrome",
    country: "United States",
    continent: "North America",
    lat: 25.9574,
    lng: -80.2389,
    length: "5.412 km",
    corners: 19,
    image: "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Miami/2151619470.webp"
  },
  {
    id: 7,
    name: "Circuit Gilles-Villeneuve",
    country: "Canada",
    continent: "North America",
    lat: 45.4971,
    lng: -73.5262,
    length: "4.361 km",
    corners: 14,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada.webp"
  },
  {
    id: 8,
    name: "Circuit de Monaco",
    country: "Monaco",
    continent: "Europe",
    lat: 43.7347,
    lng: 7.4206,
    length: "3.337 km",
    corners: 19,
    image: "https://media.formula1.com/image/upload/f_auto/q_auto/v1731515120/fom-website/2024/Miscellaneous/monaco-2024-start-2.png"
  },
  {
    id: 9,
    name: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    continent: "Europe",
    lat: 41.57,
    lng: 2.261,
    length: "4.657 km",
    corners: 14,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/sutton/2021/Spain/Sunday/1317453894.webp"
  },
  {
    id: 10,
    name: "Red Bull Ring",
    country: "Austria",
    continent: "Europe",
    lat: 47.2197,
    lng: 15.7406,
    length: "4.318 km",
    corners: 10,
    image: "https://www.redbullring.com/en/wp-content/uploads/sites/1/2022/07/PP_220709_F1_Red_Bull_Ring_1633.jpg"
  },
  {
    id: 11,
    name: "Silverstone Circuit",
    country: "United Kingdom",
    continent: "Europe",
    lat: 52.0731,
    lng: -1.0161,
    length: "5.891 km",
    corners: 18,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqadJ-9wkjRgZNuftxijMLfzgHOZR41JIAREEZkHMhSydRG2V55BGQQEWq397Dk4JtCDzt94hI5ClbqJ_mebh6svfC7UYN9OuBXaWIEzBNTLyeU9ioQOPi0ShCC07SRmOUF13A=s680-w680-h510-rw"
  },
  {
    id: 12,
    name: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    continent: "Europe",
    lat: 50.4372,
    lng: 5.9715,
    length: "7.004 km",
    corners: 19,
    image: "https://lh3.googleusercontent.com/p/AF1QipPBC5WlWXWzrSzbbv41YQttVXUVIMtP82rm-w05=s680-w680-h510-rw"
  },
  {
    id: 13,
    name: "Hungaroring",
    country: "Hungary",
    continent: "Europe",
    lat: 47.5789,
    lng: 19.2486,
    length: "4.381 km",
    corners: 14,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0zI1zFciAD3mD_5cpd8Ki7aqTrp4o8veMVlhnhBQp3tot6mVOxZdU3sYSly90VGX528scPVOjuvGWQby1CHqCcjCxSLu_D1M4M7jqA5Oys12tg57SF7sUCv7dfXxSE4j8OltZTw=s680-w680-h510-rw"
  },
  {
    id: 14,
    name: "Circuit Zandvoort",
    country: "Netherlands",
    continent: "Europe",
    lat: 52.3881,
    lng: 4.5405,
    length: "4.259 km",
    corners: 14,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerV_vFQA0EYn1fY3pSjU3Ljr4AebWzoVM5u7GT5q644AWDbF__C6LntnDsAAKUmxHIM9ee18jbNX_ngT8U5Rdtb-HA0Mrm6hfi9LOwNQqBz1GPklQ_uGhiidqgf6pNucyw4W5oy=s680-w680-h510-rw"
  },
  {
    id: 15,
    name: "Autodromo Nazionale Monza",
    country: "Italy",
    continent: "Europe",
    lat: 45.6196,
    lng: 9.2811,
    length: "5.793 km",
    corners: 11,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b3/c4/9c/la-curva-parabolica-dell.jpg?w=900&h=500&s=1"
  },
  {
    id: 16,
    name: "Madring",
    country: "Spain",
    continent: "Europe",
    lat: 40.4660,
    lng: -3.5970,
    length: "5.416 km",
    corners: 22,
    image: "https://preview.redd.it/given-the-intent-of-madrid-to-host-the-f1-spanish-gp-in-the-v0-jwnr318jfm791.jpg?width=640&crop=smart&auto=webp&s=cb4523f3838dff72dc4b82530ef2ddabd66ad56f"
  },
  {
    id: 17,
    name: "Baku City Circuit",
    country: "Azerbaijan",
    continent: "Asia",
    lat: 40.3725,
    lng: 49.8530,
    length: "6.003 km",
    corners: 20,
    image: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.webp"
  },
  {
    id: 18,
    name: "Marina Bay Street Circuit",
    country: "Singapore",
    continent: "Asia",
    lat: 1.2910,
    lng: 103.8630,
    length: "4.94 km",
    corners: 19,
    image: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2023/Singapore/GettyImages-1682522763.webp"
  },
  {
    id: 19,
    name: "Circuit of The Americas",
    country: "United States",
    continent: "North America",
    lat: 30.1328,
    lng: -97.6411,
    length: "5.513 km",
    corners: 20,
    image: "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2023/F1_Grand_Prix_of_United_States___Practice__Qualifying/1746900067.webp"
  },
  {
    id: 20,
    name: "Autodromo Hermanos Rodríguez",
    country: "Mexico",
    continent: "North America",
    lat: 19.4047,
    lng: -99.1019,
    length: "4.304 km",
    corners: 17,
    image: "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2023/F1_Grand_Prix_of_Mexico/1763741495.webp"
  },
  {
    id: 21,
    name: "Autódromo José Carlos Pace (Interlagos)",
    country: "Brazil",
    continent: "South America",
    lat: -23.7036,
    lng: -46.6997,
    length: "4.309 km",
    corners: 15,
    image: "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2023/F1_Grand_Prix_of_Brazil/1776732354.webp"
  },
  {
    id: 22,
    name: "Las Vegas Strip Circuit",
    country: "United States",
    continent: "North America",
    lat: 36.1215,
    lng: -115.1683,
    length: "6.201 km",
    corners: 17,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5uHbepWWsolL96VbSf0gmRMfSG-HvJx3dQ&s"
  },
  {
    id: 23,
    name: "Losail International Circuit",
    country: "Qatar",
    continent: "Asia",
    lat: 25.4275,
    lng: 51.4880,
    length: "5.380 km",
    corners: 16,
    image: "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2023/F1_Grand_Prix_of_Qatar/1724642459.webp"
  },
  {
    id: 24,
    name: "Yas Marina Circuit",
    country: "United Arab Emirates",
    continent: "Asia",
    lat: 24.4672,
    lng: 54.6011,
    length: "5.281 km",
    corners: 16,
    image: "https://mma.prnasia.com/media2/2623130/Abu_Dhabi_Grand_Prix.jpg?p=publish"
  }
]

export default circuit

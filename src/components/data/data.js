export const allCards = [
  {
    keyword: "Yellowstone",
    title: "Why do we use it?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    publishedAt: "February 19, 2019",
    source: "National Geographic",
    url: "#",
    urlToImage: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    author: "lindakovacs",
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: "Parks",
    title: "What is Lorem Ipsum?",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    date: "October 19, 2020",
    source: "National Parks Traveler",
    link: "#",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    owner: "lindakovacs",
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: "Photography",
    title: "Why do we use it?",
    text: "as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many... ",
    date: "March 16, 2020",
    source: "Treehugger",
    link: "#",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg",
    owner: "lindakovacs",
    isSaved: true,
    _id: Math.random().toString(),
  },
  {
    keyword: "Nature",
    title: "Where does it come from?",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College",
    date: "November 4, 2020",
    source: "treehugger",
    link: "#",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    owner: "lindakovacs",
    isSaved: false,
    _id: Math.random().toString(),
  },
  {
    author: "Steve Dent",
    content:
      "It's fair to say that Google was caught flat-footed by Microsoft's launch of Bing search powered by ChatGPT, as it didn't have anything similar when it unveiled its own conversational AI, Bard. Now, … [+1479 chars]",
    text: "It's fair to say that Google was caught flat-footed by Microsoft's launch of Bing search powered by ChatGPT, as it didn't have anything similar when it unveiled its own conversational AI, Bard. Now, Google has announced Search Labs, a new way for consumers to…",
    keyword: "test",
    publishedAt: "2023-05-10T17:52:54Z",

    title:
      "Google's Search Labs lets you test its AI-powered 'products and ideas'",
    link: "https://www.engadget.com/googles-search-labs-lets-you-test-its-ai-powered-products-and-ideas-175254478.html",
    image:
      "https://s.yimg.com/uu/api/res/1.2/m4Cxxgtj0qum2vLvxc8ntQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/144e52f0-ef21-11ed-afa7-a50c1d2b8867.cf.jpg",
    _id: "0.6657676749302459",
  },
];

export const savedCards = allCards.slice(1);

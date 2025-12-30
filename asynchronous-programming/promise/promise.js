const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

// Promise.any([fetchPromise, fetchPromise1, fetchPromise2, fetchPromise3]).then(
//   (responses) => {
//     console.log(responses);

//   },
// );

ধ্রুবক যোগ = (প্রথম, দ্বিতীয়) => {
  প্রত্যাবর্তন প্রথম + দ্বিতীয়;
};

যোগ(৩, ২);
